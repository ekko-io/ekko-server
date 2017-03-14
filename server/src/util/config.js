module.exports = {
  // Log settings
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_PRETTY: process.env.LOG_PRETTY || true,

  // Nats settings
  NATS_HOST: process.env.NATS_HOST ||  'localhost',
  NATS_PORT: process.env.NATS_PORT ||  4222,

  // MQTT settings
  MQTT_PORT: process.env.MQTT_PORT || 1883,
  MQTT_WS_PORT: process.env.MQTT_WS_PORT || 8883
};
