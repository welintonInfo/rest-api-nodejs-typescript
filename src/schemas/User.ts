import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string
  name?: string
  fullName(): string
}

const schema = new Schema({
  email: String,
  name: String,
  password: String
}, {
  timestamps: true
})

// schema.methods.fullName = function (): string {
//   return `${this.firstName} ${this.lastName}`
// }

export default model<UserInterface>('User', schema)
