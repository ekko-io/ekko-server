const store = require('../store');
const message = require('../message');

exports.authenticate = (client, user, password, callback) => {
  client.cred = {
    user: user,
    token: password
  };

  if (store.tokenAuth(client.cred)) {
    callback(null, true);
  } else {
    var error = new Error('Auth error');
    error.returnCode = 4;
    callback(error, null);
  }
};

exports.authorizeSubscribe = (client, sub, callback) => {
  var topic = message.newTopic(sub.topic);
  if (!topic) {
    return callback(new Error('Illegal topic'));
  }

  if (!store.hasTopicRead(client.cred, topic)) {
    return callback(new Error('No access'));
  }

  callback(null, sub);
};

exports.authorizePublish = (client, packet, callback) => {
  var topic = message.newTopic(packet.topic);
  if (!topic) {
    return callback(new Error('Illegal topic'));
  }

  if (!store.hasTopicWrite(client.cred, topic)) {
    return callback(new Error('No access'));
  }

  callback(null);
};
