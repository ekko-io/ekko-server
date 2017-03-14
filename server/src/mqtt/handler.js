const pubsub = require('../pubsub');

var instance;

function publishInternal(source, event) {
  if (source === instance.id) {
    return;
  }

  var packet = {
    cmd: 'publish',
    qos: 2,
    topic: event.app + '/' + event.type,
    payload: event.payload,
    retain: false
  };

  instance.publish(packet, null);
};

exports.publish = (data) => {
  data.source = instance.id;
  pubsub.publish(data);
};

exports.setup = (aedes) => {
  instance = aedes;
  subscribe();
};

function subscribe() {
  pubsub.subscribe((source, message) => {
    publishInternal(source, message);
  });
};
