const Router    = require('express').Router;
const router    = module.exports = Router();

// Controllers
const indexCtrl  = require('./controllers/index');

// All other routes
router.get('/api/', [indexCtrl.showIndex]);


