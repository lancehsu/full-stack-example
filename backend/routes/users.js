const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const authenticate = require('../authenticate');
const cors = require('./cors');

const usersRouter = express.Router();
usersRouter.use(express.json());

/* GET users listing. */
usersRouter.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200); });
usersRouter.get('/', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
  try {
    const users = await User.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  } catch (err) {
    next(err);
  }
});

usersRouter.get('/me', cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(user);
  } catch (err) {
    next(err);
  }
});

usersRouter.post('/signup', cors.corsWithOptions, async (req, res) => {
  try {
    const user = await User.register(new User({ username: req.body.username }), req.body.password);
    user.firstname = req.body.firstname || '';
    user.lastname = req.body.lastname || '';
    await user.save();
    await passport.authenticate('local');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ sucess: true, status: 'Registration Sucessful!' });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.json({ err: error });
  }
});

usersRouter.post('/login', cors.corsWithOptions, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      next(err);
      return;
    }
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.json({ success: false, status: 'Login Unsuccessful!', err: info });
      return;
    }
    req.logIn(user, (error) => {
      if (error) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!' });
        return;
      }
      // get JWT by encoding user id
      const jwtToken = authenticate.getToken({ id: req.user.id });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ sucess: true, token: jwtToken, status: 'You are sucessfully logged in!' });
    });
  })(req, res, next);
});

usersRouter.get('/facebook/token', passport.authenticate('facebook-token'), (req, res) => {
  if (req.user) {
    const fbToken = authenticate.getToken({ id: req.user.id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ sucess: true, token: fbToken, status: 'You are sucessfully logged in!' });
  }
});

usersRouter.get('/checkJWTToken', cors.corsWithOptions, (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      next(err);
      return;
    } else if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.json({ status: 'JWT invalid!', sucess: false, err: info });
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ status: 'JWT valid!', sucess: true, user });
  })(req, res, next);
});
usersRouter.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  } else {
    const err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

module.exports = usersRouter;
