const server = require('./server');
const auth = require('./auth');

// Aedes engine.
var aedes;

// Start MQTT server.
exports.start = () => {
  // Create aedes.
  aedes = require('aedes')();

  // Setup aedes.
  aedes.authenticate = auth.authenticate;
  aedes.authorizeSubscribe = auth.authorizeSubscribe;
  aedes.authorizePublish = auth.authorizePublish;

  // Start server components.
  server.startMqtt(aedes);
  server.startWsBridge(aedes);
};
