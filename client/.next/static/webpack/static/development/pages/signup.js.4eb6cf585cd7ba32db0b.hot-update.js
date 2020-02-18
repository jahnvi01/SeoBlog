webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/auth/signupcomponent.js":
/*!********************************************!*\
  !*** ./components/auth/signupcomponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jahnvi/My stuff/SeoBlog/client/components/auth/signupcomponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SignupComponent = function SignupComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    email: '',
    password: '',
    loading: false,
    message: '',
    error: '',
    showForm: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log("handle submit");
  };

  var handleChange = function handleChange(e) {
    console.log(e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("input", {
    value: name,
    onChange: handleChange('name'),
    type: "text",
    className: "form-control",
    placeholder: "type your name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("input", {
    value: email,
    onChange: handleChange('email'),
    type: "email",
    className: "form-control",
    placeholder: "type your email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("input", {
    value: password,
    onChange: handleChange('password'),
    type: "password",
    className: "form-control",
    placeholder: "type your password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("button", {
    className: "btn-btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Signup")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupComponent);

/***/ })

})
//# sourceMappingURL=signup.js.4eb6cf585cd7ba32db0b.hot-update.js.map