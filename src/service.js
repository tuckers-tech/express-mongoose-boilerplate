const express = require('express');

const { connectToDB } = require('./helpers/db/db');

const routes = require('./router/router');

function initializeService(dbConnectionURI) {
  return new Promise((resolve, reject) => {
    connectToDB(dbConnectionURI)
      .then(() => {
        const app = express();
        app.use('/', routes);
        resolve(app);
      })
      .catch((err) => reject(err));
  });
}

module.exports = {
  initializeService,
};
