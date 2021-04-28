const {
  registerEnvVars,
  startLogger,
  setProcessEventHandlers,
} = require('./src/helpers/startup/startupHelpers');
const { startServer } = require('./src/helpers/startup/startServer');
const { initializeService } = require('./src/service');
const { logSuccess, logError } = require('./src/helpers/logging/logger');
const { getDBConnectionURI } = require('./src/helpers/environment');

const port = process.env.PORT || 3000;

registerEnvVars();

startServer(() => {
  run();
});

async function run() {
  try {
    startWorkerListening();
  } catch (err) {
    logError('Server.js', err);
  }
}

async function startWorkerListening() {
  let app = await initializeService(getDBConnectionURI());

  startLogger(app);
  setProcessEventHandlers();

  app.listen(port, () => {
    logSuccess('Server.js', `User Service Started on Port ${port}`);
  });
}
