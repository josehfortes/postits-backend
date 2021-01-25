import BoardSchema from './schema'
import connectToDatabase from '../../utils/connectToDatabase'

export const createBoard = async (user, data) => {
  await connectToDatabase()
  return BoardSchema.create({
    name: data.name,
    owner: user.id,
    createdDate: new Date(),
    updatedDate: new Date(),
  })
}

export const listBoards = async (user) => {
  await connectToDatabase()
  return BoardSchema.find({ owner: user.id })
    .limit(6)
    .select('name updatedDate')
    .lean()
    .exec()
}

export const getBoard = async (user, id) => {
  await connectToDatabase()
  return BoardSchema.findOne({ owner: user.id, _id: id })
    .lean()
    .exec()
}

export const updateBoard = async (user, id, data) => {
  await connectToDatabase()
  return BoardSchema.findOneAndUpdate({ owner: user.id, _id: id }, {
    $set: {
      ...data,
      updatedDate: new Date(),
    },
  }, { new: true }).lean().exec()
}

export const deleteBoard = async (user, id) => {
  await connectToDatabase()
  return BoardSchema.findOneAndDelete({ owner: user.id, _id: id })
}
