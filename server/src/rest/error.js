function handleError(error, req, res, next) {
  var status = error.status || 500;
  var message = error.message || error;

  sendError(res, status, message);
}

function handle404Error(req, res) {
  sendError(res, 404, "Not Found");
}

function sendError(res, status, message) {
  var json = {
    "status": status,
    "message": message
  };

  res.status(status).json(json);
}

exports.sendError = sendError;

exports.register = (app) => {
  app.use(handleError);
  app.use(handle404Error);
};
