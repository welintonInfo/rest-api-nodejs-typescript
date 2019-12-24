import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string
  firstName?: string
  lastName?: string
  fullName(): string
}

const schema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

schema.methods.fullName = function (): string {
  return `${this.firstName} ${this.lastName}`
}

export default model<UserInterface>('User', schema)
