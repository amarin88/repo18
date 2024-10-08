import { body, validationResult } from "express-validator";//Import de express-validator

export const productDataValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a text")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),
  
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a text")
    .isLength({ min: 3 })
    .withMessage("Description must be at least 3 characters"),
  
  body("thumbnail")
    .isArray()
    .withMessage("Thumbnail must be an array"),
  
  body("code")
    .notEmpty()
    .withMessage("Code is required")
    .isString()
    .withMessage("Code must be a text")
    .isLength({ min: 3 })
    .withMessage("Code must be at least 3 characters"),
  
  body("stock")
    .notEmpty()
    .withMessage("Stock is required")
    .isNumeric()
    .withMessage("Stock must be a number")
    .isLength({ min: 1 })
    .withMessage("Stock must be at least 1 character"),
  
/*   body("status")
    .isBoolean()
    .withMessage("Status must be a boolean"), */
  
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .isLength({ min: 1 })
    .withMessage("Price must be at least 1 character"),
  
  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isString()
    .withMessage("Category must be a text")
    .isLength({ min: 3 })
    .withMessage("Category must be at least 3 characters"),
  
  (req, res, next) => {
    const errors = validationResult(req);//Valida todo lo que recibe por request
    
    if (!errors.isEmpty()) {//Valida que si error no viene vacío
      const setErrors = errors.array().map(e => {
        return { msg: e.msg, data: e.path }//Setea el formato de los errores
      });
      
    return res.status(400).json({ status: "error", errors: setErrors }); // Devolvemos el/los error/es
    }//Verifica si hay algún error
  
    next();//En el caso de que no haya errores continuamos
  },
];