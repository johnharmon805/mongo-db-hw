var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  title: String,
  link: String,
  saved:{
    type: Boolean,
    default: false
  },
  comments:[{
    type: Schema.ObjectId,
    ref: 'Comment'
  }]

});

var News = mongoose.model('News', NewsSchema);
module.exports = News;