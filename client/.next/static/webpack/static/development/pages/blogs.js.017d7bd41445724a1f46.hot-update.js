webpackHotUpdate("static/development/pages/blogs.js",{

/***/ "./pages/blogs/index.js":
/*!******************************!*\
  !*** ./pages/blogs/index.js ***!
  \******************************/
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
/* harmony import */ var _components_blog_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/blog/card */ "./components/blog/card.js");
var _jsxFileName = "/home/jahnvi/My stuff/SeoBlog/client/pages/blogs/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 //import renderHTML from 'react-render-html';

var Blogs = function Blogs(blogs, categories, tags, size) {
  var showAllBlogs = function showAllBlogs() {
    //   console.log(blogs)
    blogs = blogs.blogs;
    return blogs.map(function (blog, i) {
      // ()
      return __jsx("article", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    });
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12 pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h1", {
    className: "display-4 font-weight-bold text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Programming blogs and tutorials")), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "show categories and tags")))), __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, showAllBlogs())))));
};

Blogs.getInitialProps = function () {
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["listBlogsWithCategoriesAndTags"])().then(function (data) {
    if (data.error) {
      console.log("data");
    } else {
      console.log(data);
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        size: data.size
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Blogs);

/***/ })

})
//# sourceMappingURL=blogs.js.017d7bd41445724a1f46.hot-update.js.map