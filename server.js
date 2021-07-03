const {
  registerEnvVars,
  startLogger,
  setProcessEventHandlers,
} = require('./src/helpers/startup/startupHelpers');
const { startServer } = require('./src/helpers/startup/startServer');
const { initializeService } = require('./src/service');
const { logSuccess } = require('./src/helpers/logging/logger');
const { getDBConnectionURI } = require('./src/helpers/environment');

registerEnvVars();

const port = process.env.PORT || 3000;

startServer(async () => {
  const app = await initializeService(getDBConnectionURI());
  startLogger(app);
  setProcessEventHandlers();

  app.listen(port, () => {
    logSuccess('Server.js', `Ingredient Service Started on Port ${port}`);
  });
});
