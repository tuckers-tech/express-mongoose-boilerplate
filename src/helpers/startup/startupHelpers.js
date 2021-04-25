// eslint-disable global-require
const morgan = require('morgan');
const { isProdEnv } = require('../environment');

function registerEnvVars() {
  if (!isProdEnv()) {
    require('dotenv').config();
  }
}

function startLogger(app) {
  if (!isProdEnv()) {
    app.use(
      morgan((tokens, req, res) => {
        const options = [
          tokens.method(req, res),
          tokens.url(req, res),
          tokens.status(req, res),
          tokens.res(req, res, 'content-length'),
          '-',
          tokens['response-time'](req, res),
          'ms',
          '-',
          `Processed By PID: ${process.pid}`,
        ];

        return options.join(' ');
      }),
    );
  } else {
    app.use(morgan('combined'));
  }
}

function setProcessEventHandlers() {
  process.on('SIGTERM', () => {
    process.exit();
  });

  process.on('SIGTERM', () => {
    process.exit();
  });
}

module.exports = {
  registerEnvVars,
  startLogger,
  setProcessEventHandlers,
};
