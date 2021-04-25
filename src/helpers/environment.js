function isDevEnv() {
  return process.env.NODE_ENV === 'development' ? true : false;
}

function isTestEnv() {
  return process.env.NODE_ENV === 'testing' ? true : false;
}

function isProdEnv() {
  return process.env.NODE_ENV === 'production' ? true : false;
}

function getDBConnectionURI() {
  let connectionURI;

  if (isDevEnv() && process.env.MONGO_HOST === 'localhost') {
    connectionURI = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;
  } else {
    connectionURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
  }

  return connectionURI;
}

module.exports = {
  isDevEnv,
  isTestEnv,
  isProdEnv,
  getDBConnectionURI,
};
