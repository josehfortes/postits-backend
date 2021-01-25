import bcrypt from 'bcryptjs'

import UserSchema from './schema'
import connectToDatabase from '../../utils/connectToDatabase'

const SALT = 8

export const createUser = async (userData) => {
  await connectToDatabase()
  const passwordHash = bcrypt.hashSync(userData.password, SALT)
  return UserSchema.create({ ...userData, password: passwordHash })
}
