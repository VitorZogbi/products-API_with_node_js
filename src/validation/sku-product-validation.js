const { check } = require('express-validator/check');

class SkuProductValidator {

    static productValidation() {

        return [

            check('name').custom(this.isNumber).withMessage("Nome não pode ser composto apenas por numero"),
            check('name').trim().isLength({ min: 3 }).withMessage("Nome não pode ter menos que 3 caracteres"),

            check('description').custom(this.isNumber).withMessage("Nome não pode ser composto apenas por numero"),
            check('description').trim().isLength({ min: 10 }).withMessage("Descrição não pode ter menos que 10 caracteres"),
            
        ]
    }

    static isNumber(n) {
        return isNaN(+(n));
    }

}

module.exports = SkuProductValidator;