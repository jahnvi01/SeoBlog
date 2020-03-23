webpackHotUpdate("static/development/pages/categories/[slug].js",{

/***/ "./pages/categories/[slug].js":
/*!************************************!*\
  !*** ./pages/categories/[slug].js ***!
  \************************************/
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
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_blog_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/blog/card */ "./components/blog/card.js");
var _jsxFileName = "/home/jahnvi/My stuff/SeoBlog/client/pages/categories/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Category = function Category(_ref) {
  var category = _ref.category,
      blogs = _ref.blogs,
      query = _ref.query;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, category.name, " | ", _config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]), __jsx("meta", {
      name: "description",
      content: "Best programming tutorials on ".concat(category.name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/categories/").concat(query.slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(category.name, "| ").concat(_config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("meta", {
      property: "og:description",
      content: "Best programming tutorials on ".concat(category.name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("meta", {
      property: "og:type",
      content: "webiste",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/categories/").concat(query.slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/static/images/seoblog.jpg"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/static/images/seoblog.jpg"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("meta", {
      property: "fb:app_id",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["FB_APP_ID"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, head(), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "container-fluid text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12 pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h1", {
    className: "display-4 font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, category.name), blogs.map(function (b, i) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_components_blog_card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: i,
      blog: b,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }));
  })))))));
};

Category.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_category__WEBPACK_IMPORTED_MODULE_4__["singleCategory"])(query.slug).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.category);
      return {
        category: data.category,
        blogs: data.blogs,
        query: query
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ })

})
//# sourceMappingURL=[slug].js.2f184bae454b75f2a420.hot-update.js.map