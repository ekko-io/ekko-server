import test from 'ava';
import config from '../../app/util/config';

test('default config', t => {
  t.is('info', config.LOG_LEVEL);
  t.is(1883, config.MQTT_PORT);
});
