import test from 'ava';
import banner from '../../app/util/banner';

test('write banner', t => {
  banner('test');
  t.pass();
});
