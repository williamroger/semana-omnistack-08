const express = require('express');

const routes = express.Router();

const DevController = require('./controller/DevController');

routes.post("/devs", DevController.store);

module.exports = routes;