const nats = require('nats');
const shortid = require('shortid');
const config = require('../util/config');

const topic = 'event';
const conn = nats.connect(`nats://${config.NATS_HOST}:${config.NATS_PORT}`);

exports.publish = (data) => {
  var event = {
    id: shortid.generate(),
    app: data.app,
    type: data.type,
    timestamp: Date.now(),
    payload: data.payload
  };

  conn.publish(topic, JSON.stringify(event), data.source);
};

exports.subscribe = (callback) => {
  conn.subscribe(topic, (msg, source) => {
    callback(source, JSON.parse(msg));
  });
};

exports.subscribeQueue = (name, callback) => {
  conn.subscribe(topic, { "queue": name }, (msg, source) => {
    callback(source, JSON.parse(msg));
  });
};

exports.newTopic = (topic) => {
  var parts = topic.split(/[\/\.]/);
  parts = parts.filter((e) => { return e; });

  if (parts.length < 2) {
    return undefined;
  }

  var app = parts[0];
  var topic = parts.join('/');
  var type = parts.slice(1).join('/');

  return {
    app: app,
    type: type,
    topic: topic
  };
};
