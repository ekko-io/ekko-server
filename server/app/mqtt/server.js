const net = require('net');
const config = require('../util/config');
const log = require('../util/log');
const http = require('http');
const websocket = require('websocket-stream');

// Start MQTT server.
exports.startMqtt = (aedes) => {
  net.createServer(aedes.handle).listen(config.MQTT_PORT);
  log.info('MQTT server is listening on port', config.MQTT_PORT);
};

// Start WS bridge.
exports.startWsBridge = (aedes) => {
  const server = http.createServer();

  websocket.createServer({
    server: server
  }, aedes.handle);

  server.listen(config.MQTT_WS_PORT);
  log.info('MQTT WebSocket bridge is listening on port', config.MQTT_WS_PORT);
};
