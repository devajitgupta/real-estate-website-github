const mongoose = require('mongoose')
const Schema = mongoose.Schema

let pageSchema = new Schema(
  {
    page:String
},
  {
    collection: 'users',
  },
)

module.exports = mongoose.model('Page', pageSchema)
