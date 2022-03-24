import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalSchema = new Schema({
  name: {
    type: String
  },
  amount: {
    type: Number
  }
}, {
  timestamps: true
})

const Goal = mongoose.model('Goal', goalSchema)

export {
  Goal
}