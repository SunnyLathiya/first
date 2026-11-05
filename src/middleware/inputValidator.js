import joi from "joi";

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
});

const userByIdSchema = joi.object({
  id: joi.string().required(),
});

export const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: 400, message: error.details[0].message });
  }
  next();
};

export const validateUserById = (req, res, next) => {
  const { error } = userByIdSchema.validate(req.params);
  if (error) {
    return next(new Error(error.message));
  }
  next();
};
