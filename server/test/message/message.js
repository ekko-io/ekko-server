import test from 'ava';
import message from '../../app/message';

test('message - str', t => {
  var topic = message.newTopic('/a/b');
  var msg = message.newMessage(topic, 'test');

  t.not(msg.id, undefined);
  t.is(msg.user, 'a');
  t.is(msg.channel, 'b');
  t.not(msg.timestamp, undefined);
  t.is(msg.data, 'test');
});

test('message - json str', t => {
  var topic = message.newTopic('/a/b');
  var msg = message.newMessage(topic, '{"a":1}');

  t.not(msg.id, undefined);
  t.is(msg.user, 'a');
  t.is(msg.channel, 'b');
  t.not(msg.timestamp, undefined);
  t.is(JSON.stringify(msg.data), '{"a":1}');
});

test('message - illegal json str', t => {
  var topic = message.newTopic('/a/b');
  var msg = message.newMessage(topic, '{a:1');

  t.not(msg.id, undefined);
  t.is(msg.user, 'a');
  t.is(msg.channel, 'b');
  t.not(msg.timestamp, undefined);
  t.is(msg.data, '{a:1');
});

test('message - json', t => {
  var topic = message.newTopic('/a/b');
  var msg = message.newMessage(topic, { a: 1 });

  t.not(msg.id, undefined);
  t.is(msg.user, 'a');
  t.is(msg.channel, 'b');
  t.not(msg.timestamp, undefined);
  t.is(JSON.stringify(msg.data), '{"a":1}');
});
