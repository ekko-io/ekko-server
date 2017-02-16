import test from 'ava';
import auth from '../../app/mqtt/auth';

test('authenticate - failed', t => {
  var client = {};
  var callback = function (error, success) {
    t.not(success);
    t.is('Auth error', error.message);
    t.is(4, error.returnCode);

    t.is('unknown', client.cred.user);
    t.is('unknown', client.cred.token);
  };

  auth.authenticate(client, 'unknown', 'unknown', callback);
});

test('authenticate - success', t => {
  var client = {};
  var callback = function (error, success) {
    t.is(true, success);
    t.not(error);

    t.is('srs', client.cred.user);
    t.is('123', client.cred.token);
  };

  auth.authenticate(client, 'srs', '123', callback);
});

test('authorizeSubscribe - illegal topic', t => {
  var client = {};
  var callback = function (error, success) {
    t.is(undefined, success);
    t.is('Illegal topic', error.message);
  };

  var sub = {
    topic: 'a/b/c/d'
  };
  auth.authorizeSubscribe(client, sub, callback);
});

test('authorizeSubscribe - no access', t => {
  var client = {};
  var callback = function (error, success) {
    t.is(undefined, success);
    t.is('No access', error.message);
  };

  var sub = {
    topic: 'a/b'
  };
  auth.authorizeSubscribe(client, sub, callback);
});

test('authorizeSubscribe - success', t => {
  var client = {
    cred: {
      user: 'srs',
      token: '123'
    }
  };

  var sub = {
    topic: 'srs/mychannel'
  };

  var callback = function (error, success) {
    t.is(success, sub);
    t.not(error);
  };

  auth.authorizeSubscribe(client, sub, callback);
});

test('authorizePublish - illegal topic', t => {
  var client = {};
  var callback = function (error) {
    t.is('Illegal topic', error.message);
  };

  var packet = {
    topic: 'a/b/c/d'
  };
  auth.authorizePublish(client, packet, callback);
});

test('authorizePublish - no access', t => {
  var client = {};
  var callback = function (error) {
    t.is('No access', error.message);
  };

  var packet = {
    topic: 'a/b'
  };
  auth.authorizePublish(client, packet, callback);
});

test('authorizePublish - success', t => {
  var client = {
    cred: {
      user: 'srs',
      token: '123'
    }
  };

  var callback = function (error) {
    t.not(error);
  };

  var packet = {
    topic: 'srs/mychannel'
  };
  auth.authorizePublish(client, packet, callback);
});
