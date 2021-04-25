const mongoose = require('mongoose');
const { logError } = require('../logging/logger');

function connectToDB(dbConnectionURI) {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(dbConnectionURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => resolve())
      .catch((err) => logError('db.js', err));
  });
}

module.exports = {
  connectToDB,
};
