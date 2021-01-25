import mongoose from 'mongoose'

const Userschema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
})

export default mongoose.models.User || mongoose.model('User', Userschema)
