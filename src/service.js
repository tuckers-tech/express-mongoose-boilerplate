const express = require('express');

const { connectToDB } = require('./helpers/db/db');

const routes = require('./router/router');

async function initializeService(dbConnectionURI) {
  try {
    await connectToDB(dbConnectionURI);
    const app = express();
    app.use(express.json());
    app.use('/', routes);
    return app;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  initializeService,
};
