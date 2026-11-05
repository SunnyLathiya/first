const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.code === "23505") {
    return res.status(409).json({
      status: 409,
      message: "A user with this email already exists",
    });
  }

  const status = err.statusCode || 500;
  res.status(status).json({
    status,
    message: status === 500 ? "Something went wrong" : err.message,
  });
};

export default errorHandler;
