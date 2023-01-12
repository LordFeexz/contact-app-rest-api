const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";
  console.log(err);

  if (err.name === "Data not found") {
    status = 404;
    message = err.name;
  } else if (err.name === "Data already exist") {
    status = 409;
    message = "Conflict";
  } else if (err.name === "CastError") {
    status = 400;
    message = "invalid params";
  } else if (err.name === "Failed update") {
    status = 502;
    message = err.name;
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;
