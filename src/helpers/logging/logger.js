const chalk = require('chalk');

exports.logSuccess = (source, contentToLog) => {
  console.log(
    `${chalk.greenBright('[SUCCESS]')} :: ${chalk.gray(
      source,
    )} :: ${chalk.whiteBright(contentToLog)}`,
  );
};

exports.logInfo = (source, contentToLog) => {
  console.log(
    `${chalk.blueBright('[INFO]')} :: ${chalk.gray(
      source,
    )} :: ${chalk.whiteBright(contentToLog)}`,
  );
};

exports.logError = (source, contentToLog) => {
  console.log(
    `${chalk.blueBright('[ERROR]')} :: ${chalk.gray(
      source,
    )} :: ${chalk.whiteBright(contentToLog)}`,
  );
};

exports.logWarn = (source, contentToLog) => {
  console.log(
    `${chalk.yellowBright('[WARN]')} :: ${chalk.gray(
      source,
    )} :: ${chalk.whiteBright(contentToLog)}`,
  );
};
