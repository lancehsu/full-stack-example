const express = require("express");
const Promotions = require("../models/promotions");
const authenticate = require("../authenticate");
const cors = require("./cors");

const promoRouter = express.Router();

promoRouter.use(express.json());

promoRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(async (req, res, next) => {
    try {
      const promos = await Promotions.find(req.query);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(promos);
    } catch (err) {
      next(err);
    }
  })
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const promo = await Promotions.create(req.body);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(promo);
      } catch (err) {
        next(err);
      }
    }
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end("PUT operation not supported on /promotions");
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const resp = await Promotions.remove({});
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(resp);
      } catch (err) {
        next(err);
      }
    }
  );

promoRouter
  .route("/:promoId")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, async (req, res, next) => {
    try {
      const promo = await Promotions.findById(req.params.promoId);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(promo);
    } catch (err) {
      next(err);
    }
  })
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end(
        `POST operation not supported on /promotions/${req.params.promoId}`
      );
    }
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const promo = await Promotions.findByIdAndUpdate(
          req.params.promoId,
          { $set: req.body },
          { new: true }
        );
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(promo);
      } catch (err) {
        next(err);
      }
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const resp = await Promotions.findByIdAndRemove(req.params.promoId);
        res.sendStatus = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(resp);
      } catch (err) {
        next(err);
      }
    }
  );

module.exports = promoRouter;
