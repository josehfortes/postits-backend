import UserSchema from './schema'
import connectToDatabase from '../../utils/connectToDatabase'

export const createUser = async (userdata) => {
  await connectToDatabase()
  return UserSchema.create({ ...userdata })
}
