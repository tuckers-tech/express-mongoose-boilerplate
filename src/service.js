const express = require('express');

const { connectToDB } = require('./helpers/db/db');
const { logError } = require('./helpers/logging/logger');

const routes = require('./router/router');

async function initializeService(dbConnectionURI) {
  try {
    await connectToDB(dbConnectionURI);

    return createApp();
  } catch (err) {
    logError('service.js', err);
  }
}

function createApp() {
  const app = express();
  app.use('/', routes);
  return app;
}

module.exports = {
  initializeService,
};
