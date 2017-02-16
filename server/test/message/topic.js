import test from 'ava';
import message from '../../app/message';

test('topic - legal', t => {
  var topic = message.newTopic('/a/b//');

  t.not(topic, undefined);
  t.is(topic.topic, 'a/b');
  t.is(topic.mode, undefined);
  t.is(topic.user, 'a');
  t.is(topic.channel, 'b');
});

test('topic - mode', t => {
  var topic = message.newTopic('/a/b/c/');

  t.not(topic, undefined);
  t.is(topic.topic, 'a/b/c');
  t.is(topic.mode, 'c');
  t.is(topic.user, 'a');
  t.is(topic.channel, 'b');
});

test('topic - illegal', t => {
  var topic = message.newTopic('/a/b/c/d//');
  t.is(topic, undefined);
});
