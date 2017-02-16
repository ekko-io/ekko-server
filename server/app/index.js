const mqtt = require('./mqtt');
const rest = require('./rest');
const banner = require('./util/banner');

// Print banner.
banner('Ekko Server');

// Start components.
mqtt.start();
rest.start();
