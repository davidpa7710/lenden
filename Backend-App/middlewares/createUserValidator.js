const joi = require('joi');

const userSchema = joi.object({
  name: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

module.exports = async (req, res, next) => {
  try {
    await userSchema.validateAsync(req.body);
    next();
  } catch (err) {
    return res.status(400).json({ err });
  }
};