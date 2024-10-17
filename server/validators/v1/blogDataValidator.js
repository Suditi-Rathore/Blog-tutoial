import Joi from 'joi';
import BaseValidator from './baseValidator.js';

class BlogDataValidator extends BaseValidator{
    createBlog = async (req, res, next) => {
        const validationSchema = Joi.object({
          title: Joi.string().required(),
          content: Joi.string().required(),
          image: Joi.string().required(),
        });
    
        this.validateBody(validationSchema, req, res, next);
      };

      
}
export default new BlogDataValidator();