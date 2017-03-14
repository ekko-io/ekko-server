const figlet = require('figlet');

module.exports = (text) => {
  var out = figlet.textSync(text, {
    font: 'Standard'
  });

  console.log(out);
};
