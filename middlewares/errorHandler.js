const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";
  console.log(err);

  if (err.name === "Data not found") {
    status = 404;
    message = err.name;
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;
