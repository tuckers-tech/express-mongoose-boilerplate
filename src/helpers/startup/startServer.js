// IMPORTS
const os = require('os');
const cluster = require('cluster');
const { logInfo } = require('../logging/logger');

function getNumWorkers() {
  const cpuCores = os.cpus().length;

  if (process.env.MAX_WORKERS) {
    return Math.min(cpuCores, process.env.MAX_WORKERS);
  }
  return cpuCores;
}

function forkWorkers() {
  for (let i = 0; i < getNumWorkers(); i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    cluster.fork();
    logInfo('StartServer', `Worker ${worker.id} has exited`);
  });
}

function startServer(callback) {
  if (cluster.isMaster && getNumWorkers() > 1) {
    forkWorkers();
  } else {
    callback();
  }
}

module.exports = {
  startServer,
};
