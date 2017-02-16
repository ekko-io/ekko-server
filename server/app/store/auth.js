
const tokens = {
  'srs:123': 'true',
  'srs:123:mychannel': 'RW'
};

function getAccessValue(cred, topic) {
  var key = cred.user + ':' + cred.token;

  if (topic) {
    key += ':' + topic.channel;
  }

  var value = tokens[key];
  return value ? value : '';
};

function isSameUser(cred, topic) {
  return cred && (cred.user === topic.user);
};

function isModeNull(topic) {
  return topic.mode === undefined;
};

exports.tokenAuth = (cred) => {
  return getAccessValue(cred) === 'true';
};

exports.hasTopicRead = (cred, topic) => {
  return isSameUser(cred, topic) && getAccessValue(cred, topic).includes('R');
};

exports.hasTopicWrite = (cred, topic) => {
  return isSameUser(cred, topic) && getAccessValue(cred, topic).includes('W') && isModeNull(topic);
};
