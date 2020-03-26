webpackHotUpdate("static/development/pages/user/update.js",{

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! exports provided: userPublicProfile, getProfile, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPublicProfile", function() { return userPublicProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var userPublicProfile = function userPublicProfile(username) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/api/user/").concat(username), {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var getProfile = function getProfile(token) {
  console.log("eee");
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/api/user/profile"), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    //  console.log(response.json())
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var update = function update(token, user) {
  console.log(user.get("username"));
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/api/user/update"), {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: user
  }).then(function (response) {
    //console.log(response.json())
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

/***/ })

})
//# sourceMappingURL=update.js.e00a56071fa576130eaf.hot-update.js.map