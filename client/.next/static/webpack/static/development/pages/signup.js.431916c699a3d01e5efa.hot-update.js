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
      lineNumber: 10
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("input", {
    onChange: handleChange,
    type: "text",
    className: "form-control",
    placeholder: "type your name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("input", {
    onChange: handleChange,
    type: "text",
    className: "form-control",
    placeholder: "type your email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("input", {
    onChange: handleChange,
    type: "text",
    className: "form-control",
    placeholder: "type your password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("button", {
    className: "btn-btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Signup")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupComponent);

/***/ })

})
//# sourceMappingURL=signup.js.431916c699a3d01e5efa.hot-update.js.map