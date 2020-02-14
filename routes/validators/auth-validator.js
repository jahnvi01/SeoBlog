const { check }=require("express-validator");

exports.userSignupValidator=[
    check('username')
    .not()
    .isEmpty()
    .withMessage("name required"),

    check('email')
    .isEmpty()
    .isEmail()
    .withMessage("enter valid email address"),

    check("password")
    .isLength({min:6})
    .withMessage("password must be at least 6 characters long")

];

