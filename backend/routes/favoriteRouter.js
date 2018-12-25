const express = require('express');
const Favorites = require('../models/favorites');
const authenticate = require('../authenticate');
const cors = require('./cors');

const favoriteRouter = express.Router();

favoriteRouter.use(express.json());

favoriteRouter.route('/')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  .get(cors.cors, authenticate.verifyUser, async (req, res, next) => {
    try {
      const favorites = await Favorites.findOne({ user: req.user.id })
        .populate('user')
        .populate({ path: 'dishes', populate: { path: 'comments.author' } });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(favorites);
    } catch (err) {
      next(err);
    }
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
    try {
      const favorites = await Favorites.findOne({ user: req.user.id })
        || await Favorites.create({ user: req.user.id });
      // check if put dish is a new dish
      const checkNewDishes = req.body.map((newDish) => {
        const getNewDish = favorites.dishes.every(dish => dish.id.toString('hex') !== newDish._id);
        if (getNewDish) { favorites.dishes.push(newDish); } // push it if it's not same dish
        return getNewDish;
      });
      const getNewDish = checkNewDishes.some(label => label);
      if (getNewDish) { await favorites.save(); } // save if get new dish
      const postFavorites = await Favorites.findById(favorites.id)
        .populate({ path: 'dishes', populate: { path: 'comments.author' } })
        .populate('user');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(postFavorites);
    } catch (err) {
      next(err);
    }
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operaton not supported on /favorites');
  })
  .delete(
    cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
      try {
        const resp = await Favorites.findOneAndRemove({ user: req.user.id });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      } catch (err) {
        next(err);
      }
    },
  );

favoriteRouter.route('/:dishId')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  .get(cors.cors, authenticate.verifyUser, async (req, res, next) => {
    try {
      const favorite = await Favorites.findOne({ user: req.user.id })
        .populate('user')
        .populate({ path: 'dishes', populate: { path: 'comments.author' } });

      const dish = favorite.dishes.find(checkDish => checkDish.id === req.params.dishId);
      if (!favorite) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ exist: false, favorites: favorite });
        return;
      }
      if (!dish) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ exist: false, favorites: favorite });
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ exist: true, dish });
    } catch (err) {
      next(err);
    }
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
    try {
      const favorites = await Favorites.findOne({ user: req.user.id })
        || await Favorites.create({ user: req.user.id });
      const getNewDish = favorites.dishes.every(dish => dish.id.toString('hex') !== req.params.dishId);
      if (getNewDish) {
        favorites.dishes.push(req.params.dishId);
        await favorites.save();
      }
      const postFavorites = await Favorites.findById(favorites.id)
        .populate('user')
        .populate({ path: 'dishes', populate: { path: 'comments.author' } });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(postFavorites);
    } catch (err) {
      next(err);
    }
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end(`PUT operaton not supported on /favorites/${req.params.dishId}`);
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
    try {
      const favorites = await Favorites.findOne({ user: req.user.id });
      favorites.dishes.remove(req.params.dishId);
      await favorites.save();
      const postFavorites = await Favorites.findById(favorites.id)
        .populate('user')
        .populate({ path: 'dishes', populate: { path: 'comments.author' } });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(postFavorites);
    } catch (err) {
      next(err);
    }
  });

module.exports = favoriteRouter;
