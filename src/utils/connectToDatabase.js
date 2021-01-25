import mongoose from 'mongoose'

mongoose.Promise = global.Promise

let isConnected = null

export default async (url = process.env.MONGO_URL) => {
  if (isConnected) return Promise.resolve()

  const db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  isConnected = db.connections[0].readyState

  return Promise.resolve()
}
