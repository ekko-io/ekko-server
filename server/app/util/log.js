const config = require('./config');
const winston = require('winston');

var logger = new (winston.Logger)();
logger.add(winston.transports.Console, {
  level: config.LOG_LEVEL,
  prettyPrint: false,
  colorize: true,
  silent: false,
  timestamp: true
});

module.exports = logger;
