import { MESSAGES } from "../../constants/index.js";
import { HTTP_STATUS_CODE } from "../../constants/index.js";


class BaseValidator{
    constructor(){}

    async validateHeader(validator,req,res,next) {
        try {
          const { error: errors, value } = validator.validate(req.header, {
            abortEarly: false,
          });
    
          if (errors) {
            res.json(
              MESSAGES.ERROR.BAD_REQUEST(
                errors.details.map((error) => error.message).join(", ")
              )
            );
            return false;
          }
    
          req.body = value;
    
          next();
        } catch (error) {
          res.json({
            status: MESSAGES.ERROR.INTERNAL_SERVER_ERROR(error),
            message: error,
          });
          return false;
        }
      }
    
      async validateBody(validator,req,res,next) {
        try {
          const { error: errors, value } = validator.validate(req.body, {
            abortEarly: false,
          });

          if (errors) {
            res.status(HTTP_STATUS_CODE.BAD_REQUEST).json(
              MESSAGES.ERROR.BAD_REQUEST(
                (errors?.details || []).map((error) => error.message).join(", ")
              )
            );
            return false;
          }
    
          req.body = value;
    
          next();
        } catch (error) {
          res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            status: MESSAGES.ERROR.INTERNAL_SERVER_ERROR(error),
            message: error,
          });
          return false;
        }
      }

}

export default BaseValidator
