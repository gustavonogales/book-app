import { celebrate, Joi, Segments } from 'celebrate';

export const userSchema = {
  create: celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(5).max(255),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
    },
  }),
  update: celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(5).max(255),
      email: Joi.string().email().required(),
      oldPassword: Joi.string().min(6),
      password: Joi.string().min(6),
      passwordConfirmation: Joi.string().min(6),
    },
  }),
};
