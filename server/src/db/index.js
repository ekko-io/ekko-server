const app = require('./app');

// Create tables
/*
schema.App.sync({force: true}).then(() => {
  console.log('Table created!');
});
*/

app.createKey('B11Bn6yxb', 'test', 'R', '*').then(data => {
  console.log(data);
});
