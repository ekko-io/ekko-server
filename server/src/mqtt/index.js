const log = require('../util/log');
const aedes = require('aedes')();
const config = require('../util/config');
const net = require('net');
const http = require('http');

// Logg app name.
log.info('Ekko MQTT Server');

// Start MQTT server
net.createServer(aedes.handle).listen(config.MQTT_PORT);
log.info(`MQTT server is listening on port ${config.MQTT_PORT}`);
