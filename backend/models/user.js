const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const User = new Schema({
  firstname: {
    type: String,
    default: '',
  },
  lastname: {
    type: String,
    default: '',
  },
  facebookId: String,
  admin: {
    type: Boolean,
    default: false,
  },
}, {
  usePushEach: true,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
