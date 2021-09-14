require('dotenv').config()

module.exports = {
  secretKey: process.env.SECRET_KEY,
  mongoUrl: process.env.MONGO_URL,
  facebook: {
    clientId: '',
    clientSecret: '',
  },
};
