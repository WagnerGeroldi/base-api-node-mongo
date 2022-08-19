import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  })
  
  const Model = mongoose.model('user', schema)
  

export default Model