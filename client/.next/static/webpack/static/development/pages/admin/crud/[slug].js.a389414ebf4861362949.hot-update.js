webpackHotUpdate("static/development/pages/admin/crud/[slug].js",{

/***/ "./components/crud/BlogUpdate.js":
/*!***************************************!*\
  !*** ./components/crud/BlogUpdate.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_16__);








var _jsxFileName = "/home/jahnvi/My stuff/SeoBlog/client/components/crud/BlogUpdate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }











var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});


var BlogUpdate = function BlogUpdate(_ref) {
  var _useState7;

  var router = _ref.router;
  var QuillModules = {
    toolbar: [[{
      header: '1'
    }, {
      header: '2'
    }, {
      header: [3, 4, 5, 6]
    }, {
      font: []
    }], [{
      size: []
    }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
      list: 'ordered'
    }, {
      list: 'bullet'
    }], ['link', 'image', 'video'], ['clean'], ['code-block']]
  };
  var QuillFormats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image', 'video', 'code-block'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      body = _useState[0],
      setBody = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      categories = _useState2[0],
      setCategories = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      tags = _useState3[0],
      setTags = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      checked = _useState4[0],
      setChecked = _useState4[1]; // categories


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      checkedTag = _useState5[0],
      setCheckedTag = _useState5[1]; // tags


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])((_useState7 = {
    title: '',
    error: '',
    success: '',
    formData: ''
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState7, "title", ''), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState7, "body", ''), _useState7)),
      values = _useState6[0],
      setValues = _useState6[1];

  var error = values.error,
      success = values.success,
      formData = values.formData,
      title = values.title;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_12__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    setValues(_objectSpread({}, values, {
      formData: new FormData()
    }));
    initBlog();
    initCategories();
    initTags();
  }, [router]);

  var initBlog = function initBlog() {
    if (router.query.slug) {
      Object(_actions_blog__WEBPACK_IMPORTED_MODULE_15__["singleBlog"])(router.query.slug).then(function (data) {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues(_objectSpread({}, values, {
            title: data.title
          }));
          setBody(data.body);
          setCategoriesArray(data.categories);
          setTagsArray(data.tags);
        }
      });
    }
  };

  var setCategoriesArray = function setCategoriesArray(blogCategories) {
    var ca = [];
    blogCategories.map(function (c, i) {
      ca.push(c._id);
    });
    setChecked(ca);
  };

  var setTagsArray = function setTagsArray(blogTags) {
    var ta = [];
    blogTags.map(function (t, i) {
      ta.push(t._id);
    });
    setCheckedTag(ta);
  };

  var initCategories = function initCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_13__["getCategories"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setCategories(data);
      }
    });
  };

  var initTags = function initTags() {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_14__["getTags"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setTags(data);
      }
    });
  };

  var handleToggle = function handleToggle(c) {
    return function () {
      setValues(_objectSpread({}, values, {
        error: ''
      })); // return the first index or -1

      var clickedCategory = checked.indexOf(c);

      var all = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(checked);

      if (clickedCategory === -1) {
        all.push(c);
      } else {
        all.splice(clickedCategory, 1);
      }

      console.log(all);
      setChecked(all);
      formData.set('categories', all);
    };
  };

  var handleTagsToggle = function handleTagsToggle(t) {
    return function () {
      setValues(_objectSpread({}, values, {
        error: ''
      })); // return the first index or -1

      var clickedTag = checkedTag.indexOf(t);

      var all = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(checkedTag);

      if (clickedTag === -1) {
        all.push(t);
      } else {
        all.splice(clickedTag, 1);
      }

      console.log(all);
      setCheckedTag(all);
      formData.set('tags', all);
    };
  };

  var findOutCategory = function findOutCategory(c) {
    var result = checked.indexOf(c);

    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  var findOutTag = function findOutTag(t) {
    var result = checkedTag.indexOf(t);

    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  var showCategories = function showCategories() {
    return categories && categories.map(function (c, i) {
      return __jsx("li", {
        key: i,
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("input", {
        onChange: handleToggle(c._id),
        checked: findOutCategory(c._id),
        type: "checkbox",
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }), __jsx("label", {
        className: "form-check-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, c.name));
    });
  };

  var showTags = function showTags() {
    return tags && tags.map(function (t, i) {
      return __jsx("li", {
        key: i,
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("input", {
        onChange: handleTagsToggle(t._id),
        checked: findOutTag(t._id),
        type: "checkbox",
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), __jsx("label", {
        className: "form-check-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, t.name));
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      // console.log(e.target.value);
      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      formData.set(name, value);
      setValues(_objectSpread({}, values, (_objectSpread2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_objectSpread2, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_objectSpread2, "formData", formData), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleBody = function handleBody(e) {
    setBody(e);
    formData.set('body', e);
  };

  var editBlog = function editBlog(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_15__["updateBlog"])(formData, token, router.query.slug).then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread({}, values, {
          title: '',
          success: "Blog titled \"".concat(data.title, "\" is successfully updated")
        }));

        if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_12__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_12__["isAuth"])().role === 1) {
          // Router.replace(`/admin/crud/${router.query.slug}`);
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace("/admin");
        } else if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_12__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_12__["isAuth"])().role === 0) {
          // Router.replace(`/user/crud/${router.query.slug}`);
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace("/user");
        }
      }
    });
  };

  var showError = function showError() {
    return __jsx("div", {
      className: "alert alert-danger",
      style: {
        display: error ? '' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, error);
  };

  var showSuccess = function showSuccess() {
    return __jsx("div", {
      className: "alert alert-success",
      style: {
        display: success ? '' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, success);
  };

  var updateBlogForm = function updateBlogForm() {
    return __jsx("form", {
      onSubmit: editBlog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, "Title"), __jsx("input", {
      type: "text",
      className: "form-control",
      value: title,
      onChange: handleChange('title'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, __jsx(ReactQuill, {
      modules: QuillModules,
      formats: QuillFormats,
      value: body,
      placeholder: "Write something amazing...",
      onChange: handleBody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    })), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, "Update")));
  };

  return __jsx("div", {
    className: "container-fluid pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, updateBlogForm(), __jsx("div", {
    className: "pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, showSuccess(), showError()), body && __jsx("img", {
    src: "".concat(API, "/api/blog/photo/").concat(router.query.slug),
    alt: title,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, __jsx("div", {
    className: "form-group pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, "Featured image"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, "Max size: 1mb"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }), __jsx("label", {
    className: "btn btn-outline-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "Upload featured image", __jsx("input", {
    onChange: handleChange('photo'),
    type: "file",
    accept: "image/*",
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, "Categories"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }), __jsx("ul", {
    style: {
      maxHeight: '200px',
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, showCategories())), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, "Tags"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }), __jsx("ul", {
    style: {
      maxHeight: '200px',
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, showTags())))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(BlogUpdate));

/***/ })

})
//# sourceMappingURL=[slug].js.a389414ebf4861362949.hot-update.js.map