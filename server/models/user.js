var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email:{
    type:String,
    required: true,
    minLength: 1,
    trim: true
  }
  // completed:{
  //   type: Boolean,
  //   default: false,
    
  // },
  // completedAt:{
  //   type: Number,
  //   default: null
  // }
});

module.exports = {User};