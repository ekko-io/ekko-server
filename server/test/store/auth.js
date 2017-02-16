import test from 'ava';
import store from '../../app/store';
import message from '../../app/message';

test('authToken - failed', t => {
  var cred = {
    user: 'unknown',
    token: 'unknown'
  };

  var result = store.tokenAuth(cred);
  t.is(result, false);
});

test('authToken - success', t => {
  var cred = {
    user: 'srs',
    token: '123'
  };

  var result = store.tokenAuth(cred);
  t.is(result, true);
});

test('hasTopicRead - failed', t => {
  var cred = {
    user: 'srs',
    token: '123'
  };

  var topic = message.newTopic('srs/other');

  var result = store.hasTopicRead(cred, topic);
  t.is(result, false);
});

test('hasTopicRead - success', t => {
  var cred = {
    user: 'srs',
    token: '123'
  };

  var topic = message.newTopic('srs/mychannel');

  var result = store.hasTopicRead(cred, topic);
  t.is(result, true);
});

test('hasTopicRead - json success', t => {
  var cred = {
    user: 'srs',
    token: '123'
  };

  var topic = message.newTopic('srs/mychannel/json');

  var result = store.hasTopicRead(cred, topic);
  t.is(result, true);
});

test('hasTopicWrite - failed', t => {
  var cred = {
    user: 'srs',
    token: '123'
  };

  var topic = message.newTopic('srs/other');

  var result = store.hasTopicWrite(cred, topic);
  t.is(result, false);
});

test('hasTopicWrite - success', t => {
  var cred = {
    user: 'srs',
    token: '123'
  };

  var topic = message.newTopic('srs/mychannel');

  var result = store.hasTopicWrite(cred, topic);
  t.is(result, true);
});

test('hasTopicWrite - json falied', t => {
  var cred = {
    user: 'srs',
    token: '123'
  };

  var topic = message.newTopic('srs/mychannel/json');

  var result = store.hasTopicWrite(cred, topic);
  t.is(result, false);
});
