const pubsub = require('../pubsub');
const handler = require('./handler');

exports.authenticate = (client, user, password, callback) => {
  callback(null, true);
};

exports.authorizeSubscribe = (client, sub, callback) => {
  var topic = pubsub.newTopic(sub.topic);
  if (!topic) {
    return callback(new Error('Illegal topic'));
  }

  /*
  if (!store.hasTopicRead(client.cred, topic)) {
    return callback(new Error('No access'));
  }
  */

  callback(null, sub);
};


exports.authorizePublish = (client, packet, callback) => {
  var topic = pubsub.newTopic(packet.topic);
  if (!topic) {
    return callback(new Error('Illegal topic'));
  }

  /*
  if (!store.hasTopicWrite(client.cred, topic)) {
    return callback(new Error('No access'));
  }
  */

  var payload = packet.payload.toString();
  handler.publish({
    app: topic.app,
    type: topic.type,
    payload: payload
  });

  callback(null);
};
