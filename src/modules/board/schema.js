import mongoose from 'mongoose'

const DataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cards: { type: [String], default: [], required: true },
})

const BoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  createdDate: { type: Date, required: true },
  updatedDate: { type: Date, required: true },
  data: {
    type: [DataSchema],
    required: true,
    default: [
      { name: 'TODO', cards: [] },
      { name: 'DOING', cards: [] },
      { name: 'DONE', cards: [] },
    ],
  },
})

export default mongoose.models.Board || mongoose.model('Board', BoardSchema)
