webpackHotUpdate("static/development/pages/user/crud/blogs.js",{

/***/ "./components/crud/BlogRead.js":
/*!*************************************!*\
  !*** ./components/crud/BlogRead.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/jahnvi/My stuff/SeoBlog/client/components/crud/BlogRead.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var BlogRead = function BlogRead() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      blogs = _useState[0],
      setBlogs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadBlogs();
  }, []);

  var loadBlogs = function loadBlogs() {
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["list"])(username).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  var deleteBlog = function deleteBlog(slug) {
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["removeBlog"])(slug, token).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadBlogs();
      }
    });
  };

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm('Are you sure you want to delete your blog?');

    if (answer) {
      deleteBlog(slug);
    }
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, i) {
      return __jsx("div", {
        key: i,
        className: "pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, blog.title), __jsx("p", {
        className: "mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Written by   ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/profile/".concat(blog.postedBy.username),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, blog.postedBy.username)), " | Published on ", moment__WEBPACK_IMPORTED_MODULE_5___default()(blog.updatedAt).fromNow()), __jsx("button", {
        className: "btn btn-sm btn-danger",
        onClick: function onClick() {
          return deleteConfirm(blog.slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Delete"), showUpdateButton(blog));
    });
  };

  var showUpdateButton = function showUpdateButton(blog) {
    if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 0) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/user/crud/".concat(blog.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-sm btn-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Update"));
    } else if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 1) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/admin/crud/".concat(blog.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("a", {
        className: "ml-2 btn btn-sm btn-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Update"));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, message && __jsx("div", {
    className: "alert alert-warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, message), showAllBlogs())));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogRead);

/***/ })

})
//# sourceMappingURL=blogs.js.e42b889a835c8e27985c.hot-update.js.map