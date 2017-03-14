const log = require('../util/log');
const config = require('../util/config');
const banner = require('../util/banner');
const express = require('express');
const bodyParser = require('body-parser');

// Logg app name.
banner('Ekko Rest');
log.info('Ekko Rest Server');

// Create express server.
const app = express();

// Configure express server.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw({
  type: '*/*'
}));

// Apply sub-components.
require('./routes')(app);
require('./error').register(app);

// Start the server.
app.listen(config.REST_PORT, () => {
  log.info(`Rest server listening on ${config.REST_PORT}`);
});
