const mongoose = require('mongoose');
const { logError } = require('../logging/logger');

async function connectToDB(dbConnectionURI) {
  try {
    await mongoose.connect(dbConnectionURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return;
  } catch (err) {
    logError('db.js', err);
  }
}

module.exports = {
  connectToDB,
};
