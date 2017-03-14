const log = require('../util/log');
const aedes = require('aedes')();
const config = require('../util/config');
const net = require('net');
const http = require('http');
const banner = require('../util/banner');

// Write banner
banner('Ekko MQTT');

// Start MQTT server
net.createServer(aedes.handle).listen(config.MQTT_PORT);
log.info(`MQTT server is listening on port ${config.MQTT_PORT}`);
