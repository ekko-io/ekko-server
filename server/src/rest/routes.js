const pubsub = require('../pubsub');

function publishEvent(req, res) {
  pubsub.publish({
    app: req.params.app,
    type: req.params['0'],
    payload: req.body.toString('utf8'),
    source: 'rest'
  });

  res.status(200).end();
};

module.exports = (app) => {
  app.post('/event/:app/*', publishEvent);
};
