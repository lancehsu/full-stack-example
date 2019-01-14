const express = require('express');
const Dishes = require('../models/dishes');
const authenticate = require('../authenticate');
const cors = require('./cors');

const dishRouter = express.Router();

dishRouter.use(express.json());

dishRouter.route('/')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  .get(cors.cors, async (req, res, next) => {
    try {
      const dishes = await Dishes.find(req.query).populate('comments.author');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dishes);
    } catch (err) {
      next(err);
    }
  })
  .post(
    cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const dish = await Dishes.create(req.body);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
      } catch (err) {
        next(err);
      }
    },
  )
  .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
  })
  .delete(
    cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const resp = await Dishes.remove({});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      } catch (err) {
        next(err);
      }
    },
  );

dishRouter.route('/:dishId')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  .get(cors.cors, async (req, res, next) => {
    try {
      const dish = await Dishes.findById(req.params.dishId).populate('comments.author');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dish);
    } catch (err) {
      next(err);
    }
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /dishes/${req.params.dishId}`);
  })
  .put(
    cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const dish = await Dishes.findByIdAndUpdate(req.params.dishId, { $set: req.body }, { new: true }).populate('comments.author');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
      } catch (err) {
        next(err);
      }
    },
  )
  .delete(
    cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const resp = await Dishes.findByIdAndRemove(req.params.dishId);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      } catch (err) {
        next(err);
      }
    },
  );

dishRouter.route('/:dishId/comments')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  .get(cors.cors, async (req, res, next) => {
    try {
      const dish = await Dishes.findById(req.params.dishId).populate('comments.author');
      if (!dish) {
        const err = new Error(`Dish ${req.params.dishId} not found`);
        err.status = 404;
        next(err);
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dish.comments);
    } catch (err) {
      next(err);
    }
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
    try {
      const dish = await Dishes.findById(req.params.dishId);
      if (!dish) {
        const err = new Error(`Dish ${req.params.dishId} not found`);
        err.status = 404;
        next(err);
        return;
      }
      // By calling passport.authenticate, user is loaded in the form of req.user!
      req.body.author = req.user.id;
      dish.comments.push(req.body);
      await dish.save();
      const resp = await Dishes.findById(dish.id).populate('comments.author');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    } catch (err) {
      next(err);
    }
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /dishes/${req.params.dishId}/comments`);
  })
  .delete(
    cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const dish = await Dishes.findById(req.params.dishId);
        if (!dish) {
          const err = new Error(`Dish ${req.params.dishId} not found`);
          err.status = 404;
          next(err);
          return;
        }
        const deleteId = dish.comments.map(comment => comment.id);
        deleteId.forEach(id => dish.comments.remove(id));
        // for (let i = dish.comments.length - 1; i >= 0; i--) {
        //   dish.comments.remove(dish.comments[i].id);
        // }
        await dish.save();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
      } catch (err) {
        next(err);
      }
    },
  );

dishRouter.route('/:dishId/comments/:commentId')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  .get(cors.cors, async (req, res, next) => {
    try {
      const dish = await Dishes.findById(req.params.dishId).populate('comments.author');
      if (!dish) {
        const err = new Error(`Dish ${req.params.dishId} not found`);
        err.status = 404;
        next(err);
        return;
      }
      if (!dish.comments.id(req.params.commentId)) {
        const err = new Error(`Comment ${req.params.commentId} not found`);
        err.status = 404;
        next(err);
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dish.comments.id(req.params.commentId));
    } catch (err) {
      next(err);
    }
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /dishes/
    ${req.params.dishId}/comments/${req.params.commentId}`);
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
    try {
      const dish = await Dishes.findById(req.params.dishId);
      if (!dish) {
        const err = new Error(`Dish ${req.params.dishId} not found`);
        err.status = 404;
        next(err);
        return;
      }
      if (!dish.comments.id(req.params.commentId)) {
        const err = new Error(`Comment ${req.params.commentId} not found`);
        err.status = 404;
        next(err);
        return;
      }
      await modifyComment(req, dish);
      const resp = await Dishes.findById(dish.id).populate('comments.author');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    } catch (err) {
      next(err);
    }
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
    try {
      const dish = await Dishes.findById(req.params.dishId);
      if (!dish) {
        const err = new Error(`Dish ${req.params.dishId} not found`);
        err.status = 404;
        next(err);
        return;
      }
      if (!dish.comments.id(req.params.commentId)) {
        const err = new Error(`Comment ${req.params.commentId} not found`);
        err.status = 404;
        next(err);
        return;
      }

      await deleteComment(req, dish);
      const resp = await Dishes.findById(dish.id).populate('comments.author');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    } catch (err) {
      next(err);
    }
  });

// modify it if the user is authorized
const modifyComment = (req, dish) => new Promise(async (resolve, reject) => {
  if (JSON.stringify(req.user.id)
    !== JSON.stringify(dish.comments.id(req.params.commentId).author)) {
    const err = new Error('unauthorization');
    err.status = 401;
    reject(err);
    return;
  }
  dish.comments.id(req.params.commentId).rating = req.body.rating
    || dish.comemnts.id(req.params.commentId).rating;
  dish.comments.id(req.params.commentId).comment = req.body.comment
    || dish.comemnts.id(req.params.commentId).comment;
  try {
    await dish.save();
    resolve(dish);
  } catch (err) {
    reject(err);
  }
});

// delete it if the user is authorized
const deleteComment = (req, dish) => new Promise(async (resolve, reject) => {
  if (!req.user.admin
    && JSON.stringify(req.user.id)
    !== JSON.stringify(dish.comments.id(req.params.commentId).author)) {
    const err = new Error('You are not authorized to perform this operation!');
    err.status = 401;
    reject(err);
    return;
  }
  dish.comments.remove(req.params.commentId);
  try {
    await dish.save();
    resolve(dish);
  } catch (err) {
    reject(err);
  }
});

module.exports = dishRouter;
