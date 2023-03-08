const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    url: 
      {
        type: String,
        required: true
      },
    likes: {
      type: Number,
      required: true,
      default: 0
    },
    comments: [],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    date: {
      type: Date,
      default: Date.now()
    }
})

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      returnedObject.date = returnedObject.date.toLocaleString('fi-FI', options)
    },
})

module.exports = mongoose.model('Blog', blogSchema)