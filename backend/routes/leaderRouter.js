const express = require('express');
const Leaders = require('../models/leaders');
const authenticate = require('../authenticate');
const cors = require('./cors');

const leaderRouter = express.Router();

leaderRouter.use(express.json());

leaderRouter.route('/')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  .get(cors.cors, async (req, res, next) => {
    try {
      const leaders = await Leaders.find(req.query);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(leaders);
    } catch (err) {
      next(err);
    }
  })
  .post(
    cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const leader = await Leaders.create(req.body);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
      } catch (err) {
        next(err);
      }
    },
  )
  .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
  })
  .delete(
    cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const resp = await Leaders.remove({});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      } catch (err) {
        next(err);
      }
    },
  );

leaderRouter.route('/:leaderId')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  .get(cors.cors, async (req, res, next) => {
    try {
      const leader = await Leaders.findById(req.params.leaderId);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(leader);
    } catch (err) {
      next(err);
    }
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /leaders/${req.params.leaderId}`);
  })
  .put(
    cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const leader =
        await Leaders.findByIdAndUpdate(req.params.leaderId, { $set: req.body }, { new: true });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
      } catch (err) {
        next(err);
      }
    },
  )
  .delete(
    cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const resp = await Leaders.findByIdAndRemove(req.params.leaderId);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      } catch (err) {
        next(err);
      }
    },
  );

module.exports = leaderRouter;
