const AuthenticationRoute = require('express').Router();
const jwt = require('jsonwebtoken');
const HashService = require('../services/hash.util');
const APP_CONFIG = require('../config');

const User = require('../models/user');

const mwAuthenticate = (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err;

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else {
      if (HashService.compareHash(user.password, req.body.password)) {
        const payload = {
          username: user.username,
          admin: user.admin
        };

        const token = jwt.sign(payload, app.get('superSecret'), {
          algorithm: 'HS256',
          expiresIn: APP_CONFIG.TOKEN.EXPIRE
        });

        res.json({
          success: true,
          message: 'Create new token 8h',
          token: token
        });
      } else {
        res.status(401).json({
          success: false,
          message: 'Bad credentials.'
        });
      }
    }
  });
};

AuthenticationRoute.post('/', mwAuthenticate);

module.exports = AuthenticationRoute;