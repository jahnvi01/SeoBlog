webpackHotUpdate("static/development/pages/admin/crud/blog.js",{

/***/ "./components/crud/blogcreate.js":
/*!***************************************!*\
  !*** ./components/crud/blogcreate.js ***!
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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_17__);









var _jsxFileName = "/home/jahnvi/My stuff/SeoBlog/client/components/crud/blogcreate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }









var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
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
 // import ReactQuill from 'react-quill';
//import 'react-quill/dist/quill.snow.css';

var CreateBlog = function CreateBlog(_ref) {
  var router = _ref.router;

  var blogFromLS = function blogFromLS() {
    if (false) {}

    if (localStorage.getItem('blog')) {
      return JSON.parse(localStorage.getItem('blog'));
    } else {
      return false;
    }
  };

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_12__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      categories = _useState[0],
      setCategories = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      tags = _useState2[0],
      setTags = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(blogFromLS()),
      body = _useState3[0],
      setBody = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      checked = _useState4[0],
      setChecked = _useState4[1]; // categories


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      checkedTag = _useState5[0],
      setCheckedTag = _useState5[1]; // tags


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    error: '',
    sizeError: '',
    success: '',
    formData: '',
    title: '',
    hidePublishButton: false
  }),
      values = _useState6[0],
      setValues = _useState6[1];

  var error = values.error,
      sizeError = values.sizeError,
      success = values.success,
      formData = values.formData,
      title = values.title,
      hidePublishButton = values.hidePublishButton;
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    setValues(_objectSpread({}, values, {
      formData: new FormData()
    }));
    initCategories();
    initTags();
  }, [router]);

  var publishBlog = function publishBlog(e) {
    e.preventDefault();
    console.log(formData);
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_15__["createBlog"])(formData, token).then(function (data) {
      if (data.error) {
        console.log(data.error);
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread({}, values, {
          title: '',
          error: '',
          success: "A new blog titled \"".concat(data.title, "\" is created")
        }));
        setBody('');
        setCategories([]);
        setTags([]);
      }
    });
  };

  var handleToggle = function handleToggle(c) {
    return function () {
      setValues(_objectSpread({}, values, {
        error: ''
      })); // return the first index or -1

      var clickedCategory = checked.indexOf(c);

      var all = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(checked);

      if (clickedCategory === -1) {
        all.push(c);
      } else {
        all.splice(clickedCategory, 1);
      }

      console.log(all);
      setChecked(all);
      formData.set('categories', all);
      console.log(formData);
    };
  };

  var handleTagsToggle = function handleTagsToggle(t) {
    return function () {
      setValues(_objectSpread({}, values, {
        error: ''
      })); // return the first index or -1

      var clickedTag = checked.indexOf(t);

      var all = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(checkedTag);

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

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      console.log(e.target.value);
      var value = name === "photo" ? e.target.files[0] : e.target.value;
      formData.set(name, value);
      setValues(_objectSpread({}, values, (_objectSpread2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_objectSpread2, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_objectSpread2, "formData", formData), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_objectSpread2, "error", ""), _objectSpread2)));
    };
  };

  var initCategories = function initCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_14__["getCategories"])().then(function (data) {
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
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_16__["getTags"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setTags(data);
      }
    });
  };

  var showCategories = function showCategories() {
    return categories && categories.map(function (c, i) {
      return __jsx("li", {
        key: i,
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("input", {
        type: "checkbox",
        onChange: handleToggle(c._id),
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), __jsx("label", {
        className: "form-check-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
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
          lineNumber: 133
        },
        __self: this
      }, __jsx("input", {
        type: "checkbox",
        onChange: handleTagsToggle(t._id),
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), __jsx("label", {
        className: "form-check-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, t.name));
    });
  };

  var handleBody = function handleBody(e) {
    setBody(e);
    formData.set('body', e);

    if (true) {
      localStorage.setItem('blog', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(e));
    }
  };

  var showError = function showError() {
    return __jsx("div", {
      className: "alert-alert-danger",
      style: {
        display: error ? '' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, error);
  };

  var showSuccess = function showSuccess() {
    return __jsx("div", {
      className: "alert-alert-success",
      style: {
        display: success ? '' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, success);
  };

  var CreateBlogForm = function CreateBlogForm() {
    return __jsx("form", {
      onSubmit: publishBlog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Title"), __jsx("input", {
      type: "text",
      className: "form-control",
      onChange: handleChange('title'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx(ReactQuill, {
      modules: CreateBlog.modules,
      formats: CreateBlog.formats,
      value: body,
      placeholder: "write something...",
      onChange: handleBody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx("button", {
      type: "submit",
      className: "btn-btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Publish")));
  };

  return __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, showError(), showSuccess(), CreateBlogForm()), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("div", {
    className: "form-group pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Featured image"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "Max size: 1mb"), __jsx("label", {
    className: "btn btn-outline-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Upload featured image", __jsx("input", {
    onChange: handleChange('photo'),
    type: "file",
    accept: "image/*",
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  })))), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Categories"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), __jsx("ul", {
    style: {
      maxHeight: '200px',
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, showCategories())), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Tags"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), __jsx("ul", {
    style: {
      maxHeight: '200px',
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, showTags())))));
};

CreateBlog.modules = {
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
CreateBlog.formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image', 'video', 'code-block'];
/* harmony default export */ __webpack_exports__["default"] = (CreateBlog);

/***/ })

})
//# sourceMappingURL=blog.js.69d092c66284a866e3d4.hot-update.js.map