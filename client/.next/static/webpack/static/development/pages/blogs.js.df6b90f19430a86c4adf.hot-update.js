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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_blog_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/blog/card */ "./components/blog/card.js");
var _jsxFileName = "/home/jahnvi/My stuff/SeoBlog/client/pages/blogs/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 //import renderHTML from 'react-render-html';



var Blogs = function Blogs(_ref) {
  var blogs = _ref.blogs,
      categories = _ref.categories,
      tags = _ref.tags,
      size = _ref.size,
      router = _ref.router;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Programming blogs | ", _config__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"]), __jsx("meta", {
      name: "description",
      content: "Programming blogs and tutorials on react node next vue php laravel and web developoment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_6__["DOMAIN"]).concat(router.pathname),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("meta", {
      property: "og:title",
      content: "Latest web developoment tutorials | ".concat(_config__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("meta", {
      property: "og:description",
      content: "Programming blogs and tutorials on react node next vue php laravel and web developoment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("meta", {
      property: "og:type",
      content: "webiste",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_6__["DOMAIN"]).concat(router.pathname),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_6__["DOMAIN"], "/static/images/seo.png"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image:secure_url",
      ccontent: "".concat(_config__WEBPACK_IMPORTED_MODULE_6__["DOMAIN"], "/static/images/seo.png"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("meta", {
      property: "fb:app_id",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_6__["FB_APP_ID"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  };

  var showAllCategories = function showAllCategories() {
    console.log(blogs.categories); // return blogs.categories.map((c, i) => (
    //     <Link href={`/categories/${c.slug}`} key={i}>
    //         <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
    //     </Link>
    // ));
  };

  var showAllTags = function showAllTags() {// return blogs.tags.map((t, i) => (
    //     <Link href={`/tags/${t.slug}`} key={i}>
    //         <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
    //     </Link>
    // ));
  };

  var showAllBlogs = function showAllBlogs() {
    console.log(blogs); // blogs=blogs.blogs
    // return blogs.map((blog, i) => 
    // {
    //     // ()
    //     return (
    //         <article key={i}>
    //        <Card blog={blog}/>
    //             <hr />
    //         </article>
    //     );
    // });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, head(), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12 pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("h1", {
    className: "display-4 font-weight-bold text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Programming blogs and tutorials")), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "pb-5 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, showAllCategories(), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), showAllTags())))), __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, showAllBlogs()))))));
};

Blogs.getInitialProps = function () {
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["listBlogsWithCategoriesAndTags"])().then(function (data) {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Blogs));

/***/ })

})
//# sourceMappingURL=blogs.js.df6b90f19430a86c4adf.hot-update.js.map