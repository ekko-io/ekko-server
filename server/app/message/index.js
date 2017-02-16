const shortid = require('shortid');

exports.newTopic = (topic) => {
  var parts = topic.split('/');
  parts = parts.filter((e) => { return e; });

  var valid = (parts.length === 2) || (parts.length === 3);

  if (!valid) {
    return undefined;
  }

  return {
    user: parts[0],
    channel: parts[1],
    mode: (parts.length == 3) ? parts[2] : undefined,
    topic: parts.join('/')
  };
};

function toJsonData(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
};

exports.newMessage = (topic, data) => {
  return {
    id: shortid.generate(),
    user: topic.user,
    channel: topic.channel,
    timestamp: Date.now(),
    data: toJsonData(data)
  }
};
