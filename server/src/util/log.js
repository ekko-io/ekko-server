const config = require('./config');
const Pino = require('pino');
const pino = Pino({
  level: config.LOG_LEVEL,
  prettyPrint: config.LOG_PRETTY
});

class Logger {
  debug(msg) {
    pino.debug(msg)
  }
  info(msg) {
    pino.info(msg)
  }
  warn(msg) {
    pino.warn(msg)
  }
  error(msg) {
    pino.error(msg)
  }
  fatal(msg) {
    pino.fatal(msg)
  }
};

module.exports = pino;
module.exports.logger = new Logger();
