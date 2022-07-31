export default (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500).json(err)
};
