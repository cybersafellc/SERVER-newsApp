const ressponse = (statusCode, message, res, data) => {
  res.json(statusCode, {
    data: data,
    message: message,
  });
};
module.exports = ressponse;
