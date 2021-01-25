import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import UserSchema from './schema'
import connectToDatabase from '../../utils/connectToDatabase'
import generatePolicy from '../../utils/generatePolicy'

const SALT = 8

const createLoginToken = (data) => {
  return jwt.sign({
    id: data._id,
    firstName: data.firstName,
    email: data.email,
  }, process.env.LOGIN_TOKEN_SECRET)
}

export const createUser = async (userData) => {
  await connectToDatabase()
  const passwordHash = bcrypt.hashSync(userData.password, SALT)
  const user = await UserSchema.create({ ...userData, password: passwordHash })
  return createLoginToken(user)
}

export const loginService = async (userData) => {
  await connectToDatabase()
  const user = await UserSchema.findOne({ email: userData.email }).lean().exec()
  if (!bcrypt.compareSync(userData.password, user.password)) throw new Error('password_incorrect')
  return createLoginToken(user)
}

const decoder = (token) => jwt.verify(token, process.env.LOGIN_TOKEN_SECRET)

export const userAuthorizer = async (token, policy) => {
  const decoded = decoder(token)
  return generatePolicy(decoded.id, 'Allow', policy, decoded)
}
