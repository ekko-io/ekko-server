const errors = require('prettified').errors;
const name = process.argv[2] || process.env.APP_NAME;

try {
  require('./' + name);
} catch (e) {
  console.error(`ERROR! Failed to start app "${name}".`);
  errors.print(e);
  process.exit();
}
