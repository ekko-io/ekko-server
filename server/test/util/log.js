import test from 'ava';
import log from '../../app/util/log';

test('log debug', t => {
  log.debug('Logging', 1, 2, 3);
  t.pass();
});

test('log info', t => {
  log.info('Logging', 1, 2, 3);
  t.pass();
});

test('log warn', t => {
  log.warn('Logging', 1, 2, 3);
  t.pass();
});

test('log error', t => {
  log.error('Logging', 1, 2, 3);
  t.pass();
});
