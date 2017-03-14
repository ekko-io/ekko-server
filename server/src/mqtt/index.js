const log = require('../util/log');
const aedes = require('aedes')();
const config = require('../util/config');
const net = require('net');
const http = require('http');
const banner = require('../util/banner');
const websocket = require('websocket-stream');
const handler = require('./handler');
const auth = require('./auth');

// Logg app name.
banner('Ekko MQTT');
log.info('Ekko MQTT Server');

// Setup aedes.
aedes.authenticate = auth.authenticate;
aedes.authorizeSubscribe = auth.authorizeSubscribe;
aedes.authorizePublish = auth.authorizePublish;

// Setup handlers.
handler.setup(aedes);

// Start MQTT server
net.createServer(aedes.handle).listen(config.MQTT_PORT);
log.info(`MQTT server is listening on port ${config.MQTT_PORT}`);

// Start WS bridge
const server = http.createServer();

websocket.createServer({
  server: server
}, aedes.handle);

server.listen(config.MQTT_WS_PORT);
log.info(`MQTT WebSocket bridge is listening on port ${config.MQTT_WS_PORT}`);
