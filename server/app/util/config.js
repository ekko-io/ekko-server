
module.exports = {
  // Log settings
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',

  // MQTT settings
  MQTT_PORT: process.env.MQTT_PORT || 1883,
  MQTT_WS_PORT: process.env.MQTT_WS_PORT ||  8883,

  // Redis settings
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  REDIS_DB: process.env.REDIS_DB || 12,

  // Rest settings
  REST_PORT: process.env.REST_PORT || 4000,

  // Postgres settings
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
  POSTGRES_PORT: process.env.POSTGRES_PORT || 5432,
  POSTGRES_USER: process.env.POSTGRES_USER || 'ekko',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'ekko',
  POSTGRES_DB: process.env.POSTGRES_DB || 'ekko',

  // MongoDB settings
  MONGO_HOST: process.env.MONGO_HOST ||  'localhost',
  MONGO_PORT: process.env.MONGO_PORT ||  27017,
};
