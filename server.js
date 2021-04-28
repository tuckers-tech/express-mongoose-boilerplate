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
    let app = await initializeService(getDBConnectionURI());

    await startWorkerListening(app);
  } catch (err) {
    logError('Server.js', err);
  }
}

async function startWorkerListening(app) {
  startLogger(app);
  setProcessEventHandlers();

  app.listen(port, () => {
    logSuccess('Server.js', `User Service Started on Port ${port}`);
  });
}
