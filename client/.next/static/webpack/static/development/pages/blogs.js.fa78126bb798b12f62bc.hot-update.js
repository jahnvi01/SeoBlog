webpackHotUpdate("static/development/pages/blogs.js",{

/***/ "./components/blog/card.js":
/*!*********************************!*\
  !*** ./components/blog/card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/jahnvi/My stuff/SeoBlog/client/components/blog/card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Card = function Card(_ref) {
  var blog = _ref.blog;

  var showBlogCategories = function showBlogCategories(blog) {
    return blog.categories.map(function (c, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: i,
        href: "/categories/".concat(c.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, c.name));
    });
  };

  var showBlogTags = function showBlogTags(blog) {
    return blog.tags.map(function (t, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: i,
        href: "/tags/".concat(t.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, t.name));
    });
  };

  return __jsx("div", {
    className: "lead pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blogs/".concat(blog.slug),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    className: "pt-3 pb-3 font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, blog.title)))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("p", {
    className: "mark ml-1 pt-2 pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Written by ", blog.postedBy.name, " | Published ", moment__WEBPACK_IMPORTED_MODULE_6___default()(blog.updatedAt).fromNow())), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, showBlogCategories(blog), showBlogTags(blog), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "image"), __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, blog.excerpt), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blogs/".concat(blog.slug),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    className: "btn btn-primary pt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Read more"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=blogs.js.fa78126bb798b12f62bc.hot-update.js.map