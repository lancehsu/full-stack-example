const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');
// const FacebookTokenStrategy = require('passport-facebook-token');

const User = require('./models/user');
const config = require('./config');

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// get JWT by encoding user id followed by secret key
exports.getToken = (user) =>
  jwt.sign(user, config.secretKey, { expiresIn: '7d' });

const opts = {};
// get JWT from bearer of Authentication header
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(
  new JwtStrategy(opts, async (jwtPayload, done) => {
    console.log('JWT payload: ', jwtPayload);
    // strategy: find if there is a user with the input jwt payload
    try {
      const user = await User.findOne({ _id: jwtPayload.id });
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  })
);

// exports.facebookPassport = passport.use(new FacebookTokenStrategy({
//   clientID: config.facebook.clientId, clientSecret: config.facebook.clientSecret,
// }, async (accessToken, refreshToken, profile, done) => {
//   try {
//     let user = await User.findOne({ facebookId: profile.id });
//     if (user) {
//       return done(null, user);
//     }
//     user = new User({ username: profile.displayName });
//     user.facebookId = profile.id;
//     user.firstname = profile.name.givenName;
//     user.lastname = profile.name.familyName;
//     await user.save();
//     return done(null, user);
//   } catch (err) {
//     return done(err, false);
//   }
// }));

exports.verifyUser = passport.authenticate('jwt', { session: false });
exports.verifyAdmin = (req, res, next) => {
  if (!req.user.admin) {
    const err = new Error('You are not authorized to perform this operation!');
    err.status = 401;
    next(err);
    return;
  }
  next();
};
