import { Schema, model, Document } from 'mongoose'

interface ProductInterface extends Document {
  name: string
  price: Number
}

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name are required'],
    unique: true    
  },
  price: {
    type: Number,
    default: 0
  }
})

export default model<ProductInterface>('Product', schema)