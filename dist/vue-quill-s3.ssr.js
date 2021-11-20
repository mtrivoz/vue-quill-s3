'use strict';var http=require('http'),https=require('https'),url=require('url'),stream=require('stream'),assert=require('assert'),tty=require('tty'),util=require('util'),fs=require('fs'),net=require('net'),zlib=require('zlib');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var http__default=/*#__PURE__*/_interopDefaultLegacy(http);var https__default=/*#__PURE__*/_interopDefaultLegacy(https);var url__default=/*#__PURE__*/_interopDefaultLegacy(url);var stream__default=/*#__PURE__*/_interopDefaultLegacy(stream);var assert__default=/*#__PURE__*/_interopDefaultLegacy(assert);var tty__default=/*#__PURE__*/_interopDefaultLegacy(tty);var util__default=/*#__PURE__*/_interopDefaultLegacy(util);var fs__default=/*#__PURE__*/_interopDefaultLegacy(fs);var net__default=/*#__PURE__*/_interopDefaultLegacy(net);var zlib__default=/*#__PURE__*/_interopDefaultLegacy(zlib);function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}var quill = createCommonjsModule(function (module, exports) {
/*!
 * Quill Editor v2.0.0-dev.3
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/align-center.svg":
/*!***************************************!*\
  !*** ./assets/icons/align-center.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-center.svg?");

/***/ }),

/***/ "./assets/icons/align-justify.svg":
/*!****************************************!*\
  !*** ./assets/icons/align-justify.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-justify.svg?");

/***/ }),

/***/ "./assets/icons/align-left.svg":
/*!*************************************!*\
  !*** ./assets/icons/align-left.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-left.svg?");

/***/ }),

/***/ "./assets/icons/align-right.svg":
/*!**************************************!*\
  !*** ./assets/icons/align-right.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-right.svg?");

/***/ }),

/***/ "./assets/icons/background.svg":
/*!*************************************!*\
  !*** ./assets/icons/background.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <g class=\\\"ql-fill ql-color-label\\\"> <polygon points=\\\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\\\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\\\"6.817 5 6 5 6 6 6.38 6 6.817 5\\\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\\\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\\\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\\\"4.63 10 4 10 4 11 4.192 11 4.63 10\\\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\\\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\\\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\\\"12 6.868 12 6 11.62 6 12 6.868\\\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\\\"12.933 9 13 9 13 8 12.495 8 12.933 9\\\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\\\"5.5 13 9 5 12.5 13\\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/background.svg?");

/***/ }),

/***/ "./assets/icons/blockquote.svg":
/*!*************************************!*\
  !*** ./assets/icons/blockquote.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=\\\"ql-fill ql-stroke\\\" height=3 width=3 x=4 y=5></rect> <rect class=\\\"ql-fill ql-stroke\\\" height=3 width=3 x=11 y=5></rect> <path class=\\\"ql-even ql-fill ql-stroke\\\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\\\"ql-even ql-fill ql-stroke\\\" d=M14,8c0,4.031-3,5-3,5></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/blockquote.svg?");

/***/ }),

/***/ "./assets/icons/bold.svg":
/*!*******************************!*\
  !*** ./assets/icons/bold.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/bold.svg?");

/***/ }),

/***/ "./assets/icons/clean.svg":
/*!********************************!*\
  !*** ./assets/icons/clean.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg class=\\\"\\\" viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/clean.svg?");

/***/ }),

/***/ "./assets/icons/code.svg":
/*!*******************************!*\
  !*** ./assets/icons/code.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polyline class=\\\"ql-even ql-stroke\\\" points=\\\"5 7 3 9 5 11\\\"></polyline> <polyline class=\\\"ql-even ql-stroke\\\" points=\\\"13 7 15 9 13 11\\\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/code.svg?");

/***/ }),

/***/ "./assets/icons/color.svg":
/*!********************************!*\
  !*** ./assets/icons/color.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=\\\"ql-color-label ql-stroke ql-transparent\\\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\\\"5.5 11 9 3 12.5 11\\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/color.svg?");

/***/ }),

/***/ "./assets/icons/direction-ltr.svg":
/*!****************************************!*\
  !*** ./assets/icons/direction-ltr.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=\\\"ql-stroke ql-fill\\\" points=\\\"3 11 5 9 3 7 3 11\\\"></polygon> <line class=\\\"ql-stroke ql-fill\\\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/direction-ltr.svg?");

/***/ }),

/***/ "./assets/icons/direction-rtl.svg":
/*!****************************************!*\
  !*** ./assets/icons/direction-rtl.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=\\\"ql-stroke ql-fill\\\" points=\\\"15 12 13 10 15 8 15 12\\\"></polygon> <line class=\\\"ql-stroke ql-fill\\\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/direction-rtl.svg?");

/***/ }),

/***/ "./assets/icons/dropdown.svg":
/*!***********************************!*\
  !*** ./assets/icons/dropdown.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=ql-stroke points=\\\"7 11 9 13 11 11 7 11\\\"></polygon> <polygon class=ql-stroke points=\\\"7 7 9 5 11 7 7 7\\\"></polygon> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/dropdown.svg?");

/***/ }),

/***/ "./assets/icons/formula.svg":
/*!**********************************!*\
  !*** ./assets/icons/formula.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/formula.svg?");

/***/ }),

/***/ "./assets/icons/header-2.svg":
/*!***********************************!*\
  !*** ./assets/icons/header-2.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewBox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/header-2.svg?");

/***/ }),

/***/ "./assets/icons/header.svg":
/*!*********************************!*\
  !*** ./assets/icons/header.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewBox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/header.svg?");

/***/ }),

/***/ "./assets/icons/image.svg":
/*!********************************!*\
  !*** ./assets/icons/image.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\\\"ql-even ql-fill\\\" points=\\\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/image.svg?");

/***/ }),

/***/ "./assets/icons/indent.svg":
/*!*********************************!*\
  !*** ./assets/icons/indent.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\\\"ql-fill ql-stroke\\\" points=\\\"3 7 3 11 5 9 3 7\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/indent.svg?");

/***/ }),

/***/ "./assets/icons/italic.svg":
/*!*********************************!*\
  !*** ./assets/icons/italic.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/italic.svg?");

/***/ }),

/***/ "./assets/icons/link.svg":
/*!*******************************!*\
  !*** ./assets/icons/link.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\\\"ql-even ql-stroke\\\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\\\"ql-even ql-stroke\\\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/link.svg?");

/***/ }),

/***/ "./assets/icons/list-bullet.svg":
/*!**************************************!*\
  !*** ./assets/icons/list-bullet.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-bullet.svg?");

/***/ }),

/***/ "./assets/icons/list-check.svg":
/*!*************************************!*\
  !*** ./assets/icons/list-check.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg class=\\\"\\\" viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\\\"3 4 4 5 6 3\\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\\\"3 14 4 15 6 13\\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\\"3 9 4 10 6 8\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-check.svg?");

/***/ }),

/***/ "./assets/icons/list-ordered.svg":
/*!***************************************!*\
  !*** ./assets/icons/list-ordered.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\\\"ql-stroke ql-thin\\\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\\\"ql-stroke ql-thin\\\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\\\"ql-stroke ql-thin\\\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-ordered.svg?");

/***/ }),

/***/ "./assets/icons/outdent.svg":
/*!**********************************!*\
  !*** ./assets/icons/outdent.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\\"5 7 5 11 3 9 5 7\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/outdent.svg?");

/***/ }),

/***/ "./assets/icons/strike.svg":
/*!*********************************!*\
  !*** ./assets/icons/strike.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=\\\"ql-stroke ql-thin\\\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/strike.svg?");

/***/ }),

/***/ "./assets/icons/subscript.svg":
/*!************************************!*\
  !*** ./assets/icons/subscript.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/subscript.svg?");

/***/ }),

/***/ "./assets/icons/superscript.svg":
/*!**************************************!*\
  !*** ./assets/icons/superscript.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/superscript.svg?");

/***/ }),

/***/ "./assets/icons/table.svg":
/*!********************************!*\
  !*** ./assets/icons/table.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=2 width=3 x=5 y=5></rect> <rect class=ql-fill height=2 width=4 x=9 y=5></rect> <g class=\\\"ql-fill ql-transparent\\\"> <rect height=2 width=3 x=5 y=8></rect> <rect height=2 width=4 x=9 y=8></rect> <rect height=2 width=3 x=5 y=11></rect> <rect height=2 width=4 x=9 y=11></rect> </g> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/table.svg?");

/***/ }),

/***/ "./assets/icons/underline.svg":
/*!************************************!*\
  !*** ./assets/icons/underline.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/underline.svg?");

/***/ }),

/***/ "./assets/icons/video.svg":
/*!********************************!*\
  !*** ./assets/icons/video.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/video.svg?");

/***/ }),

/***/ "./blots/block.js":
/*!************************!*\
  !*** ./blots/block.js ***!
  \************************/
/*! exports provided: blockDelta, bubbleFormats, BlockEmbed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blockDelta\", function() { return blockDelta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubbleFormats\", function() { return bubbleFormats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlockEmbed\", function() { return BlockEmbed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Block; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline */ \"./blots/inline.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\n\n\n\nconst NEWLINE_LENGTH = 1;\n\nclass Block extends parchment__WEBPACK_IMPORTED_MODULE_2__[\"BlockBlot\"] {\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    this.cache = {};\n  }\n\n  delta() {\n    if (this.cache.delta == null) {\n      this.cache.delta = blockDelta(this);\n    }\n\n    return this.cache.delta;\n  }\n\n  deleteAt(index, length) {\n    super.deleteAt(index, length);\n    this.cache = {};\n  }\n\n  formatAt(index, length, name, value) {\n    if (length <= 0) return;\n\n    if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].BLOCK)) {\n      if (index + length === this.length()) {\n        this.format(name, value);\n      }\n    } else {\n      super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);\n    }\n\n    this.cache = {};\n  }\n\n  insertAt(index, value, def) {\n    if (def != null) {\n      super.insertAt(index, value, def);\n      this.cache = {};\n      return;\n    }\n\n    if (value.length === 0) return;\n    const lines = value.split('\\n');\n    const text = lines.shift();\n\n    if (text.length > 0) {\n      if (index < this.length() - 1 || this.children.tail == null) {\n        super.insertAt(Math.min(index, this.length() - 1), text);\n      } else {\n        this.children.tail.insertAt(this.children.tail.length(), text);\n      }\n\n      this.cache = {};\n    }\n\n    let block = this;\n    lines.reduce((lineIndex, line) => {\n      block = block.split(lineIndex, true);\n      block.insertAt(0, line);\n      return line.length;\n    }, index + text.length);\n  }\n\n  insertBefore(blot, ref) {\n    const {\n      head\n    } = this.children;\n    super.insertBefore(blot, ref);\n\n    if (head instanceof _break__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      head.remove();\n    }\n\n    this.cache = {};\n  }\n\n  length() {\n    if (this.cache.length == null) {\n      this.cache.length = super.length() + NEWLINE_LENGTH;\n    }\n\n    return this.cache.length;\n  }\n\n  moveChildren(target, ref) {\n    super.moveChildren(target, ref);\n    this.cache = {};\n  }\n\n  optimize(context) {\n    super.optimize(context);\n    this.cache = {};\n  }\n\n  path(index) {\n    return super.path(index, true);\n  }\n\n  removeChild(child) {\n    super.removeChild(child);\n    this.cache = {};\n  }\n\n  split(index, force = false) {\n    if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {\n      const clone = this.clone();\n\n      if (index === 0) {\n        this.parent.insertBefore(clone, this);\n        return this;\n      }\n\n      this.parent.insertBefore(clone, this.next);\n      return clone;\n    }\n\n    const next = super.split(index, force);\n    this.cache = {};\n    return next;\n  }\n\n}\n\nBlock.blotName = 'block';\nBlock.tagName = 'P';\nBlock.defaultChild = _break__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nBlock.allowedChildren = [_break__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _inline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], parchment__WEBPACK_IMPORTED_MODULE_2__[\"EmbedBlot\"], _text__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n\nclass BlockEmbed extends parchment__WEBPACK_IMPORTED_MODULE_2__[\"EmbedBlot\"] {\n  attach() {\n    super.attach();\n    this.attributes = new parchment__WEBPACK_IMPORTED_MODULE_2__[\"AttributorStore\"](this.domNode);\n  }\n\n  delta() {\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(this.value(), extend__WEBPACK_IMPORTED_MODULE_0___default()(this.formats(), this.attributes.values()));\n  }\n\n  format(name, value) {\n    const attribute = this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].BLOCK_ATTRIBUTE);\n\n    if (attribute != null) {\n      this.attributes.attribute(attribute, value);\n    }\n  }\n\n  formatAt(index, length, name, value) {\n    this.format(name, value);\n  }\n\n  insertAt(index, value, def) {\n    if (typeof value === 'string' && value.endsWith('\\n')) {\n      const block = this.scroll.create(Block.blotName);\n      this.parent.insertBefore(block, index === 0 ? this : this.next);\n      block.insertAt(0, value.slice(0, -1));\n    } else {\n      super.insertAt(index, value, def);\n    }\n  }\n\n}\n\nBlockEmbed.scope = parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].BLOCK_BLOT; // It is important for cursor behavior BlockEmbeds use tags that are block level elements\n\nfunction blockDelta(blot, filter = true) {\n  return blot.descendants(parchment__WEBPACK_IMPORTED_MODULE_2__[\"LeafBlot\"]).reduce((delta, leaf) => {\n    if (leaf.length() === 0) {\n      return delta;\n    }\n\n    return delta.insert(leaf.value(), bubbleFormats(leaf, {}, filter));\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a()).insert('\\n', bubbleFormats(blot));\n}\n\nfunction bubbleFormats(blot, formats = {}, filter = true) {\n  if (blot == null) return formats;\n\n  if (typeof blot.formats === 'function') {\n    formats = extend__WEBPACK_IMPORTED_MODULE_0___default()(formats, blot.formats());\n\n    if (filter) {\n      // exclude syntax highlighting from deltas and getFormat()\n      delete formats['code-token'];\n    }\n  }\n\n  if (blot.parent == null || blot.parent.statics.blotName === 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {\n    return formats;\n  }\n\n  return bubbleFormats(blot.parent, formats, filter);\n}\n\n\n\n//# sourceURL=webpack://Quill/./blots/block.js?");

/***/ }),

/***/ "./blots/break.js":
/*!************************!*\
  !*** ./blots/break.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass Break extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static value() {\n    return undefined;\n  }\n\n  optimize() {\n    if (this.prev || this.next) {\n      this.remove();\n    }\n  }\n\n  length() {\n    return 0;\n  }\n\n  value() {\n    return '';\n  }\n\n}\n\nBreak.blotName = 'break';\nBreak.tagName = 'BR';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Break);\n\n//# sourceURL=webpack://Quill/./blots/break.js?");

/***/ }),

/***/ "./blots/container.js":
/*!****************************!*\
  !*** ./blots/container.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass Container extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ContainerBlot\"] {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\n//# sourceURL=webpack://Quill/./blots/container.js?");

/***/ }),

/***/ "./blots/cursor.js":
/*!*************************!*\
  !*** ./blots/cursor.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\nclass Cursor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static value() {\n    return undefined;\n  }\n\n  constructor(scroll, domNode, selection) {\n    super(scroll, domNode);\n    this.selection = selection;\n    this.textNode = document.createTextNode(Cursor.CONTENTS);\n    this.domNode.appendChild(this.textNode);\n    this.savedLength = 0;\n  }\n\n  detach() {\n    // super.detach() will also clear domNode.__blot\n    if (this.parent != null) this.parent.removeChild(this);\n  }\n\n  format(name, value) {\n    if (this.savedLength !== 0) {\n      super.format(name, value);\n      return;\n    }\n\n    let target = this;\n    let index = 0;\n\n    while (target != null && target.statics.scope !== parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK_BLOT) {\n      index += target.offset(target.parent);\n      target = target.parent;\n    }\n\n    if (target != null) {\n      this.savedLength = Cursor.CONTENTS.length;\n      target.optimize();\n      target.formatAt(index, Cursor.CONTENTS.length, name, value);\n      this.savedLength = 0;\n    }\n  }\n\n  index(node, offset) {\n    if (node === this.textNode) return 0;\n    return super.index(node, offset);\n  }\n\n  length() {\n    return this.savedLength;\n  }\n\n  position() {\n    return [this.textNode, this.textNode.data.length];\n  }\n\n  remove() {\n    super.remove();\n    this.parent = null;\n  }\n\n  restore() {\n    if (this.selection.composing || this.parent == null) return null;\n    const range = this.selection.getNativeRange(); // Link format will insert text outside of anchor tag\n\n    while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {\n      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);\n    }\n\n    const prevTextBlot = this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ? this.prev : null;\n    const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;\n    const nextTextBlot = this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ? this.next : null;\n    const nextText = nextTextBlot ? nextTextBlot.text : '';\n    const {\n      textNode\n    } = this; // take text from inside this blot and reset it\n\n    const newText = textNode.data.split(Cursor.CONTENTS).join('');\n    textNode.data = Cursor.CONTENTS; // proactively merge TextBlots around cursor so that optimization\n    // doesn't lose the cursor.  the reason we are here in cursor.restore\n    // could be that the user clicked in prevTextBlot or nextTextBlot, or\n    // the user typed something.\n\n    let mergedTextBlot;\n\n    if (prevTextBlot) {\n      mergedTextBlot = prevTextBlot;\n\n      if (newText || nextTextBlot) {\n        prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);\n\n        if (nextTextBlot) {\n          nextTextBlot.remove();\n        }\n      }\n    } else if (nextTextBlot) {\n      mergedTextBlot = nextTextBlot;\n      nextTextBlot.insertAt(0, newText);\n    } else {\n      const newTextNode = document.createTextNode(newText);\n      mergedTextBlot = this.scroll.create(newTextNode);\n      this.parent.insertBefore(mergedTextBlot, this);\n    }\n\n    this.remove();\n\n    if (range) {\n      // calculate selection to restore\n      const remapOffset = (node, offset) => {\n        if (prevTextBlot && node === prevTextBlot.domNode) {\n          return offset;\n        }\n\n        if (node === textNode) {\n          return prevTextLength + offset - 1;\n        }\n\n        if (nextTextBlot && node === nextTextBlot.domNode) {\n          return prevTextLength + newText.length + offset;\n        }\n\n        return null;\n      };\n\n      const start = remapOffset(range.start.node, range.start.offset);\n      const end = remapOffset(range.end.node, range.end.offset);\n\n      if (start !== null && end !== null) {\n        return {\n          startNode: mergedTextBlot.domNode,\n          startOffset: start,\n          endNode: mergedTextBlot.domNode,\n          endOffset: end\n        };\n      }\n    }\n\n    return null;\n  }\n\n  update(mutations, context) {\n    if (mutations.some(mutation => {\n      return mutation.type === 'characterData' && mutation.target === this.textNode;\n    })) {\n      const range = this.restore();\n      if (range) context.range = range;\n    }\n  }\n\n  value() {\n    return '';\n  }\n\n}\n\nCursor.blotName = 'cursor';\nCursor.className = 'ql-cursor';\nCursor.tagName = 'span';\nCursor.CONTENTS = '\\uFEFF'; // Zero width no break space\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursor);\n\n//# sourceURL=webpack://Quill/./blots/cursor.js?");

/***/ }),

/***/ "./blots/embed.js":
/*!************************!*\
  !*** ./blots/embed.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\nconst GUARD_TEXT = '\\uFEFF';\n\nclass Embed extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  constructor(scroll, node) {\n    super(scroll, node);\n    this.contentNode = document.createElement('span');\n    this.contentNode.setAttribute('contenteditable', false);\n    Array.from(this.domNode.childNodes).forEach(childNode => {\n      this.contentNode.appendChild(childNode);\n    });\n    this.leftGuard = document.createTextNode(GUARD_TEXT);\n    this.rightGuard = document.createTextNode(GUARD_TEXT);\n    this.domNode.appendChild(this.leftGuard);\n    this.domNode.appendChild(this.contentNode);\n    this.domNode.appendChild(this.rightGuard);\n  }\n\n  index(node, offset) {\n    if (node === this.leftGuard) return 0;\n    if (node === this.rightGuard) return 1;\n    return super.index(node, offset);\n  }\n\n  restore(node) {\n    let range;\n    let textNode;\n    const text = node.data.split(GUARD_TEXT).join('');\n\n    if (node === this.leftGuard) {\n      if (this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        const prevLength = this.prev.length();\n        this.prev.insertAt(prevLength, text);\n        range = {\n          startNode: this.prev.domNode,\n          startOffset: prevLength + text.length\n        };\n      } else {\n        textNode = document.createTextNode(text);\n        this.parent.insertBefore(this.scroll.create(textNode), this);\n        range = {\n          startNode: textNode,\n          startOffset: text.length\n        };\n      }\n    } else if (node === this.rightGuard) {\n      if (this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this.next.insertAt(0, text);\n        range = {\n          startNode: this.next.domNode,\n          startOffset: text.length\n        };\n      } else {\n        textNode = document.createTextNode(text);\n        this.parent.insertBefore(this.scroll.create(textNode), this.next);\n        range = {\n          startNode: textNode,\n          startOffset: text.length\n        };\n      }\n    }\n\n    node.data = GUARD_TEXT;\n    return range;\n  }\n\n  update(mutations, context) {\n    mutations.forEach(mutation => {\n      if (mutation.type === 'characterData' && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {\n        const range = this.restore(mutation.target);\n        if (range) context.range = range;\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Embed);\n\n//# sourceURL=webpack://Quill/./blots/embed.js?");

/***/ }),

/***/ "./blots/inline.js":
/*!*************************!*\
  !*** ./blots/inline.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\n\nclass Inline extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"InlineBlot\"] {\n  static compare(self, other) {\n    const selfIndex = Inline.order.indexOf(self);\n    const otherIndex = Inline.order.indexOf(other);\n\n    if (selfIndex >= 0 || otherIndex >= 0) {\n      return selfIndex - otherIndex;\n    }\n\n    if (self === other) {\n      return 0;\n    }\n\n    if (self < other) {\n      return -1;\n    }\n\n    return 1;\n  }\n\n  formatAt(index, length, name, value) {\n    if (Inline.compare(this.statics.blotName, name) < 0 && this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOT)) {\n      const blot = this.isolate(index, length);\n\n      if (value) {\n        blot.wrap(name, value);\n      }\n    } else {\n      super.formatAt(index, length, name, value);\n    }\n  }\n\n  optimize(context) {\n    super.optimize(context);\n\n    if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {\n      const parent = this.parent.isolate(this.offset(), this.length());\n      this.moveChildren(parent);\n      parent.wrap(this);\n    }\n  }\n\n}\n\nInline.allowedChildren = [Inline, _break__WEBPACK_IMPORTED_MODULE_1__[\"default\"], parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]; // Lower index means deeper in the DOM tree, since not found (-1) is for embeds\n\nInline.order = ['cursor', 'inline', // Must be lower\n'link', // Chrome wants <a> to be lower\n'underline', 'strike', 'italic', 'bold', 'script', 'code' // Must be higher\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inline);\n\n//# sourceURL=webpack://Quill/./blots/inline.js?");

/***/ }),

/***/ "./blots/scroll.js":
/*!*************************!*\
  !*** ./blots/scroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ \"./blots/block.js\");\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ \"./blots/container.js\");\n\n\n\n\n\n\nfunction isLine(blot) {\n  return blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"default\"] || blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"];\n}\n\nclass Scroll extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ScrollBlot\"] {\n  constructor(registry, domNode, {\n    emitter\n  }) {\n    super(registry, domNode);\n    this.emitter = emitter;\n    this.batch = false;\n    this.optimize();\n    this.enable();\n    this.domNode.addEventListener('dragstart', e => this.handleDragStart(e));\n  }\n\n  batchStart() {\n    if (!Array.isArray(this.batch)) {\n      this.batch = [];\n    }\n  }\n\n  batchEnd() {\n    const mutations = this.batch;\n    this.batch = false;\n    this.update(mutations);\n  }\n\n  emitMount(blot) {\n    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BLOT_MOUNT, blot);\n  }\n\n  emitUnmount(blot) {\n    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BLOT_UNMOUNT, blot);\n  }\n\n  deleteAt(index, length) {\n    const [first, offset] = this.line(index);\n    const [last] = this.line(index + length);\n    super.deleteAt(index, length);\n\n    if (last != null && first !== last && offset > 0) {\n      if (first instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"] || last instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"]) {\n        this.optimize();\n        return;\n      }\n\n      const ref = last.children.head instanceof _break__WEBPACK_IMPORTED_MODULE_3__[\"default\"] ? null : last.children.head;\n      first.moveChildren(last, ref);\n      first.remove();\n    }\n\n    this.optimize();\n  }\n\n  enable(enabled = true) {\n    this.domNode.setAttribute('contenteditable', enabled);\n  }\n\n  formatAt(index, length, format, value) {\n    super.formatAt(index, length, format, value);\n    this.optimize();\n  }\n\n  handleDragStart(event) {\n    event.preventDefault();\n  }\n\n  insertAt(index, value, def) {\n    if (index >= this.length()) {\n      if (def == null || this.scroll.query(value, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK) == null) {\n        const blot = this.scroll.create(this.statics.defaultChild.blotName);\n        this.appendChild(blot);\n\n        if (def == null && value.endsWith('\\n')) {\n          blot.insertAt(0, value.slice(0, -1), def);\n        } else {\n          blot.insertAt(0, value, def);\n        }\n      } else {\n        const embed = this.scroll.create(value, def);\n        this.appendChild(embed);\n      }\n    } else {\n      super.insertAt(index, value, def);\n    }\n\n    this.optimize();\n  }\n\n  insertBefore(blot, ref) {\n    if (blot.statics.scope === parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE_BLOT) {\n      const wrapper = this.scroll.create(this.statics.defaultChild.blotName);\n      wrapper.appendChild(blot);\n      super.insertBefore(wrapper, ref);\n    } else {\n      super.insertBefore(blot, ref);\n    }\n  }\n\n  isEnabled() {\n    return this.domNode.getAttribute('contenteditable') === 'true';\n  }\n\n  leaf(index) {\n    return this.path(index).pop() || [null, -1];\n  }\n\n  line(index) {\n    if (index === this.length()) {\n      return this.line(index - 1);\n    }\n\n    return this.descendant(isLine, index);\n  }\n\n  lines(index = 0, length = Number.MAX_VALUE) {\n    const getLines = (blot, blotIndex, blotLength) => {\n      let lines = [];\n      let lengthLeft = blotLength;\n      blot.children.forEachAt(blotIndex, blotLength, (child, childIndex, childLength) => {\n        if (isLine(child)) {\n          lines.push(child);\n        } else if (child instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"ContainerBlot\"]) {\n          lines = lines.concat(getLines(child, childIndex, lengthLeft));\n        }\n\n        lengthLeft -= childLength;\n      });\n      return lines;\n    };\n\n    return getLines(this, index, length);\n  }\n\n  optimize(mutations = [], context = {}) {\n    if (this.batch) return;\n    super.optimize(mutations, context);\n\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, mutations, context);\n    }\n  }\n\n  path(index) {\n    return super.path(index).slice(1); // Exclude self\n  }\n\n  remove() {// Never remove self\n  }\n\n  update(mutations) {\n    if (this.batch) {\n      if (Array.isArray(mutations)) {\n        this.batch = this.batch.concat(mutations);\n      }\n\n      return;\n    }\n\n    let source = _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER;\n\n    if (typeof mutations === 'string') {\n      source = mutations;\n    }\n\n    if (!Array.isArray(mutations)) {\n      mutations = this.observer.takeRecords();\n    }\n\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BEFORE_UPDATE, source, mutations);\n    }\n\n    super.update(mutations.concat([])); // pass copy\n\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_UPDATE, source, mutations);\n    }\n  }\n\n}\n\nScroll.blotName = 'scroll';\nScroll.className = 'ql-editor';\nScroll.tagName = 'DIV';\nScroll.defaultChild = _block__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nScroll.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"], _container__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scroll);\n\n//# sourceURL=webpack://Quill/./blots/scroll.js?");

/***/ }),

/***/ "./blots/text.js":
/*!***********************!*\
  !*** ./blots/text.js ***!
  \***********************/
/*! exports provided: default, escapeText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeText\", function() { return escapeText; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass Text extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"TextBlot\"] {}\n\nfunction escapeText(text) {\n  return text.replace(/[&<>\"']/g, s => {\n    // https://lodash.com/docs#escape\n    const entityMap = {\n      '&': '&amp;',\n      '<': '&lt;',\n      '>': '&gt;',\n      '\"': '&quot;',\n      \"'\": '&#39;'\n    };\n    return entityMap[s];\n  });\n}\n\n\n\n//# sourceURL=webpack://Quill/./blots/text.js?");

/***/ }),

/***/ "./core.js":
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/quill */ \"./core/quill.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blots/container */ \"./blots/container.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blots/embed */ \"./blots/embed.js\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _blots_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blots/scroll */ \"./blots/scroll.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blots/text */ \"./blots/text.js\");\n/* harmony import */ var _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/clipboard */ \"./modules/clipboard.js\");\n/* harmony import */ var _modules_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/history */ \"./modules/history.js\");\n/* harmony import */ var _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/keyboard */ \"./modules/keyboard.js\");\n/* harmony import */ var _modules_uploader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/uploader */ \"./modules/uploader.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n_core_quill__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  'blots/block': _blots_block__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'blots/block/embed': _blots_block__WEBPACK_IMPORTED_MODULE_1__[\"BlockEmbed\"],\n  'blots/break': _blots_break__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'blots/container': _blots_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'blots/cursor': _blots_cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  'blots/embed': _blots_embed__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'blots/inline': _blots_inline__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  'blots/scroll': _blots_scroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  'blots/text': _blots_text__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  'modules/clipboard': _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  'modules/history': _modules_history__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  'modules/keyboard': _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  'modules/uploader': _modules_uploader__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_core_quill__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://Quill/./core.js?");

/***/ }),

/***/ "./core/editor.js":
/*!************************!*\
  !*** ./core/editor.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection */ \"./core/selection.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n\n\n\n\n\n\n\n\n\n\nconst ASCII = /^[ -~]*$/;\n\nclass Editor {\n  constructor(scroll) {\n    this.scroll = scroll;\n    this.delta = this.getDelta();\n  }\n\n  applyDelta(delta) {\n    let consumeNextNewline = false;\n    this.scroll.update();\n    let scrollLength = this.scroll.length();\n    this.scroll.batchStart();\n    const normalizedDelta = normalizeDelta(delta);\n    normalizedDelta.reduce((index, op) => {\n      const length = op.retain || op.delete || op.insert.length || 1;\n      let attributes = op.attributes || {};\n\n      if (op.insert != null) {\n        if (typeof op.insert === 'string') {\n          let text = op.insert;\n\n          if (text.endsWith('\\n') && consumeNextNewline) {\n            consumeNextNewline = false;\n            text = text.slice(0, -1);\n          }\n\n          if ((index >= scrollLength || this.scroll.descendant(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"BlockEmbed\"], index)[0]) && !text.endsWith('\\n')) {\n            consumeNextNewline = true;\n          }\n\n          this.scroll.insertAt(index, text);\n          const [line, offset] = this.scroll.line(index);\n          let formats = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(line));\n\n          if (line instanceof _blots_block__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n            const [leaf] = line.descendant(parchment__WEBPACK_IMPORTED_MODULE_4__[\"LeafBlot\"], offset);\n            formats = extend__WEBPACK_IMPORTED_MODULE_2___default()(formats, Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(leaf));\n          }\n\n          attributes = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(formats, attributes) || {};\n        } else if (typeof op.insert === 'object') {\n          const key = Object.keys(op.insert)[0]; // There should only be one key\n\n          if (key == null) return index;\n          this.scroll.insertAt(index, key, op.insert[key]);\n        }\n\n        scrollLength += length;\n      }\n\n      Object.keys(attributes).forEach(name => {\n        this.scroll.formatAt(index, length, name, attributes[name]);\n      });\n      return index + length;\n    }, 0);\n    normalizedDelta.reduce((index, op) => {\n      if (typeof op.delete === 'number') {\n        this.scroll.deleteAt(index, op.delete);\n        return index;\n      }\n\n      return index + (op.retain || op.insert.length || 1);\n    }, 0);\n    this.scroll.batchEnd();\n    this.scroll.optimize();\n    return this.update(normalizedDelta);\n  }\n\n  deleteText(index, length) {\n    this.scroll.deleteAt(index, length);\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).delete(length));\n  }\n\n  formatLine(index, length, formats = {}) {\n    this.scroll.update();\n    Object.keys(formats).forEach(format => {\n      this.scroll.lines(index, Math.max(length, 1)).forEach(line => {\n        line.format(format, formats[format]);\n      });\n    });\n    this.scroll.optimize();\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).retain(length, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats));\n    return this.update(delta);\n  }\n\n  formatText(index, length, formats = {}) {\n    Object.keys(formats).forEach(format => {\n      this.scroll.formatAt(index, length, format, formats[format]);\n    });\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).retain(length, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats));\n    return this.update(delta);\n  }\n\n  getContents(index, length) {\n    return this.delta.slice(index, index + length);\n  }\n\n  getDelta() {\n    return this.scroll.lines().reduce((delta, line) => {\n      return delta.concat(line.delta());\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());\n  }\n\n  getFormat(index, length = 0) {\n    let lines = [];\n    let leaves = [];\n\n    if (length === 0) {\n      this.scroll.path(index).forEach(path => {\n        const [blot] = path;\n\n        if (blot instanceof _blots_block__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n          lines.push(blot);\n        } else if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"LeafBlot\"]) {\n          leaves.push(blot);\n        }\n      });\n    } else {\n      lines = this.scroll.lines(index, length);\n      leaves = this.scroll.descendants(parchment__WEBPACK_IMPORTED_MODULE_4__[\"LeafBlot\"], index, length);\n    }\n\n    const formatsArr = [lines, leaves].map(blots => {\n      if (blots.length === 0) return {};\n      let formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(blots.shift());\n\n      while (Object.keys(formats).length > 0) {\n        const blot = blots.shift();\n        if (blot == null) return formats;\n        formats = combineFormats(Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(blot), formats);\n      }\n\n      return formats;\n    });\n    return extend__WEBPACK_IMPORTED_MODULE_2___default.a.apply(extend__WEBPACK_IMPORTED_MODULE_2___default.a, formatsArr);\n  }\n\n  getHTML(index, length) {\n    const [line, lineOffset] = this.scroll.line(index);\n\n    if (line.length() >= lineOffset + length) {\n      return convertHTML(line, lineOffset, length, true);\n    }\n\n    return convertHTML(this.scroll, index, length, true);\n  }\n\n  getText(index, length) {\n    return this.getContents(index, length).filter(op => typeof op.insert === 'string').map(op => op.insert).join('');\n  }\n\n  insertEmbed(index, embed, value) {\n    this.scroll.insertAt(index, embed, value);\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert({\n      [embed]: value\n    }));\n  }\n\n  insertText(index, text, formats = {}) {\n    text = text.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');\n    this.scroll.insertAt(index, text);\n    Object.keys(formats).forEach(format => {\n      this.scroll.formatAt(index, text.length, format, formats[format]);\n    });\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert(text, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats)));\n  }\n\n  isBlank() {\n    if (this.scroll.children.length === 0) return true;\n    if (this.scroll.children.length > 1) return false;\n    const block = this.scroll.children.head;\n    if (block.statics.blotName !== _blots_block__WEBPACK_IMPORTED_MODULE_7__[\"default\"].blotName) return false;\n    if (block.children.length > 1) return false;\n    return block.children.head instanceof _blots_break__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n  }\n\n  removeFormat(index, length) {\n    const text = this.getText(index, length);\n    const [line, offset] = this.scroll.line(index + length);\n    let suffixLength = 0;\n    let suffix = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a();\n\n    if (line != null) {\n      suffixLength = line.length() - offset;\n      suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\\n');\n    }\n\n    const contents = this.getContents(index, length + suffixLength);\n    const diff = contents.diff(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(text).concat(suffix));\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).concat(diff);\n    return this.applyDelta(delta);\n  }\n\n  update(change, mutations = [], selectionInfo = undefined) {\n    const oldDelta = this.delta;\n\n    if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && this.scroll.find(mutations[0].target)) {\n      // Optimization for character changes\n      const textBlot = this.scroll.find(mutations[0].target);\n      const formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(textBlot);\n      const index = textBlot.offset(this.scroll);\n      const oldValue = mutations[0].oldValue.replace(_blots_cursor__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONTENTS, '');\n      const oldText = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(oldValue);\n      const newText = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(textBlot.value());\n      const relativeSelectionInfo = selectionInfo && {\n        oldRange: shiftRange(selectionInfo.oldRange, -index),\n        newRange: shiftRange(selectionInfo.newRange, -index)\n      };\n      const diffDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).concat(oldText.diff(newText, relativeSelectionInfo));\n      change = diffDelta.reduce((delta, op) => {\n        if (op.insert) {\n          return delta.insert(op.insert, formats);\n        }\n\n        return delta.push(op);\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());\n      this.delta = oldDelta.compose(change);\n    } else {\n      this.delta = this.getDelta();\n\n      if (!change || !deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(oldDelta.compose(change), this.delta)) {\n        change = oldDelta.diff(this.delta, selectionInfo);\n      }\n    }\n\n    return change;\n  }\n\n}\n\nfunction convertListHTML(items, lastIndent, types) {\n  if (items.length === 0) {\n    const [endTag] = getListType(types.pop());\n\n    if (lastIndent <= 0) {\n      return \"</li></\".concat(endTag, \">\");\n    }\n\n    return \"</li></\".concat(endTag, \">\").concat(convertListHTML([], lastIndent - 1, types));\n  }\n\n  const [{\n    child,\n    offset,\n    length,\n    indent,\n    type\n  }, ...rest] = items;\n  const [tag, attribute] = getListType(type);\n\n  if (indent > lastIndent) {\n    types.push(type);\n\n    if (indent === lastIndent + 1) {\n      return \"<\".concat(tag, \"><li\").concat(attribute, \">\").concat(convertHTML(child, offset, length)).concat(convertListHTML(rest, indent, types));\n    }\n\n    return \"<\".concat(tag, \"><li>\").concat(convertListHTML(items, lastIndent + 1, types));\n  }\n\n  const previousType = types[types.length - 1];\n\n  if (indent === lastIndent && type === previousType) {\n    return \"</li><li\".concat(attribute, \">\").concat(convertHTML(child, offset, length)).concat(convertListHTML(rest, indent, types));\n  }\n\n  const [endTag] = getListType(types.pop());\n  return \"</li></\".concat(endTag, \">\").concat(convertListHTML(items, lastIndent - 1, types));\n}\n\nfunction convertHTML(blot, index, length, isRoot = false) {\n  if (typeof blot.html === 'function') {\n    return blot.html(index, length);\n  }\n\n  if (blot instanceof _blots_text__WEBPACK_IMPORTED_MODULE_9__[\"default\"]) {\n    return Object(_blots_text__WEBPACK_IMPORTED_MODULE_9__[\"escapeText\"])(blot.value().slice(index, index + length));\n  }\n\n  if (blot.children) {\n    // TODO fix API\n    if (blot.statics.blotName === 'list-container') {\n      const items = [];\n      blot.children.forEachAt(index, length, (child, offset, childLength) => {\n        const formats = child.formats();\n        items.push({\n          child,\n          offset,\n          length: childLength,\n          indent: formats.indent || 0,\n          type: formats.list\n        });\n      });\n      return convertListHTML(items, -1, []);\n    }\n\n    const parts = [];\n    blot.children.forEachAt(index, length, (child, offset, childLength) => {\n      parts.push(convertHTML(child, offset, childLength));\n    });\n\n    if (isRoot || blot.statics.blotName === 'list') {\n      return parts.join('');\n    }\n\n    const {\n      outerHTML,\n      innerHTML\n    } = blot.domNode;\n    const [start, end] = outerHTML.split(\">\".concat(innerHTML, \"<\")); // TODO cleanup\n\n    if (start === '<table') {\n      return \"<table style=\\\"border: 1px solid #000;\\\">\".concat(parts.join(''), \"<\").concat(end);\n    }\n\n    return \"\".concat(start, \">\").concat(parts.join(''), \"<\").concat(end);\n  }\n\n  return blot.domNode.outerHTML;\n}\n\nfunction combineFormats(formats, combined) {\n  return Object.keys(combined).reduce((merged, name) => {\n    if (formats[name] == null) return merged;\n\n    if (combined[name] === formats[name]) {\n      merged[name] = combined[name];\n    } else if (Array.isArray(combined[name])) {\n      if (combined[name].indexOf(formats[name]) < 0) {\n        merged[name] = combined[name].concat([formats[name]]);\n      }\n    } else {\n      merged[name] = [combined[name], formats[name]];\n    }\n\n    return merged;\n  }, {});\n}\n\nfunction getListType(type) {\n  const tag = type === 'ordered' ? 'ol' : 'ul';\n\n  switch (type) {\n    case 'checked':\n      return [tag, ' data-list=\"checked\"'];\n\n    case 'unchecked':\n      return [tag, ' data-list=\"unchecked\"'];\n\n    default:\n      return [tag, ''];\n  }\n}\n\nfunction normalizeDelta(delta) {\n  return delta.reduce((normalizedDelta, op) => {\n    if (typeof op.insert === 'string') {\n      const text = op.insert.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');\n      return normalizedDelta.insert(text, op.attributes);\n    }\n\n    return normalizedDelta.push(op);\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());\n}\n\nfunction shiftRange({\n  index,\n  length\n}, amount) {\n  return new _selection__WEBPACK_IMPORTED_MODULE_5__[\"Range\"](index + amount, length);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor);\n\n//# sourceURL=webpack://Quill/./core/editor.js?");

/***/ }),

/***/ "./core/emitter.js":
/*!*************************!*\
  !*** ./core/emitter.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ \"./node_modules/eventemitter3/index.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instances */ \"./core/instances.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('quill:events');\nconst EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];\nEVENTS.forEach(eventName => {\n  document.addEventListener(eventName, (...args) => {\n    Array.from(document.querySelectorAll('.ql-container')).forEach(node => {\n      const quill = _instances__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(node);\n\n      if (quill && quill.emitter) {\n        quill.emitter.handleDOM(...args);\n      }\n    });\n  });\n});\n\nclass Emitter extends eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor() {\n    super();\n    this.listeners = {};\n    this.on('error', debug.error);\n  }\n\n  emit(...args) {\n    debug.log.call(debug, ...args);\n    super.emit(...args);\n  }\n\n  handleDOM(event, ...args) {\n    (this.listeners[event.type] || []).forEach(({\n      node,\n      handler\n    }) => {\n      if (event.target === node || node.contains(event.target)) {\n        handler(event, ...args);\n      }\n    });\n  }\n\n  listenDOM(eventName, node, handler) {\n    if (!this.listeners[eventName]) {\n      this.listeners[eventName] = [];\n    }\n\n    this.listeners[eventName].push({\n      node,\n      handler\n    });\n  }\n\n}\n\nEmitter.events = {\n  EDITOR_CHANGE: 'editor-change',\n  SCROLL_BEFORE_UPDATE: 'scroll-before-update',\n  SCROLL_BLOT_MOUNT: 'scroll-blot-mount',\n  SCROLL_BLOT_UNMOUNT: 'scroll-blot-unmount',\n  SCROLL_OPTIMIZE: 'scroll-optimize',\n  SCROLL_UPDATE: 'scroll-update',\n  SELECTION_CHANGE: 'selection-change',\n  TEXT_CHANGE: 'text-change'\n};\nEmitter.sources = {\n  API: 'api',\n  SILENT: 'silent',\n  USER: 'user'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Emitter);\n\n//# sourceURL=webpack://Quill/./core/emitter.js?");

/***/ }),

/***/ "./core/instances.js":
/*!***************************!*\
  !*** ./core/instances.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new WeakMap());\n\n//# sourceURL=webpack://Quill/./core/instances.js?");

/***/ }),

/***/ "./core/logger.js":
/*!************************!*\
  !*** ./core/logger.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\nconst levels = ['error', 'warn', 'log', 'info'];\nlet level = 'warn';\n\nfunction debug(method, ...args) {\n  if (levels.indexOf(method) <= levels.indexOf(level)) {\n    console[method](...args); // eslint-disable-line no-console\n  }\n}\n\nfunction namespace(ns) {\n  return levels.reduce((logger, method) => {\n    logger[method] = debug.bind(console, method, ns);\n    return logger;\n  }, {});\n}\n\nnamespace.level = newLevel => {\n  level = newLevel;\n};\n\ndebug.level = namespace.level;\n/* harmony default export */ __webpack_exports__[\"default\"] = (namespace);\n\n//# sourceURL=webpack://Quill/./core/logger.js?");

/***/ }),

/***/ "./core/module.js":
/*!************************!*\
  !*** ./core/module.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\nclass Module {\n  constructor(quill, options = {}) {\n    this.quill = quill;\n    this.options = options;\n  }\n\n}\n\nModule.DEFAULTS = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack://Quill/./core/module.js?");

/***/ }),

/***/ "./core/quill.js":
/*!***********************!*\
  !*** ./core/quill.js ***!
  \***********************/
/*! exports provided: globalRegistry, expandConfig, overload, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalRegistry\", function() { return globalRegistry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expandConfig\", function() { return expandConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"overload\", function() { return overload; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quill; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ \"./core/editor.js\");\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter */ \"./core/emitter.js\");\n/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module */ \"./core/module.js\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection */ \"./core/selection.js\");\n/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instances */ \"./core/instances.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme */ \"./core/theme.js\");\n\n\n\n\n\n\n\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('quill');\nconst globalRegistry = new parchment__WEBPACK_IMPORTED_MODULE_1__[\"Registry\"]();\nparchment__WEBPACK_IMPORTED_MODULE_1__[\"ParentBlot\"].uiClass = 'ql-ui';\n\nclass Quill {\n  static debug(limit) {\n    if (limit === true) {\n      limit = 'log';\n    }\n\n    _logger__WEBPACK_IMPORTED_MODULE_8__[\"default\"].level(limit);\n  }\n\n  static find(node) {\n    return _instances__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(node) || globalRegistry.find(node);\n  }\n\n  static import(name) {\n    if (this.imports[name] == null) {\n      debug.error(\"Cannot import \".concat(name, \". Are you sure it was registered?\"));\n    }\n\n    return this.imports[name];\n  }\n\n  static register(path, target, overwrite = false) {\n    if (typeof path !== 'string') {\n      const name = path.attrName || path.blotName;\n\n      if (typeof name === 'string') {\n        // register(Blot | Attributor, overwrite)\n        this.register(\"formats/\".concat(name), path, target);\n      } else {\n        Object.keys(path).forEach(key => {\n          this.register(key, path[key], target);\n        });\n      }\n    } else {\n      if (this.imports[path] != null && !overwrite) {\n        debug.warn(\"Overwriting \".concat(path, \" with\"), target);\n      }\n\n      this.imports[path] = target;\n\n      if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {\n        globalRegistry.register(target);\n      }\n\n      if (typeof target.register === 'function') {\n        target.register(globalRegistry);\n      }\n    }\n  }\n\n  constructor(container, options = {}) {\n    this.options = expandConfig(container, options);\n    this.container = this.options.container;\n\n    if (this.container == null) {\n      return debug.error('Invalid Quill container', container);\n    }\n\n    if (this.options.debug) {\n      Quill.debug(this.options.debug);\n    }\n\n    const html = this.container.innerHTML.trim();\n    this.container.classList.add('ql-container');\n    this.container.innerHTML = '';\n    _instances__WEBPACK_IMPORTED_MODULE_7__[\"default\"].set(this.container, this);\n    this.root = this.addContainer('ql-editor');\n    this.root.classList.add('ql-blank');\n    this.root.setAttribute('data-gramm', false);\n    this.scrollingContainer = this.options.scrollingContainer || this.root;\n    this.emitter = new _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    const ScrollBlot = this.options.registry.query(parchment__WEBPACK_IMPORTED_MODULE_1__[\"ScrollBlot\"].blotName);\n    this.scroll = new ScrollBlot(this.options.registry, this.root, {\n      emitter: this.emitter\n    });\n    this.editor = new _editor__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scroll);\n    this.selection = new _selection__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.scroll, this.emitter);\n    this.theme = new this.options.theme(this, this.options); // eslint-disable-line new-cap\n\n    this.keyboard = this.theme.addModule('keyboard');\n    this.clipboard = this.theme.addModule('clipboard');\n    this.history = this.theme.addModule('history');\n    this.uploader = this.theme.addModule('uploader');\n    this.theme.init();\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.EDITOR_CHANGE, type => {\n      if (type === _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.TEXT_CHANGE) {\n        this.root.classList.toggle('ql-blank', this.editor.isBlank());\n      }\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.SCROLL_UPDATE, (source, mutations) => {\n      const oldRange = this.selection.lastRange;\n      const [newRange] = this.selection.getRange();\n      const selectionInfo = oldRange && newRange ? {\n        oldRange,\n        newRange\n      } : undefined;\n      modify.call(this, () => this.editor.update(null, mutations, selectionInfo), source);\n    });\n    const contents = this.clipboard.convert({\n      html: \"\".concat(html, \"<p><br></p>\"),\n      text: '\\n'\n    });\n    this.setContents(contents);\n    this.history.clear();\n\n    if (this.options.placeholder) {\n      this.root.setAttribute('data-placeholder', this.options.placeholder);\n    }\n\n    if (this.options.readOnly) {\n      this.disable();\n    }\n\n    this.allowReadOnlyEdits = false;\n  }\n\n  addContainer(container, refNode = null) {\n    if (typeof container === 'string') {\n      const className = container;\n      container = document.createElement('div');\n      container.classList.add(className);\n    }\n\n    this.container.insertBefore(container, refNode);\n    return container;\n  }\n\n  blur() {\n    this.selection.setRange(null);\n  }\n\n  deleteText(index, length, source) {\n    [index, length,, source] = overload(index, length, source);\n    return modify.call(this, () => {\n      return this.editor.deleteText(index, length);\n    }, source, index, -1 * length);\n  }\n\n  disable() {\n    this.enable(false);\n  }\n\n  editReadOnly(modifier) {\n    this.allowReadOnlyEdits = true;\n    const value = modifier();\n    this.allowReadOnlyEdits = false;\n    return value;\n  }\n\n  enable(enabled = true) {\n    this.scroll.enable(enabled);\n    this.container.classList.toggle('ql-disabled', !enabled);\n  }\n\n  focus() {\n    const {\n      scrollTop\n    } = this.scrollingContainer;\n    this.selection.focus();\n    this.scrollingContainer.scrollTop = scrollTop;\n    this.scrollIntoView();\n  }\n\n  format(name, value, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    return modify.call(this, () => {\n      const range = this.getSelection(true);\n      let change = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a();\n      if (range == null) return change;\n\n      if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].BLOCK)) {\n        change = this.editor.formatLine(range.index, range.length, {\n          [name]: value\n        });\n      } else if (range.length === 0) {\n        this.selection.format(name, value);\n        return change;\n      } else {\n        change = this.editor.formatText(range.index, range.length, {\n          [name]: value\n        });\n      }\n\n      this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n      return change;\n    }, source);\n  }\n\n  formatLine(index, length, name, value, source) {\n    let formats; // eslint-disable-next-line prefer-const\n\n    [index, length, formats, source] = overload(index, length, name, value, source);\n    return modify.call(this, () => {\n      return this.editor.formatLine(index, length, formats);\n    }, source, index, 0);\n  }\n\n  formatText(index, length, name, value, source) {\n    let formats; // eslint-disable-next-line prefer-const\n\n    [index, length, formats, source] = overload(index, length, name, value, source);\n    return modify.call(this, () => {\n      return this.editor.formatText(index, length, formats);\n    }, source, index, 0);\n  }\n\n  getBounds(index, length = 0) {\n    let bounds;\n\n    if (typeof index === 'number') {\n      bounds = this.selection.getBounds(index, length);\n    } else {\n      bounds = this.selection.getBounds(index.index, index.length);\n    }\n\n    const containerBounds = this.container.getBoundingClientRect();\n    return {\n      bottom: bounds.bottom - containerBounds.top,\n      height: bounds.height,\n      left: bounds.left - containerBounds.left,\n      right: bounds.right - containerBounds.left,\n      top: bounds.top - containerBounds.top,\n      width: bounds.width\n    };\n  }\n\n  getContents(index = 0, length = this.getLength() - index) {\n    [index, length] = overload(index, length);\n    return this.editor.getContents(index, length);\n  }\n\n  getFormat(index = this.getSelection(true), length = 0) {\n    if (typeof index === 'number') {\n      return this.editor.getFormat(index, length);\n    }\n\n    return this.editor.getFormat(index.index, index.length);\n  }\n\n  getIndex(blot) {\n    return blot.offset(this.scroll);\n  }\n\n  getLength() {\n    return this.scroll.length();\n  }\n\n  getLeaf(index) {\n    return this.scroll.leaf(index);\n  }\n\n  getLine(index) {\n    return this.scroll.line(index);\n  }\n\n  getLines(index = 0, length = Number.MAX_VALUE) {\n    if (typeof index !== 'number') {\n      return this.scroll.lines(index.index, index.length);\n    }\n\n    return this.scroll.lines(index, length);\n  }\n\n  getModule(name) {\n    return this.theme.modules[name];\n  }\n\n  getSelection(focus = false) {\n    if (focus) this.focus();\n    this.update(); // Make sure we access getRange with editor in consistent state\n\n    return this.selection.getRange()[0];\n  }\n\n  getSemanticHTML(index = 0, length = this.getLength() - index) {\n    [index, length] = overload(index, length);\n    return this.editor.getHTML(index, length);\n  }\n\n  getText(index = 0, length = this.getLength() - index) {\n    [index, length] = overload(index, length);\n    return this.editor.getText(index, length);\n  }\n\n  hasFocus() {\n    return this.selection.hasFocus();\n  }\n\n  insertEmbed(index, embed, value, source = Quill.sources.API) {\n    return modify.call(this, () => {\n      return this.editor.insertEmbed(index, embed, value);\n    }, source, index);\n  }\n\n  insertText(index, text, name, value, source) {\n    let formats; // eslint-disable-next-line prefer-const\n\n    [index,, formats, source] = overload(index, 0, name, value, source);\n    return modify.call(this, () => {\n      return this.editor.insertText(index, text, formats);\n    }, source, index, text.length);\n  }\n\n  isEnabled() {\n    return this.scroll.isEnabled();\n  }\n\n  off(...args) {\n    return this.emitter.off(...args);\n  }\n\n  on(...args) {\n    return this.emitter.on(...args);\n  }\n\n  once(...args) {\n    return this.emitter.once(...args);\n  }\n\n  removeFormat(index, length, source) {\n    [index, length,, source] = overload(index, length, source);\n    return modify.call(this, () => {\n      return this.editor.removeFormat(index, length);\n    }, source, index);\n  }\n\n  scrollIntoView() {\n    this.selection.scrollIntoView(this.scrollingContainer);\n  }\n\n  setContents(delta, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    return modify.call(this, () => {\n      delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a(delta);\n      const length = this.getLength();\n      const deleted = this.editor.deleteText(0, length);\n      const applied = this.editor.applyDelta(delta);\n      const lastOp = applied.ops[applied.ops.length - 1];\n\n      if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\\n') {\n        this.editor.deleteText(this.getLength() - 1, 1);\n        applied.delete(1);\n      }\n\n      return deleted.compose(applied);\n    }, source);\n  }\n\n  setSelection(index, length, source) {\n    if (index == null) {\n      this.selection.setRange(null, length || Quill.sources.API);\n    } else {\n      [index, length,, source] = overload(index, length, source);\n      this.selection.setRange(new _selection__WEBPACK_IMPORTED_MODULE_6__[\"Range\"](Math.max(0, index), length), source);\n\n      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT) {\n        this.selection.scrollIntoView(this.scrollingContainer);\n      }\n    }\n  }\n\n  setText(text, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().insert(text);\n    return this.setContents(delta, source);\n  }\n\n  update(source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER) {\n    const change = this.scroll.update(source); // Will update selection before selection.update() does if text changes\n\n    this.selection.update(source); // TODO this is usually undefined\n\n    return change;\n  }\n\n  updateContents(delta, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    return modify.call(this, () => {\n      delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a(delta);\n      return this.editor.applyDelta(delta, source);\n    }, source, true);\n  }\n\n}\n\nQuill.DEFAULTS = {\n  bounds: null,\n  modules: {},\n  placeholder: '',\n  readOnly: false,\n  registry: globalRegistry,\n  scrollingContainer: null,\n  theme: 'default'\n};\nQuill.events = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events;\nQuill.sources = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources; // eslint-disable-next-line no-undef\n\nQuill.version =  false ? undefined : \"2.0.0-dev.3\";\nQuill.imports = {\n  delta: quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a,\n  parchment: parchment__WEBPACK_IMPORTED_MODULE_1__,\n  'core/module': _module__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'core/theme': _theme__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n};\n\nfunction expandConfig(container, userConfig) {\n  userConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {\n    container,\n    modules: {\n      clipboard: true,\n      keyboard: true,\n      history: true,\n      uploader: true\n    }\n  }, userConfig);\n\n  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {\n    userConfig.theme = _theme__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\n  } else {\n    userConfig.theme = Quill.import(\"themes/\".concat(userConfig.theme));\n\n    if (userConfig.theme == null) {\n      throw new Error(\"Invalid theme \".concat(userConfig.theme, \". Did you register it?\"));\n    }\n  }\n\n  const themeConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {}, userConfig.theme.DEFAULTS);\n  [themeConfig, userConfig].forEach(config => {\n    config.modules = config.modules || {};\n    Object.keys(config.modules).forEach(module => {\n      if (config.modules[module] === true) {\n        config.modules[module] = {};\n      }\n    });\n  });\n  const moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));\n  const moduleConfig = moduleNames.reduce((config, name) => {\n    const moduleClass = Quill.import(\"modules/\".concat(name));\n\n    if (moduleClass == null) {\n      debug.error(\"Cannot load \".concat(name, \" module. Are you sure you registered it?\"));\n    } else {\n      config[name] = moduleClass.DEFAULTS || {};\n    }\n\n    return config;\n  }, {}); // Special case toolbar shorthand\n\n  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {\n    userConfig.modules.toolbar = {\n      container: userConfig.modules.toolbar\n    };\n  }\n\n  userConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {}, Quill.DEFAULTS, {\n    modules: moduleConfig\n  }, themeConfig, userConfig);\n  ['bounds', 'container', 'scrollingContainer'].forEach(key => {\n    if (typeof userConfig[key] === 'string') {\n      userConfig[key] = document.querySelector(userConfig[key]);\n    }\n  });\n  userConfig.modules = Object.keys(userConfig.modules).reduce((config, name) => {\n    if (userConfig.modules[name]) {\n      config[name] = userConfig.modules[name];\n    }\n\n    return config;\n  }, {});\n  return userConfig;\n} // Handle selection preservation and TEXT_CHANGE emission\n// common to modification APIs\n\n\nfunction modify(modifier, source, index, shift) {\n  if (!this.isEnabled() && source === _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER && !this.allowReadOnlyEdits) {\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a();\n  }\n\n  let range = index == null ? null : this.getSelection();\n  const oldDelta = this.editor.delta;\n  const change = modifier();\n\n  if (range != null) {\n    if (index === true) {\n      index = range.index; // eslint-disable-line prefer-destructuring\n    }\n\n    if (shift == null) {\n      range = shiftRange(range, change, source);\n    } else if (shift !== 0) {\n      range = shiftRange(range, index, shift, source);\n    }\n\n    this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n  }\n\n  if (change.length() > 0) {\n    const args = [_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.TEXT_CHANGE, change, oldDelta, source];\n    this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.EDITOR_CHANGE, ...args);\n\n    if (source !== _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT) {\n      this.emitter.emit(...args);\n    }\n  }\n\n  return change;\n}\n\nfunction overload(index, length, name, value, source) {\n  let formats = {};\n\n  if (typeof index.index === 'number' && typeof index.length === 'number') {\n    // Allow for throwaway end (used by insertText/insertEmbed)\n    if (typeof length !== 'number') {\n      source = value;\n      value = name;\n      name = length;\n      length = index.length; // eslint-disable-line prefer-destructuring\n\n      index = index.index; // eslint-disable-line prefer-destructuring\n    } else {\n      length = index.length; // eslint-disable-line prefer-destructuring\n\n      index = index.index; // eslint-disable-line prefer-destructuring\n    }\n  } else if (typeof length !== 'number') {\n    source = value;\n    value = name;\n    name = length;\n    length = 0;\n  } // Handle format being object, two format name/value strings or excluded\n\n\n  if (typeof name === 'object') {\n    formats = name;\n    source = value;\n  } else if (typeof name === 'string') {\n    if (value != null) {\n      formats[name] = value;\n    } else {\n      source = name;\n    }\n  } // Handle optional source\n\n\n  source = source || _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API;\n  return [index, length, formats, source];\n}\n\nfunction shiftRange(range, index, length, source) {\n  if (range == null) return null;\n  let start;\n  let end;\n\n  if (index instanceof quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a) {\n    [start, end] = [range.index, range.index + range.length].map(pos => index.transformPosition(pos, source !== _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER));\n  } else {\n    [start, end] = [range.index, range.index + range.length].map(pos => {\n      if (pos < index || pos === index && source === _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER) return pos;\n\n      if (length >= 0) {\n        return pos + length;\n      }\n\n      return Math.max(index, pos + length);\n    });\n  }\n\n  return new _selection__WEBPACK_IMPORTED_MODULE_6__[\"Range\"](start, end - start);\n}\n\n\n\n//# sourceURL=webpack://Quill/./core/quill.js?");

/***/ }),

/***/ "./core/selection.js":
/*!***************************!*\
  !*** ./core/selection.js ***!
  \***************************/
/*! exports provided: Range, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Range\", function() { return Range; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Selection; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ \"./core/emitter.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\n\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('quill:selection');\n\nclass Range {\n  constructor(index, length = 0) {\n    this.index = index;\n    this.length = length;\n  }\n\n}\n\nclass Selection {\n  constructor(scroll, emitter) {\n    this.emitter = emitter;\n    this.scroll = scroll;\n    this.composing = false;\n    this.mouseDown = false;\n    this.root = this.scroll.domNode;\n    this.cursor = this.scroll.create('cursor', this); // savedRange is last non-null range\n\n    this.savedRange = new Range(0, 0);\n    this.lastRange = this.savedRange;\n    this.lastNative = null;\n    this.handleComposition();\n    this.handleDragging();\n    this.emitter.listenDOM('selectionchange', document, () => {\n      if (!this.mouseDown && !this.composing) {\n        setTimeout(this.update.bind(this, _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER), 1);\n      }\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_BEFORE_UPDATE, () => {\n      if (!this.hasFocus()) return;\n      const native = this.getNativeRange();\n      if (native == null) return;\n      if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle\n\n      this.emitter.once(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_UPDATE, () => {\n        try {\n          if (this.root.contains(native.start.node) && this.root.contains(native.end.node)) {\n            this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);\n          }\n\n          this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n        } catch (ignored) {// ignore\n        }\n      });\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_OPTIMIZE, (mutations, context) => {\n      if (context.range) {\n        const {\n          startNode,\n          startOffset,\n          endNode,\n          endOffset\n        } = context.range;\n        this.setNativeRange(startNode, startOffset, endNode, endOffset);\n        this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n      }\n    });\n    this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n  }\n\n  handleComposition() {\n    this.root.addEventListener('compositionstart', () => {\n      this.composing = true;\n      this.scroll.batchStart();\n    });\n    this.root.addEventListener('compositionend', () => {\n      this.scroll.batchEnd();\n      this.composing = false;\n\n      if (this.cursor.parent) {\n        const range = this.cursor.restore();\n        if (!range) return;\n        setTimeout(() => {\n          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);\n        }, 1);\n      }\n    });\n  }\n\n  handleDragging() {\n    this.emitter.listenDOM('mousedown', document.body, () => {\n      this.mouseDown = true;\n    });\n    this.emitter.listenDOM('mouseup', document.body, () => {\n      this.mouseDown = false;\n      this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER);\n    });\n  }\n\n  focus() {\n    if (this.hasFocus()) return;\n    this.root.focus();\n    this.setRange(this.savedRange);\n  }\n\n  format(format, value) {\n    this.scroll.update();\n    const nativeRange = this.getNativeRange();\n    if (nativeRange == null || !nativeRange.native.collapsed || this.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK)) return;\n\n    if (nativeRange.start.node !== this.cursor.textNode) {\n      const blot = this.scroll.find(nativeRange.start.node, false);\n      if (blot == null) return; // TODO Give blot ability to not split\n\n      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"LeafBlot\"]) {\n        const after = blot.split(nativeRange.start.offset);\n        blot.parent.insertBefore(this.cursor, after);\n      } else {\n        blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen\n      }\n\n      this.cursor.attach();\n    }\n\n    this.cursor.format(format, value);\n    this.scroll.optimize();\n    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);\n    this.update();\n  }\n\n  getBounds(index, length = 0) {\n    const scrollLength = this.scroll.length();\n    index = Math.min(index, scrollLength - 1);\n    length = Math.min(index + length, scrollLength - 1) - index;\n    let node;\n    let [leaf, offset] = this.scroll.leaf(index);\n    if (leaf == null) return null;\n    [node, offset] = leaf.position(offset, true);\n    const range = document.createRange();\n\n    if (length > 0) {\n      range.setStart(node, offset);\n      [leaf, offset] = this.scroll.leaf(index + length);\n      if (leaf == null) return null;\n      [node, offset] = leaf.position(offset, true);\n      range.setEnd(node, offset);\n      return range.getBoundingClientRect();\n    }\n\n    let side = 'left';\n    let rect;\n\n    if (node instanceof Text) {\n      if (offset < node.data.length) {\n        range.setStart(node, offset);\n        range.setEnd(node, offset + 1);\n      } else {\n        range.setStart(node, offset - 1);\n        range.setEnd(node, offset);\n        side = 'right';\n      }\n\n      rect = range.getBoundingClientRect();\n    } else {\n      rect = leaf.domNode.getBoundingClientRect();\n      if (offset > 0) side = 'right';\n    }\n\n    return {\n      bottom: rect.top + rect.height,\n      height: rect.height,\n      left: rect[side],\n      right: rect[side],\n      top: rect.top,\n      width: 0\n    };\n  }\n\n  getNativeRange() {\n    const selection = document.getSelection();\n    if (selection == null || selection.rangeCount <= 0) return null;\n    const nativeRange = selection.getRangeAt(0);\n    if (nativeRange == null) return null;\n    const range = this.normalizeNative(nativeRange);\n    debug.info('getNativeRange', range);\n    return range;\n  }\n\n  getRange() {\n    const normalized = this.getNativeRange();\n    if (normalized == null) return [null, null];\n    const range = this.normalizedToRange(normalized);\n    return [range, normalized];\n  }\n\n  hasFocus() {\n    return document.activeElement === this.root || contains(this.root, document.activeElement);\n  }\n\n  normalizedToRange(range) {\n    const positions = [[range.start.node, range.start.offset]];\n\n    if (!range.native.collapsed) {\n      positions.push([range.end.node, range.end.offset]);\n    }\n\n    const indexes = positions.map(position => {\n      const [node, offset] = position;\n      const blot = this.scroll.find(node, true);\n      const index = blot.offset(this.scroll);\n\n      if (offset === 0) {\n        return index;\n      }\n\n      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"LeafBlot\"]) {\n        return index + blot.index(node, offset);\n      }\n\n      return index + blot.length();\n    });\n    const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);\n    const start = Math.min(end, ...indexes);\n    return new Range(start, end - start);\n  }\n\n  normalizeNative(nativeRange) {\n    if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {\n      return null;\n    }\n\n    const range = {\n      start: {\n        node: nativeRange.startContainer,\n        offset: nativeRange.startOffset\n      },\n      end: {\n        node: nativeRange.endContainer,\n        offset: nativeRange.endOffset\n      },\n      native: nativeRange\n    };\n    [range.start, range.end].forEach(position => {\n      let {\n        node,\n        offset\n      } = position;\n\n      while (!(node instanceof Text) && node.childNodes.length > 0) {\n        if (node.childNodes.length > offset) {\n          node = node.childNodes[offset];\n          offset = 0;\n        } else if (node.childNodes.length === offset) {\n          node = node.lastChild;\n\n          if (node instanceof Text) {\n            offset = node.data.length;\n          } else if (node.childNodes.length > 0) {\n            // Container case\n            offset = node.childNodes.length;\n          } else {\n            // Embed case\n            offset = node.childNodes.length + 1;\n          }\n        } else {\n          break;\n        }\n      }\n\n      position.node = node;\n      position.offset = offset;\n    });\n    return range;\n  }\n\n  rangeToNative(range) {\n    const indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];\n    const args = [];\n    const scrollLength = this.scroll.length();\n    indexes.forEach((index, i) => {\n      index = Math.min(scrollLength - 1, index);\n      const [leaf, leafOffset] = this.scroll.leaf(index);\n      const [node, offset] = leaf.position(leafOffset, i !== 0);\n      args.push(node, offset);\n    });\n\n    if (args.length < 2) {\n      return args.concat(args);\n    }\n\n    return args;\n  }\n\n  scrollIntoView(scrollingContainer) {\n    const range = this.lastRange;\n    if (range == null) return;\n    const bounds = this.getBounds(range.index, range.length);\n    if (bounds == null) return;\n    const limit = this.scroll.length() - 1;\n    const [first] = this.scroll.line(Math.min(range.index, limit));\n    let last = first;\n\n    if (range.length > 0) {\n      [last] = this.scroll.line(Math.min(range.index + range.length, limit));\n    }\n\n    if (first == null || last == null) return;\n    const scrollBounds = scrollingContainer.getBoundingClientRect();\n\n    if (bounds.top < scrollBounds.top) {\n      scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;\n    } else if (bounds.bottom > scrollBounds.bottom) {\n      scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;\n    }\n  }\n\n  setNativeRange(startNode, startOffset, endNode = startNode, endOffset = startOffset, force = false) {\n    debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);\n\n    if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {\n      return;\n    }\n\n    const selection = document.getSelection();\n    if (selection == null) return;\n\n    if (startNode != null) {\n      if (!this.hasFocus()) this.root.focus();\n      const {\n        native\n      } = this.getNativeRange() || {};\n\n      if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {\n        if (startNode.tagName === 'BR') {\n          startOffset = Array.from(startNode.parentNode.childNodes).indexOf(startNode);\n          startNode = startNode.parentNode;\n        }\n\n        if (endNode.tagName === 'BR') {\n          endOffset = Array.from(endNode.parentNode.childNodes).indexOf(endNode);\n          endNode = endNode.parentNode;\n        }\n\n        const range = document.createRange();\n        range.setStart(startNode, startOffset);\n        range.setEnd(endNode, endOffset);\n        selection.removeAllRanges();\n        selection.addRange(range);\n      }\n    } else {\n      selection.removeAllRanges();\n      this.root.blur();\n    }\n  }\n\n  setRange(range, force = false, source = _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.API) {\n    if (typeof force === 'string') {\n      source = force;\n      force = false;\n    }\n\n    debug.info('setRange', range);\n\n    if (range != null) {\n      const args = this.rangeToNative(range);\n      this.setNativeRange(...args, force);\n    } else {\n      this.setNativeRange(null);\n    }\n\n    this.update(source);\n  }\n\n  update(source = _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER) {\n    const oldRange = this.lastRange;\n    const [lastRange, nativeRange] = this.getRange();\n    this.lastRange = lastRange;\n    this.lastNative = nativeRange;\n\n    if (this.lastRange != null) {\n      this.savedRange = this.lastRange;\n    }\n\n    if (!deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(oldRange, this.lastRange)) {\n      if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {\n        const range = this.cursor.restore();\n\n        if (range) {\n          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);\n        }\n      }\n\n      const args = [_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SELECTION_CHANGE, clone__WEBPACK_IMPORTED_MODULE_1___default()(this.lastRange), clone__WEBPACK_IMPORTED_MODULE_1___default()(oldRange), source];\n      this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.EDITOR_CHANGE, ...args);\n\n      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT) {\n        this.emitter.emit(...args);\n      }\n    }\n  }\n\n}\n\nfunction contains(parent, descendant) {\n  try {\n    // Firefox inserts inaccessible nodes around video elements\n    descendant.parentNode; // eslint-disable-line no-unused-expressions\n  } catch (e) {\n    return false;\n  }\n\n  return parent.contains(descendant);\n}\n\n\n\n//# sourceURL=webpack://Quill/./core/selection.js?");

/***/ }),

/***/ "./core/theme.js":
/*!***********************!*\
  !*** ./core/theme.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\nclass Theme {\n  constructor(quill, options) {\n    this.quill = quill;\n    this.options = options;\n    this.modules = {};\n  }\n\n  init() {\n    Object.keys(this.options.modules).forEach(name => {\n      if (this.modules[name] == null) {\n        this.addModule(name);\n      }\n    });\n  }\n\n  addModule(name) {\n    const ModuleClass = this.quill.constructor.import(\"modules/\".concat(name));\n    this.modules[name] = new ModuleClass(this.quill, this.options.modules[name] || {});\n    return this.modules[name];\n  }\n\n}\n\nTheme.DEFAULTS = {\n  modules: {}\n};\nTheme.themes = {\n  default: Theme\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Theme);\n\n//# sourceURL=webpack://Quill/./core/theme.js?");

/***/ }),

/***/ "./formats/align.js":
/*!**************************!*\
  !*** ./formats/align.js ***!
  \**************************/
/*! exports provided: AlignAttribute, AlignClass, AlignStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignAttribute\", function() { return AlignAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignClass\", function() { return AlignClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignStyle\", function() { return AlignStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: ['right', 'center', 'justify']\n};\nconst AlignAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"Attributor\"]('align', 'align', config);\nconst AlignClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('align', 'ql-align', config);\nconst AlignStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('align', 'text-align', config);\n\n\n//# sourceURL=webpack://Quill/./formats/align.js?");

/***/ }),

/***/ "./formats/background.js":
/*!*******************************!*\
  !*** ./formats/background.js ***!
  \*******************************/
/*! exports provided: BackgroundClass, BackgroundStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackgroundClass\", function() { return BackgroundClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackgroundStyle\", function() { return BackgroundStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./formats/color.js\");\n\n\nconst BackgroundClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('background', 'ql-bg', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\nconst BackgroundStyle = new _color__WEBPACK_IMPORTED_MODULE_1__[\"ColorAttributor\"]('background', 'background-color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\n\n\n//# sourceURL=webpack://Quill/./formats/background.js?");

/***/ }),

/***/ "./formats/blockquote.js":
/*!*******************************!*\
  !*** ./formats/blockquote.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\n\nclass Blockquote extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nBlockquote.blotName = 'blockquote';\nBlockquote.tagName = 'blockquote';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blockquote);\n\n//# sourceURL=webpack://Quill/./formats/blockquote.js?");

/***/ }),

/***/ "./formats/bold.js":
/*!*************************!*\
  !*** ./formats/bold.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Bold extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create() {\n    return super.create();\n  }\n\n  static formats() {\n    return true;\n  }\n\n  optimize(context) {\n    super.optimize(context);\n\n    if (this.domNode.tagName !== this.statics.tagName[0]) {\n      this.replaceWith(this.statics.blotName);\n    }\n  }\n\n}\n\nBold.blotName = 'bold';\nBold.tagName = ['STRONG', 'B'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bold);\n\n//# sourceURL=webpack://Quill/./formats/bold.js?");

/***/ }),

/***/ "./formats/code.js":
/*!*************************!*\
  !*** ./formats/code.js ***!
  \*************************/
/*! exports provided: Code, CodeBlockContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Code\", function() { return Code; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeBlockContainer\", function() { return CodeBlockContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodeBlock; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\n\n\n\n\n\n\n\nclass CodeBlockContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_5__[\"default\"] {\n  static create(value) {\n    const domNode = super.create(value);\n    domNode.setAttribute('spellcheck', false);\n    return domNode;\n  }\n\n  html(index, length) {\n    const text = this.children.map(child => child.domNode.innerText).join('\\n').slice(index, index + length);\n    return \"<pre>\".concat(Object(_blots_text__WEBPACK_IMPORTED_MODULE_4__[\"escapeText\"])(text), \"</pre>\");\n  }\n\n}\n\nclass CodeBlock extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_6__[\"default\"].register(CodeBlockContainer);\n  }\n\n}\n\nclass Code extends _blots_inline__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {}\n\nCode.blotName = 'code';\nCode.tagName = 'CODE';\nCodeBlock.blotName = 'code-block';\nCodeBlock.className = 'ql-code-block';\nCodeBlock.tagName = 'DIV';\nCodeBlockContainer.blotName = 'code-block-container';\nCodeBlockContainer.className = 'ql-code-block-container';\nCodeBlockContainer.tagName = 'DIV';\nCodeBlockContainer.allowedChildren = [CodeBlock];\nCodeBlock.allowedChildren = [_blots_text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _blots_break__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _blots_cursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nCodeBlock.requiredContainer = CodeBlockContainer;\nCodeBlock.TAB = '  ';\n\n\n//# sourceURL=webpack://Quill/./formats/code.js?");

/***/ }),

/***/ "./formats/color.js":
/*!**************************!*\
  !*** ./formats/color.js ***!
  \**************************/
/*! exports provided: ColorAttributor, ColorClass, ColorStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorAttributor\", function() { return ColorAttributor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorClass\", function() { return ColorClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorStyle\", function() { return ColorStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass ColorAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"] {\n  value(domNode) {\n    let value = super.value(domNode);\n    if (!value.startsWith('rgb(')) return value;\n    value = value.replace(/^[^\\d]+/, '').replace(/[^\\d]+$/, '');\n    const hex = value.split(',').map(component => \"00\".concat(parseInt(component, 10).toString(16)).slice(-2)).join('');\n    return \"#\".concat(hex);\n  }\n\n}\n\nconst ColorClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('color', 'ql-color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\nconst ColorStyle = new ColorAttributor('color', 'color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\n\n\n//# sourceURL=webpack://Quill/./formats/color.js?");

/***/ }),

/***/ "./formats/direction.js":
/*!******************************!*\
  !*** ./formats/direction.js ***!
  \******************************/
/*! exports provided: DirectionAttribute, DirectionClass, DirectionStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionAttribute\", function() { return DirectionAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionClass\", function() { return DirectionClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionStyle\", function() { return DirectionStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: ['rtl']\n};\nconst DirectionAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"Attributor\"]('direction', 'dir', config);\nconst DirectionClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('direction', 'ql-direction', config);\nconst DirectionStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('direction', 'direction', config);\n\n\n//# sourceURL=webpack://Quill/./formats/direction.js?");

/***/ }),

/***/ "./formats/font.js":
/*!*************************!*\
  !*** ./formats/font.js ***!
  \*************************/
/*! exports provided: FontStyle, FontClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontStyle\", function() { return FontStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontClass\", function() { return FontClass; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['serif', 'monospace']\n};\nconst FontClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('font', 'ql-font', config);\n\nclass FontStyleAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"] {\n  value(node) {\n    return super.value(node).replace(/[\"']/g, '');\n  }\n\n}\n\nconst FontStyle = new FontStyleAttributor('font', 'font-family', config);\n\n\n//# sourceURL=webpack://Quill/./formats/font.js?");

/***/ }),

/***/ "./formats/formula.js":
/*!****************************!*\
  !*** ./formats/formula.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/embed */ \"./blots/embed.js\");\n\n\nclass Formula extends _blots_embed__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    if (window.katex == null) {\n      throw new Error('Formula module requires KaTeX.');\n    }\n\n    const node = super.create(value);\n\n    if (typeof value === 'string') {\n      window.katex.render(value, node, {\n        throwOnError: false,\n        errorColor: '#f00'\n      });\n      node.setAttribute('data-value', value);\n    }\n\n    return node;\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('data-value');\n  }\n\n  html() {\n    const {\n      formula\n    } = this.value();\n    return \"<span>\".concat(formula, \"</span>\");\n  }\n\n}\n\nFormula.blotName = 'formula';\nFormula.className = 'ql-formula';\nFormula.tagName = 'SPAN';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formula);\n\n//# sourceURL=webpack://Quill/./formats/formula.js?");

/***/ }),

/***/ "./formats/header.js":
/*!***************************!*\
  !*** ./formats/header.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\n\nclass Header extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static formats(domNode) {\n    return this.tagName.indexOf(domNode.tagName) + 1;\n  }\n\n}\n\nHeader.blotName = 'header';\nHeader.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack://Quill/./formats/header.js?");

/***/ }),

/***/ "./formats/image.js":
/*!**************************!*\
  !*** ./formats/image.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./formats/link.js\");\n\n\nconst ATTRIBUTES = ['alt', 'height', 'width'];\n\nclass Image extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static create(value) {\n    const node = super.create(value);\n\n    if (typeof value === 'string') {\n      node.setAttribute('src', this.sanitize(value));\n    }\n\n    return node;\n  }\n\n  static formats(domNode) {\n    return ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n\n      return formats;\n    }, {});\n  }\n\n  static match(url) {\n    return /\\.(jpe?g|gif|png)$/.test(url) || /^data:image\\/.+;base64/.test(url);\n  }\n\n  static register() {\n    if (/Firefox/i.test(navigator.userAgent)) {\n      setTimeout(() => {\n        // Disable image resizing in Firefox\n        document.execCommand('enableObjectResizing', false, false);\n      }, 1);\n    }\n  }\n\n  static sanitize(url) {\n    return Object(_link__WEBPACK_IMPORTED_MODULE_1__[\"sanitize\"])(url, ['http', 'https', 'data']) ? url : '//:0';\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('src');\n  }\n\n  format(name, value) {\n    if (ATTRIBUTES.indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(name, value);\n      } else {\n        this.domNode.removeAttribute(name);\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n\n}\n\nImage.blotName = 'image';\nImage.tagName = 'IMG';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\n//# sourceURL=webpack://Quill/./formats/image.js?");

/***/ }),

/***/ "./formats/indent.js":
/*!***************************!*\
  !*** ./formats/indent.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass IndentAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"] {\n  add(node, value) {\n    if (value === '+1' || value === '-1') {\n      const indent = this.value(node) || 0;\n      value = value === '+1' ? indent + 1 : indent - 1;\n    }\n\n    if (value === 0) {\n      this.remove(node);\n      return true;\n    }\n\n    return super.add(node, value);\n  }\n\n  canAdd(node, value) {\n    return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));\n  }\n\n  value(node) {\n    return parseInt(super.value(node), 10) || undefined; // Don't return NaN\n  }\n\n}\n\nconst IndentClass = new IndentAttributor('indent', 'ql-indent', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndentClass);\n\n//# sourceURL=webpack://Quill/./formats/indent.js?");

/***/ }),

/***/ "./formats/italic.js":
/*!***************************!*\
  !*** ./formats/italic.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ \"./formats/bold.js\");\n\n\nclass Italic extends _bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nItalic.blotName = 'italic';\nItalic.tagName = ['EM', 'I'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Italic);\n\n//# sourceURL=webpack://Quill/./formats/italic.js?");

/***/ }),

/***/ "./formats/link.js":
/*!*************************!*\
  !*** ./formats/link.js ***!
  \*************************/
/*! exports provided: default, sanitize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sanitize\", function() { return sanitize; });\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Link extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute('href', this.sanitize(value));\n    node.setAttribute('rel', 'noopener noreferrer');\n    node.setAttribute('target', '_blank');\n    return node;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('href');\n  }\n\n  static sanitize(url) {\n    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;\n  }\n\n  format(name, value) {\n    if (name !== this.statics.blotName || !value) {\n      super.format(name, value);\n    } else {\n      this.domNode.setAttribute('href', this.constructor.sanitize(value));\n    }\n  }\n\n}\n\nLink.blotName = 'link';\nLink.tagName = 'A';\nLink.SANITIZED_URL = 'about:blank';\nLink.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];\n\nfunction sanitize(url, protocols) {\n  const anchor = document.createElement('a');\n  anchor.href = url;\n  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));\n  return protocols.indexOf(protocol) > -1;\n}\n\n\n\n//# sourceURL=webpack://Quill/./formats/link.js?");

/***/ }),

/***/ "./formats/list.js":
/*!*************************!*\
  !*** ./formats/list.js ***!
  \*************************/
/*! exports provided: ListContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListContainer\", function() { return ListContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListItem; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\n\n\n\nclass ListContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {}\n\nListContainer.blotName = 'list-container';\nListContainer.tagName = 'OL';\n\nclass ListItem extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    const node = super.create();\n    node.setAttribute('data-list', value);\n    return node;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('data-list') || undefined;\n  }\n\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register(ListContainer);\n  }\n\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    const ui = domNode.ownerDocument.createElement('span');\n\n    const listEventHandler = e => {\n      if (!scroll.isEnabled()) return;\n      const format = this.statics.formats(domNode, scroll);\n\n      if (format === 'checked') {\n        this.format('list', 'unchecked');\n        e.preventDefault();\n      } else if (format === 'unchecked') {\n        this.format('list', 'checked');\n        e.preventDefault();\n      }\n    };\n\n    ui.addEventListener('mousedown', listEventHandler);\n    ui.addEventListener('touchstart', listEventHandler);\n    this.attachUI(ui);\n  }\n\n  format(name, value) {\n    if (name === this.statics.blotName && value) {\n      this.domNode.setAttribute('data-list', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n}\n\nListItem.blotName = 'list';\nListItem.tagName = 'LI';\nListContainer.allowedChildren = [ListItem];\nListItem.requiredContainer = ListContainer;\n\n\n//# sourceURL=webpack://Quill/./formats/list.js?");

/***/ }),

/***/ "./formats/script.js":
/*!***************************!*\
  !*** ./formats/script.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Script extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    if (value === 'super') {\n      return document.createElement('sup');\n    }\n\n    if (value === 'sub') {\n      return document.createElement('sub');\n    }\n\n    return super.create(value);\n  }\n\n  static formats(domNode) {\n    if (domNode.tagName === 'SUB') return 'sub';\n    if (domNode.tagName === 'SUP') return 'super';\n    return undefined;\n  }\n\n}\n\nScript.blotName = 'script';\nScript.tagName = ['SUB', 'SUP'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Script);\n\n//# sourceURL=webpack://Quill/./formats/script.js?");

/***/ }),

/***/ "./formats/size.js":
/*!*************************!*\
  !*** ./formats/size.js ***!
  \*************************/
/*! exports provided: SizeClass, SizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeClass\", function() { return SizeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeStyle\", function() { return SizeStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst SizeClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('size', 'ql-size', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['small', 'large', 'huge']\n});\nconst SizeStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('size', 'font-size', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['10px', '18px', '32px']\n});\n\n\n//# sourceURL=webpack://Quill/./formats/size.js?");

/***/ }),

/***/ "./formats/strike.js":
/*!***************************!*\
  !*** ./formats/strike.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ \"./formats/bold.js\");\n\n\nclass Strike extends _bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nStrike.blotName = 'strike';\nStrike.tagName = ['S', 'STRIKE'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Strike);\n\n//# sourceURL=webpack://Quill/./formats/strike.js?");

/***/ }),

/***/ "./formats/table.js":
/*!**************************!*\
  !*** ./formats/table.js ***!
  \**************************/
/*! exports provided: TableCell, TableRow, TableBody, TableContainer, tableId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableCell\", function() { return TableCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableRow\", function() { return TableRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableBody\", function() { return TableBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableContainer\", function() { return TableContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tableId\", function() { return tableId; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n\n\n\nclass TableCell extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    const node = super.create();\n\n    if (value) {\n      node.setAttribute('data-row', value);\n    } else {\n      node.setAttribute('data-row', tableId());\n    }\n\n    return node;\n  }\n\n  static formats(domNode) {\n    if (domNode.hasAttribute('data-row')) {\n      return domNode.getAttribute('data-row');\n    }\n\n    return undefined;\n  }\n\n  cellOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n\n    return -1;\n  }\n\n  format(name, value) {\n    if (name === TableCell.blotName && value) {\n      this.domNode.setAttribute('data-row', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  row() {\n    return this.parent;\n  }\n\n  rowOffset() {\n    if (this.row()) {\n      return this.row().rowOffset();\n    }\n\n    return -1;\n  }\n\n  table() {\n    return this.row() && this.row().table();\n  }\n\n}\n\nTableCell.blotName = 'table';\nTableCell.tagName = 'TD';\n\nclass TableRow extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  checkMerge() {\n    if (super.checkMerge() && this.next.children.head != null) {\n      const thisHead = this.children.head.formats();\n      const thisTail = this.children.tail.formats();\n      const nextHead = this.next.children.head.formats();\n      const nextTail = this.next.children.tail.formats();\n      return thisHead.table === thisTail.table && thisHead.table === nextHead.table && thisHead.table === nextTail.table;\n    }\n\n    return false;\n  }\n\n  optimize(...args) {\n    super.optimize(...args);\n    this.children.forEach(child => {\n      if (child.next == null) return;\n      const childFormats = child.formats();\n      const nextFormats = child.next.formats();\n\n      if (childFormats.table !== nextFormats.table) {\n        const next = this.splitAfter(child);\n\n        if (next) {\n          next.optimize();\n        } // We might be able to merge with prev now\n\n\n        if (this.prev) {\n          this.prev.optimize();\n        }\n      }\n    });\n  }\n\n  rowOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n\n    return -1;\n  }\n\n  table() {\n    return this.parent && this.parent.parent;\n  }\n\n}\n\nTableRow.blotName = 'table-row';\nTableRow.tagName = 'TR';\n\nclass TableBody extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {}\n\nTableBody.blotName = 'table-body';\nTableBody.tagName = 'TBODY';\n\nclass TableContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  balanceCells() {\n    const rows = this.descendants(TableRow);\n    const maxColumns = rows.reduce((max, row) => {\n      return Math.max(row.children.length, max);\n    }, 0);\n    rows.forEach(row => {\n      new Array(maxColumns - row.children.length).fill(0).forEach(() => {\n        let value;\n\n        if (row.children.head != null) {\n          value = TableCell.formats(row.children.head.domNode);\n        }\n\n        const blot = this.scroll.create(TableCell.blotName, value);\n        row.appendChild(blot);\n        blot.optimize(); // Add break blot\n      });\n    });\n  }\n\n  cells(column) {\n    return this.rows().map(row => row.children.at(column));\n  }\n\n  deleteColumn(index) {\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    body.children.forEach(row => {\n      const cell = row.children.at(index);\n\n      if (cell != null) {\n        cell.remove();\n      }\n    });\n  }\n\n  insertColumn(index) {\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    body.children.forEach(row => {\n      const ref = row.children.at(index);\n      const value = TableCell.formats(row.children.head.domNode);\n      const cell = this.scroll.create(TableCell.blotName, value);\n      row.insertBefore(cell, ref);\n    });\n  }\n\n  insertRow(index) {\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    const id = tableId();\n    const row = this.scroll.create(TableRow.blotName);\n    body.children.head.children.forEach(() => {\n      const cell = this.scroll.create(TableCell.blotName, id);\n      row.appendChild(cell);\n    });\n    const ref = body.children.at(index);\n    body.insertBefore(row, ref);\n  }\n\n  rows() {\n    const body = this.children.head;\n    if (body == null) return [];\n    return body.children.map(row => row);\n  }\n\n}\n\nTableContainer.blotName = 'table-container';\nTableContainer.tagName = 'TABLE';\nTableContainer.allowedChildren = [TableBody];\nTableBody.requiredContainer = TableContainer;\nTableBody.allowedChildren = [TableRow];\nTableRow.requiredContainer = TableBody;\nTableRow.allowedChildren = [TableCell];\nTableCell.requiredContainer = TableRow;\n\nfunction tableId() {\n  const id = Math.random().toString(36).slice(2, 6);\n  return \"row-\".concat(id);\n}\n\n\n\n//# sourceURL=webpack://Quill/./formats/table.js?");

/***/ }),

/***/ "./formats/underline.js":
/*!******************************!*\
  !*** ./formats/underline.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Underline extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nUnderline.blotName = 'underline';\nUnderline.tagName = 'U';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Underline);\n\n//# sourceURL=webpack://Quill/./formats/underline.js?");

/***/ }),

/***/ "./formats/video.js":
/*!**************************!*\
  !*** ./formats/video.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./formats/link.js\");\n\n\nconst ATTRIBUTES = ['height', 'width'];\n\nclass Video extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"BlockEmbed\"] {\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute('frameborder', '0');\n    node.setAttribute('allowfullscreen', true);\n    node.setAttribute('src', this.sanitize(value));\n    return node;\n  }\n\n  static formats(domNode) {\n    return ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n\n      return formats;\n    }, {});\n  }\n\n  static sanitize(url) {\n    return _link__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sanitize(url); // eslint-disable-line import/no-named-as-default-member\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('src');\n  }\n\n  format(name, value) {\n    if (ATTRIBUTES.indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(name, value);\n      } else {\n        this.domNode.removeAttribute(name);\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  html() {\n    const {\n      video\n    } = this.value();\n    return \"<a href=\\\"\".concat(video, \"\\\">\").concat(video, \"</a>\");\n  }\n\n}\n\nVideo.blotName = 'video';\nVideo.className = 'ql-video';\nVideo.tagName = 'IFRAME';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\n\n//# sourceURL=webpack://Quill/./formats/video.js?");

/***/ }),

/***/ "./modules/clipboard.js":
/*!******************************!*\
  !*** ./modules/clipboard.js ***!
  \******************************/
/*! exports provided: default, matchAttributor, matchBlot, matchNewline, matchText, traverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clipboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchAttributor\", function() { return matchAttributor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchBlot\", function() { return matchBlot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchNewline\", function() { return matchNewline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchText\", function() { return matchText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"traverse\", function() { return traverse; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../formats/align */ \"./formats/align.js\");\n/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../formats/background */ \"./formats/background.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ \"./formats/code.js\");\n/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../formats/color */ \"./formats/color.js\");\n/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../formats/direction */ \"./formats/direction.js\");\n/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../formats/font */ \"./formats/font.js\");\n/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../formats/size */ \"./formats/size.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('quill:clipboard');\nconst CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['ol, ul', matchList], ['pre', matchCodeBlock], ['tr', matchTable], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['strike', matchAlias.bind(matchAlias, 'strike')], ['style', matchIgnore]];\nconst ATTRIBUTE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_7__[\"AlignAttribute\"], _formats_direction__WEBPACK_IMPORTED_MODULE_11__[\"DirectionAttribute\"]].reduce((memo, attr) => {\n  memo[attr.keyName] = attr;\n  return memo;\n}, {});\nconst STYLE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_7__[\"AlignStyle\"], _formats_background__WEBPACK_IMPORTED_MODULE_8__[\"BackgroundStyle\"], _formats_color__WEBPACK_IMPORTED_MODULE_10__[\"ColorStyle\"], _formats_direction__WEBPACK_IMPORTED_MODULE_11__[\"DirectionStyle\"], _formats_font__WEBPACK_IMPORTED_MODULE_12__[\"FontStyle\"], _formats_size__WEBPACK_IMPORTED_MODULE_13__[\"SizeStyle\"]].reduce((memo, attr) => {\n  memo[attr.keyName] = attr;\n  return memo;\n}, {});\n\nclass Clipboard extends _core_module__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    this.quill.root.addEventListener('copy', e => this.onCaptureCopy(e, false));\n    this.quill.root.addEventListener('cut', e => this.onCaptureCopy(e, true));\n    this.quill.root.addEventListener('paste', this.onCapturePaste.bind(this));\n    this.matchers = [];\n    CLIPBOARD_CONFIG.concat(this.options.matchers).forEach(([selector, matcher]) => {\n      this.addMatcher(selector, matcher);\n    });\n  }\n\n  addMatcher(selector, matcher) {\n    this.matchers.push([selector, matcher]);\n  }\n\n  convert({\n    html,\n    text\n  }, formats = {}) {\n    if (formats[_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]) {\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text, {\n        [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: formats[_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]\n      });\n    }\n\n    if (!html) {\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text || '');\n    }\n\n    const doc = new DOMParser().parseFromString(html, 'text/html');\n    const container = doc.body;\n    const nodeMatches = new WeakMap();\n    const [elementMatchers, textMatchers] = this.prepareMatching(container, nodeMatches);\n    const delta = traverse(this.quill.scroll, container, elementMatchers, textMatchers, nodeMatches); // Remove trailing newline\n\n    if (deltaEndsWith(delta, '\\n') && (delta.ops[delta.ops.length - 1].attributes == null || formats.table)) {\n      return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(delta.length() - 1).delete(1));\n    }\n\n    return delta;\n  }\n\n  dangerouslyPasteHTML(index, html, source = _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    if (typeof index === 'string') {\n      const delta = this.convert({\n        html: index,\n        text: ''\n      });\n      this.quill.setContents(delta, html);\n      this.quill.setSelection(0, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    } else {\n      const paste = this.convert({\n        html,\n        text: ''\n      });\n      this.quill.updateContents(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(index).concat(paste), source);\n      this.quill.setSelection(index + paste.length(), _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    }\n  }\n\n  onCaptureCopy(e, isCut = false) {\n    if (e.defaultPrevented) return;\n    e.preventDefault();\n    const [range] = this.quill.selection.getRange();\n    if (range == null) return;\n    const {\n      html,\n      text\n    } = this.onCopy(range, isCut);\n    e.clipboardData.setData('text/plain', text);\n    e.clipboardData.setData('text/html', html);\n\n    if (isCut) {\n      this.quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n    }\n  }\n\n  onCapturePaste(e) {\n    if (e.defaultPrevented || !this.quill.isEnabled()) return;\n    e.preventDefault();\n    const range = this.quill.getSelection(true);\n    if (range == null) return;\n    const html = e.clipboardData.getData('text/html');\n    const text = e.clipboardData.getData('text/plain');\n    const files = Array.from(e.clipboardData.files || []);\n\n    if (!html && files.length > 0) {\n      this.quill.uploader.upload(range, files);\n    } else {\n      this.onPaste(range, {\n        html,\n        text\n      });\n    }\n  }\n\n  onCopy(range) {\n    const text = this.quill.getText(range);\n    const html = this.quill.getSemanticHTML(range);\n    return {\n      html,\n      text\n    };\n  }\n\n  onPaste(range, {\n    text,\n    html\n  }) {\n    const formats = this.quill.getFormat(range.index);\n    const pastedDelta = this.convert({\n      text,\n      html\n    }, formats);\n    debug.log('onPaste', pastedDelta, {\n      text,\n      html\n    });\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(range.index).delete(range.length).concat(pastedDelta);\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER); // range.length contributes to delta.length()\n\n    this.quill.setSelection(delta.length() - range.length, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    this.quill.scrollIntoView();\n  }\n\n  prepareMatching(container, nodeMatches) {\n    const elementMatchers = [];\n    const textMatchers = [];\n    this.matchers.forEach(pair => {\n      const [selector, matcher] = pair;\n\n      switch (selector) {\n        case Node.TEXT_NODE:\n          textMatchers.push(matcher);\n          break;\n\n        case Node.ELEMENT_NODE:\n          elementMatchers.push(matcher);\n          break;\n\n        default:\n          Array.from(container.querySelectorAll(selector)).forEach(node => {\n            if (nodeMatches.has(node)) {\n              const matches = nodeMatches.get(node);\n              matches.push(matcher);\n            } else {\n              nodeMatches.set(node, [matcher]);\n            }\n          });\n          break;\n      }\n    });\n    return [elementMatchers, textMatchers];\n  }\n\n}\n\nClipboard.DEFAULTS = {\n  matchers: []\n};\n\nfunction applyFormat(delta, format, value) {\n  if (typeof format === 'object') {\n    return Object.keys(format).reduce((newDelta, key) => {\n      return applyFormat(newDelta, key, format[key]);\n    }, delta);\n  }\n\n  return delta.reduce((newDelta, op) => {\n    if (op.attributes && op.attributes[format]) {\n      return newDelta.push(op);\n    }\n\n    return newDelta.insert(op.insert, extend__WEBPACK_IMPORTED_MODULE_0___default()({}, {\n      [format]: value\n    }, op.attributes));\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n}\n\nfunction deltaEndsWith(delta, text) {\n  let endText = '';\n\n  for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i // eslint-disable-line no-plusplus\n  ) {\n    const op = delta.ops[i];\n    if (typeof op.insert !== 'string') break;\n    endText = op.insert + endText;\n  }\n\n  return endText.slice(-1 * text.length) === text;\n}\n\nfunction isLine(node) {\n  if (node.childNodes.length === 0) return false; // Exclude embed blocks\n\n  return ['address', 'article', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'iframe', 'li', 'main', 'nav', 'ol', 'output', 'p', 'pre', 'section', 'table', 'td', 'tr', 'ul', 'video'].includes(node.tagName.toLowerCase());\n}\n\nconst preNodes = new WeakMap();\n\nfunction isPre(node) {\n  if (node == null) return false;\n\n  if (!preNodes.has(node)) {\n    if (node.tagName === 'PRE') {\n      preNodes.set(node, true);\n    } else {\n      preNodes.set(node, isPre(node.parentNode));\n    }\n  }\n\n  return preNodes.get(node);\n}\n\nfunction traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {\n  // Post-order\n  if (node.nodeType === node.TEXT_NODE) {\n    return textMatchers.reduce((delta, matcher) => {\n      return matcher(node, delta, scroll);\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n  }\n\n  if (node.nodeType === node.ELEMENT_NODE) {\n    return Array.from(node.childNodes || []).reduce((delta, childNode) => {\n      let childrenDelta = traverse(scroll, childNode, elementMatchers, textMatchers, nodeMatches);\n\n      if (childNode.nodeType === node.ELEMENT_NODE) {\n        childrenDelta = elementMatchers.reduce((reducedDelta, matcher) => {\n          return matcher(childNode, reducedDelta, scroll);\n        }, childrenDelta);\n        childrenDelta = (nodeMatches.get(childNode) || []).reduce((reducedDelta, matcher) => {\n          return matcher(childNode, reducedDelta, scroll);\n        }, childrenDelta);\n      }\n\n      return delta.concat(childrenDelta);\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n  }\n\n  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();\n}\n\nfunction matchAlias(format, node, delta) {\n  return applyFormat(delta, format, true);\n}\n\nfunction matchAttributor(node, delta, scroll) {\n  const attributes = parchment__WEBPACK_IMPORTED_MODULE_2__[\"Attributor\"].keys(node);\n  const classes = parchment__WEBPACK_IMPORTED_MODULE_2__[\"ClassAttributor\"].keys(node);\n  const styles = parchment__WEBPACK_IMPORTED_MODULE_2__[\"StyleAttributor\"].keys(node);\n  const formats = {};\n  attributes.concat(classes).concat(styles).forEach(name => {\n    let attr = scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].ATTRIBUTE);\n\n    if (attr != null) {\n      formats[attr.attrName] = attr.value(node);\n      if (formats[attr.attrName]) return;\n    }\n\n    attr = ATTRIBUTE_ATTRIBUTORS[name];\n\n    if (attr != null && (attr.attrName === name || attr.keyName === name)) {\n      formats[attr.attrName] = attr.value(node) || undefined;\n    }\n\n    attr = STYLE_ATTRIBUTORS[name];\n\n    if (attr != null && (attr.attrName === name || attr.keyName === name)) {\n      attr = STYLE_ATTRIBUTORS[name];\n      formats[attr.attrName] = attr.value(node) || undefined;\n    }\n  });\n\n  if (Object.keys(formats).length > 0) {\n    return applyFormat(delta, formats);\n  }\n\n  return delta;\n}\n\nfunction matchBlot(node, delta, scroll) {\n  const match = scroll.query(node);\n  if (match == null) return delta;\n\n  if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_2__[\"EmbedBlot\"]) {\n    const embed = {};\n    const value = match.value(node);\n\n    if (value != null) {\n      embed[match.blotName] = value;\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(embed, match.formats(node, scroll));\n    }\n  } else {\n    if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_2__[\"BlockBlot\"] && !deltaEndsWith(delta, '\\n')) {\n      delta.insert('\\n');\n    }\n\n    if (typeof match.formats === 'function') {\n      return applyFormat(delta, match.blotName, match.formats(node, scroll));\n    }\n  }\n\n  return delta;\n}\n\nfunction matchBreak(node, delta) {\n  if (!deltaEndsWith(delta, '\\n')) {\n    delta.insert('\\n');\n  }\n\n  return delta;\n}\n\nfunction matchCodeBlock(node, delta, scroll) {\n  const match = scroll.query('code-block');\n  const language = match ? match.formats(node, scroll) : true;\n  return applyFormat(delta, 'code-block', language);\n}\n\nfunction matchIgnore() {\n  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();\n}\n\nfunction matchIndent(node, delta, scroll) {\n  const match = scroll.query(node);\n\n  if (match == null || match.blotName !== 'list' || !deltaEndsWith(delta, '\\n')) {\n    return delta;\n  }\n\n  let indent = -1;\n  let parent = node.parentNode;\n\n  while (parent != null) {\n    if (['OL', 'UL'].includes(parent.tagName)) {\n      indent += 1;\n    }\n\n    parent = parent.parentNode;\n  }\n\n  if (indent <= 0) return delta;\n  return delta.reduce((composed, op) => {\n    if (op.attributes && op.attributes.list) {\n      return composed.push(op);\n    }\n\n    return composed.insert(op.insert, {\n      indent,\n      ...(op.attributes || {})\n    });\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n}\n\nfunction matchList(node, delta) {\n  const list = node.tagName === 'OL' ? 'ordered' : 'bullet';\n  return applyFormat(delta, 'list', list);\n}\n\nfunction matchNewline(node, delta, scroll) {\n  if (!deltaEndsWith(delta, '\\n')) {\n    if (isLine(node)) {\n      return delta.insert('\\n');\n    }\n\n    if (delta.length() > 0 && node.nextSibling) {\n      let {\n        nextSibling\n      } = node;\n\n      while (nextSibling != null) {\n        if (isLine(nextSibling)) {\n          return delta.insert('\\n');\n        }\n\n        const match = scroll.query(nextSibling);\n\n        if (match && match.prototype instanceof _blots_block__WEBPACK_IMPORTED_MODULE_3__[\"BlockEmbed\"]) {\n          return delta.insert('\\n');\n        }\n\n        nextSibling = nextSibling.firstChild;\n      }\n    }\n  }\n\n  return delta;\n}\n\nfunction matchStyles(node, delta) {\n  const formats = {};\n  const style = node.style || {};\n\n  if (style.fontStyle === 'italic') {\n    formats.italic = true;\n  }\n\n  if (style.textDecoration === 'underline') {\n    formats.underline = true;\n  }\n\n  if (style.textDecoration === 'line-through') {\n    formats.strike = true;\n  }\n\n  if (style.fontWeight.startsWith('bold') || parseInt(style.fontWeight, 10) >= 700) {\n    formats.bold = true;\n  }\n\n  if (Object.keys(formats).length > 0) {\n    delta = applyFormat(delta, formats);\n  }\n\n  if (parseFloat(style.textIndent || 0) > 0) {\n    // Could be 0.5in\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert('\\t').concat(delta);\n  }\n\n  return delta;\n}\n\nfunction matchTable(node, delta) {\n  const table = node.parentNode.tagName === 'TABLE' ? node.parentNode : node.parentNode.parentNode;\n  const rows = Array.from(table.querySelectorAll('tr'));\n  const row = rows.indexOf(node) + 1;\n  return applyFormat(delta, 'table', row);\n}\n\nfunction matchText(node, delta) {\n  let text = node.data; // Word represents empty line with <o:p>&nbsp;</o:p>\n\n  if (node.parentNode.tagName === 'O:P') {\n    return delta.insert(text.trim());\n  }\n\n  if (text.trim().length === 0 && text.includes('\\n')) {\n    return delta;\n  }\n\n  if (!isPre(node)) {\n    const replacer = (collapse, match) => {\n      const replaced = match.replace(/[^\\u00a0]/g, ''); // \\u00a0 is nbsp;\n\n      return replaced.length < 1 && collapse ? ' ' : replaced;\n    };\n\n    text = text.replace(/\\r\\n/g, ' ').replace(/\\n/g, ' ');\n    text = text.replace(/\\s\\s+/g, replacer.bind(replacer, true)); // collapse whitespace\n\n    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {\n      text = text.replace(/^\\s+/, replacer.bind(replacer, false));\n    }\n\n    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {\n      text = text.replace(/\\s+$/, replacer.bind(replacer, false));\n    }\n  }\n\n  return delta.insert(text);\n}\n\n\n\n//# sourceURL=webpack://Quill/./modules/clipboard.js?");

/***/ }),

/***/ "./modules/history.js":
/*!****************************!*\
  !*** ./modules/history.js ***!
  \****************************/
/*! exports provided: default, getLastChangeIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return History; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastChangeIndex\", function() { return getLastChangeIndex; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\nclass History extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    this.lastRecorded = 0;\n    this.ignoreChange = false;\n    this.clear();\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, (eventName, delta, oldDelta, source) => {\n      if (eventName !== _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.TEXT_CHANGE || this.ignoreChange) return;\n\n      if (!this.options.userOnly || source === _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        this.record(delta, oldDelta);\n      } else {\n        this.transform(delta);\n      }\n    });\n    this.quill.keyboard.addBinding({\n      key: 'z',\n      shortKey: true\n    }, this.undo.bind(this));\n    this.quill.keyboard.addBinding({\n      key: 'z',\n      shortKey: true,\n      shiftKey: true\n    }, this.redo.bind(this));\n\n    if (/Win/i.test(navigator.platform)) {\n      this.quill.keyboard.addBinding({\n        key: 'y',\n        shortKey: true\n      }, this.redo.bind(this));\n    }\n  }\n\n  change(source, dest) {\n    if (this.stack[source].length === 0) return;\n    const delta = this.stack[source].pop();\n    const base = this.quill.getContents();\n    const inverseDelta = delta.invert(base);\n    this.stack[dest].push(inverseDelta);\n    this.lastRecorded = 0;\n    this.ignoreChange = true;\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.ignoreChange = false;\n    const index = getLastChangeIndex(this.quill.scroll, delta);\n    this.quill.setSelection(index);\n  }\n\n  clear() {\n    this.stack = {\n      undo: [],\n      redo: []\n    };\n  }\n\n  cutoff() {\n    this.lastRecorded = 0;\n  }\n\n  record(changeDelta, oldDelta) {\n    if (changeDelta.ops.length === 0) return;\n    this.stack.redo = [];\n    let undoDelta = changeDelta.invert(oldDelta);\n    const timestamp = Date.now();\n\n    if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {\n      const delta = this.stack.undo.pop();\n      undoDelta = undoDelta.compose(delta);\n    } else {\n      this.lastRecorded = timestamp;\n    }\n\n    if (undoDelta.length() === 0) return;\n    this.stack.undo.push(undoDelta);\n\n    if (this.stack.undo.length > this.options.maxStack) {\n      this.stack.undo.shift();\n    }\n  }\n\n  redo() {\n    this.change('redo', 'undo');\n  }\n\n  transform(delta) {\n    transformStack(this.stack.undo, delta);\n    transformStack(this.stack.redo, delta);\n  }\n\n  undo() {\n    this.change('undo', 'redo');\n  }\n\n}\n\nHistory.DEFAULTS = {\n  delay: 1000,\n  maxStack: 100,\n  userOnly: false\n};\n\nfunction transformStack(stack, delta) {\n  let remoteDelta = delta;\n\n  for (let i = stack.length - 1; i >= 0; i -= 1) {\n    const oldDelta = stack[i];\n    stack[i] = remoteDelta.transform(oldDelta, true);\n    remoteDelta = oldDelta.transform(remoteDelta);\n\n    if (stack[i].length() === 0) {\n      stack.splice(i, 1);\n    }\n  }\n}\n\nfunction endsWithNewlineChange(scroll, delta) {\n  const lastOp = delta.ops[delta.ops.length - 1];\n  if (lastOp == null) return false;\n\n  if (lastOp.insert != null) {\n    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\\n');\n  }\n\n  if (lastOp.attributes != null) {\n    return Object.keys(lastOp.attributes).some(attr => {\n      return scroll.query(attr, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK) != null;\n    });\n  }\n\n  return false;\n}\n\nfunction getLastChangeIndex(scroll, delta) {\n  const deleteLength = delta.reduce((length, op) => {\n    return length + (op.delete || 0);\n  }, 0);\n  let changeIndex = delta.length() - deleteLength;\n\n  if (endsWithNewlineChange(scroll, delta)) {\n    changeIndex -= 1;\n  }\n\n  return changeIndex;\n}\n\n\n\n//# sourceURL=webpack://Quill/./modules/history.js?");

/***/ }),

/***/ "./modules/keyboard.js":
/*!*****************************!*\
  !*** ./modules/keyboard.js ***!
  \*****************************/
/*! exports provided: default, SHORTKEY, normalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Keyboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHORTKEY\", function() { return SHORTKEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalize\", function() { return normalize; });\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('quill:keyboard');\nconst SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';\n\nclass Keyboard extends _core_module__WEBPACK_IMPORTED_MODULE_7__[\"default\"] {\n  static match(evt, binding) {\n    if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(key => {\n      return !!binding[key] !== evt[key] && binding[key] !== null;\n    })) {\n      return false;\n    }\n\n    return binding.key === evt.key || binding.key === evt.which;\n  }\n\n  constructor(quill, options) {\n    super(quill, options);\n    this.bindings = {};\n    Object.keys(this.options.bindings).forEach(name => {\n      if (this.options.bindings[name]) {\n        this.addBinding(this.options.bindings[name]);\n      }\n    });\n    this.addBinding({\n      key: 'Enter',\n      shiftKey: null\n    }, this.handleEnter);\n    this.addBinding({\n      key: 'Enter',\n      metaKey: null,\n      ctrlKey: null,\n      altKey: null\n    }, () => {});\n\n    if (/Firefox/i.test(navigator.userAgent)) {\n      // Need to handle delete and backspace for Firefox in the general case #1171\n      this.addBinding({\n        key: 'Backspace'\n      }, {\n        collapsed: true\n      }, this.handleBackspace);\n      this.addBinding({\n        key: 'Delete'\n      }, {\n        collapsed: true\n      }, this.handleDelete);\n    } else {\n      this.addBinding({\n        key: 'Backspace'\n      }, {\n        collapsed: true,\n        prefix: /^.?$/\n      }, this.handleBackspace);\n      this.addBinding({\n        key: 'Delete'\n      }, {\n        collapsed: true,\n        suffix: /^.?$/\n      }, this.handleDelete);\n    }\n\n    this.addBinding({\n      key: 'Backspace'\n    }, {\n      collapsed: false\n    }, this.handleDeleteRange);\n    this.addBinding({\n      key: 'Delete'\n    }, {\n      collapsed: false\n    }, this.handleDeleteRange);\n    this.addBinding({\n      key: 'Backspace',\n      altKey: null,\n      ctrlKey: null,\n      metaKey: null,\n      shiftKey: null\n    }, {\n      collapsed: true,\n      offset: 0\n    }, this.handleBackspace);\n    this.listen();\n  }\n\n  addBinding(keyBinding, context = {}, handler = {}) {\n    const binding = normalize(keyBinding);\n\n    if (binding == null) {\n      debug.warn('Attempted to add invalid keyboard binding', binding);\n      return;\n    }\n\n    if (typeof context === 'function') {\n      context = {\n        handler: context\n      };\n    }\n\n    if (typeof handler === 'function') {\n      handler = {\n        handler\n      };\n    }\n\n    const keys = Array.isArray(binding.key) ? binding.key : [binding.key];\n    keys.forEach(key => {\n      const singleBinding = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, binding, {\n        key\n      }, context, handler);\n      this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];\n      this.bindings[singleBinding.key].push(singleBinding);\n    });\n  }\n\n  listen() {\n    this.quill.root.addEventListener('keydown', evt => {\n      if (evt.defaultPrevented || evt.isComposing) return;\n      const bindings = (this.bindings[evt.key] || []).concat(this.bindings[evt.which] || []);\n      const matches = bindings.filter(binding => Keyboard.match(evt, binding));\n      if (matches.length === 0) return;\n      const range = this.quill.getSelection();\n      if (range == null || !this.quill.hasFocus()) return;\n      const [line, offset] = this.quill.getLine(range.index);\n      const [leafStart, offsetStart] = this.quill.getLeaf(range.index);\n      const [leafEnd, offsetEnd] = range.length === 0 ? [leafStart, offsetStart] : this.quill.getLeaf(range.index + range.length);\n      const prefixText = leafStart instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"TextBlot\"] ? leafStart.value().slice(0, offsetStart) : '';\n      const suffixText = leafEnd instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"TextBlot\"] ? leafEnd.value().slice(offsetEnd) : '';\n      const curContext = {\n        collapsed: range.length === 0,\n        empty: range.length === 0 && line.length() <= 1,\n        format: this.quill.getFormat(range),\n        line,\n        offset,\n        prefix: prefixText,\n        suffix: suffixText,\n        event: evt\n      };\n      const prevented = matches.some(binding => {\n        if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) {\n          return false;\n        }\n\n        if (binding.empty != null && binding.empty !== curContext.empty) {\n          return false;\n        }\n\n        if (binding.offset != null && binding.offset !== curContext.offset) {\n          return false;\n        }\n\n        if (Array.isArray(binding.format)) {\n          // any format is present\n          if (binding.format.every(name => curContext.format[name] == null)) {\n            return false;\n          }\n        } else if (typeof binding.format === 'object') {\n          // all formats must match\n          if (!Object.keys(binding.format).every(name => {\n            if (binding.format[name] === true) return curContext.format[name] != null;\n            if (binding.format[name] === false) return curContext.format[name] == null;\n            return deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(binding.format[name], curContext.format[name]);\n          })) {\n            return false;\n          }\n        }\n\n        if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) {\n          return false;\n        }\n\n        if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) {\n          return false;\n        }\n\n        return binding.handler.call(this, range, curContext, binding) !== true;\n      });\n\n      if (prevented) {\n        evt.preventDefault();\n      }\n    });\n  }\n\n  handleBackspace(range, context) {\n    // Check for astral symbols\n    const length = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]$/.test(context.prefix) ? 2 : 1;\n    if (range.index === 0 || this.quill.getLength() <= 1) return;\n    let formats = {};\n    const [line] = this.quill.getLine(range.index);\n    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index - length).delete(length);\n\n    if (context.offset === 0) {\n      // Always deleting newline here, length always 1\n      const [prev] = this.quill.getLine(range.index - 1);\n\n      if (prev) {\n        const curFormats = line.formats();\n        const prevFormats = this.quill.getFormat(range.index - 1, 1);\n        formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(curFormats, prevFormats) || {};\n\n        if (Object.keys(formats).length > 0) {\n          // line.length() - 1 targets \\n in line, another -1 for newline being deleted\n          const formatDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index + line.length() - 2).retain(1, formats);\n          delta = delta.compose(formatDelta);\n        }\n      }\n    }\n\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    this.quill.focus();\n  }\n\n  handleDelete(range, context) {\n    // Check for astral symbols\n    const length = /^[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/.test(context.suffix) ? 2 : 1;\n    if (range.index >= this.quill.getLength() - length) return;\n    let formats = {};\n    const [line] = this.quill.getLine(range.index);\n    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(length);\n\n    if (context.offset >= line.length() - 1) {\n      const [next] = this.quill.getLine(range.index + 1);\n\n      if (next) {\n        const curFormats = line.formats();\n        const nextFormats = this.quill.getFormat(range.index, 1);\n        formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(curFormats, nextFormats) || {};\n\n        if (Object.keys(formats).length > 0) {\n          delta = delta.retain(next.length() - 1).retain(1, formats);\n        }\n      }\n    }\n\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    this.quill.focus();\n  }\n\n  handleDeleteRange(range) {\n    const lines = this.quill.getLines(range);\n    let formats = {};\n\n    if (lines.length > 1) {\n      const firstFormats = lines[0].formats();\n      const lastFormats = lines[lines.length - 1].formats();\n      formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(lastFormats, firstFormats) || {};\n    }\n\n    this.quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n\n    if (Object.keys(formats).length > 0) {\n      this.quill.formatLine(range.index, 1, formats, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    }\n\n    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    this.quill.focus();\n  }\n\n  handleEnter(range, context) {\n    const lineFormats = Object.keys(context.format).reduce((formats, format) => {\n      if (this.quill.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_4__[\"Scope\"].BLOCK) && !Array.isArray(context.format[format])) {\n        formats[format] = context.format[format];\n      }\n\n      return formats;\n    }, {});\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(range.length).insert('\\n', lineFormats);\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    this.quill.focus();\n    Object.keys(context.format).forEach(name => {\n      if (lineFormats[name] != null) return;\n      if (Array.isArray(context.format[name])) return;\n      if (name === 'code' || name === 'link') return;\n      this.quill.format(name, context.format[name], _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    });\n  }\n\n}\n\nKeyboard.DEFAULTS = {\n  bindings: {\n    bold: makeFormatHandler('bold'),\n    italic: makeFormatHandler('italic'),\n    underline: makeFormatHandler('underline'),\n    indent: {\n      // highlight tab or tab at beginning of list, indent or blockquote\n      key: 'Tab',\n      format: ['blockquote', 'indent', 'list'],\n\n      handler(range, context) {\n        if (context.collapsed && context.offset !== 0) return true;\n        this.quill.format('indent', '+1', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        return false;\n      }\n\n    },\n    outdent: {\n      key: 'Tab',\n      shiftKey: true,\n      format: ['blockquote', 'indent', 'list'],\n\n      // highlight tab or tab at beginning of list, indent or blockquote\n      handler(range, context) {\n        if (context.collapsed && context.offset !== 0) return true;\n        this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        return false;\n      }\n\n    },\n    'outdent backspace': {\n      key: 'Backspace',\n      collapsed: true,\n      shiftKey: null,\n      metaKey: null,\n      ctrlKey: null,\n      altKey: null,\n      format: ['indent', 'list'],\n      offset: 0,\n\n      handler(range, context) {\n        if (context.format.indent != null) {\n          this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        } else if (context.format.list != null) {\n          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      }\n\n    },\n    'indent code-block': makeCodeBlockHandler(true),\n    'outdent code-block': makeCodeBlockHandler(false),\n    'remove tab': {\n      key: 'Tab',\n      shiftKey: true,\n      collapsed: true,\n      prefix: /\\t$/,\n\n      handler(range) {\n        this.quill.deleteText(range.index - 1, 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n    },\n    tab: {\n      key: 'Tab',\n\n      handler(range, context) {\n        if (context.format.table) return true;\n        this.quill.history.cutoff();\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(range.length).insert('\\t');\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        return false;\n      }\n\n    },\n    'blockquote empty enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['blockquote'],\n      empty: true,\n\n      handler() {\n        this.quill.format('blockquote', false, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n    },\n    'list empty enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['list'],\n      empty: true,\n\n      handler(range, context) {\n        const formats = {\n          list: false\n        };\n\n        if (context.format.indent) {\n          formats.indent = false;\n        }\n\n        this.quill.formatLine(range.index, range.length, formats, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n    },\n    'checklist enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: {\n        list: 'checked'\n      },\n\n      handler(range) {\n        const [line, offset] = this.quill.getLine(range.index);\n        const formats = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, line.formats(), {\n          list: 'checked'\n        });\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).insert('\\n', formats).retain(line.length() - offset - 1).retain(1, {\n          list: 'unchecked'\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        this.quill.scrollIntoView();\n      }\n\n    },\n    'header enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['header'],\n      suffix: /^$/,\n\n      handler(range, context) {\n        const [line, offset] = this.quill.getLine(range.index);\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).insert('\\n', context.format).retain(line.length() - offset - 1).retain(1, {\n          header: null\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        this.quill.scrollIntoView();\n      }\n\n    },\n    'table backspace': {\n      key: 'Backspace',\n      format: ['table'],\n      collapsed: true,\n      offset: 0,\n\n      handler() {}\n\n    },\n    'table delete': {\n      key: 'Delete',\n      format: ['table'],\n      collapsed: true,\n      suffix: /^$/,\n\n      handler() {}\n\n    },\n    'table enter': {\n      key: 'Enter',\n      shiftKey: null,\n      format: ['table'],\n\n      handler(range) {\n        const module = this.quill.getModule('table');\n\n        if (module) {\n          const [table, row, cell, offset] = module.getTable(range);\n          const shift = tableSide(table, row, cell, offset);\n          if (shift == null) return;\n          let index = table.offset();\n\n          if (shift < 0) {\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert('\\n');\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n            this.quill.setSelection(range.index + 1, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n          } else if (shift > 0) {\n            index += table.length();\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert('\\n');\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n            this.quill.setSelection(index, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n          }\n        }\n      }\n\n    },\n    'table tab': {\n      key: 'Tab',\n      shiftKey: null,\n      format: ['table'],\n\n      handler(range, context) {\n        const {\n          event,\n          line: cell\n        } = context;\n        const offset = cell.offset(this.quill.scroll);\n\n        if (event.shiftKey) {\n          this.quill.setSelection(offset - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        } else {\n          this.quill.setSelection(offset + cell.length(), _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      }\n\n    },\n    'list autofill': {\n      key: ' ',\n      shiftKey: null,\n      collapsed: true,\n      format: {\n        list: false,\n        'code-block': false,\n        blockquote: false,\n        header: false,\n        table: false\n      },\n      prefix: /^\\s*?(\\d+\\.|-|\\*|\\[ ?\\]|\\[x\\])$/,\n\n      handler(range, context) {\n        if (this.quill.scroll.query('list') == null) return true;\n        const {\n          length\n        } = context.prefix;\n        const [line, offset] = this.quill.getLine(range.index);\n        if (offset > length) return true;\n        let value;\n\n        switch (context.prefix.trim()) {\n          case '[]':\n          case '[ ]':\n            value = 'unchecked';\n            break;\n\n          case '[x]':\n            value = 'checked';\n            break;\n\n          case '-':\n          case '*':\n            value = 'bullet';\n            break;\n\n          default:\n            value = 'ordered';\n        }\n\n        this.quill.insertText(range.index, ' ', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, {\n          list: value\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        this.quill.setSelection(range.index - length, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        return false;\n      }\n\n    },\n    'code exit': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['code-block'],\n      prefix: /^$/,\n      suffix: /^\\s*$/,\n\n      handler(range) {\n        const [line, offset] = this.quill.getLine(range.index);\n        let numLines = 2;\n        let cur = line;\n\n        while (cur != null && cur.length() <= 1 && cur.formats()['code-block']) {\n          cur = cur.prev;\n          numLines -= 1; // Requisite prev lines are empty\n\n          if (numLines <= 0) {\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index + line.length() - offset - 2).retain(1, {\n              'code-block': null\n            }).delete(1);\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n            this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n            return false;\n          }\n        }\n\n        return true;\n      }\n\n    },\n    'embed left': makeEmbedArrowHandler('ArrowLeft', false),\n    'embed left shift': makeEmbedArrowHandler('ArrowLeft', true),\n    'embed right': makeEmbedArrowHandler('ArrowRight', false),\n    'embed right shift': makeEmbedArrowHandler('ArrowRight', true),\n    'table down': makeTableArrowHandler(false),\n    'table up': makeTableArrowHandler(true)\n  }\n};\n\nfunction makeCodeBlockHandler(indent) {\n  return {\n    key: 'Tab',\n    shiftKey: !indent,\n    format: {\n      'code-block': true\n    },\n\n    handler(range) {\n      const CodeBlock = this.quill.scroll.query('code-block');\n      const lines = range.length === 0 ? this.quill.getLines(range.index, 1) : this.quill.getLines(range);\n      let {\n        index,\n        length\n      } = range;\n      lines.forEach((line, i) => {\n        if (indent) {\n          line.insertAt(0, CodeBlock.TAB);\n\n          if (i === 0) {\n            index += CodeBlock.TAB.length;\n          } else {\n            length += CodeBlock.TAB.length;\n          }\n        } else if (line.domNode.textContent.startsWith(CodeBlock.TAB)) {\n          line.deleteAt(0, CodeBlock.TAB.length);\n\n          if (i === 0) {\n            index -= CodeBlock.TAB.length;\n          } else {\n            length -= CodeBlock.TAB.length;\n          }\n        }\n      });\n      this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      this.quill.setSelection(index, length, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    }\n\n  };\n}\n\nfunction makeEmbedArrowHandler(key, shiftKey) {\n  const where = key === 'ArrowLeft' ? 'prefix' : 'suffix';\n  return {\n    key,\n    shiftKey,\n    altKey: null,\n    [where]: /^$/,\n\n    handler(range) {\n      let {\n        index\n      } = range;\n\n      if (key === 'ArrowRight') {\n        index += range.length + 1;\n      }\n\n      const [leaf] = this.quill.getLeaf(index);\n      if (!(leaf instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"EmbedBlot\"])) return true;\n\n      if (key === 'ArrowLeft') {\n        if (shiftKey) {\n          this.quill.setSelection(range.index - 1, range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        } else {\n          this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      } else if (shiftKey) {\n        this.quill.setSelection(range.index, range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      } else {\n        this.quill.setSelection(range.index + range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n      return false;\n    }\n\n  };\n}\n\nfunction makeFormatHandler(format) {\n  return {\n    key: format[0],\n    shortKey: true,\n\n    handler(range, context) {\n      this.quill.format(format, !context.format[format], _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    }\n\n  };\n}\n\nfunction makeTableArrowHandler(up) {\n  return {\n    key: up ? 'ArrowUp' : 'ArrowDown',\n    collapsed: true,\n    format: ['table'],\n\n    handler(range, context) {\n      // TODO move to table module\n      const key = up ? 'prev' : 'next';\n      const cell = context.line;\n      const targetRow = cell.parent[key];\n\n      if (targetRow != null) {\n        if (targetRow.statics.blotName === 'table-row') {\n          let targetCell = targetRow.children.head;\n          let cur = cell;\n\n          while (cur.prev != null) {\n            cur = cur.prev;\n            targetCell = targetCell.next;\n          }\n\n          const index = targetCell.offset(this.quill.scroll) + Math.min(context.offset, targetCell.length() - 1);\n          this.quill.setSelection(index, 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      } else {\n        const targetLine = cell.table()[key];\n\n        if (targetLine != null) {\n          if (up) {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n          } else {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n          }\n        }\n      }\n\n      return false;\n    }\n\n  };\n}\n\nfunction normalize(binding) {\n  if (typeof binding === 'string' || typeof binding === 'number') {\n    binding = {\n      key: binding\n    };\n  } else if (typeof binding === 'object') {\n    binding = clone__WEBPACK_IMPORTED_MODULE_0___default()(binding, false);\n  } else {\n    return null;\n  }\n\n  if (binding.shortKey) {\n    binding[SHORTKEY] = binding.shortKey;\n    delete binding.shortKey;\n  }\n\n  return binding;\n}\n\nfunction tableSide(table, row, cell, offset) {\n  if (row.prev == null && row.next == null) {\n    if (cell.prev == null && cell.next == null) {\n      return offset === 0 ? -1 : 1;\n    }\n\n    return cell.prev == null ? -1 : 1;\n  }\n\n  if (row.prev == null) {\n    return -1;\n  }\n\n  if (row.next == null) {\n    return 1;\n  }\n\n  return null;\n}\n\n\n\n//# sourceURL=webpack://Quill/./modules/keyboard.js?");

/***/ }),

/***/ "./modules/syntax.js":
/*!***************************!*\
  !*** ./modules/syntax.js ***!
  \***************************/
/*! exports provided: CodeBlock, CodeToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeBlock\", function() { return SyntaxCodeBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeToken\", function() { return CodeToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Syntax; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ \"./formats/code.js\");\n/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clipboard */ \"./modules/clipboard.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst TokenAttributor = new parchment__WEBPACK_IMPORTED_MODULE_1__[\"ClassAttributor\"]('code-token', 'hljs', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].INLINE\n});\n\nclass CodeToken extends _blots_inline__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  static formats(node, scroll) {\n    while (node != null && node !== scroll.domNode) {\n      if (node.classList && node.classList.contains(_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].className)) {\n        return super.formats(node, scroll);\n      }\n\n      node = node.parentNode;\n    }\n\n    return undefined;\n  }\n\n  constructor(scroll, domNode, value) {\n    super(scroll, domNode, value);\n    TokenAttributor.add(this.domNode, value);\n  }\n\n  format(format, value) {\n    if (format !== CodeToken.blotName) {\n      super.format(format, value);\n    } else if (value) {\n      TokenAttributor.add(this.domNode, value);\n    } else {\n      TokenAttributor.remove(this.domNode);\n      this.domNode.classList.remove(this.statics.className);\n    }\n  }\n\n  optimize(...args) {\n    super.optimize(...args);\n\n    if (!TokenAttributor.value(this.domNode)) {\n      this.unwrap();\n    }\n  }\n\n}\n\nCodeToken.blotName = 'code-token';\nCodeToken.className = 'ql-token';\n\nclass SyntaxCodeBlock extends _formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"] {\n  static create(value) {\n    const domNode = super.create(value);\n\n    if (typeof value === 'string') {\n      domNode.setAttribute('data-language', value);\n    }\n\n    return domNode;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('data-language') || 'plain';\n  }\n\n  static register() {} // Syntax module will register\n\n\n  format(name, value) {\n    if (name === this.statics.blotName && value) {\n      this.domNode.setAttribute('data-language', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  replaceWith(name, value) {\n    this.formatAt(0, this.length(), CodeToken.blotName, false);\n    return super.replaceWith(name, value);\n  }\n\n}\n\nclass SyntaxCodeBlockContainer extends _formats_code__WEBPACK_IMPORTED_MODULE_9__[\"CodeBlockContainer\"] {\n  attach() {\n    super.attach();\n    this.forceNext = false;\n    this.scroll.emitMount(this);\n  }\n\n  format(name, value) {\n    if (name === SyntaxCodeBlock.blotName) {\n      this.forceNext = true;\n      this.children.forEach(child => {\n        child.format(name, value);\n      });\n    }\n  }\n\n  formatAt(index, length, name, value) {\n    if (name === SyntaxCodeBlock.blotName) {\n      this.forceNext = true;\n    }\n\n    super.formatAt(index, length, name, value);\n  }\n\n  highlight(highlight, forced = false) {\n    if (this.children.head == null) return;\n    const nodes = Array.from(this.domNode.childNodes).filter(node => node !== this.uiNode);\n    const text = \"\".concat(nodes.map(node => node.textContent).join('\\n'), \"\\n\");\n    const language = SyntaxCodeBlock.formats(this.children.head.domNode);\n\n    if (forced || this.forceNext || this.cachedText !== text) {\n      if (text.trim().length > 0 || this.cachedText == null) {\n        const oldDelta = this.children.reduce((delta, child) => {\n          return delta.concat(Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"blockDelta\"])(child, false));\n        }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());\n        const delta = highlight(text, language);\n        oldDelta.diff(delta).reduce((index, {\n          retain,\n          attributes\n        }) => {\n          // Should be all retains\n          if (!retain) return index;\n\n          if (attributes) {\n            Object.keys(attributes).forEach(format => {\n              if ([SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)) {\n                this.formatAt(index, retain, format, attributes[format]);\n              }\n            });\n          }\n\n          return index + retain;\n        }, 0);\n      }\n\n      this.cachedText = text;\n      this.forceNext = false;\n    }\n  }\n\n  optimize(context) {\n    super.optimize(context);\n\n    if (this.parent != null && this.children.head != null && this.uiNode != null) {\n      const language = SyntaxCodeBlock.formats(this.children.head.domNode);\n\n      if (language !== this.uiNode.value) {\n        this.uiNode.value = language;\n      }\n    }\n  }\n\n}\n\nSyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];\nSyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;\nSyntaxCodeBlock.allowedChildren = [CodeToken, _blots_cursor__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _blots_text__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _blots_break__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n\nclass Syntax extends _core_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(CodeToken, true);\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(SyntaxCodeBlock, true);\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(SyntaxCodeBlockContainer, true);\n  }\n\n  constructor(quill, options) {\n    super(quill, options);\n\n    if (this.options.hljs == null) {\n      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');\n    }\n\n    this.languages = this.options.languages.reduce((memo, {\n      key\n    }) => {\n      memo[key] = true;\n      return memo;\n    }, {});\n    this.highlightBlot = this.highlightBlot.bind(this);\n    this.initListener();\n    this.initTimer();\n  }\n\n  initListener() {\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_BLOT_MOUNT, blot => {\n      if (!(blot instanceof SyntaxCodeBlockContainer)) return;\n      const select = this.quill.root.ownerDocument.createElement('select');\n      this.options.languages.forEach(({\n        key,\n        label\n      }) => {\n        const option = select.ownerDocument.createElement('option');\n        option.textContent = label;\n        option.setAttribute('value', key);\n        select.appendChild(option);\n      });\n      select.addEventListener('change', () => {\n        blot.format(SyntaxCodeBlock.blotName, select.value);\n        this.quill.root.focus(); // Prevent scrolling\n\n        this.highlight(blot, true);\n      });\n\n      if (blot.uiNode == null) {\n        blot.attachUI(select);\n\n        if (blot.children.head) {\n          select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);\n        }\n      }\n    });\n  }\n\n  initTimer() {\n    let timer = null;\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      clearTimeout(timer);\n      timer = setTimeout(() => {\n        this.highlight();\n        timer = null;\n      }, this.options.interval);\n    });\n  }\n\n  highlight(blot = null, force = false) {\n    if (this.quill.selection.composing) return;\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER);\n    const range = this.quill.getSelection();\n    const blots = blot == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [blot];\n    blots.forEach(container => {\n      container.highlight(this.highlightBlot, force);\n    });\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n\n    if (range != null) {\n      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n    }\n  }\n\n  highlightBlot(text, language = 'plain') {\n    language = this.languages[language] ? language : 'plain';\n\n    if (language === 'plain') {\n      return Object(_blots_text__WEBPACK_IMPORTED_MODULE_8__[\"escapeText\"])(text).split('\\n').reduce((delta, line, i) => {\n        if (i !== 0) {\n          delta.insert('\\n', {\n            [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: language\n          });\n        }\n\n        return delta.insert(line);\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());\n    }\n\n    const container = this.quill.root.ownerDocument.createElement('div');\n    container.classList.add(_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].className);\n    container.innerHTML = this.options.hljs.highlight(language, text).value;\n    return Object(_clipboard__WEBPACK_IMPORTED_MODULE_10__[\"traverse\"])(this.quill.scroll, container, [(node, delta) => {\n      const value = TokenAttributor.value(node);\n\n      if (value) {\n        return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(delta.length(), {\n          [CodeToken.blotName]: value\n        }));\n      }\n\n      return delta;\n    }], [(node, delta) => {\n      return node.data.split('\\n').reduce((memo, nodeText, i) => {\n        if (i !== 0) memo.insert('\\n', {\n          [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: language\n        });\n        return memo.insert(nodeText);\n      }, delta);\n    }], new WeakMap());\n  }\n\n}\n\nSyntax.DEFAULTS = {\n  hljs: (() => {\n    return window.hljs;\n  })(),\n  interval: 1000,\n  languages: [{\n    key: 'plain',\n    label: 'Plain'\n  }, {\n    key: 'bash',\n    label: 'Bash'\n  }, {\n    key: 'cpp',\n    label: 'C++'\n  }, {\n    key: 'cs',\n    label: 'C#'\n  }, {\n    key: 'css',\n    label: 'CSS'\n  }, {\n    key: 'diff',\n    label: 'Diff'\n  }, {\n    key: 'xml',\n    label: 'HTML/XML'\n  }, {\n    key: 'java',\n    label: 'Java'\n  }, {\n    key: 'javascript',\n    label: 'Javascript'\n  }, {\n    key: 'markdown',\n    label: 'Markdown'\n  }, {\n    key: 'php',\n    label: 'PHP'\n  }, {\n    key: 'python',\n    label: 'Python'\n  }, {\n    key: 'ruby',\n    label: 'Ruby'\n  }, {\n    key: 'sql',\n    label: 'SQL'\n  }]\n};\n\n\n//# sourceURL=webpack://Quill/./modules/syntax.js?");

/***/ }),

/***/ "./modules/table.js":
/*!**************************!*\
  !*** ./modules/table.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _formats_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/table */ \"./formats/table.js\");\n\n\n\n\n\nclass Table extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableCell\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableRow\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableBody\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableContainer\"]);\n  }\n\n  constructor(...args) {\n    super(...args);\n    this.listenBalanceCells();\n  }\n\n  balanceTables() {\n    this.quill.scroll.descendants(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableContainer\"]).forEach(table => {\n      table.balanceCells();\n    });\n  }\n\n  deleteColumn() {\n    const [table,, cell] = this.getTable();\n    if (cell == null) return;\n    table.deleteColumn(cell.cellOffset());\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n  }\n\n  deleteRow() {\n    const [, row] = this.getTable();\n    if (row == null) return;\n    row.remove();\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n  }\n\n  deleteTable() {\n    const [table] = this.getTable();\n    if (table == null) return;\n    const offset = table.offset();\n    table.remove();\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.quill.setSelection(offset, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n  }\n\n  getTable(range = this.quill.getSelection()) {\n    if (range == null) return [null, null, null, -1];\n    const [cell, offset] = this.quill.getLine(range.index);\n\n    if (cell == null || cell.statics.blotName !== _formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableCell\"].blotName) {\n      return [null, null, null, -1];\n    }\n\n    const row = cell.parent;\n    const table = row.parent.parent;\n    return [table, row, cell, offset];\n  }\n\n  insertColumn(offset) {\n    const range = this.quill.getSelection();\n    const [table, row, cell] = this.getTable(range);\n    if (cell == null) return;\n    const column = cell.cellOffset();\n    table.insertColumn(column + offset);\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    let shift = row.rowOffset();\n\n    if (offset === 0) {\n      shift += 1;\n    }\n\n    this.quill.setSelection(range.index + shift, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n  }\n\n  insertColumnLeft() {\n    this.insertColumn(0);\n  }\n\n  insertColumnRight() {\n    this.insertColumn(1);\n  }\n\n  insertRow(offset) {\n    const range = this.quill.getSelection();\n    const [table, row, cell] = this.getTable(range);\n    if (cell == null) return;\n    const index = row.rowOffset();\n    table.insertRow(index + offset);\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n\n    if (offset > 0) {\n      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    } else {\n      this.quill.setSelection(range.index + row.children.length, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    }\n  }\n\n  insertRowAbove() {\n    this.insertRow(0);\n  }\n\n  insertRowBelow() {\n    this.insertRow(1);\n  }\n\n  insertTable(rows, columns) {\n    const range = this.quill.getSelection();\n    if (range == null) return;\n    const delta = new Array(rows).fill(0).reduce(memo => {\n      const text = new Array(columns).fill('\\n').join('');\n      return memo.insert(text, {\n        table: Object(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"tableId\"])()\n      });\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index));\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    this.balanceTables();\n  }\n\n  listenBalanceCells() {\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, mutations => {\n      mutations.some(mutation => {\n        if (['TD', 'TR', 'TBODY', 'TABLE'].includes(mutation.target.tagName)) {\n          this.quill.once(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.TEXT_CHANGE, (delta, old, source) => {\n            if (source !== _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) return;\n            this.balanceTables();\n          });\n          return true;\n        }\n\n        return false;\n      });\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\n//# sourceURL=webpack://Quill/./modules/table.js?");

/***/ }),

/***/ "./modules/toolbar.js":
/*!****************************!*\
  !*** ./modules/toolbar.js ***!
  \****************************/
/*! exports provided: default, addControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toolbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addControls\", function() { return addControls; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('quill:toolbar');\n\nclass Toolbar extends _core_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n\n    if (Array.isArray(this.options.container)) {\n      const container = document.createElement('div');\n      addControls(container, this.options.container);\n      quill.container.parentNode.insertBefore(container, quill.container);\n      this.container = container;\n    } else if (typeof this.options.container === 'string') {\n      this.container = document.querySelector(this.options.container);\n    } else {\n      this.container = this.options.container;\n    }\n\n    if (!(this.container instanceof HTMLElement)) {\n      return debug.error('Container required for toolbar', this.options);\n    }\n\n    this.container.classList.add('ql-toolbar');\n    this.controls = [];\n    this.handlers = {};\n    Object.keys(this.options.handlers).forEach(format => {\n      this.addHandler(format, this.options.handlers[format]);\n    });\n    Array.from(this.container.querySelectorAll('button, select')).forEach(input => {\n      this.attach(input);\n    });\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.EDITOR_CHANGE, (type, range) => {\n      if (type === _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.SELECTION_CHANGE) {\n        this.update(range);\n      }\n    });\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      const [range] = this.quill.selection.getRange(); // quill.getSelection triggers update\n\n      this.update(range);\n    });\n  }\n\n  addHandler(format, handler) {\n    this.handlers[format] = handler;\n  }\n\n  attach(input) {\n    let format = Array.from(input.classList).find(className => {\n      return className.indexOf('ql-') === 0;\n    });\n    if (!format) return;\n    format = format.slice('ql-'.length);\n\n    if (input.tagName === 'BUTTON') {\n      input.setAttribute('type', 'button');\n    }\n\n    if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {\n      debug.warn('ignoring attaching to nonexistent format', format, input);\n      return;\n    }\n\n    const eventName = input.tagName === 'SELECT' ? 'change' : 'click';\n    input.addEventListener(eventName, e => {\n      let value;\n\n      if (input.tagName === 'SELECT') {\n        if (input.selectedIndex < 0) return;\n        const selected = input.options[input.selectedIndex];\n\n        if (selected.hasAttribute('selected')) {\n          value = false;\n        } else {\n          value = selected.value || false;\n        }\n      } else {\n        if (input.classList.contains('ql-active')) {\n          value = false;\n        } else {\n          value = input.value || !input.hasAttribute('value');\n        }\n\n        e.preventDefault();\n      }\n\n      this.quill.focus();\n      const [range] = this.quill.selection.getRange();\n\n      if (this.handlers[format] != null) {\n        this.handlers[format].call(this, value);\n      } else if (this.quill.scroll.query(format).prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_1__[\"EmbedBlot\"]) {\n        value = prompt(\"Enter \".concat(format)); // eslint-disable-line no-alert\n\n        if (!value) return;\n        this.quill.updateContents(new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length).insert({\n          [format]: value\n        }), _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      } else {\n        this.quill.format(format, value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n\n      this.update(range);\n    });\n    this.controls.push([format, input]);\n  }\n\n  update(range) {\n    const formats = range == null ? {} : this.quill.getFormat(range);\n    this.controls.forEach(pair => {\n      const [format, input] = pair;\n\n      if (input.tagName === 'SELECT') {\n        let option;\n\n        if (range == null) {\n          option = null;\n        } else if (formats[format] == null) {\n          option = input.querySelector('option[selected]');\n        } else if (!Array.isArray(formats[format])) {\n          let value = formats[format];\n\n          if (typeof value === 'string') {\n            value = value.replace(/\"/g, '\\\\\"');\n          }\n\n          option = input.querySelector(\"option[value=\\\"\".concat(value, \"\\\"]\"));\n        }\n\n        if (option == null) {\n          input.value = ''; // TODO make configurable?\n\n          input.selectedIndex = -1;\n        } else {\n          option.selected = true;\n        }\n      } else if (range == null) {\n        input.classList.remove('ql-active');\n      } else if (input.hasAttribute('value')) {\n        // both being null should match (default values)\n        // '1' should match with 1 (headers)\n        const isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');\n        input.classList.toggle('ql-active', isActive);\n      } else {\n        input.classList.toggle('ql-active', formats[format] != null);\n      }\n    });\n  }\n\n}\n\nToolbar.DEFAULTS = {};\n\nfunction addButton(container, format, value) {\n  const input = document.createElement('button');\n  input.setAttribute('type', 'button');\n  input.classList.add(\"ql-\".concat(format));\n\n  if (value != null) {\n    input.value = value;\n  }\n\n  container.appendChild(input);\n}\n\nfunction addControls(container, groups) {\n  if (!Array.isArray(groups[0])) {\n    groups = [groups];\n  }\n\n  groups.forEach(controls => {\n    const group = document.createElement('span');\n    group.classList.add('ql-formats');\n    controls.forEach(control => {\n      if (typeof control === 'string') {\n        addButton(group, control);\n      } else {\n        const format = Object.keys(control)[0];\n        const value = control[format];\n\n        if (Array.isArray(value)) {\n          addSelect(group, format, value);\n        } else {\n          addButton(group, format, value);\n        }\n      }\n    });\n    container.appendChild(group);\n  });\n}\n\nfunction addSelect(container, format, values) {\n  const input = document.createElement('select');\n  input.classList.add(\"ql-\".concat(format));\n  values.forEach(value => {\n    const option = document.createElement('option');\n\n    if (value !== false) {\n      option.setAttribute('value', value);\n    } else {\n      option.setAttribute('selected', 'selected');\n    }\n\n    input.appendChild(option);\n  });\n  container.appendChild(input);\n}\n\nToolbar.DEFAULTS = {\n  container: null,\n  handlers: {\n    clean() {\n      const range = this.quill.getSelection();\n      if (range == null) return;\n\n      if (range.length === 0) {\n        const formats = this.quill.getFormat();\n        Object.keys(formats).forEach(name => {\n          // Clean functionality in existing apps only clean inline formats\n          if (this.quill.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].INLINE) != null) {\n            this.quill.format(name, false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n          }\n        });\n      } else {\n        this.quill.removeFormat(range, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    },\n\n    direction(value) {\n      const {\n        align\n      } = this.quill.getFormat();\n\n      if (value === 'rtl' && align == null) {\n        this.quill.format('align', 'right', _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      } else if (!value && align === 'right') {\n        this.quill.format('align', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n\n      this.quill.format('direction', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n    },\n\n    indent(value) {\n      const range = this.quill.getSelection();\n      const formats = this.quill.getFormat(range);\n      const indent = parseInt(formats.indent || 0, 10);\n\n      if (value === '+1' || value === '-1') {\n        let modifier = value === '+1' ? 1 : -1;\n        if (formats.direction === 'rtl') modifier *= -1;\n        this.quill.format('indent', indent + modifier, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    },\n\n    link(value) {\n      if (value === true) {\n        value = prompt('Enter link URL:'); // eslint-disable-line no-alert\n      }\n\n      this.quill.format('link', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n    },\n\n    list(value) {\n      const range = this.quill.getSelection();\n      const formats = this.quill.getFormat(range);\n\n      if (value === 'check') {\n        if (formats.list === 'checked' || formats.list === 'unchecked') {\n          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n        } else {\n          this.quill.format('list', 'unchecked', _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n        }\n      } else {\n        this.quill.format('list', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    }\n\n  }\n};\n\n\n//# sourceURL=webpack://Quill/./modules/toolbar.js?");

/***/ }),

/***/ "./modules/uploader.js":
/*!*****************************!*\
  !*** ./modules/uploader.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\nclass Uploader extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    quill.root.addEventListener('drop', e => {\n      e.preventDefault();\n      let native;\n\n      if (document.caretRangeFromPoint) {\n        native = document.caretRangeFromPoint(e.clientX, e.clientY);\n      } else if (document.caretPositionFromPoint) {\n        const position = document.caretPositionFromPoint(e.clientX, e.clientY);\n        native = document.createRange();\n        native.setStart(position.offsetNode, position.offset);\n        native.setEnd(position.offsetNode, position.offset);\n      } else {\n        return;\n      }\n\n      const normalized = quill.selection.normalizeNative(native);\n      const range = quill.selection.normalizedToRange(normalized);\n      this.upload(range, e.dataTransfer.files);\n    });\n  }\n\n  upload(range, files) {\n    const uploads = [];\n    Array.from(files).forEach(file => {\n      if (file && this.options.mimetypes.includes(file.type)) {\n        uploads.push(file);\n      }\n    });\n\n    if (uploads.length > 0) {\n      this.options.handler.call(this, range, uploads);\n    }\n  }\n\n}\n\nUploader.DEFAULTS = {\n  mimetypes: ['image/png', 'image/jpeg'],\n\n  handler(range, files) {\n    const promises = files.map(file => {\n      return new Promise(resolve => {\n        const reader = new FileReader();\n\n        reader.onload = e => {\n          resolve(e.target.result);\n        };\n\n        reader.readAsDataURL(file);\n      });\n    });\n    Promise.all(promises).then(images => {\n      const update = images.reduce((delta, image) => {\n        return delta.insert({\n          image\n        });\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length));\n      this.quill.updateContents(update, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n      this.quill.setSelection(range.index + images.length, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    });\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Uploader);\n\n//# sourceURL=webpack://Quill/./modules/uploader.js?");

/***/ }),

/***/ "./node_modules/array-filter/index.js":
/*!********************************************!*\
  !*** ./node_modules/array-filter/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * Array#filter.\n *\n * @param {Array} arr\n * @param {Function} fn\n * @param {Object=} self\n * @return {Array}\n * @throw TypeError\n */\n\nmodule.exports = function (arr, fn, self) {\n  if (arr.filter) return arr.filter(fn, self);\n  if (void 0 === arr || null === arr) throw new TypeError;\n  if ('function' != typeof fn) throw new TypeError;\n  var ret = [];\n  for (var i = 0; i < arr.length; i++) {\n    if (!hasOwn.call(arr, i)) continue;\n    var val = arr[i];\n    if (fn.call(self, val, i, arr)) ret.push(val);\n  }\n  return ret;\n};\n\nvar hasOwn = Object.prototype.hasOwnProperty;\n\n\n//# sourceURL=webpack://Quill/./node_modules/array-filter/index.js?");

/***/ }),

/***/ "./node_modules/available-typed-arrays/index.js":
/*!******************************************************!*\
  !*** ./node_modules/available-typed-arrays/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar filter = __webpack_require__(/*! array-filter */ \"./node_modules/array-filter/index.js\");\n\nmodule.exports = function availableTypedArrays() {\n\treturn filter([\n\t\t'BigInt64Array',\n\t\t'BigUint64Array',\n\t\t'Float32Array',\n\t\t'Float64Array',\n\t\t'Int16Array',\n\t\t'Int32Array',\n\t\t'Int8Array',\n\t\t'Uint16Array',\n\t\t'Uint32Array',\n\t\t'Uint8Array',\n\t\t'Uint8ClampedArray'\n\t], function (typedArray) {\n\t\treturn typeof global[typedArray] === 'function';\n\t});\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/available-typed-arrays/index.js?");

/***/ }),

/***/ "./node_modules/clone/clone.js":
/*!*************************************!*\
  !*** ./node_modules/clone/clone.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var clone = (function() {\n'use strict';\n\nfunction _instanceof(obj, type) {\n  return type != null && obj instanceof type;\n}\n\nvar nativeMap;\ntry {\n  nativeMap = Map;\n} catch(_) {\n  // maybe a reference error because no `Map`. Give it a dummy value that no\n  // value will ever be an instanceof.\n  nativeMap = function() {};\n}\n\nvar nativeSet;\ntry {\n  nativeSet = Set;\n} catch(_) {\n  nativeSet = function() {};\n}\n\nvar nativePromise;\ntry {\n  nativePromise = Promise;\n} catch(_) {\n  nativePromise = function() {};\n}\n\n/**\n * Clones (copies) an Object using deep copying.\n *\n * This function supports circular references by default, but if you are certain\n * there are no circular references in your object, you can save some CPU time\n * by calling clone(obj, false).\n *\n * Caution: if `circular` is false and `parent` contains circular references,\n * your program may enter an infinite loop and crash.\n *\n * @param `parent` - the object to be cloned\n * @param `circular` - set to true if the object to be cloned may contain\n *    circular references. (optional - true by default)\n * @param `depth` - set to a number if the object is only to be cloned to\n *    a particular depth. (optional - defaults to Infinity)\n * @param `prototype` - sets the prototype to be used when cloning an object.\n *    (optional - defaults to parent prototype).\n * @param `includeNonEnumerable` - set to true if the non-enumerable properties\n *    should be cloned as well. Non-enumerable properties on the prototype\n *    chain will be ignored. (optional - false by default)\n*/\nfunction clone(parent, circular, depth, prototype, includeNonEnumerable) {\n  if (typeof circular === 'object') {\n    depth = circular.depth;\n    prototype = circular.prototype;\n    includeNonEnumerable = circular.includeNonEnumerable;\n    circular = circular.circular;\n  }\n  // maintain two arrays for circular references, where corresponding parents\n  // and children have the same index\n  var allParents = [];\n  var allChildren = [];\n\n  var useBuffer = typeof Buffer != 'undefined';\n\n  if (typeof circular == 'undefined')\n    circular = true;\n\n  if (typeof depth == 'undefined')\n    depth = Infinity;\n\n  // recurse this function so we don't reset allParents and allChildren\n  function _clone(parent, depth) {\n    // cloning null always returns null\n    if (parent === null)\n      return null;\n\n    if (depth === 0)\n      return parent;\n\n    var child;\n    var proto;\n    if (typeof parent != 'object') {\n      return parent;\n    }\n\n    if (_instanceof(parent, nativeMap)) {\n      child = new nativeMap();\n    } else if (_instanceof(parent, nativeSet)) {\n      child = new nativeSet();\n    } else if (_instanceof(parent, nativePromise)) {\n      child = new nativePromise(function (resolve, reject) {\n        parent.then(function(value) {\n          resolve(_clone(value, depth - 1));\n        }, function(err) {\n          reject(_clone(err, depth - 1));\n        });\n      });\n    } else if (clone.__isArray(parent)) {\n      child = [];\n    } else if (clone.__isRegExp(parent)) {\n      child = new RegExp(parent.source, __getRegExpFlags(parent));\n      if (parent.lastIndex) child.lastIndex = parent.lastIndex;\n    } else if (clone.__isDate(parent)) {\n      child = new Date(parent.getTime());\n    } else if (useBuffer && Buffer.isBuffer(parent)) {\n      if (Buffer.allocUnsafe) {\n        // Node.js >= 4.5.0\n        child = Buffer.allocUnsafe(parent.length);\n      } else {\n        // Older Node.js versions\n        child = new Buffer(parent.length);\n      }\n      parent.copy(child);\n      return child;\n    } else if (_instanceof(parent, Error)) {\n      child = Object.create(parent);\n    } else {\n      if (typeof prototype == 'undefined') {\n        proto = Object.getPrototypeOf(parent);\n        child = Object.create(proto);\n      }\n      else {\n        child = Object.create(prototype);\n        proto = prototype;\n      }\n    }\n\n    if (circular) {\n      var index = allParents.indexOf(parent);\n\n      if (index != -1) {\n        return allChildren[index];\n      }\n      allParents.push(parent);\n      allChildren.push(child);\n    }\n\n    if (_instanceof(parent, nativeMap)) {\n      parent.forEach(function(value, key) {\n        var keyChild = _clone(key, depth - 1);\n        var valueChild = _clone(value, depth - 1);\n        child.set(keyChild, valueChild);\n      });\n    }\n    if (_instanceof(parent, nativeSet)) {\n      parent.forEach(function(value) {\n        var entryChild = _clone(value, depth - 1);\n        child.add(entryChild);\n      });\n    }\n\n    for (var i in parent) {\n      var attrs;\n      if (proto) {\n        attrs = Object.getOwnPropertyDescriptor(proto, i);\n      }\n\n      if (attrs && attrs.set == null) {\n        continue;\n      }\n      child[i] = _clone(parent[i], depth - 1);\n    }\n\n    if (Object.getOwnPropertySymbols) {\n      var symbols = Object.getOwnPropertySymbols(parent);\n      for (var i = 0; i < symbols.length; i++) {\n        // Don't need to worry about cloning a symbol because it is a primitive,\n        // like a number or string.\n        var symbol = symbols[i];\n        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);\n        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {\n          continue;\n        }\n        child[symbol] = _clone(parent[symbol], depth - 1);\n        if (!descriptor.enumerable) {\n          Object.defineProperty(child, symbol, {\n            enumerable: false\n          });\n        }\n      }\n    }\n\n    if (includeNonEnumerable) {\n      var allPropertyNames = Object.getOwnPropertyNames(parent);\n      for (var i = 0; i < allPropertyNames.length; i++) {\n        var propertyName = allPropertyNames[i];\n        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);\n        if (descriptor && descriptor.enumerable) {\n          continue;\n        }\n        child[propertyName] = _clone(parent[propertyName], depth - 1);\n        Object.defineProperty(child, propertyName, {\n          enumerable: false\n        });\n      }\n    }\n\n    return child;\n  }\n\n  return _clone(parent, depth);\n}\n\n/**\n * Simple flat clone using prototype, accepts only objects, usefull for property\n * override on FLAT configuration object (no nested props).\n *\n * USE WITH CAUTION! This may not behave as you wish if you do not know how this\n * works.\n */\nclone.clonePrototype = function clonePrototype(parent) {\n  if (parent === null)\n    return null;\n\n  var c = function () {};\n  c.prototype = parent;\n  return new c();\n};\n\n// private utility functions\n\nfunction __objToStr(o) {\n  return Object.prototype.toString.call(o);\n}\nclone.__objToStr = __objToStr;\n\nfunction __isDate(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object Date]';\n}\nclone.__isDate = __isDate;\n\nfunction __isArray(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object Array]';\n}\nclone.__isArray = __isArray;\n\nfunction __isRegExp(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';\n}\nclone.__isRegExp = __isRegExp;\n\nfunction __getRegExpFlags(re) {\n  var flags = '';\n  if (re.global) flags += 'g';\n  if (re.ignoreCase) flags += 'i';\n  if (re.multiline) flags += 'm';\n  return flags;\n}\nclone.__getRegExpFlags = __getRegExpFlags;\n\nreturn clone;\n})();\n\nif (typeof module === 'object' && module.exports) {\n  module.exports = clone;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/clone/clone.js?");

/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/*!******************************************!*\
  !*** ./node_modules/deep-equal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar objectKeys = __webpack_require__(/*! object-keys */ \"./node_modules/deep-equal/node_modules/object-keys/index.js\");\nvar isArguments = __webpack_require__(/*! is-arguments */ \"./node_modules/is-arguments/index.js\");\nvar is = __webpack_require__(/*! object-is */ \"./node_modules/object-is/index.js\");\nvar isRegex = __webpack_require__(/*! is-regex */ \"./node_modules/deep-equal/node_modules/is-regex/index.js\");\nvar flags = __webpack_require__(/*! regexp.prototype.flags */ \"./node_modules/regexp.prototype.flags/index.js\");\nvar isArray = __webpack_require__(/*! isarray */ \"./node_modules/deep-equal/node_modules/isarray/index.js\");\nvar isDate = __webpack_require__(/*! is-date-object */ \"./node_modules/deep-equal/node_modules/is-date-object/index.js\");\nvar whichBoxedPrimitive = __webpack_require__(/*! which-boxed-primitive */ \"./node_modules/which-boxed-primitive/index.js\");\nvar GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ \"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js\");\nvar whichCollection = __webpack_require__(/*! which-collection */ \"./node_modules/which-collection/index.js\");\nvar getIterator = __webpack_require__(/*! es-get-iterator */ \"./node_modules/es-get-iterator/index.js\");\nvar getSideChannel = __webpack_require__(/*! side-channel */ \"./node_modules/side-channel/index.js\");\nvar whichTypedArray = __webpack_require__(/*! which-typed-array */ \"./node_modules/which-typed-array/index.js\");\nvar assign = __webpack_require__(/*! object.assign */ \"./node_modules/object.assign/index.js\");\n\nvar $getTime = callBound('Date.prototype.getTime');\nvar gPO = Object.getPrototypeOf;\nvar $objToString = callBound('Object.prototype.toString');\n\nvar $Set = GetIntrinsic('%Set%', true);\nvar $mapHas = callBound('Map.prototype.has', true);\nvar $mapGet = callBound('Map.prototype.get', true);\nvar $mapSize = callBound('Map.prototype.size', true);\nvar $setAdd = callBound('Set.prototype.add', true);\nvar $setDelete = callBound('Set.prototype.delete', true);\nvar $setHas = callBound('Set.prototype.has', true);\nvar $setSize = callBound('Set.prototype.size', true);\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414\nfunction setHasEqualElement(set, val1, opts, channel) {\n  var i = getIterator(set);\n  var result;\n  while ((result = i.next()) && !result.done) {\n    if (internalDeepEqual(val1, result.value, opts, channel)) { // eslint-disable-line no-use-before-define\n      // Remove the matching element to make sure we do not check that again.\n      $setDelete(set, result.value);\n      return true;\n    }\n  }\n\n  return false;\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439\nfunction findLooseMatchingPrimitives(prim) {\n  if (typeof prim === 'undefined') {\n    return null;\n  }\n  if (typeof prim === 'object') { // Only pass in null as object!\n    return void 0;\n  }\n  if (typeof prim === 'symbol') {\n    return false;\n  }\n  if (typeof prim === 'string' || typeof prim === 'number') {\n    // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.\n    return +prim === +prim; // eslint-disable-line no-implicit-coercion\n  }\n  return true;\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460\nfunction mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {\n  var altValue = findLooseMatchingPrimitives(prim);\n  if (altValue != null) {\n    return altValue;\n  }\n  var curB = $mapGet(b, altValue);\n  var looseOpts = assign({}, opts, { strict: false });\n  if (\n    (typeof curB === 'undefined' && !$mapHas(b, altValue))\n    // eslint-disable-next-line no-use-before-define\n    || !internalDeepEqual(item, curB, looseOpts, channel)\n  ) {\n    return false;\n  }\n  // eslint-disable-next-line no-use-before-define\n  return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447\nfunction setMightHaveLoosePrim(a, b, prim) {\n  var altValue = findLooseMatchingPrimitives(prim);\n  if (altValue != null) {\n    return altValue;\n  }\n\n  return $setHas(b, altValue) && !$setHas(a, altValue);\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533\nfunction mapHasEqualEntry(set, map, key1, item1, opts, channel) {\n  var i = getIterator(set);\n  var result;\n  var key2;\n  while ((result = i.next()) && !result.done) {\n    key2 = result.value;\n    if (\n      // eslint-disable-next-line no-use-before-define\n      internalDeepEqual(key1, key2, opts, channel)\n      // eslint-disable-next-line no-use-before-define\n      && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)\n    ) {\n      $setDelete(set, key2);\n      return true;\n    }\n  }\n\n  return false;\n}\n\nfunction internalDeepEqual(actual, expected, options, channel) {\n  var opts = options || {};\n\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (opts.strict ? is(actual, expected) : actual === expected) {\n    return true;\n  }\n\n  var actualBoxed = whichBoxedPrimitive(actual);\n  var expectedBoxed = whichBoxedPrimitive(expected);\n  if (actualBoxed !== expectedBoxed) {\n    return false;\n  }\n\n  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.\n  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {\n    return opts.strict ? is(actual, expected) : actual == expected; // eslint-disable-line eqeqeq\n  }\n\n  /*\n   * 7.4. For all other Object pairs, including Array objects, equivalence is\n   * determined by having the same number of owned properties (as verified\n   * with Object.prototype.hasOwnProperty.call), the same set of keys\n   * (although not necessarily the same order), equivalent values for every\n   * corresponding key, and an identical 'prototype' property. Note: this\n   * accounts for both named and indexed properties on Arrays.\n   */\n  // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration\n\n  var hasActual = channel.has(actual);\n  var hasExpected = channel.has(expected);\n  var sentinel;\n  if (hasActual && hasExpected) {\n    if (channel.get(actual) === channel.get(expected)) {\n      return true;\n    }\n  } else {\n    sentinel = {};\n  }\n  if (!hasActual) { channel.set(actual, sentinel); }\n  if (!hasExpected) { channel.set(expected, sentinel); }\n\n  // eslint-disable-next-line no-use-before-define\n  return objEquiv(actual, expected, opts, channel);\n}\n\nfunction isBuffer(x) {\n  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {\n    return false;\n  }\n  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {\n    return false;\n  }\n  if (x.length > 0 && typeof x[0] !== 'number') {\n    return false;\n  }\n\n  return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));\n}\n\nfunction setEquiv(a, b, opts, channel) {\n  if ($setSize(a) !== $setSize(b)) {\n    return false;\n  }\n  var iA = getIterator(a);\n  var iB = getIterator(b);\n  var resultA;\n  var resultB;\n  var set;\n  while ((resultA = iA.next()) && !resultA.done) {\n    if (resultA.value && typeof resultA.value === 'object') {\n      if (!set) { set = new $Set(); }\n      $setAdd(set, resultA.value);\n    } else if (!$setHas(b, resultA.value)) {\n      if (opts.strict) { return false; }\n      if (!setMightHaveLoosePrim(a, b, resultA.value)) {\n        return false;\n      }\n      if (!set) { set = new $Set(); }\n      $setAdd(set, resultA.value);\n    }\n  }\n  if (set) {\n    while ((resultB = iB.next()) && !resultB.done) {\n      // We have to check if a primitive value is already matching and only if it's not, go hunting for it.\n      if (resultB.value && typeof resultB.value === 'object') {\n        if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {\n          return false;\n        }\n      } else if (\n        !opts.strict\n        && !$setHas(a, resultB.value)\n        && !setHasEqualElement(set, resultB.value, opts.strict, channel)\n      ) {\n        return false;\n      }\n    }\n    return $setSize(set) === 0;\n  }\n  return true;\n}\n\nfunction mapEquiv(a, b, opts, channel) {\n  if ($mapSize(a) !== $mapSize(b)) {\n    return false;\n  }\n  var iA = getIterator(a);\n  var iB = getIterator(b);\n  var resultA;\n  var resultB;\n  var set;\n  var key;\n  var item1;\n  var item2;\n  while ((resultA = iA.next()) && !resultA.done) {\n    key = resultA.value[0];\n    item1 = resultA.value[1];\n    if (key && typeof key === 'object') {\n      if (!set) { set = new $Set(); }\n      $setAdd(set, key);\n    } else {\n      item2 = $mapGet(b, key);\n      if ((typeof item2 === 'undefined' && !$mapHas(b, key)) || !internalDeepEqual(item1, item2, opts, channel)) {\n        if (opts.strict) {\n          return false;\n        }\n        if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {\n          return false;\n        }\n        if (!set) { set = new $Set(); }\n        $setAdd(set, key);\n      }\n    }\n  }\n\n  if (set) {\n    while ((resultB = iB.next()) && !resultB.done) {\n      key = resultB.value[0];\n      item2 = resultB.value[1];\n      if (key && typeof key === 'object') {\n        if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {\n          return false;\n        }\n      } else if (\n        !opts.strict\n        && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel))\n        && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, { strict: false }), channel)\n      ) {\n        return false;\n      }\n    }\n    return $setSize(set) === 0;\n  }\n  return true;\n}\n\nfunction objEquiv(a, b, opts, channel) {\n  /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5] */\n  var i, key;\n\n  if (typeof a !== typeof b) { return false; }\n  if (a == null || b == null) { return false; }\n\n  if ($objToString(a) !== $objToString(b)) { return false; }\n\n  if (isArguments(a) !== isArguments(b)) { return false; }\n\n  var aIsArray = isArray(a);\n  var bIsArray = isArray(b);\n  if (aIsArray !== bIsArray) { return false; }\n\n  // TODO: replace when a cross-realm brand check is available\n  var aIsError = a instanceof Error;\n  var bIsError = b instanceof Error;\n  if (aIsError !== bIsError) { return false; }\n  if (aIsError || bIsError) {\n    if (a.name !== b.name || a.message !== b.message) { return false; }\n  }\n\n  var aIsRegex = isRegex(a);\n  var bIsRegex = isRegex(b);\n  if (aIsRegex !== bIsRegex) { return false; }\n  if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {\n    return false;\n  }\n\n  var aIsDate = isDate(a);\n  var bIsDate = isDate(b);\n  if (aIsDate !== bIsDate) { return false; }\n  if (aIsDate || bIsDate) { // && would work too, because both are true or both false here\n    if ($getTime(a) !== $getTime(b)) { return false; }\n  }\n  if (opts.strict && gPO && gPO(a) !== gPO(b)) { return false; }\n\n  if (whichTypedArray(a) !== whichTypedArray(b)) {\n    return false;\n  }\n\n  var aIsBuffer = isBuffer(a);\n  var bIsBuffer = isBuffer(b);\n  if (aIsBuffer !== bIsBuffer) { return false; }\n  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here\n    if (a.length !== b.length) { return false; }\n    for (i = 0; i < a.length; i++) {\n      if (a[i] !== b[i]) { return false; }\n    }\n    return true;\n  }\n\n  if (typeof a !== typeof b) { return false; }\n\n  var ka = objectKeys(a);\n  var kb = objectKeys(b);\n  // having the same number of owned properties (keys incorporates hasOwnProperty)\n  if (ka.length !== kb.length) { return false; }\n\n  // the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  // ~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] != kb[i]) { return false; } // eslint-disable-line eqeqeq\n  }\n\n  // equivalent values for every corresponding key, and ~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!internalDeepEqual(a[key], b[key], opts, channel)) { return false; }\n  }\n\n  var aCollection = whichCollection(a);\n  var bCollection = whichCollection(b);\n  if (aCollection !== bCollection) {\n    return false;\n  }\n  if (aCollection === 'Set' || bCollection === 'Set') { // aCollection === bCollection\n    return setEquiv(a, b, opts, channel);\n  }\n  if (aCollection === 'Map') { // aCollection === bCollection\n    return mapEquiv(a, b, opts, channel);\n  }\n\n  return true;\n}\n\nmodule.exports = function deepEqual(a, b, opts) {\n  return internalDeepEqual(a, b, opts, getSideChannel());\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/index.js?");

/***/ }),

/***/ "./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js":
/*!**************************************************************************!*\
  !*** ./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js?");

/***/ }),

/***/ "./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js":
/*!******************************************************************************!*\
  !*** ./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js?");

/***/ }),

/***/ "./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js?");

/***/ }),

/***/ "./node_modules/deep-equal/node_modules/is-date-object/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/deep-equal/node_modules/is-date-object/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar getDay = Date.prototype.getDay;\nvar tryDateObject = function tryDateGetDayCall(value) {\n\ttry {\n\t\tgetDay.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar toStr = Object.prototype.toString;\nvar dateClass = '[object Date]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isDateObject(value) {\n\tif (typeof value !== 'object' || value === null) {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/is-date-object/index.js?");

/***/ }),

/***/ "./node_modules/deep-equal/node_modules/is-regex/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/deep-equal/node_modules/is-regex/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\nvar regexExec = RegExp.prototype.exec;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar tryRegexExecCall = function tryRegexExec(value) {\n\ttry {\n\t\tvar lastIndex = value.lastIndex;\n\t\tvalue.lastIndex = 0; // eslint-disable-line no-param-reassign\n\n\t\tregexExec.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t} finally {\n\t\tvalue.lastIndex = lastIndex; // eslint-disable-line no-param-reassign\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar regexClass = '[object RegExp]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isRegex(value) {\n\tif (!value || typeof value !== 'object') {\n\t\treturn false;\n\t}\n\tif (!hasToStringTag) {\n\t\treturn toStr.call(value) === regexClass;\n\t}\n\n\tvar descriptor = gOPD(value, 'lastIndex');\n\tvar hasLastIndexDataProperty = descriptor && has(descriptor, 'value');\n\tif (!hasLastIndexDataProperty) {\n\t\treturn false;\n\t}\n\n\treturn tryRegexExecCall(value);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/is-regex/index.js?");

/***/ }),

/***/ "./node_modules/deep-equal/node_modules/isarray/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/deep-equal/node_modules/isarray/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/isarray/index.js?");

/***/ }),

/***/ "./node_modules/deep-equal/node_modules/object-keys/implementation.js":
/*!****************************************************************************!*\
  !*** ./node_modules/deep-equal/node_modules/object-keys/implementation.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar keysShim;\nif (!Object.keys) {\n\t// modified from https://github.com/es-shims/es5-shim\n\tvar has = Object.prototype.hasOwnProperty;\n\tvar toStr = Object.prototype.toString;\n\tvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/deep-equal/node_modules/object-keys/isArguments.js\"); // eslint-disable-line global-require\n\tvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\tvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\n\tvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\n\tvar dontEnums = [\n\t\t'toString',\n\t\t'toLocaleString',\n\t\t'valueOf',\n\t\t'hasOwnProperty',\n\t\t'isPrototypeOf',\n\t\t'propertyIsEnumerable',\n\t\t'constructor'\n\t];\n\tvar equalsConstructorPrototype = function (o) {\n\t\tvar ctor = o.constructor;\n\t\treturn ctor && ctor.prototype === o;\n\t};\n\tvar excludedKeys = {\n\t\t$applicationCache: true,\n\t\t$console: true,\n\t\t$external: true,\n\t\t$frame: true,\n\t\t$frameElement: true,\n\t\t$frames: true,\n\t\t$innerHeight: true,\n\t\t$innerWidth: true,\n\t\t$onmozfullscreenchange: true,\n\t\t$onmozfullscreenerror: true,\n\t\t$outerHeight: true,\n\t\t$outerWidth: true,\n\t\t$pageXOffset: true,\n\t\t$pageYOffset: true,\n\t\t$parent: true,\n\t\t$scrollLeft: true,\n\t\t$scrollTop: true,\n\t\t$scrollX: true,\n\t\t$scrollY: true,\n\t\t$self: true,\n\t\t$webkitIndexedDB: true,\n\t\t$webkitStorageInfo: true,\n\t\t$window: true\n\t};\n\tvar hasAutomationEqualityBug = (function () {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined') { return false; }\n\t\tfor (var k in window) {\n\t\t\ttry {\n\t\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}());\n\tvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t}\n\t\ttry {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n\n\tkeysShim = function keys(object) {\n\t\tvar isObject = object !== null && typeof object === 'object';\n\t\tvar isFunction = toStr.call(object) === '[object Function]';\n\t\tvar isArguments = isArgs(object);\n\t\tvar isString = isObject && toStr.call(object) === '[object String]';\n\t\tvar theKeys = [];\n\n\t\tif (!isObject && !isFunction && !isArguments) {\n\t\t\tthrow new TypeError('Object.keys called on a non-object');\n\t\t}\n\n\t\tvar skipProto = hasProtoEnumBug && isFunction;\n\t\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\t\ttheKeys.push(String(i));\n\t\t\t}\n\t\t}\n\n\t\tif (isArguments && object.length > 0) {\n\t\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\t\ttheKeys.push(String(j));\n\t\t\t}\n\t\t} else {\n\t\t\tfor (var name in object) {\n\t\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\t\ttheKeys.push(String(name));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (hasDontEnumBug) {\n\t\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn theKeys;\n\t};\n}\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/implementation.js?");

/***/ }),

/***/ "./node_modules/deep-equal/node_modules/object-keys/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/deep-equal/node_modules/object-keys/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/deep-equal/node_modules/object-keys/isArguments.js\");\n\nvar origKeys = Object.keys;\nvar keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ \"./node_modules/deep-equal/node_modules/object-keys/implementation.js\");\n\nvar originalKeys = Object.keys;\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\tvar args = Object.keys(arguments);\n\t\t\treturn args && args.length === arguments.length;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t}\n\t\t\t\treturn originalKeys(object);\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/index.js?");

/***/ }),

/***/ "./node_modules/deep-equal/node_modules/object-keys/isArguments.js":
/*!*************************************************************************!*\
  !*** ./node_modules/deep-equal/node_modules/object-keys/isArguments.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/isArguments.js?");

/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar keys = __webpack_require__(/*! object-keys */ \"./node_modules/object-keys/index.js\");\nvar hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';\n\nvar toStr = Object.prototype.toString;\nvar concat = Array.prototype.concat;\nvar origDefineProperty = Object.defineProperty;\n\nvar isFunction = function (fn) {\n\treturn typeof fn === 'function' && toStr.call(fn) === '[object Function]';\n};\n\nvar arePropertyDescriptorsSupported = function () {\n\tvar obj = {};\n\ttry {\n\t\torigDefineProperty(obj, 'x', { enumerable: false, value: obj });\n\t\t// eslint-disable-next-line no-unused-vars, no-restricted-syntax\n\t\tfor (var _ in obj) { // jscs:ignore disallowUnusedVariables\n\t\t\treturn false;\n\t\t}\n\t\treturn obj.x === obj;\n\t} catch (e) { /* this is IE 8. */\n\t\treturn false;\n\t}\n};\nvar supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();\n\nvar defineProperty = function (object, name, value, predicate) {\n\tif (name in object && (!isFunction(predicate) || !predicate())) {\n\t\treturn;\n\t}\n\tif (supportsDescriptors) {\n\t\torigDefineProperty(object, name, {\n\t\t\tconfigurable: true,\n\t\t\tenumerable: false,\n\t\t\tvalue: value,\n\t\t\twritable: true\n\t\t});\n\t} else {\n\t\tobject[name] = value;\n\t}\n};\n\nvar defineProperties = function (object, map) {\n\tvar predicates = arguments.length > 2 ? arguments[2] : {};\n\tvar props = keys(map);\n\tif (hasSymbols) {\n\t\tprops = concat.call(props, Object.getOwnPropertySymbols(map));\n\t}\n\tfor (var i = 0; i < props.length; i += 1) {\n\t\tdefineProperty(object, props[i], map[props[i]], predicates[props[i]]);\n\t}\n};\n\ndefineProperties.supportsDescriptors = !!supportsDescriptors;\n\nmodule.exports = defineProperties;\n\n\n//# sourceURL=webpack://Quill/./node_modules/define-properties/index.js?");

/***/ }),

/***/ "./node_modules/es-get-iterator/index.js":
/*!***********************************************!*\
  !*** ./node_modules/es-get-iterator/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\n/* eslint global-require: 0 */\n// the code is structured this way so that bundlers can\n// alias out `has-symbols` to `() => true` or `() => false` if your target\n// environments' Symbol capabilities are known, and then use\n// dead code elimination on the rest of this module.\n//\n// Similarly, `isarray` can be aliased to `Array.isArray` if\n// available in all target environments.\n\nvar isArguments = __webpack_require__(/*! is-arguments */ \"./node_modules/is-arguments/index.js\");\n\nif (__webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")() || __webpack_require__(/*! has-symbols/shams */ \"./node_modules/has-symbols/shams.js\")()) {\n\tvar $iterator = Symbol.iterator;\n\t// Symbol is available natively or shammed\n\t// natively:\n\t//  - Chrome >= 38\n\t//  - Edge 12-14?, Edge >= 15 for sure\n\t//  - FF >= 36\n\t//  - Safari >= 9\n\t//  - node >= 0.12\n\tmodule.exports = function getIterator(iterable) {\n\t\t// alternatively, `iterable[$iterator]?.()`\n\t\tif (iterable != null && typeof iterable[$iterator] !== 'undefined') {\n\t\t\treturn iterable[$iterator]();\n\t\t}\n\t\tif (isArguments(iterable)) {\n\t\t\t// arguments objects lack Symbol.iterator\n\t\t\t// - node 0.12\n\t\t\treturn Array.prototype[$iterator].call(iterable);\n\t\t}\n\t};\n} else {\n\t// Symbol is not available, native or shammed\n\tvar isArray = __webpack_require__(/*! isarray */ \"./node_modules/es-get-iterator/node_modules/isarray/index.js\");\n\tvar isString = __webpack_require__(/*! is-string */ \"./node_modules/is-string/index.js\");\n\tvar GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ \"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js\");\n\tvar $Map = GetIntrinsic('%Map%', true);\n\tvar $Set = GetIntrinsic('%Set%', true);\n\tvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js\");\n\tvar $arrayPush = callBound('Array.prototype.push');\n\tvar $charCodeAt = callBound('String.prototype.charCodeAt');\n\tvar $stringSlice = callBound('String.prototype.slice');\n\n\tvar advanceStringIndex = function advanceStringIndex(S, index) {\n\t\tvar length = S.length;\n\t\tif ((index + 1) >= length) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\tvar first = $charCodeAt(S, index);\n\t\tif (first < 0xD800 || first > 0xDBFF) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\tvar second = $charCodeAt(S, index + 1);\n\t\tif (second < 0xDC00 || second > 0xDFFF) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\treturn index + 2;\n\t};\n\n\tvar getArrayIterator = function getArrayIterator(arraylike) {\n\t\tvar i = 0;\n\t\treturn {\n\t\t\tnext: function next() {\n\t\t\t\tvar done = i >= arraylike.length;\n\t\t\t\tvar value;\n\t\t\t\tif (!done) {\n\t\t\t\t\tvalue = arraylike[i];\n\t\t\t\t\ti += 1;\n\t\t\t\t}\n\t\t\t\treturn {\n\t\t\t\t\tdone: done,\n\t\t\t\t\tvalue: value\n\t\t\t\t};\n\t\t\t}\n\t\t};\n\t};\n\n\tvar getNonCollectionIterator = function getNonCollectionIterator(iterable) {\n\t\tif (isArray(iterable) || isArguments(iterable)) {\n\t\t\treturn getArrayIterator(iterable);\n\t\t}\n\t\tif (isString(iterable)) {\n\t\t\tvar i = 0;\n\t\t\treturn {\n\t\t\t\tnext: function next() {\n\t\t\t\t\tvar nextIndex = advanceStringIndex(iterable, i);\n\t\t\t\t\tvar value = $stringSlice(iterable, i, nextIndex);\n\t\t\t\t\ti = nextIndex;\n\t\t\t\t\treturn {\n\t\t\t\t\t\tdone: nextIndex > iterable.length,\n\t\t\t\t\t\tvalue: value\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t};\n\n\tif (!$Map && !$Set) {\n\t\t// the only language iterables are Array, String, arguments\n\t\t// - Safari <= 6.0\n\t\t// - Chrome < 38\n\t\t// - node < 0.12\n\t\t// - FF < 13\n\t\t// - IE < 11\n\t\t// - Edge < 11\n\n\t\tmodule.exports = getNonCollectionIterator;\n\t} else {\n\t\t// either Map or Set are available, but Symbol is not\n\t\t// - es6-shim on an ES5 browser\n\t\t// - Safari 6.2 (maybe 6.1?)\n\t\t// - FF v[13, 36)\n\t\t// - IE 11\n\t\t// - Edge 11\n\t\t// - Safari v[6, 9)\n\n\t\tvar isMap = __webpack_require__(/*! is-map */ \"./node_modules/is-map/index.js\");\n\t\tvar isSet = __webpack_require__(/*! is-set */ \"./node_modules/is-set/index.js\");\n\n\t\t// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach\n\t\tvar $mapForEach = callBound('Map.prototype.forEach', true);\n\t\tvar $setForEach = callBound('Set.prototype.forEach', true);\n\t\tif (typeof process === 'undefined' || !process.versions || !process.versions.node) { // \"if is not node\"\n\n\t\t\t// Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either\n\t\t\t// returns a value, or throws a StopIteration object. These browsers\n\t\t\t// do not have any other mechanism for iteration.\n\t\t\tvar $mapIterator = callBound('Map.prototype.iterator', true);\n\t\t\tvar $setIterator = callBound('Set.prototype.iterator', true);\n\t\t\tvar getStopIterationIterator = function (iterator) {\n\t\t\t\tvar done = false;\n\t\t\t\treturn {\n\t\t\t\t\tnext: function next() {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tdone: done,\n\t\t\t\t\t\t\t\tvalue: done ? undefined : iterator.next()\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\t\tdone = true;\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tdone: true,\n\t\t\t\t\t\t\t\tvalue: undefined\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t};\n\t\t}\n\t\t// Firefox 27-35, and some older es6-shim versions, use a string \"@@iterator\" property\n\t\t// this returns a proper iterator object, so we should use it instead of forEach.\n\t\t// newer es6-shim versions use a string \"_es6-shim iterator_\" property.\n\t\tvar $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);\n\t\tvar $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);\n\n\t\tvar getCollectionIterator = function getCollectionIterator(iterable) {\n\t\t\tif (isMap(iterable)) {\n\t\t\t\tif ($mapIterator) {\n\t\t\t\t\treturn getStopIterationIterator($mapIterator(iterable));\n\t\t\t\t}\n\t\t\t\tif ($mapAtAtIterator) {\n\t\t\t\t\treturn $mapAtAtIterator(iterable);\n\t\t\t\t}\n\t\t\t\tif ($mapForEach) {\n\t\t\t\t\tvar entries = [];\n\t\t\t\t\t$mapForEach(iterable, function (v, k) {\n\t\t\t\t\t\t$arrayPush(entries, [k, v]);\n\t\t\t\t\t});\n\t\t\t\t\treturn getArrayIterator(entries);\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (isSet(iterable)) {\n\t\t\t\tif ($setIterator) {\n\t\t\t\t\treturn getStopIterationIterator($setIterator(iterable));\n\t\t\t\t}\n\t\t\t\tif ($setAtAtIterator) {\n\t\t\t\t\treturn $setAtAtIterator(iterable);\n\t\t\t\t}\n\t\t\t\tif ($setForEach) {\n\t\t\t\t\tvar values = [];\n\t\t\t\t\t$setForEach(iterable, function (v) {\n\t\t\t\t\t\t$arrayPush(values, v);\n\t\t\t\t\t});\n\t\t\t\t\treturn getArrayIterator(values);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tmodule.exports = function getIterator(iterable) {\n\t\t\treturn getCollectionIterator(iterable) || getNonCollectionIterator(iterable);\n\t\t};\n\t}\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/index.js?");

/***/ }),

/***/ "./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js?");

/***/ }),

/***/ "./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js?");

/***/ }),

/***/ "./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js":
/*!************************************************************************************!*\
  !*** ./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js?");

/***/ }),

/***/ "./node_modules/es-get-iterator/node_modules/isarray/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/es-get-iterator/node_modules/isarray/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/isarray/index.js?");

/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("'use strict';\n\nvar has = Object.prototype.hasOwnProperty\n  , prefix = '~';\n\n/**\n * Constructor to create a storage for our `EE` objects.\n * An `Events` instance is a plain object whose properties are event names.\n *\n * @constructor\n * @private\n */\nfunction Events() {}\n\n//\n// We try to not inherit from `Object.prototype`. In some engines creating an\n// instance in this way is faster than calling `Object.create(null)` directly.\n// If `Object.create(null)` is not supported we prefix the event names with a\n// character to make sure that the built-in object properties are not\n// overridden or used as an attack vector.\n//\nif (Object.create) {\n  Events.prototype = Object.create(null);\n\n  //\n  // This hack is needed because the `__proto__` property is still inherited in\n  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.\n  //\n  if (!new Events().__proto__) prefix = false;\n}\n\n/**\n * Representation of a single event listener.\n *\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} [once=false] Specify if the listener is a one-time listener.\n * @constructor\n * @private\n */\nfunction EE(fn, context, once) {\n  this.fn = fn;\n  this.context = context;\n  this.once = once || false;\n}\n\n/**\n * Add a listener for a given event.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} once Specify if the listener is a one-time listener.\n * @returns {EventEmitter}\n * @private\n */\nfunction addListener(emitter, event, fn, context, once) {\n  if (typeof fn !== 'function') {\n    throw new TypeError('The listener must be a function');\n  }\n\n  var listener = new EE(fn, context || emitter, once)\n    , evt = prefix ? prefix + event : event;\n\n  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;\n  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);\n  else emitter._events[evt] = [emitter._events[evt], listener];\n\n  return emitter;\n}\n\n/**\n * Clear event by name.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} evt The Event name.\n * @private\n */\nfunction clearEvent(emitter, evt) {\n  if (--emitter._eventsCount === 0) emitter._events = new Events();\n  else delete emitter._events[evt];\n}\n\n/**\n * Minimal `EventEmitter` interface that is molded against the Node.js\n * `EventEmitter` interface.\n *\n * @constructor\n * @public\n */\nfunction EventEmitter() {\n  this._events = new Events();\n  this._eventsCount = 0;\n}\n\n/**\n * Return an array listing the events for which the emitter has registered\n * listeners.\n *\n * @returns {Array}\n * @public\n */\nEventEmitter.prototype.eventNames = function eventNames() {\n  var names = []\n    , events\n    , name;\n\n  if (this._eventsCount === 0) return names;\n\n  for (name in (events = this._events)) {\n    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);\n  }\n\n  if (Object.getOwnPropertySymbols) {\n    return names.concat(Object.getOwnPropertySymbols(events));\n  }\n\n  return names;\n};\n\n/**\n * Return the listeners registered for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Array} The registered listeners.\n * @public\n */\nEventEmitter.prototype.listeners = function listeners(event) {\n  var evt = prefix ? prefix + event : event\n    , handlers = this._events[evt];\n\n  if (!handlers) return [];\n  if (handlers.fn) return [handlers.fn];\n\n  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {\n    ee[i] = handlers[i].fn;\n  }\n\n  return ee;\n};\n\n/**\n * Return the number of listeners listening to a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Number} The number of listeners.\n * @public\n */\nEventEmitter.prototype.listenerCount = function listenerCount(event) {\n  var evt = prefix ? prefix + event : event\n    , listeners = this._events[evt];\n\n  if (!listeners) return 0;\n  if (listeners.fn) return 1;\n  return listeners.length;\n};\n\n/**\n * Calls each of the listeners registered for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Boolean} `true` if the event had listeners, else `false`.\n * @public\n */\nEventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return false;\n\n  var listeners = this._events[evt]\n    , len = arguments.length\n    , args\n    , i;\n\n  if (listeners.fn) {\n    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);\n\n    switch (len) {\n      case 1: return listeners.fn.call(listeners.context), true;\n      case 2: return listeners.fn.call(listeners.context, a1), true;\n      case 3: return listeners.fn.call(listeners.context, a1, a2), true;\n      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;\n      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;\n      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;\n    }\n\n    for (i = 1, args = new Array(len -1); i < len; i++) {\n      args[i - 1] = arguments[i];\n    }\n\n    listeners.fn.apply(listeners.context, args);\n  } else {\n    var length = listeners.length\n      , j;\n\n    for (i = 0; i < length; i++) {\n      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);\n\n      switch (len) {\n        case 1: listeners[i].fn.call(listeners[i].context); break;\n        case 2: listeners[i].fn.call(listeners[i].context, a1); break;\n        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;\n        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;\n        default:\n          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {\n            args[j - 1] = arguments[j];\n          }\n\n          listeners[i].fn.apply(listeners[i].context, args);\n      }\n    }\n  }\n\n  return true;\n};\n\n/**\n * Add a listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.on = function on(event, fn, context) {\n  return addListener(this, event, fn, context, false);\n};\n\n/**\n * Add a one-time listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.once = function once(event, fn, context) {\n  return addListener(this, event, fn, context, true);\n};\n\n/**\n * Remove the listeners of a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn Only remove the listeners that match this function.\n * @param {*} context Only remove the listeners that have this context.\n * @param {Boolean} once Only remove one-time listeners.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return this;\n  if (!fn) {\n    clearEvent(this, evt);\n    return this;\n  }\n\n  var listeners = this._events[evt];\n\n  if (listeners.fn) {\n    if (\n      listeners.fn === fn &&\n      (!once || listeners.once) &&\n      (!context || listeners.context === context)\n    ) {\n      clearEvent(this, evt);\n    }\n  } else {\n    for (var i = 0, events = [], length = listeners.length; i < length; i++) {\n      if (\n        listeners[i].fn !== fn ||\n        (once && !listeners[i].once) ||\n        (context && listeners[i].context !== context)\n      ) {\n        events.push(listeners[i]);\n      }\n    }\n\n    //\n    // Reset the array, or remove it completely if we have no more listeners.\n    //\n    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;\n    else clearEvent(this, evt);\n  }\n\n  return this;\n};\n\n/**\n * Remove all listeners, or those of the specified event.\n *\n * @param {(String|Symbol)} [event] The event name.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {\n  var evt;\n\n  if (event) {\n    evt = prefix ? prefix + event : event;\n    if (this._events[evt]) clearEvent(this, evt);\n  } else {\n    this._events = new Events();\n    this._eventsCount = 0;\n  }\n\n  return this;\n};\n\n//\n// Alias methods names because people roll like that.\n//\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n//\n// Expose the prefix.\n//\nEventEmitter.prefixed = prefix;\n\n//\n// Allow `EventEmitter` to be imported as module namespace.\n//\nEventEmitter.EventEmitter = EventEmitter;\n\n//\n// Expose the module.\n//\nif ('undefined' !== typeof module) {\n  module.exports = EventEmitter;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/eventemitter3/index.js?");

/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("'use strict';\n\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar defineProperty = Object.defineProperty;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar isArray = function isArray(arr) {\n\tif (typeof Array.isArray === 'function') {\n\t\treturn Array.isArray(arr);\n\t}\n\n\treturn toStr.call(arr) === '[object Array]';\n};\n\nvar isPlainObject = function isPlainObject(obj) {\n\tif (!obj || toStr.call(obj) !== '[object Object]') {\n\t\treturn false;\n\t}\n\n\tvar hasOwnConstructor = hasOwn.call(obj, 'constructor');\n\tvar hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');\n\t// Not own constructor property must be Object\n\tif (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {\n\t\treturn false;\n\t}\n\n\t// Own properties are enumerated firstly, so to speed up,\n\t// if last one is own, then all properties are own.\n\tvar key;\n\tfor (key in obj) { /**/ }\n\n\treturn typeof key === 'undefined' || hasOwn.call(obj, key);\n};\n\n// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target\nvar setProperty = function setProperty(target, options) {\n\tif (defineProperty && options.name === '__proto__') {\n\t\tdefineProperty(target, options.name, {\n\t\t\tenumerable: true,\n\t\t\tconfigurable: true,\n\t\t\tvalue: options.newValue,\n\t\t\twritable: true\n\t\t});\n\t} else {\n\t\ttarget[options.name] = options.newValue;\n\t}\n};\n\n// Return undefined instead of __proto__ if '__proto__' is not an own property\nvar getProperty = function getProperty(obj, name) {\n\tif (name === '__proto__') {\n\t\tif (!hasOwn.call(obj, name)) {\n\t\t\treturn void 0;\n\t\t} else if (gOPD) {\n\t\t\t// In early versions of node, obj['__proto__'] is buggy when obj has\n\t\t\t// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.\n\t\t\treturn gOPD(obj, name).value;\n\t\t}\n\t}\n\n\treturn obj[name];\n};\n\nmodule.exports = function extend() {\n\tvar options, name, src, copy, copyIsArray, clone;\n\tvar target = arguments[0];\n\tvar i = 1;\n\tvar length = arguments.length;\n\tvar deep = false;\n\n\t// Handle a deep copy situation\n\tif (typeof target === 'boolean') {\n\t\tdeep = target;\n\t\ttarget = arguments[1] || {};\n\t\t// skip the boolean and the target\n\t\ti = 2;\n\t}\n\tif (target == null || (typeof target !== 'object' && typeof target !== 'function')) {\n\t\ttarget = {};\n\t}\n\n\tfor (; i < length; ++i) {\n\t\toptions = arguments[i];\n\t\t// Only deal with non-null/undefined values\n\t\tif (options != null) {\n\t\t\t// Extend the base object\n\t\t\tfor (name in options) {\n\t\t\t\tsrc = getProperty(target, name);\n\t\t\t\tcopy = getProperty(options, name);\n\n\t\t\t\t// Prevent never-ending loop\n\t\t\t\tif (target !== copy) {\n\t\t\t\t\t// Recurse if we're merging plain objects or arrays\n\t\t\t\t\tif (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {\n\t\t\t\t\t\tif (copyIsArray) {\n\t\t\t\t\t\t\tcopyIsArray = false;\n\t\t\t\t\t\t\tclone = src && isArray(src) ? src : [];\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tclone = src && isPlainObject(src) ? src : {};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Never move original objects, clone them\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: extend(deep, clone, copy) });\n\n\t\t\t\t\t// Don't bring in undefined values\n\t\t\t\t\t} else if (typeof copy !== 'undefined') {\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: copy });\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// Return the modified object\n\treturn target;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/extend/index.js?");

/***/ }),

/***/ "./node_modules/fast-diff/diff.js":
/*!****************************************!*\
  !*** ./node_modules/fast-diff/diff.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This library modifies the diff-patch-match library by Neil Fraser\n * by removing the patch and match functionality and certain advanced\n * options in the diff function. The original license is as follows:\n *\n * ===\n *\n * Diff Match and Patch\n *\n * Copyright 2006 Google Inc.\n * http://code.google.com/p/google-diff-match-patch/\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n/**\n * The data structure representing a diff is an array of tuples:\n * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]\n * which means: delete 'Hello', add 'Goodbye' and keep ' world.'\n */\nvar DIFF_DELETE = -1;\nvar DIFF_INSERT = 1;\nvar DIFF_EQUAL = 0;\n\n\n/**\n * Find the differences between two texts.  Simplifies the problem by stripping\n * any common prefix or suffix off the texts before diffing.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info\n * @return {Array} Array of diff tuples.\n */\nfunction diff_main(text1, text2, cursor_pos, _fix_unicode) {\n  // Check for equality\n  if (text1 === text2) {\n    if (text1) {\n      return [[DIFF_EQUAL, text1]];\n    }\n    return [];\n  }\n\n  if (cursor_pos != null) {\n    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);\n    if (editdiff) {\n      return editdiff;\n    }\n  }\n\n  // Trim off common prefix (speedup).\n  var commonlength = diff_commonPrefix(text1, text2);\n  var commonprefix = text1.substring(0, commonlength);\n  text1 = text1.substring(commonlength);\n  text2 = text2.substring(commonlength);\n\n  // Trim off common suffix (speedup).\n  commonlength = diff_commonSuffix(text1, text2);\n  var commonsuffix = text1.substring(text1.length - commonlength);\n  text1 = text1.substring(0, text1.length - commonlength);\n  text2 = text2.substring(0, text2.length - commonlength);\n\n  // Compute the diff on the middle block.\n  var diffs = diff_compute_(text1, text2);\n\n  // Restore the prefix and suffix.\n  if (commonprefix) {\n    diffs.unshift([DIFF_EQUAL, commonprefix]);\n  }\n  if (commonsuffix) {\n    diffs.push([DIFF_EQUAL, commonsuffix]);\n  }\n  diff_cleanupMerge(diffs, _fix_unicode);\n  return diffs;\n};\n\n\n/**\n * Find the differences between two texts.  Assumes that the texts do not\n * have any common prefix or suffix.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @return {Array} Array of diff tuples.\n */\nfunction diff_compute_(text1, text2) {\n  var diffs;\n\n  if (!text1) {\n    // Just add some text (speedup).\n    return [[DIFF_INSERT, text2]];\n  }\n\n  if (!text2) {\n    // Just delete some text (speedup).\n    return [[DIFF_DELETE, text1]];\n  }\n\n  var longtext = text1.length > text2.length ? text1 : text2;\n  var shorttext = text1.length > text2.length ? text2 : text1;\n  var i = longtext.indexOf(shorttext);\n  if (i !== -1) {\n    // Shorter text is inside the longer text (speedup).\n    diffs = [\n      [DIFF_INSERT, longtext.substring(0, i)],\n      [DIFF_EQUAL, shorttext],\n      [DIFF_INSERT, longtext.substring(i + shorttext.length)]\n    ];\n    // Swap insertions for deletions if diff is reversed.\n    if (text1.length > text2.length) {\n      diffs[0][0] = diffs[2][0] = DIFF_DELETE;\n    }\n    return diffs;\n  }\n\n  if (shorttext.length === 1) {\n    // Single character string.\n    // After the previous speedup, the character can't be an equality.\n    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];\n  }\n\n  // Check to see if the problem can be split in two.\n  var hm = diff_halfMatch_(text1, text2);\n  if (hm) {\n    // A half-match was found, sort out the return data.\n    var text1_a = hm[0];\n    var text1_b = hm[1];\n    var text2_a = hm[2];\n    var text2_b = hm[3];\n    var mid_common = hm[4];\n    // Send both pairs off for separate processing.\n    var diffs_a = diff_main(text1_a, text2_a);\n    var diffs_b = diff_main(text1_b, text2_b);\n    // Merge the results.\n    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);\n  }\n\n  return diff_bisect_(text1, text2);\n};\n\n\n/**\n * Find the 'middle snake' of a diff, split the problem in two\n * and return the recursively constructed diff.\n * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @return {Array} Array of diff tuples.\n * @private\n */\nfunction diff_bisect_(text1, text2) {\n  // Cache the text lengths to prevent multiple calls.\n  var text1_length = text1.length;\n  var text2_length = text2.length;\n  var max_d = Math.ceil((text1_length + text2_length) / 2);\n  var v_offset = max_d;\n  var v_length = 2 * max_d;\n  var v1 = new Array(v_length);\n  var v2 = new Array(v_length);\n  // Setting all elements to -1 is faster in Chrome & Firefox than mixing\n  // integers and undefined.\n  for (var x = 0; x < v_length; x++) {\n    v1[x] = -1;\n    v2[x] = -1;\n  }\n  v1[v_offset + 1] = 0;\n  v2[v_offset + 1] = 0;\n  var delta = text1_length - text2_length;\n  // If the total number of characters is odd, then the front path will collide\n  // with the reverse path.\n  var front = (delta % 2 !== 0);\n  // Offsets for start and end of k loop.\n  // Prevents mapping of space beyond the grid.\n  var k1start = 0;\n  var k1end = 0;\n  var k2start = 0;\n  var k2end = 0;\n  for (var d = 0; d < max_d; d++) {\n    // Walk the front path one step.\n    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {\n      var k1_offset = v_offset + k1;\n      var x1;\n      if (k1 === -d || (k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1])) {\n        x1 = v1[k1_offset + 1];\n      } else {\n        x1 = v1[k1_offset - 1] + 1;\n      }\n      var y1 = x1 - k1;\n      while (\n        x1 < text1_length && y1 < text2_length &&\n        text1.charAt(x1) === text2.charAt(y1)\n      ) {\n        x1++;\n        y1++;\n      }\n      v1[k1_offset] = x1;\n      if (x1 > text1_length) {\n        // Ran off the right of the graph.\n        k1end += 2;\n      } else if (y1 > text2_length) {\n        // Ran off the bottom of the graph.\n        k1start += 2;\n      } else if (front) {\n        var k2_offset = v_offset + delta - k1;\n        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {\n          // Mirror x2 onto top-left coordinate system.\n          var x2 = text1_length - v2[k2_offset];\n          if (x1 >= x2) {\n            // Overlap detected.\n            return diff_bisectSplit_(text1, text2, x1, y1);\n          }\n        }\n      }\n    }\n\n    // Walk the reverse path one step.\n    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {\n      var k2_offset = v_offset + k2;\n      var x2;\n      if (k2 === -d || (k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1])) {\n        x2 = v2[k2_offset + 1];\n      } else {\n        x2 = v2[k2_offset - 1] + 1;\n      }\n      var y2 = x2 - k2;\n      while (\n        x2 < text1_length && y2 < text2_length &&\n        text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)\n      ) {\n        x2++;\n        y2++;\n      }\n      v2[k2_offset] = x2;\n      if (x2 > text1_length) {\n        // Ran off the left of the graph.\n        k2end += 2;\n      } else if (y2 > text2_length) {\n        // Ran off the top of the graph.\n        k2start += 2;\n      } else if (!front) {\n        var k1_offset = v_offset + delta - k2;\n        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {\n          var x1 = v1[k1_offset];\n          var y1 = v_offset + x1 - k1_offset;\n          // Mirror x2 onto top-left coordinate system.\n          x2 = text1_length - x2;\n          if (x1 >= x2) {\n            // Overlap detected.\n            return diff_bisectSplit_(text1, text2, x1, y1);\n          }\n        }\n      }\n    }\n  }\n  // Diff took too long and hit the deadline or\n  // number of diffs equals number of characters, no commonality at all.\n  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];\n};\n\n\n/**\n * Given the location of the 'middle snake', split the diff in two parts\n * and recurse.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @param {number} x Index of split point in text1.\n * @param {number} y Index of split point in text2.\n * @return {Array} Array of diff tuples.\n */\nfunction diff_bisectSplit_(text1, text2, x, y) {\n  var text1a = text1.substring(0, x);\n  var text2a = text2.substring(0, y);\n  var text1b = text1.substring(x);\n  var text2b = text2.substring(y);\n\n  // Compute both diffs serially.\n  var diffs = diff_main(text1a, text2a);\n  var diffsb = diff_main(text1b, text2b);\n\n  return diffs.concat(diffsb);\n};\n\n\n/**\n * Determine the common prefix of two strings.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {number} The number of characters common to the start of each\n *     string.\n */\nfunction diff_commonPrefix(text1, text2) {\n  // Quick check for common null cases.\n  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {\n    return 0;\n  }\n  // Binary search.\n  // Performance analysis: http://neil.fraser.name/news/2007/10/09/\n  var pointermin = 0;\n  var pointermax = Math.min(text1.length, text2.length);\n  var pointermid = pointermax;\n  var pointerstart = 0;\n  while (pointermin < pointermid) {\n    if (\n      text1.substring(pointerstart, pointermid) ==\n      text2.substring(pointerstart, pointermid)\n    ) {\n      pointermin = pointermid;\n      pointerstart = pointermin;\n    } else {\n      pointermax = pointermid;\n    }\n    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);\n  }\n\n  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {\n    pointermid--;\n  }\n\n  return pointermid;\n};\n\n\n/**\n * Determine the common suffix of two strings.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {number} The number of characters common to the end of each string.\n */\nfunction diff_commonSuffix(text1, text2) {\n  // Quick check for common null cases.\n  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {\n    return 0;\n  }\n  // Binary search.\n  // Performance analysis: http://neil.fraser.name/news/2007/10/09/\n  var pointermin = 0;\n  var pointermax = Math.min(text1.length, text2.length);\n  var pointermid = pointermax;\n  var pointerend = 0;\n  while (pointermin < pointermid) {\n    if (\n      text1.substring(text1.length - pointermid, text1.length - pointerend) ==\n      text2.substring(text2.length - pointermid, text2.length - pointerend)\n    ) {\n      pointermin = pointermid;\n      pointerend = pointermin;\n    } else {\n      pointermax = pointermid;\n    }\n    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);\n  }\n\n  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {\n    pointermid--;\n  }\n\n  return pointermid;\n};\n\n\n/**\n * Do the two texts share a substring which is at least half the length of the\n * longer text?\n * This speedup can produce non-minimal diffs.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {Array.<string>} Five element Array, containing the prefix of\n *     text1, the suffix of text1, the prefix of text2, the suffix of\n *     text2 and the common middle.  Or null if there was no match.\n */\nfunction diff_halfMatch_(text1, text2) {\n  var longtext = text1.length > text2.length ? text1 : text2;\n  var shorttext = text1.length > text2.length ? text2 : text1;\n  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {\n    return null;  // Pointless.\n  }\n\n  /**\n   * Does a substring of shorttext exist within longtext such that the substring\n   * is at least half the length of longtext?\n   * Closure, but does not reference any external variables.\n   * @param {string} longtext Longer string.\n   * @param {string} shorttext Shorter string.\n   * @param {number} i Start index of quarter length substring within longtext.\n   * @return {Array.<string>} Five element Array, containing the prefix of\n   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix\n   *     of shorttext and the common middle.  Or null if there was no match.\n   * @private\n   */\n  function diff_halfMatchI_(longtext, shorttext, i) {\n    // Start with a 1/4 length substring at position i as a seed.\n    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));\n    var j = -1;\n    var best_common = '';\n    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;\n    while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {\n      var prefixLength = diff_commonPrefix(\n        longtext.substring(i), shorttext.substring(j));\n      var suffixLength = diff_commonSuffix(\n        longtext.substring(0, i), shorttext.substring(0, j));\n      if (best_common.length < suffixLength + prefixLength) {\n        best_common = shorttext.substring(\n          j - suffixLength, j) + shorttext.substring(j, j + prefixLength);\n        best_longtext_a = longtext.substring(0, i - suffixLength);\n        best_longtext_b = longtext.substring(i + prefixLength);\n        best_shorttext_a = shorttext.substring(0, j - suffixLength);\n        best_shorttext_b = shorttext.substring(j + prefixLength);\n      }\n    }\n    if (best_common.length * 2 >= longtext.length) {\n      return [\n        best_longtext_a, best_longtext_b,\n        best_shorttext_a, best_shorttext_b, best_common\n      ];\n    } else {\n      return null;\n    }\n  }\n\n  // First check if the second quarter is the seed for a half-match.\n  var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));\n  // Check again based on the third quarter.\n  var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));\n  var hm;\n  if (!hm1 && !hm2) {\n    return null;\n  } else if (!hm2) {\n    hm = hm1;\n  } else if (!hm1) {\n    hm = hm2;\n  } else {\n    // Both matched.  Select the longest.\n    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;\n  }\n\n  // A half-match was found, sort out the return data.\n  var text1_a, text1_b, text2_a, text2_b;\n  if (text1.length > text2.length) {\n    text1_a = hm[0];\n    text1_b = hm[1];\n    text2_a = hm[2];\n    text2_b = hm[3];\n  } else {\n    text2_a = hm[0];\n    text2_b = hm[1];\n    text1_a = hm[2];\n    text1_b = hm[3];\n  }\n  var mid_common = hm[4];\n  return [text1_a, text1_b, text2_a, text2_b, mid_common];\n};\n\n\n/**\n * Reorder and merge like edit sections.  Merge equalities.\n * Any edit section can move as long as it doesn't cross an equality.\n * @param {Array} diffs Array of diff tuples.\n * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff\n */\nfunction diff_cleanupMerge(diffs, fix_unicode) {\n  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.\n  var pointer = 0;\n  var count_delete = 0;\n  var count_insert = 0;\n  var text_delete = '';\n  var text_insert = '';\n  var commonlength;\n  while (pointer < diffs.length) {\n    if (pointer < diffs.length - 1 && !diffs[pointer][1]) {\n      diffs.splice(pointer, 1);\n      continue;\n    }\n    switch (diffs[pointer][0]) {\n      case DIFF_INSERT:\n\n        count_insert++;\n        text_insert += diffs[pointer][1];\n        pointer++;\n        break;\n      case DIFF_DELETE:\n        count_delete++;\n        text_delete += diffs[pointer][1];\n        pointer++;\n        break;\n      case DIFF_EQUAL:\n        var previous_equality = pointer - count_insert - count_delete - 1;\n        if (fix_unicode) {\n          // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,\n          // we assume that the old and new text in the diff are complete and correct\n          // unicode-encoded JS strings, but the tuple boundaries may fall between\n          // surrogate pairs.  we fix this by shaving off stray surrogates from the end\n          // of the previous equality and the beginning of this equality.  this may create\n          // empty equalities or a common prefix or suffix.  for example, if AB and AC are\n          // emojis, `[[0, 'A'], [-1, 'BA'], [0, 'C']]` would turn into deleting 'ABAC' and\n          // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this\n          // particular case, both equalities go away, we absorb any previous inequalities,\n          // and we keep scanning for the next equality before rewriting the tuples.\n          if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {\n            var stray = diffs[previous_equality][1].slice(-1);\n            diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);\n            text_delete = stray + text_delete;\n            text_insert = stray + text_insert;\n            if (!diffs[previous_equality][1]) {\n              // emptied out previous equality, so delete it and include previous delete/insert\n              diffs.splice(previous_equality, 1);\n              pointer--;\n              var k = previous_equality - 1;\n              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {\n                count_insert++;\n                text_insert = diffs[k][1] + text_insert;\n                k--;\n              }\n              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {\n                count_delete++;\n                text_delete = diffs[k][1] + text_delete;\n                k--;\n              }\n              previous_equality = k;\n            }\n          }\n          if (starts_with_pair_end(diffs[pointer][1])) {\n            var stray = diffs[pointer][1].charAt(0);\n            diffs[pointer][1] = diffs[pointer][1].slice(1);\n            text_delete += stray;\n            text_insert += stray;\n          }\n        }\n        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {\n          // for empty equality not at end, wait for next equality\n          diffs.splice(pointer, 1);\n          break;\n        }\n        if (text_delete.length > 0 || text_insert.length > 0) {\n          // note that diff_commonPrefix and diff_commonSuffix are unicode-aware\n          if (text_delete.length > 0 && text_insert.length > 0) {\n            // Factor out any common prefixes.\n            commonlength = diff_commonPrefix(text_insert, text_delete);\n            if (commonlength !== 0) {\n              if (previous_equality >= 0) {\n                diffs[previous_equality][1] += text_insert.substring(0, commonlength);\n              } else {\n                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);\n                pointer++;\n              }\n              text_insert = text_insert.substring(commonlength);\n              text_delete = text_delete.substring(commonlength);\n            }\n            // Factor out any common suffixes.\n            commonlength = diff_commonSuffix(text_insert, text_delete);\n            if (commonlength !== 0) {\n              diffs[pointer][1] =\n                text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];\n              text_insert = text_insert.substring(0, text_insert.length - commonlength);\n              text_delete = text_delete.substring(0, text_delete.length - commonlength);\n            }\n          }\n          // Delete the offending records and add the merged ones.\n          var n = count_insert + count_delete;\n          if (text_delete.length === 0 && text_insert.length === 0) {\n            diffs.splice(pointer - n, n);\n            pointer = pointer - n;\n          } else if (text_delete.length === 0) {\n            diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);\n            pointer = pointer - n + 1;\n          } else if (text_insert.length === 0) {\n            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);\n            pointer = pointer - n + 1;\n          } else {\n            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);\n            pointer = pointer - n + 2;\n          }\n        }\n        if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {\n          // Merge this equality with the previous one.\n          diffs[pointer - 1][1] += diffs[pointer][1];\n          diffs.splice(pointer, 1);\n        } else {\n          pointer++;\n        }\n        count_insert = 0;\n        count_delete = 0;\n        text_delete = '';\n        text_insert = '';\n        break;\n    }\n  }\n  if (diffs[diffs.length - 1][1] === '') {\n    diffs.pop();  // Remove the dummy entry at the end.\n  }\n\n  // Second pass: look for single edits surrounded on both sides by equalities\n  // which can be shifted sideways to eliminate an equality.\n  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC\n  var changes = false;\n  pointer = 1;\n  // Intentionally ignore the first and last element (don't need checking).\n  while (pointer < diffs.length - 1) {\n    if (diffs[pointer - 1][0] === DIFF_EQUAL &&\n      diffs[pointer + 1][0] === DIFF_EQUAL) {\n      // This is a single edit surrounded by equalities.\n      if (diffs[pointer][1].substring(diffs[pointer][1].length -\n        diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {\n        // Shift the edit over the previous equality.\n        diffs[pointer][1] = diffs[pointer - 1][1] +\n          diffs[pointer][1].substring(0, diffs[pointer][1].length -\n            diffs[pointer - 1][1].length);\n        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];\n        diffs.splice(pointer - 1, 1);\n        changes = true;\n      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==\n        diffs[pointer + 1][1]) {\n        // Shift the edit over the next equality.\n        diffs[pointer - 1][1] += diffs[pointer + 1][1];\n        diffs[pointer][1] =\n          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +\n          diffs[pointer + 1][1];\n        diffs.splice(pointer + 1, 1);\n        changes = true;\n      }\n    }\n    pointer++;\n  }\n  // If shifts were made, the diff needs reordering and another shift sweep.\n  if (changes) {\n    diff_cleanupMerge(diffs, fix_unicode);\n  }\n};\n\nfunction is_surrogate_pair_start(charCode) {\n  return charCode >= 0xD800 && charCode <= 0xDBFF;\n}\n\nfunction is_surrogate_pair_end(charCode) {\n  return charCode >= 0xDC00 && charCode <= 0xDFFF;\n}\n\nfunction starts_with_pair_end(str) {\n  return is_surrogate_pair_end(str.charCodeAt(0));\n}\n\nfunction ends_with_pair_start(str) {\n  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));\n}\n\nfunction remove_empty_tuples(tuples) {\n  var ret = [];\n  for (var i = 0; i < tuples.length; i++) {\n    if (tuples[i][1].length > 0) {\n      ret.push(tuples[i]);\n    }\n  }\n  return ret;\n}\n\nfunction make_edit_splice(before, oldMiddle, newMiddle, after) {\n  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {\n    return null;\n  }\n  return remove_empty_tuples([\n    [DIFF_EQUAL, before],\n    [DIFF_DELETE, oldMiddle],\n    [DIFF_INSERT, newMiddle],\n    [DIFF_EQUAL, after]\n  ]);\n}\n\nfunction find_cursor_edit_diff(oldText, newText, cursor_pos) {\n  // note: this runs after equality check has ruled out exact equality\n  var oldRange = typeof cursor_pos === 'number' ?\n    { index: cursor_pos, length: 0 } : cursor_pos.oldRange;\n  var newRange = typeof cursor_pos === 'number' ?\n    null : cursor_pos.newRange;\n  // take into account the old and new selection to generate the best diff\n  // possible for a text edit.  for example, a text change from \"xxx\" to \"xx\"\n  // could be a delete or forwards-delete of any one of the x's, or the\n  // result of selecting two of the x's and typing \"x\".\n  var oldLength = oldText.length;\n  var newLength = newText.length;\n  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {\n    // see if we have an insert or delete before or after cursor\n    var oldCursor = oldRange.index;\n    var oldBefore = oldText.slice(0, oldCursor);\n    var oldAfter = oldText.slice(oldCursor);\n    var maybeNewCursor = newRange ? newRange.index : null;\n    editBefore: {\n      // is this an insert or delete right before oldCursor?\n      var newCursor = oldCursor + newLength - oldLength;\n      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {\n        break editBefore;\n      }\n      if (newCursor < 0 || newCursor > newLength) {\n        break editBefore;\n      }\n      var newBefore = newText.slice(0, newCursor);\n      var newAfter = newText.slice(newCursor);\n      if (newAfter !== oldAfter) {\n        break editBefore;\n      }\n      var prefixLength = Math.min(oldCursor, newCursor);\n      var oldPrefix = oldBefore.slice(0, prefixLength);\n      var newPrefix = newBefore.slice(0, prefixLength);\n      if (oldPrefix !== newPrefix) {\n        break editBefore;\n      }\n      var oldMiddle = oldBefore.slice(prefixLength);\n      var newMiddle = newBefore.slice(prefixLength);\n      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);\n    }\n    editAfter: {\n      // is this an insert or delete right after oldCursor?\n      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {\n        break editAfter;\n      }\n      var cursor = oldCursor;\n      var newBefore = newText.slice(0, cursor);\n      var newAfter = newText.slice(cursor);\n      if (newBefore !== oldBefore) {\n        break editAfter;\n      }\n      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);\n      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);\n      var newSuffix = newAfter.slice(newAfter.length - suffixLength);\n      if (oldSuffix !== newSuffix) {\n        break editAfter;\n      }\n      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);\n      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);\n      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);\n    }\n  }\n  if (oldRange.length > 0 && newRange && newRange.length === 0) {\n    replaceRange: {\n      // see if diff could be a splice of the old selection range\n      var oldPrefix = oldText.slice(0, oldRange.index);\n      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);\n      var prefixLength = oldPrefix.length;\n      var suffixLength = oldSuffix.length;\n      if (newLength < prefixLength + suffixLength) {\n        break replaceRange;\n      }\n      var newPrefix = newText.slice(0, prefixLength);\n      var newSuffix = newText.slice(newLength - suffixLength);\n      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {\n        break replaceRange;\n      }\n      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);\n      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);\n      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);\n    }\n  }\n\n  return null;\n}\n\nfunction diff(text1, text2, cursor_pos) {\n  // only pass fix_unicode=true at the top level, not when diff_main is\n  // recursively invoked\n  return diff_main(text1, text2, cursor_pos, true);\n}\n\ndiff.INSERT = DIFF_INSERT;\ndiff.DELETE = DIFF_DELETE;\ndiff.EQUAL = DIFF_EQUAL;\n\nmodule.exports = diff;\n\n\n//# sourceURL=webpack://Quill/./node_modules/fast-diff/diff.js?");

/***/ }),

/***/ "./node_modules/foreach/index.js":
/*!***************************************!*\
  !*** ./node_modules/foreach/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar toString = Object.prototype.toString;\n\nmodule.exports = function forEach (obj, fn, ctx) {\n    if (toString.call(fn) !== '[object Function]') {\n        throw new TypeError('iterator must be a function');\n    }\n    var l = obj.length;\n    if (l === +l) {\n        for (var i = 0; i < l; i++) {\n            fn.call(ctx, obj[i], i, obj);\n        }\n    } else {\n        for (var k in obj) {\n            if (hasOwn.call(obj, k)) {\n                fn.call(ctx, obj[k], k, obj);\n            }\n        }\n    }\n};\n\n\n\n//# sourceURL=webpack://Quill/./node_modules/foreach/index.js?");

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n/* eslint no-invalid-this: 1 */\n\nvar ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';\nvar slice = Array.prototype.slice;\nvar toStr = Object.prototype.toString;\nvar funcType = '[object Function]';\n\nmodule.exports = function bind(that) {\n    var target = this;\n    if (typeof target !== 'function' || toStr.call(target) !== funcType) {\n        throw new TypeError(ERROR_MESSAGE + target);\n    }\n    var args = slice.call(arguments, 1);\n\n    var bound;\n    var binder = function () {\n        if (this instanceof bound) {\n            var result = target.apply(\n                this,\n                args.concat(slice.call(arguments))\n            );\n            if (Object(result) === result) {\n                return result;\n            }\n            return this;\n        } else {\n            return target.apply(\n                that,\n                args.concat(slice.call(arguments))\n            );\n        }\n    };\n\n    var boundLength = Math.max(0, target.length - args.length);\n    var boundArgs = [];\n    for (var i = 0; i < boundLength; i++) {\n        boundArgs.push('$' + i);\n    }\n\n    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);\n\n    if (target.prototype) {\n        var Empty = function Empty() {};\n        Empty.prototype = target.prototype;\n        bound.prototype = new Empty();\n        Empty.prototype = null;\n    }\n\n    return bound;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/function-bind/implementation.js?");

/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/function-bind/implementation.js\");\n\nmodule.exports = Function.prototype.bind || implementation;\n\n\n//# sourceURL=webpack://Quill/./node_modules/function-bind/index.js?");

/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar origSymbol = global.Symbol;\nvar hasSymbolSham = __webpack_require__(/*! ./shams */ \"./node_modules/has-symbols/shams.js\");\n\nmodule.exports = function hasNativeSymbols() {\n\tif (typeof origSymbol !== 'function') { return false; }\n\tif (typeof Symbol !== 'function') { return false; }\n\tif (typeof origSymbol('foo') !== 'symbol') { return false; }\n\tif (typeof Symbol('bar') !== 'symbol') { return false; }\n\n\treturn hasSymbolSham();\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/has-symbols/index.js?");

/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n/* eslint complexity: [2, 18], max-statements: [2, 33] */\nmodule.exports = function hasSymbols() {\n\tif (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }\n\tif (typeof Symbol.iterator === 'symbol') { return true; }\n\n\tvar obj = {};\n\tvar sym = Symbol('test');\n\tvar symObj = Object(sym);\n\tif (typeof sym === 'string') { return false; }\n\n\tif (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }\n\tif (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }\n\n\t// temp disabled per https://github.com/ljharb/object.assign/issues/17\n\t// if (sym instanceof Symbol) { return false; }\n\t// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4\n\t// if (!(symObj instanceof Symbol)) { return false; }\n\n\t// if (typeof Symbol.prototype.toString !== 'function') { return false; }\n\t// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }\n\n\tvar symVal = 42;\n\tobj[sym] = symVal;\n\tfor (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax\n\tif (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }\n\n\tif (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }\n\n\tvar syms = Object.getOwnPropertySymbols(obj);\n\tif (syms.length !== 1 || syms[0] !== sym) { return false; }\n\n\tif (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }\n\n\tif (typeof Object.getOwnPropertyDescriptor === 'function') {\n\t\tvar descriptor = Object.getOwnPropertyDescriptor(obj, sym);\n\t\tif (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/has-symbols/shams.js?");

/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nmodule.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);\n\n\n//# sourceURL=webpack://Quill/./node_modules/has/src/index.js?");

/***/ }),

/***/ "./node_modules/is-arguments/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-arguments/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\nvar toStr = Object.prototype.toString;\n\nvar isStandardArguments = function isArguments(value) {\n\tif (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {\n\t\treturn false;\n\t}\n\treturn toStr.call(value) === '[object Arguments]';\n};\n\nvar isLegacyArguments = function isArguments(value) {\n\tif (isStandardArguments(value)) {\n\t\treturn true;\n\t}\n\treturn value !== null &&\n\t\ttypeof value === 'object' &&\n\t\ttypeof value.length === 'number' &&\n\t\tvalue.length >= 0 &&\n\t\ttoStr.call(value) !== '[object Array]' &&\n\t\ttoStr.call(value.callee) === '[object Function]';\n};\n\nvar supportsStandardArguments = (function () {\n\treturn isStandardArguments(arguments);\n}());\n\nisStandardArguments.isLegacyArguments = isLegacyArguments; // for tests\n\nmodule.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-arguments/index.js?");

/***/ }),

/***/ "./node_modules/is-bigint/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-bigint/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nif (typeof BigInt === 'function') {\n\tvar bigIntValueOf = BigInt.prototype.valueOf;\n\tvar tryBigInt = function tryBigIntObject(value) {\n\t\ttry {\n\t\t\tbigIntValueOf.call(value);\n\t\t\treturn true;\n\t\t} catch (e) {\n\t\t}\n\t\treturn false;\n\t};\n\n\tmodule.exports = function isBigInt(value) {\n\t\tif (\n\t\t\tvalue === null\n\t\t\t|| typeof value === 'undefined'\n\t\t\t|| typeof value === 'boolean'\n\t\t\t|| typeof value === 'string'\n\t\t\t|| typeof value === 'number'\n\t\t\t|| typeof value === 'symbol'\n\t\t\t|| typeof value === 'function'\n\t\t) {\n\t\t\treturn false;\n\t\t}\n\t\tif (typeof value === 'bigint') { // eslint-disable-line valid-typeof\n\t\t\treturn true;\n\t\t}\n\n\t\treturn tryBigInt(value);\n\t};\n} else {\n\tmodule.exports = function isBigInt(value) {\n\t\treturn  false && false;\n\t};\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-bigint/index.js?");

/***/ }),

/***/ "./node_modules/is-boolean-object/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-boolean-object/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar boolToStr = Boolean.prototype.toString;\n\nvar tryBooleanObject = function booleanBrandCheck(value) {\n\ttry {\n\t\tboolToStr.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar boolClass = '[object Boolean]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isBoolean(value) {\n\tif (typeof value === 'boolean') {\n\t\treturn true;\n\t}\n\tif (value === null || typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : toStr.call(value) === boolClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-boolean-object/index.js?");

/***/ }),

/***/ "./node_modules/is-date-object/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-date-object/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar getDay = Date.prototype.getDay;\nvar tryDateObject = function tryDateObject(value) {\n\ttry {\n\t\tgetDay.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar toStr = Object.prototype.toString;\nvar dateClass = '[object Date]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isDateObject(value) {\n\tif (typeof value !== 'object' || value === null) { return false; }\n\treturn hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-date-object/index.js?");

/***/ }),

/***/ "./node_modules/is-map/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-map/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar $Map = typeof Map === 'function' && Map.prototype ? Map : null;\nvar $Set = typeof Set === 'function' && Set.prototype ? Set : null;\n\nvar exported;\n\nif (!$Map) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isMap(x) {\n\t\t// `Map` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $Map ? Map.prototype.has : null;\nvar $setHas = $Set ? Set.prototype.has : null;\nif (!exported && !$mapHas) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isMap(x) {\n\t\t// `Map` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isMap(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$mapHas.call(x);\n\t\tif ($setHas) {\n\t\t\ttry {\n\t\t\t\t$setHas.call(x);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $Map; // core-js workaround, pre-v2.5.0\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-map/index.js?");

/***/ }),

/***/ "./node_modules/is-number-object/index.js":
/*!************************************************!*\
  !*** ./node_modules/is-number-object/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar numToStr = Number.prototype.toString;\nvar tryNumberObject = function tryNumberObject(value) {\n\ttry {\n\t\tnumToStr.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar numClass = '[object Number]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isNumberObject(value) {\n\tif (typeof value === 'number') {\n\t\treturn true;\n\t}\n\tif (typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-number-object/index.js?");

/***/ }),

/***/ "./node_modules/is-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\nvar regexExec = RegExp.prototype.exec;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar tryRegexExecCall = function tryRegexExec(value) {\n\ttry {\n\t\tvar lastIndex = value.lastIndex;\n\t\tvalue.lastIndex = 0;\n\n\t\tregexExec.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t} finally {\n\t\tvalue.lastIndex = lastIndex;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar regexClass = '[object RegExp]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isRegex(value) {\n\tif (!value || typeof value !== 'object') {\n\t\treturn false;\n\t}\n\tif (!hasToStringTag) {\n\t\treturn toStr.call(value) === regexClass;\n\t}\n\n\tvar descriptor = gOPD(value, 'lastIndex');\n\tvar hasLastIndexDataProperty = descriptor && has(descriptor, 'value');\n\tif (!hasLastIndexDataProperty) {\n\t\treturn false;\n\t}\n\n\treturn tryRegexExecCall(value);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-regex/index.js?");

/***/ }),

/***/ "./node_modules/is-set/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-set/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar $Map = typeof Map === 'function' && Map.prototype ? Map : null;\nvar $Set = typeof Set === 'function' && Set.prototype ? Set : null;\n\nvar exported;\n\nif (!$Set) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isSet(x) {\n\t\t// `Set` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $Map ? Map.prototype.has : null;\nvar $setHas = $Set ? Set.prototype.has : null;\nif (!exported && !$setHas) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isSet(x) {\n\t\t// `Set` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isSet(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$setHas.call(x);\n\t\tif ($mapHas) {\n\t\t\ttry {\n\t\t\t\t$mapHas.call(x);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $Set; // core-js workaround, pre-v2.5.0\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-set/index.js?");

/***/ }),

/***/ "./node_modules/is-string/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-string/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar strValue = String.prototype.valueOf;\nvar tryStringObject = function tryStringObject(value) {\n\ttry {\n\t\tstrValue.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar strClass = '[object String]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isString(value) {\n\tif (typeof value === 'string') {\n\t\treturn true;\n\t}\n\tif (typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-string/index.js?");

/***/ }),

/***/ "./node_modules/is-typed-array/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-typed-array/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar forEach = __webpack_require__(/*! foreach */ \"./node_modules/foreach/index.js\");\nvar availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ \"./node_modules/available-typed-arrays/index.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js\");\n\nvar $toString = callBound('Object.prototype.toString');\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\nvar hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';\n\nvar typedArrays = availableTypedArrays();\n\nvar $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {\n\tfor (var i = 0; i < array.length; i += 1) {\n\t\tif (array[i] === value) {\n\t\t\treturn i;\n\t\t}\n\t}\n\treturn -1;\n};\nvar $slice = callBound('String.prototype.slice');\nvar toStrTags = {};\nvar gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ \"./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js\");\nvar getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');\nif (hasToStringTag && gOPD && getPrototypeOf) {\n\tforEach(typedArrays, function (typedArray) {\n\t\tvar arr = new global[typedArray]();\n\t\tif (!(Symbol.toStringTag in arr)) {\n\t\t\tthrow new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');\n\t\t}\n\t\tvar proto = getPrototypeOf(arr);\n\t\tvar descriptor = gOPD(proto, Symbol.toStringTag);\n\t\tif (!descriptor) {\n\t\t\tvar superProto = getPrototypeOf(proto);\n\t\t\tdescriptor = gOPD(superProto, Symbol.toStringTag);\n\t\t}\n\t\ttoStrTags[typedArray] = descriptor.get;\n\t});\n}\n\nvar tryTypedArrays = function tryAllTypedArrays(value) {\n\tvar anyTrue = false;\n\tforEach(toStrTags, function (getter, typedArray) {\n\t\tif (!anyTrue) {\n\t\t\ttry {\n\t\t\t\tanyTrue = getter.call(value) === typedArray;\n\t\t\t} catch (e) { /**/ }\n\t\t}\n\t});\n\treturn anyTrue;\n};\n\nmodule.exports = function isTypedArray(value) {\n\tif (!value || typeof value !== 'object') { return false; }\n\tif (!hasToStringTag) {\n\t\tvar tag = $slice($toString(value), 8, -1);\n\t\treturn $indexOf(typedArrays, tag) > -1;\n\t}\n\tif (!gOPD) { return false; }\n\treturn tryTypedArrays(value);\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/index.js?");

/***/ }),

/***/ "./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js?");

/***/ }),

/***/ "./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js?");

/***/ }),

/***/ "./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js?");

/***/ }),

/***/ "./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');\nif ($gOPD) {\n\ttry {\n\t\t$gOPD([], 'length');\n\t} catch (e) {\n\t\t// IE 8 has a broken gOPD\n\t\t$gOPD = null;\n\t}\n}\n\nmodule.exports = $gOPD;\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js?");

/***/ }),

/***/ "./node_modules/is-weakmap/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-weakmap/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;\nvar $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;\n\nvar exported;\n\nif (!$WeakMap) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isWeakMap(x) {\n\t\t// `WeakMap` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $WeakMap ? $WeakMap.prototype.has : null;\nvar $setHas = $WeakSet ? $WeakSet.prototype.has : null;\nif (!exported && !$mapHas) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isWeakMap(x) {\n\t\t// `WeakMap` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isWeakMap(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$mapHas.call(x, $mapHas);\n\t\tif ($setHas) {\n\t\t\ttry {\n\t\t\t\t$setHas.call(x, $setHas);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $WeakMap; // core-js workaround, pre-v3\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-weakmap/index.js?");

/***/ }),

/***/ "./node_modules/is-weakset/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-weakset/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;\nvar $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;\n\nvar exported;\n\nif (!$WeakMap) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isWeakSet(x) {\n\t\t// `WeakSet` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $WeakMap ? $WeakMap.prototype.has : null;\nvar $setHas = $WeakSet ? $WeakSet.prototype.has : null;\nif (!exported && !$setHas) {\n\t// eslint-disable-next-line no-unused-vars\n\tmodule.exports = function isWeakSet(x) {\n\t\t// `WeakSet` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isWeakSet(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$setHas.call(x, $setHas);\n\t\tif ($mapHas) {\n\t\t\ttry {\n\t\t\t\t$mapHas.call(x, $mapHas);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $WeakSet; // core-js workaround, pre-v3\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-weakset/index.js?");

/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hasMap = typeof Map === 'function' && Map.prototype;\nvar mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;\nvar mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;\nvar mapForEach = hasMap && Map.prototype.forEach;\nvar hasSet = typeof Set === 'function' && Set.prototype;\nvar setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;\nvar setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;\nvar setForEach = hasSet && Set.prototype.forEach;\nvar hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;\nvar weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;\nvar hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;\nvar weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;\nvar booleanValueOf = Boolean.prototype.valueOf;\nvar objectToString = Object.prototype.toString;\nvar match = String.prototype.match;\nvar bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;\n\nvar inspectCustom = __webpack_require__(/*! ./util.inspect */ 1).custom;\nvar inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;\n\nmodule.exports = function inspect_(obj, options, depth, seen) {\n    var opts = options || {};\n\n    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {\n        throw new TypeError('option \"quoteStyle\" must be \"single\" or \"double\"');\n    }\n\n    if (typeof obj === 'undefined') {\n        return 'undefined';\n    }\n    if (obj === null) {\n        return 'null';\n    }\n    if (typeof obj === 'boolean') {\n        return obj ? 'true' : 'false';\n    }\n\n    if (typeof obj === 'string') {\n        return inspectString(obj, opts);\n    }\n    if (typeof obj === 'number') {\n        if (obj === 0) {\n            return Infinity / obj > 0 ? '0' : '-0';\n        }\n        return String(obj);\n    }\n    if (typeof obj === 'bigint') { // eslint-disable-line valid-typeof\n        return String(obj) + 'n';\n    }\n\n    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;\n    if (typeof depth === 'undefined') { depth = 0; }\n    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {\n        return '[Object]';\n    }\n\n    if (typeof seen === 'undefined') {\n        seen = [];\n    } else if (indexOf(seen, obj) >= 0) {\n        return '[Circular]';\n    }\n\n    function inspect(value, from) {\n        if (from) {\n            seen = seen.slice();\n            seen.push(from);\n        }\n        return inspect_(value, opts, depth + 1, seen);\n    }\n\n    if (typeof obj === 'function') {\n        var name = nameOf(obj);\n        return '[Function' + (name ? ': ' + name : '') + ']';\n    }\n    if (isSymbol(obj)) {\n        var symString = Symbol.prototype.toString.call(obj);\n        return typeof obj === 'object' ? markBoxed(symString) : symString;\n    }\n    if (isElement(obj)) {\n        var s = '<' + String(obj.nodeName).toLowerCase();\n        var attrs = obj.attributes || [];\n        for (var i = 0; i < attrs.length; i++) {\n            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);\n        }\n        s += '>';\n        if (obj.childNodes && obj.childNodes.length) { s += '...'; }\n        s += '</' + String(obj.nodeName).toLowerCase() + '>';\n        return s;\n    }\n    if (isArray(obj)) {\n        if (obj.length === 0) { return '[]'; }\n        return '[ ' + arrObjKeys(obj, inspect).join(', ') + ' ]';\n    }\n    if (isError(obj)) {\n        var parts = arrObjKeys(obj, inspect);\n        if (parts.length === 0) { return '[' + String(obj) + ']'; }\n        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';\n    }\n    if (typeof obj === 'object') {\n        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {\n            return obj[inspectSymbol]();\n        } else if (typeof obj.inspect === 'function') {\n            return obj.inspect();\n        }\n    }\n    if (isMap(obj)) {\n        var mapParts = [];\n        mapForEach.call(obj, function (value, key) {\n            mapParts.push(inspect(key, obj) + ' => ' + inspect(value, obj));\n        });\n        return collectionOf('Map', mapSize.call(obj), mapParts);\n    }\n    if (isSet(obj)) {\n        var setParts = [];\n        setForEach.call(obj, function (value) {\n            setParts.push(inspect(value, obj));\n        });\n        return collectionOf('Set', setSize.call(obj), setParts);\n    }\n    if (isWeakMap(obj)) {\n        return weakCollectionOf('WeakMap');\n    }\n    if (isWeakSet(obj)) {\n        return weakCollectionOf('WeakSet');\n    }\n    if (isNumber(obj)) {\n        return markBoxed(inspect(Number(obj)));\n    }\n    if (isBigInt(obj)) {\n        return markBoxed(inspect(bigIntValueOf.call(obj)));\n    }\n    if (isBoolean(obj)) {\n        return markBoxed(booleanValueOf.call(obj));\n    }\n    if (isString(obj)) {\n        return markBoxed(inspect(String(obj)));\n    }\n    if (!isDate(obj) && !isRegExp(obj)) {\n        var xs = arrObjKeys(obj, inspect);\n        if (xs.length === 0) { return '{}'; }\n        return '{ ' + xs.join(', ') + ' }';\n    }\n    return String(obj);\n};\n\nfunction wrapQuotes(s, defaultStyle, opts) {\n    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '\"' : \"'\";\n    return quoteChar + s + quoteChar;\n}\n\nfunction quote(s) {\n    return String(s).replace(/\"/g, '&quot;');\n}\n\nfunction isArray(obj) { return toStr(obj) === '[object Array]'; }\nfunction isDate(obj) { return toStr(obj) === '[object Date]'; }\nfunction isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }\nfunction isError(obj) { return toStr(obj) === '[object Error]'; }\nfunction isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }\nfunction isString(obj) { return toStr(obj) === '[object String]'; }\nfunction isNumber(obj) { return toStr(obj) === '[object Number]'; }\nfunction isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }\nfunction isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }\n\nvar hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };\nfunction has(obj, key) {\n    return hasOwn.call(obj, key);\n}\n\nfunction toStr(obj) {\n    return objectToString.call(obj);\n}\n\nfunction nameOf(f) {\n    if (f.name) { return f.name; }\n    var m = match.call(f, /^function\\s*([\\w$]+)/);\n    if (m) { return m[1]; }\n    return null;\n}\n\nfunction indexOf(xs, x) {\n    if (xs.indexOf) { return xs.indexOf(x); }\n    for (var i = 0, l = xs.length; i < l; i++) {\n        if (xs[i] === x) { return i; }\n    }\n    return -1;\n}\n\nfunction isMap(x) {\n    if (!mapSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        mapSize.call(x);\n        try {\n            setSize.call(x);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof Map; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakMap(x) {\n    if (!weakMapHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakMapHas.call(x, weakMapHas);\n        try {\n            weakSetHas.call(x, weakSetHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isSet(x) {\n    if (!setSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        setSize.call(x);\n        try {\n            mapSize.call(x);\n        } catch (m) {\n            return true;\n        }\n        return x instanceof Set; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakSet(x) {\n    if (!weakSetHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakSetHas.call(x, weakSetHas);\n        try {\n            weakMapHas.call(x, weakMapHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isElement(x) {\n    if (!x || typeof x !== 'object') { return false; }\n    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {\n        return true;\n    }\n    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';\n}\n\nfunction inspectString(str, opts) {\n    // eslint-disable-next-line no-control-regex\n    var s = str.replace(/(['\\\\])/g, '\\\\$1').replace(/[\\x00-\\x1f]/g, lowbyte);\n    return wrapQuotes(s, 'single', opts);\n}\n\nfunction lowbyte(c) {\n    var n = c.charCodeAt(0);\n    var x = {\n        8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'\n    }[n];\n    if (x) { return '\\\\' + x; }\n    return '\\\\x' + (n < 0x10 ? '0' : '') + n.toString(16);\n}\n\nfunction markBoxed(str) {\n    return 'Object(' + str + ')';\n}\n\nfunction weakCollectionOf(type) {\n    return type + ' { ? }';\n}\n\nfunction collectionOf(type, size, entries) {\n    return type + ' (' + size + ') {' + entries.join(', ') + '}';\n}\n\nfunction arrObjKeys(obj, inspect) {\n    var isArr = isArray(obj);\n    var xs = [];\n    if (isArr) {\n        xs.length = obj.length;\n        for (var i = 0; i < obj.length; i++) {\n            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';\n        }\n    }\n    for (var key in obj) { // eslint-disable-line no-restricted-syntax\n        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if ((/[^\\w$]/).test(key)) {\n            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));\n        } else {\n            xs.push(key + ': ' + inspect(obj[key], obj));\n        }\n    }\n    return xs;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-inspect/index.js?");

/***/ }),

/***/ "./node_modules/object-is/index.js":
/*!*****************************************!*\
  !*** ./node_modules/object-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n// http://www.ecma-international.org/ecma-262/6.0/#sec-object.is\n\nvar numberIsNaN = function (value) {\n\treturn value !== value;\n};\n\nmodule.exports = function is(a, b) {\n\tif (a === 0 && b === 0) {\n\t\treturn 1 / a === 1 / b;\n\t}\n\tif (a === b) {\n\t\treturn true;\n\t}\n\tif (numberIsNaN(a) && numberIsNaN(b)) {\n\t\treturn true;\n\t}\n\treturn false;\n};\n\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-is/index.js?");

/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n// modified from https://github.com/es-shims/es5-shim\nvar has = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/object-keys/isArguments.js\");\nvar isEnumerable = Object.prototype.propertyIsEnumerable;\nvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\nvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\nvar dontEnums = [\n\t'toString',\n\t'toLocaleString',\n\t'valueOf',\n\t'hasOwnProperty',\n\t'isPrototypeOf',\n\t'propertyIsEnumerable',\n\t'constructor'\n];\nvar equalsConstructorPrototype = function (o) {\n\tvar ctor = o.constructor;\n\treturn ctor && ctor.prototype === o;\n};\nvar excludedKeys = {\n\t$applicationCache: true,\n\t$console: true,\n\t$external: true,\n\t$frame: true,\n\t$frameElement: true,\n\t$frames: true,\n\t$innerHeight: true,\n\t$innerWidth: true,\n\t$outerHeight: true,\n\t$outerWidth: true,\n\t$pageXOffset: true,\n\t$pageYOffset: true,\n\t$parent: true,\n\t$scrollLeft: true,\n\t$scrollTop: true,\n\t$scrollX: true,\n\t$scrollY: true,\n\t$self: true,\n\t$webkitIndexedDB: true,\n\t$webkitStorageInfo: true,\n\t$window: true\n};\nvar hasAutomationEqualityBug = (function () {\n\t/* global window */\n\tif (typeof window === 'undefined') { return false; }\n\tfor (var k in window) {\n\t\ttry {\n\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\ttry {\n\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t} catch (e) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t} catch (e) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n}());\nvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t/* global window */\n\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\treturn equalsConstructorPrototype(o);\n\t}\n\ttry {\n\t\treturn equalsConstructorPrototype(o);\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar keysShim = function keys(object) {\n\tvar isObject = object !== null && typeof object === 'object';\n\tvar isFunction = toStr.call(object) === '[object Function]';\n\tvar isArguments = isArgs(object);\n\tvar isString = isObject && toStr.call(object) === '[object String]';\n\tvar theKeys = [];\n\n\tif (!isObject && !isFunction && !isArguments) {\n\t\tthrow new TypeError('Object.keys called on a non-object');\n\t}\n\n\tvar skipProto = hasProtoEnumBug && isFunction;\n\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\ttheKeys.push(String(i));\n\t\t}\n\t}\n\n\tif (isArguments && object.length > 0) {\n\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\ttheKeys.push(String(j));\n\t\t}\n\t} else {\n\t\tfor (var name in object) {\n\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\ttheKeys.push(String(name));\n\t\t\t}\n\t\t}\n\t}\n\n\tif (hasDontEnumBug) {\n\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t}\n\t\t}\n\t}\n\treturn theKeys;\n};\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\treturn (Object.keys(arguments) || '').length === 2;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tvar originalKeys = Object.keys;\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t} else {\n\t\t\t\t\treturn originalKeys(object);\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-keys/index.js?");

/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-keys/isArguments.js?");

/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n// modified from https://github.com/es-shims/es6-shim\nvar keys = __webpack_require__(/*! object-keys */ \"./node_modules/object-keys/index.js\");\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar canBeObject = function (obj) {\n\treturn typeof obj !== 'undefined' && obj !== null;\n};\nvar hasSymbols = __webpack_require__(/*! has-symbols/shams */ \"./node_modules/has-symbols/shams.js\")();\nvar toObject = Object;\nvar push = bind.call(Function.call, Array.prototype.push);\nvar propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);\nvar originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;\n\nmodule.exports = function assign(target, source1) {\n\tif (!canBeObject(target)) { throw new TypeError('target must be an object'); }\n\tvar objTarget = toObject(target);\n\tvar s, source, i, props, syms, value, key;\n\tfor (s = 1; s < arguments.length; ++s) {\n\t\tsource = toObject(arguments[s]);\n\t\tprops = keys(source);\n\t\tvar getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);\n\t\tif (getSymbols) {\n\t\t\tsyms = getSymbols(source);\n\t\t\tfor (i = 0; i < syms.length; ++i) {\n\t\t\t\tkey = syms[i];\n\t\t\t\tif (propIsEnumerable(source, key)) {\n\t\t\t\t\tpush(props, key);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tfor (i = 0; i < props.length; ++i) {\n\t\t\tkey = props[i];\n\t\t\tvalue = source[key];\n\t\t\tif (propIsEnumerable(source, key)) {\n\t\t\t\tobjTarget[key] = value;\n\t\t\t}\n\t\t}\n\t}\n\treturn objTarget;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/implementation.js?");

/***/ }),

/***/ "./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar defineProperties = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.assign/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.assign/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/object.assign/shim.js\");\n\nvar polyfill = getPolyfill();\n\ndefineProperties(polyfill, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = polyfill;\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/index.js?");

/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.assign/implementation.js\");\n\nvar lacksProperEnumerationOrder = function () {\n\tif (!Object.assign) {\n\t\treturn false;\n\t}\n\t// v8, specifically in node 4.x, has a bug with incorrect property enumeration order\n\t// note: this does not detect the bug unless there's 20 characters\n\tvar str = 'abcdefghijklmnopqrst';\n\tvar letters = str.split('');\n\tvar map = {};\n\tfor (var i = 0; i < letters.length; ++i) {\n\t\tmap[letters[i]] = letters[i];\n\t}\n\tvar obj = Object.assign({}, map);\n\tvar actual = '';\n\tfor (var k in obj) {\n\t\tactual += k;\n\t}\n\treturn str !== actual;\n};\n\nvar assignHasPendingExceptions = function () {\n\tif (!Object.assign || !Object.preventExtensions) {\n\t\treturn false;\n\t}\n\t// Firefox 37 still has \"pending exception\" logic in its Object.assign implementation,\n\t// which is 72% slower than our shim, and Firefox 40's native implementation.\n\tvar thrower = Object.preventExtensions({ 1: 2 });\n\ttry {\n\t\tObject.assign(thrower, 'xy');\n\t} catch (e) {\n\t\treturn thrower[1] === 'y';\n\t}\n\treturn false;\n};\n\nmodule.exports = function getPolyfill() {\n\tif (!Object.assign) {\n\t\treturn implementation;\n\t}\n\tif (lacksProperEnumerationOrder()) {\n\t\treturn implementation;\n\t}\n\tif (assignHasPendingExceptions()) {\n\t\treturn implementation;\n\t}\n\treturn Object.assign;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/polyfill.js?");

/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.assign/polyfill.js\");\n\nmodule.exports = function shimAssign() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tObject,\n\t\t{ assign: polyfill },\n\t\t{ assign: function () { return Object.assign !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/shim.js?");

/***/ }),

/***/ "./node_modules/parchment/src/attributor/attributor.ts":
/*!*************************************************************!*\
  !*** ./node_modules/parchment/src/attributor/attributor.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Attributor; });\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n\nclass Attributor {\n    constructor(attrName, keyName, options = {}) {\n        this.attrName = attrName;\n        this.keyName = keyName;\n        const attributeBit = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TYPE & _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ATTRIBUTE;\n        this.scope =\n            options.scope != null\n                ? // Ignore type bits, force attribute bit\n                    (options.scope & _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LEVEL) | attributeBit\n                : _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ATTRIBUTE;\n        if (options.whitelist != null) {\n            this.whitelist = options.whitelist;\n        }\n    }\n    static keys(node) {\n        return Array.from(node.attributes).map((item) => item.name);\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        node.setAttribute(this.keyName, value);\n        return true;\n    }\n    canAdd(_node, value) {\n        if (this.whitelist == null) {\n            return true;\n        }\n        if (typeof value === 'string') {\n            return this.whitelist.indexOf(value.replace(/[\"']/g, '')) > -1;\n        }\n        else {\n            return this.whitelist.indexOf(value) > -1;\n        }\n    }\n    remove(node) {\n        node.removeAttribute(this.keyName);\n    }\n    value(node) {\n        const value = node.getAttribute(this.keyName);\n        if (this.canAdd(node, value) && value) {\n            return value;\n        }\n        return '';\n    }\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/attributor.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/attributor/class.ts":
/*!********************************************************!*\
  !*** ./node_modules/parchment/src/attributor/class.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n\nfunction match(node, prefix) {\n    const className = node.getAttribute('class') || '';\n    return className\n        .split(/\\s+/)\n        .filter((name) => name.indexOf(`${prefix}-`) === 0);\n}\nclass ClassAttributor extends _attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static keys(node) {\n        return (node.getAttribute('class') || '')\n            .split(/\\s+/)\n            .map((name) => name.split('-').slice(0, -1).join('-'));\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        this.remove(node);\n        node.classList.add(`${this.keyName}-${value}`);\n        return true;\n    }\n    remove(node) {\n        const matches = match(node, this.keyName);\n        matches.forEach((name) => {\n            node.classList.remove(name);\n        });\n        if (node.classList.length === 0) {\n            node.removeAttribute('class');\n        }\n    }\n    value(node) {\n        const result = match(node, this.keyName)[0] || '';\n        const value = result.slice(this.keyName.length + 1); // +1 for hyphen\n        return this.canAdd(node, value) ? value : '';\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassAttributor);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/class.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/attributor/store.ts":
/*!********************************************************!*\
  !*** ./node_modules/parchment/src/attributor/store.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class */ \"./node_modules/parchment/src/attributor/class.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./node_modules/parchment/src/attributor/style.ts\");\n\n\n\n\n\nclass AttributorStore {\n    constructor(domNode) {\n        this.attributes = {};\n        this.domNode = domNode;\n        this.build();\n    }\n    attribute(attribute, value) {\n        // verb\n        if (value) {\n            if (attribute.add(this.domNode, value)) {\n                if (attribute.value(this.domNode) != null) {\n                    this.attributes[attribute.attrName] = attribute;\n                }\n                else {\n                    delete this.attributes[attribute.attrName];\n                }\n            }\n        }\n        else {\n            attribute.remove(this.domNode);\n            delete this.attributes[attribute.attrName];\n        }\n    }\n    build() {\n        this.attributes = {};\n        const blot = _registry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(this.domNode);\n        if (blot == null) {\n            return;\n        }\n        const attributes = _attributor__WEBPACK_IMPORTED_MODULE_2__[\"default\"].keys(this.domNode);\n        const classes = _class__WEBPACK_IMPORTED_MODULE_3__[\"default\"].keys(this.domNode);\n        const styles = _style__WEBPACK_IMPORTED_MODULE_4__[\"default\"].keys(this.domNode);\n        attributes\n            .concat(classes)\n            .concat(styles)\n            .forEach((name) => {\n            const attr = blot.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ATTRIBUTE);\n            if (attr instanceof _attributor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n                this.attributes[attr.attrName] = attr;\n            }\n        });\n    }\n    copy(target) {\n        Object.keys(this.attributes).forEach((key) => {\n            const value = this.attributes[key].value(this.domNode);\n            target.format(key, value);\n        });\n    }\n    move(target) {\n        this.copy(target);\n        Object.keys(this.attributes).forEach((key) => {\n            this.attributes[key].remove(this.domNode);\n        });\n        this.attributes = {};\n    }\n    values() {\n        return Object.keys(this.attributes).reduce((attributes, name) => {\n            attributes[name] = this.attributes[name].value(this.domNode);\n            return attributes;\n        }, {});\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (AttributorStore);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/store.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/attributor/style.ts":
/*!********************************************************!*\
  !*** ./node_modules/parchment/src/attributor/style.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n\nfunction camelize(name) {\n    const parts = name.split('-');\n    const rest = parts\n        .slice(1)\n        .map((part) => part[0].toUpperCase() + part.slice(1))\n        .join('');\n    return parts[0] + rest;\n}\nclass StyleAttributor extends _attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static keys(node) {\n        return (node.getAttribute('style') || '').split(';').map((value) => {\n            const arr = value.split(':');\n            return arr[0].trim();\n        });\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        // @ts-ignore\n        node.style[camelize(this.keyName)] = value;\n        return true;\n    }\n    remove(node) {\n        // @ts-ignore\n        node.style[camelize(this.keyName)] = '';\n        if (!node.getAttribute('style')) {\n            node.removeAttribute('style');\n        }\n    }\n    value(node) {\n        // @ts-ignore\n        const value = node.style[camelize(this.keyName)];\n        return this.canAdd(node, value) ? value : '';\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyleAttributor);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/style.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/blot/abstract/container.ts":
/*!***************************************************************!*\
  !*** ./node_modules/parchment/src/blot/abstract/container.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n\n\nclass ContainerBlot extends _parent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    checkMerge() {\n        return (this.next !== null && this.next.statics.blotName === this.statics.blotName);\n    }\n    deleteAt(index, length) {\n        super.deleteAt(index, length);\n        this.enforceAllowedChildren();\n    }\n    formatAt(index, length, name, value) {\n        super.formatAt(index, length, name, value);\n        this.enforceAllowedChildren();\n    }\n    insertAt(index, value, def) {\n        super.insertAt(index, value, def);\n        this.enforceAllowedChildren();\n    }\n    optimize(context) {\n        super.optimize(context);\n        if (this.children.length > 0 && this.next != null && this.checkMerge()) {\n            this.next.moveChildren(this);\n            this.next.remove();\n        }\n    }\n}\nContainerBlot.blotName = 'container';\nContainerBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLOCK_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContainerBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/container.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/blot/abstract/leaf.ts":
/*!**********************************************************!*\
  !*** ./node_modules/parchment/src/blot/abstract/leaf.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadow */ \"./node_modules/parchment/src/blot/abstract/shadow.ts\");\n\n\nclass LeafBlot extends _shadow__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    static value(_domNode) {\n        return true;\n    }\n    index(node, offset) {\n        if (this.domNode === node ||\n            this.domNode.compareDocumentPosition(node) &\n                Node.DOCUMENT_POSITION_CONTAINED_BY) {\n            return Math.min(offset, 1);\n        }\n        return -1;\n    }\n    position(index, _inclusive) {\n        const childNodes = Array.from(this.parent.domNode.childNodes);\n        let offset = childNodes.indexOf(this.domNode);\n        if (index > 0) {\n            offset += 1;\n        }\n        return [this.parent.domNode, offset];\n    }\n    value() {\n        return {\n            [this.statics.blotName]: this.statics.value(this.domNode) || true,\n        };\n    }\n}\nLeafBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INLINE_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeafBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/leaf.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/blot/abstract/parent.ts":
/*!************************************************************!*\
  !*** ./node_modules/parchment/src/blot/abstract/parent.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collection_linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../collection/linked-list */ \"./node_modules/parchment/src/collection/linked-list.ts\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadow */ \"./node_modules/parchment/src/blot/abstract/shadow.ts\");\n\n\n\n\nfunction makeAttachedBlot(node, scroll) {\n    let blot = scroll.find(node);\n    if (blot == null) {\n        try {\n            blot = scroll.create(node);\n        }\n        catch (e) {\n            blot = scroll.create(_scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE);\n            Array.from(node.childNodes).forEach((child) => {\n                // @ts-ignore\n                blot.domNode.appendChild(child);\n            });\n            if (node.parentNode) {\n                node.parentNode.replaceChild(blot.domNode, node);\n            }\n            blot.attach();\n        }\n    }\n    return blot;\n}\nclass ParentBlot extends _shadow__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.uiNode = null;\n        this.build();\n    }\n    appendChild(other) {\n        this.insertBefore(other);\n    }\n    attach() {\n        super.attach();\n        this.children.forEach((child) => {\n            child.attach();\n        });\n    }\n    attachUI(node) {\n        if (this.uiNode != null) {\n            this.uiNode.remove();\n        }\n        this.uiNode = node;\n        if (ParentBlot.uiClass) {\n            this.uiNode.classList.add(ParentBlot.uiClass);\n        }\n        this.uiNode.setAttribute('contenteditable', 'false');\n        this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);\n    }\n    build() {\n        this.children = new _collection_linked_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        // Need to be reversed for if DOM nodes already in order\n        Array.from(this.domNode.childNodes)\n            .filter((node) => node !== this.uiNode)\n            .reverse()\n            .forEach((node) => {\n            try {\n                const child = makeAttachedBlot(node, this.scroll);\n                this.insertBefore(child, this.children.head || undefined);\n            }\n            catch (err) {\n                if (err instanceof _error__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n                    return;\n                }\n                else {\n                    throw err;\n                }\n            }\n        });\n    }\n    deleteAt(index, length) {\n        if (index === 0 && length === this.length()) {\n            return this.remove();\n        }\n        this.children.forEachAt(index, length, (child, offset, childLength) => {\n            child.deleteAt(offset, childLength);\n        });\n    }\n    descendant(criteria, index = 0) {\n        const [child, offset] = this.children.find(index);\n        if ((criteria.blotName == null && criteria(child)) ||\n            (criteria.blotName != null && child instanceof criteria)) {\n            return [child, offset];\n        }\n        else if (child instanceof ParentBlot) {\n            return child.descendant(criteria, offset);\n        }\n        else {\n            return [null, -1];\n        }\n    }\n    descendants(criteria, index = 0, length = Number.MAX_VALUE) {\n        let descendants = [];\n        let lengthLeft = length;\n        this.children.forEachAt(index, length, (child, childIndex, childLength) => {\n            if ((criteria.blotName == null && criteria(child)) ||\n                (criteria.blotName != null && child instanceof criteria)) {\n                descendants.push(child);\n            }\n            if (child instanceof ParentBlot) {\n                descendants = descendants.concat(child.descendants(criteria, childIndex, lengthLeft));\n            }\n            lengthLeft -= childLength;\n        });\n        return descendants;\n    }\n    detach() {\n        this.children.forEach((child) => {\n            child.detach();\n        });\n        super.detach();\n    }\n    enforceAllowedChildren() {\n        let done = false;\n        this.children.forEach((child) => {\n            if (done) {\n                return;\n            }\n            const allowed = this.statics.allowedChildren.some((def) => child instanceof def);\n            if (allowed) {\n                return;\n            }\n            if (child.statics.scope === _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK_BLOT) {\n                if (child.next != null) {\n                    this.splitAfter(child);\n                }\n                if (child.prev != null) {\n                    this.splitAfter(child.prev);\n                }\n                child.parent.unwrap();\n                done = true;\n            }\n            else if (child instanceof ParentBlot) {\n                child.unwrap();\n            }\n            else {\n                child.remove();\n            }\n        });\n    }\n    formatAt(index, length, name, value) {\n        this.children.forEachAt(index, length, (child, offset, childLength) => {\n            child.formatAt(offset, childLength, name, value);\n        });\n    }\n    insertAt(index, value, def) {\n        const [child, offset] = this.children.find(index);\n        if (child) {\n            child.insertAt(offset, value, def);\n        }\n        else {\n            const blot = def == null\n                ? this.scroll.create('text', value)\n                : this.scroll.create(value, def);\n            this.appendChild(blot);\n        }\n    }\n    insertBefore(childBlot, refBlot) {\n        if (childBlot.parent != null) {\n            childBlot.parent.children.remove(childBlot);\n        }\n        let refDomNode = null;\n        this.children.insertBefore(childBlot, refBlot || null);\n        childBlot.parent = this;\n        if (refBlot != null) {\n            refDomNode = refBlot.domNode;\n        }\n        if (this.domNode.parentNode !== childBlot.domNode ||\n            this.domNode.nextSibling !== refDomNode) {\n            this.domNode.insertBefore(childBlot.domNode, refDomNode);\n        }\n        childBlot.attach();\n    }\n    length() {\n        return this.children.reduce((memo, child) => {\n            return memo + child.length();\n        }, 0);\n    }\n    moveChildren(targetParent, refNode) {\n        this.children.forEach((child) => {\n            targetParent.insertBefore(child, refNode);\n        });\n    }\n    optimize(context) {\n        super.optimize(context);\n        this.enforceAllowedChildren();\n        if (this.uiNode != null && this.uiNode !== this.domNode.firstChild) {\n            this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);\n        }\n        if (this.children.length === 0) {\n            if (this.statics.defaultChild != null) {\n                const child = this.scroll.create(this.statics.defaultChild.blotName);\n                this.appendChild(child);\n                // TODO double check if necessary\n                // child.optimize(context);\n            }\n            else {\n                this.remove();\n            }\n        }\n    }\n    path(index, inclusive = false) {\n        const [child, offset] = this.children.find(index, inclusive);\n        const position = [[this, index]];\n        if (child instanceof ParentBlot) {\n            return position.concat(child.path(offset, inclusive));\n        }\n        else if (child != null) {\n            position.push([child, offset]);\n        }\n        return position;\n    }\n    removeChild(child) {\n        this.children.remove(child);\n    }\n    replaceWith(name, value) {\n        const replacement = typeof name === 'string' ? this.scroll.create(name, value) : name;\n        if (replacement instanceof ParentBlot) {\n            this.moveChildren(replacement);\n        }\n        return super.replaceWith(replacement);\n    }\n    split(index, force = false) {\n        if (!force) {\n            if (index === 0) {\n                return this;\n            }\n            if (index === this.length()) {\n                return this.next;\n            }\n        }\n        const after = this.clone();\n        if (this.parent) {\n            this.parent.insertBefore(after, this.next || undefined);\n        }\n        this.children.forEachAt(index, this.length(), (child, offset, _length) => {\n            const split = child.split(offset, force);\n            if (split != null) {\n                after.appendChild(split);\n            }\n        });\n        return after;\n    }\n    splitAfter(child) {\n        const after = this.clone();\n        while (child.next != null) {\n            after.appendChild(child.next);\n        }\n        if (this.parent) {\n            this.parent.insertBefore(after, this.next || undefined);\n        }\n        return after;\n    }\n    unwrap() {\n        if (this.parent) {\n            this.moveChildren(this.parent, this.next || undefined);\n        }\n        this.remove();\n    }\n    update(mutations, _context) {\n        const addedNodes = [];\n        const removedNodes = [];\n        mutations.forEach((mutation) => {\n            if (mutation.target === this.domNode && mutation.type === 'childList') {\n                addedNodes.push(...mutation.addedNodes);\n                removedNodes.push(...mutation.removedNodes);\n            }\n        });\n        removedNodes.forEach((node) => {\n            // Check node has actually been removed\n            // One exception is Chrome does not immediately remove IFRAMEs\n            // from DOM but MutationRecord is correct in its reported removal\n            if (node.parentNode != null &&\n                // @ts-ignore\n                node.tagName !== 'IFRAME' &&\n                document.body.compareDocumentPosition(node) &\n                    Node.DOCUMENT_POSITION_CONTAINED_BY) {\n                return;\n            }\n            const blot = this.scroll.find(node);\n            if (blot == null) {\n                return;\n            }\n            if (blot.domNode.parentNode == null ||\n                blot.domNode.parentNode === this.domNode) {\n                blot.detach();\n            }\n        });\n        addedNodes\n            .filter((node) => {\n            return node.parentNode === this.domNode || node === this.uiNode;\n        })\n            .sort((a, b) => {\n            if (a === b) {\n                return 0;\n            }\n            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {\n                return 1;\n            }\n            return -1;\n        })\n            .forEach((node) => {\n            let refBlot = null;\n            if (node.nextSibling != null) {\n                refBlot = this.scroll.find(node.nextSibling);\n            }\n            const blot = makeAttachedBlot(node, this.scroll);\n            if (blot.next !== refBlot || blot.next == null) {\n                if (blot.parent != null) {\n                    blot.parent.removeChild(this);\n                }\n                this.insertBefore(blot, refBlot || undefined);\n            }\n        });\n        this.enforceAllowedChildren();\n    }\n}\nParentBlot.uiClass = '';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParentBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/parent.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/blot/abstract/shadow.ts":
/*!************************************************************!*\
  !*** ./node_modules/parchment/src/blot/abstract/shadow.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n\n\n\nclass ShadowBlot {\n    constructor(scroll, domNode) {\n        this.scroll = scroll;\n        this.domNode = domNode;\n        _registry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blots.set(domNode, this);\n        this.prev = null;\n        this.next = null;\n    }\n    static create(value) {\n        if (this.tagName == null) {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Blot definition missing tagName');\n        }\n        let node;\n        if (Array.isArray(this.tagName)) {\n            if (typeof value === 'string') {\n                value = value.toUpperCase();\n                if (parseInt(value, 10).toString() === value) {\n                    value = parseInt(value, 10);\n                }\n            }\n            if (typeof value === 'number') {\n                node = document.createElement(this.tagName[value - 1]);\n            }\n            else if (this.tagName.indexOf(value) > -1) {\n                node = document.createElement(value);\n            }\n            else {\n                node = document.createElement(this.tagName[0]);\n            }\n        }\n        else {\n            node = document.createElement(this.tagName);\n        }\n        if (this.className) {\n            node.classList.add(this.className);\n        }\n        return node;\n    }\n    // Hack for accessing inherited static methods\n    get statics() {\n        return this.constructor;\n    }\n    attach() {\n        // Nothing to do\n    }\n    clone() {\n        const domNode = this.domNode.cloneNode(false);\n        return this.scroll.create(domNode);\n    }\n    detach() {\n        if (this.parent != null) {\n            this.parent.removeChild(this);\n        }\n        _registry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blots.delete(this.domNode);\n    }\n    deleteAt(index, length) {\n        const blot = this.isolate(index, length);\n        blot.remove();\n    }\n    formatAt(index, length, name, value) {\n        const blot = this.isolate(index, length);\n        if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOT) != null && value) {\n            blot.wrap(name, value);\n        }\n        else if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ATTRIBUTE) != null) {\n            const parent = this.scroll.create(this.statics.scope);\n            blot.wrap(parent);\n            parent.format(name, value);\n        }\n    }\n    insertAt(index, value, def) {\n        const blot = def == null\n            ? this.scroll.create('text', value)\n            : this.scroll.create(value, def);\n        const ref = this.split(index);\n        this.parent.insertBefore(blot, ref || undefined);\n    }\n    isolate(index, length) {\n        const target = this.split(index);\n        if (target == null) {\n            throw new Error('Attempt to isolate at end');\n        }\n        target.split(length);\n        return target;\n    }\n    length() {\n        return 1;\n    }\n    offset(root = this.parent) {\n        if (this.parent == null || this === root) {\n            return 0;\n        }\n        return this.parent.children.offset(this) + this.parent.offset(root);\n    }\n    optimize(_context) {\n        if (this.statics.requiredContainer &&\n            !(this.parent instanceof this.statics.requiredContainer)) {\n            this.wrap(this.statics.requiredContainer.blotName);\n        }\n    }\n    remove() {\n        if (this.domNode.parentNode != null) {\n            this.domNode.parentNode.removeChild(this.domNode);\n        }\n        this.detach();\n    }\n    replaceWith(name, value) {\n        const replacement = typeof name === 'string' ? this.scroll.create(name, value) : name;\n        if (this.parent != null) {\n            this.parent.insertBefore(replacement, this.next || undefined);\n            this.remove();\n        }\n        return replacement;\n    }\n    split(index, _force) {\n        return index === 0 ? this : this.next;\n    }\n    update(_mutations, _context) {\n        // Nothing to do by default\n    }\n    wrap(name, value) {\n        const wrapper = typeof name === 'string'\n            ? this.scroll.create(name, value)\n            : name;\n        if (this.parent != null) {\n            this.parent.insertBefore(wrapper, this.next || undefined);\n        }\n        if (typeof wrapper.appendChild !== 'function') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Cannot wrap ${name}`);\n        }\n        wrapper.appendChild(this);\n        return wrapper;\n    }\n}\nShadowBlot.blotName = 'abstract';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShadowBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/shadow.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/blot/block.ts":
/*!**************************************************!*\
  !*** ./node_modules/parchment/src/blot/block.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline */ \"./node_modules/parchment/src/blot/inline.ts\");\n\n\n\n\n\n\nclass BlockBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.attributes = new _attributor_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.domNode);\n    }\n    static formats(domNode, scroll) {\n        const match = scroll.query(BlockBlot.blotName);\n        if (match != null &&\n            domNode.tagName === match.tagName) {\n            return undefined;\n        }\n        else if (typeof this.tagName === 'string') {\n            return true;\n        }\n        else if (Array.isArray(this.tagName)) {\n            return domNode.tagName.toLowerCase();\n        }\n    }\n    format(name, value) {\n        const format = this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK);\n        if (format == null) {\n            return;\n        }\n        else if (format instanceof _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.attributes.attribute(format, value);\n        }\n        else if (name === this.statics.blotName && !value) {\n            this.replaceWith(BlockBlot.blotName);\n        }\n        else if (value &&\n            (name !== this.statics.blotName || this.formats()[name] !== value)) {\n            this.replaceWith(name, value);\n        }\n    }\n    formats() {\n        const formats = this.attributes.values();\n        const format = this.statics.formats(this.domNode, this.scroll);\n        if (format != null) {\n            formats[this.statics.blotName] = format;\n        }\n        return formats;\n    }\n    formatAt(index, length, name, value) {\n        if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK) != null) {\n            this.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    insertAt(index, value, def) {\n        if (def == null || this.scroll.query(value, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE) != null) {\n            // Insert text or inline\n            super.insertAt(index, value, def);\n        }\n        else {\n            const after = this.split(index);\n            if (after != null) {\n                const blot = this.scroll.create(value, def);\n                after.parent.insertBefore(blot, after);\n            }\n            else {\n                throw new Error('Attempt to insertAt after block boundaries');\n            }\n        }\n    }\n    replaceWith(name, value) {\n        const replacement = super.replaceWith(name, value);\n        this.attributes.copy(replacement);\n        return replacement;\n    }\n    update(mutations, context) {\n        super.update(mutations, context);\n        const attributeChanged = mutations.some((mutation) => mutation.target === this.domNode && mutation.type === 'attributes');\n        if (attributeChanged) {\n            this.attributes.build();\n        }\n    }\n}\nBlockBlot.blotName = 'block';\nBlockBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK_BLOT;\nBlockBlot.tagName = 'P';\nBlockBlot.allowedChildren = [\n    _inline__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    BlockBlot,\n    _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlockBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/block.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/blot/embed.ts":
/*!**************************************************!*\
  !*** ./node_modules/parchment/src/blot/embed.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n\nclass EmbedBlot extends _abstract_leaf__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static formats(_domNode, _scroll) {\n        return undefined;\n    }\n    format(name, value) {\n        // super.formatAt wraps, which is what we want in general,\n        // but this allows subclasses to overwrite for formats\n        // that just apply to particular embeds\n        super.formatAt(0, this.length(), name, value);\n    }\n    formatAt(index, length, name, value) {\n        if (index === 0 && length === this.length()) {\n            this.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    formats() {\n        return this.statics.formats(this.domNode, this.scroll);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmbedBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/embed.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/blot/inline.ts":
/*!***************************************************!*\
  !*** ./node_modules/parchment/src/blot/inline.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n\n\n\n\n\n// Shallow object comparison\nfunction isEqual(obj1, obj2) {\n    if (Object.keys(obj1).length !== Object.keys(obj2).length) {\n        return false;\n    }\n    // @ts-ignore\n    for (const prop in obj1) {\n        // @ts-ignore\n        if (obj1[prop] !== obj2[prop]) {\n            return false;\n        }\n    }\n    return true;\n}\nclass InlineBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.attributes = new _attributor_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.domNode);\n    }\n    static formats(domNode, scroll) {\n        const match = scroll.query(InlineBlot.blotName);\n        if (match != null &&\n            domNode.tagName === match.tagName) {\n            return undefined;\n        }\n        else if (typeof this.tagName === 'string') {\n            return true;\n        }\n        else if (Array.isArray(this.tagName)) {\n            return domNode.tagName.toLowerCase();\n        }\n        return undefined;\n    }\n    format(name, value) {\n        if (name === this.statics.blotName && !value) {\n            this.children.forEach((child) => {\n                if (!(child instanceof InlineBlot)) {\n                    child = child.wrap(InlineBlot.blotName, true);\n                }\n                this.attributes.copy(child);\n            });\n            this.unwrap();\n        }\n        else {\n            const format = this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE);\n            if (format == null) {\n                return;\n            }\n            if (format instanceof _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n                this.attributes.attribute(format, value);\n            }\n            else if (value &&\n                (name !== this.statics.blotName || this.formats()[name] !== value)) {\n                this.replaceWith(name, value);\n            }\n        }\n    }\n    formats() {\n        const formats = this.attributes.values();\n        const format = this.statics.formats(this.domNode, this.scroll);\n        if (format != null) {\n            formats[this.statics.blotName] = format;\n        }\n        return formats;\n    }\n    formatAt(index, length, name, value) {\n        if (this.formats()[name] != null ||\n            this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ATTRIBUTE)) {\n            const blot = this.isolate(index, length);\n            blot.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    optimize(context) {\n        super.optimize(context);\n        const formats = this.formats();\n        if (Object.keys(formats).length === 0) {\n            return this.unwrap(); // unformatted span\n        }\n        const next = this.next;\n        if (next instanceof InlineBlot &&\n            next.prev === this &&\n            isEqual(formats, next.formats())) {\n            next.moveChildren(this);\n            next.remove();\n        }\n    }\n    replaceWith(name, value) {\n        const replacement = super.replaceWith(name, value);\n        this.attributes.copy(replacement);\n        return replacement;\n    }\n    update(mutations, context) {\n        super.update(mutations, context);\n        const attributeChanged = mutations.some((mutation) => mutation.target === this.domNode && mutation.type === 'attributes');\n        if (attributeChanged) {\n            this.attributes.build();\n        }\n    }\n    wrap(name, value) {\n        const wrapper = super.wrap(name, value);\n        if (wrapper instanceof InlineBlot) {\n            this.attributes.move(wrapper);\n        }\n        return wrapper;\n    }\n}\nInlineBlot.allowedChildren = [InlineBlot, _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\nInlineBlot.blotName = 'inline';\nInlineBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE_BLOT;\nInlineBlot.tagName = 'SPAN';\n/* harmony default export */ __webpack_exports__[\"default\"] = (InlineBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/inline.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/blot/scroll.ts":
/*!***************************************************!*\
  !*** ./node_modules/parchment/src/blot/scroll.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract/container */ \"./node_modules/parchment/src/blot/abstract/container.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block */ \"./node_modules/parchment/src/blot/block.ts\");\n\n\n\n\n\nconst OBSERVER_CONFIG = {\n    attributes: true,\n    characterData: true,\n    characterDataOldValue: true,\n    childList: true,\n    subtree: true,\n};\nconst MAX_OPTIMIZE_ITERATIONS = 100;\nclass ScrollBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor(registry, node) {\n        // @ts-ignore\n        super(null, node);\n        this.registry = registry;\n        this.scroll = this;\n        this.build();\n        this.observer = new MutationObserver((mutations) => {\n            this.update(mutations);\n        });\n        this.observer.observe(this.domNode, OBSERVER_CONFIG);\n        this.attach();\n    }\n    create(input, value) {\n        return this.registry.create(this, input, value);\n    }\n    find(node, bubble = false) {\n        return this.registry.find(node, bubble);\n    }\n    query(query, scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ANY) {\n        return this.registry.query(query, scope);\n    }\n    register(...definitions) {\n        return this.registry.register(...definitions);\n    }\n    build() {\n        if (this.scroll == null) {\n            return;\n        }\n        super.build();\n    }\n    detach() {\n        super.detach();\n        this.observer.disconnect();\n    }\n    deleteAt(index, length) {\n        this.update();\n        if (index === 0 && length === this.length()) {\n            this.children.forEach((child) => {\n                child.remove();\n            });\n        }\n        else {\n            super.deleteAt(index, length);\n        }\n    }\n    formatAt(index, length, name, value) {\n        this.update();\n        super.formatAt(index, length, name, value);\n    }\n    insertAt(index, value, def) {\n        this.update();\n        super.insertAt(index, value, def);\n    }\n    optimize(mutations = [], context = {}) {\n        super.optimize(context);\n        const mutationsMap = context.mutationsMap || new WeakMap();\n        // We must modify mutations directly, cannot make copy and then modify\n        let records = Array.from(this.observer.takeRecords());\n        // Array.push currently seems to be implemented by a non-tail recursive function\n        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());\n        while (records.length > 0) {\n            mutations.push(records.pop());\n        }\n        const mark = (blot, markParent = true) => {\n            if (blot == null || blot === this) {\n                return;\n            }\n            if (blot.domNode.parentNode == null) {\n                return;\n            }\n            if (!mutationsMap.has(blot.domNode)) {\n                mutationsMap.set(blot.domNode, []);\n            }\n            if (markParent) {\n                mark(blot.parent);\n            }\n        };\n        const optimize = (blot) => {\n            // Post-order traversal\n            if (!mutationsMap.has(blot.domNode)) {\n                return;\n            }\n            if (blot instanceof _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n                blot.children.forEach(optimize);\n            }\n            mutationsMap.delete(blot.domNode);\n            blot.optimize(context);\n        };\n        let remaining = mutations;\n        for (let i = 0; remaining.length > 0; i += 1) {\n            if (i >= MAX_OPTIMIZE_ITERATIONS) {\n                throw new Error('[Parchment] Maximum optimize iterations reached');\n            }\n            remaining.forEach((mutation) => {\n                const blot = this.find(mutation.target, true);\n                if (blot == null) {\n                    return;\n                }\n                if (blot.domNode === mutation.target) {\n                    if (mutation.type === 'childList') {\n                        mark(this.find(mutation.previousSibling, false));\n                        Array.from(mutation.addedNodes).forEach((node) => {\n                            const child = this.find(node, false);\n                            mark(child, false);\n                            if (child instanceof _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n                                child.children.forEach((grandChild) => {\n                                    mark(grandChild, false);\n                                });\n                            }\n                        });\n                    }\n                    else if (mutation.type === 'attributes') {\n                        mark(blot.prev);\n                    }\n                }\n                mark(blot);\n            });\n            this.children.forEach(optimize);\n            remaining = Array.from(this.observer.takeRecords());\n            records = remaining.slice();\n            while (records.length > 0) {\n                mutations.push(records.pop());\n            }\n        }\n    }\n    update(mutations, context = {}) {\n        mutations = mutations || this.observer.takeRecords();\n        const mutationsMap = new WeakMap();\n        mutations\n            .map((mutation) => {\n            const blot = _registry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(mutation.target, true);\n            if (blot == null) {\n                return null;\n            }\n            if (mutationsMap.has(blot.domNode)) {\n                mutationsMap.get(blot.domNode).push(mutation);\n                return null;\n            }\n            else {\n                mutationsMap.set(blot.domNode, [mutation]);\n                return blot;\n            }\n        })\n            .forEach((blot) => {\n            if (blot != null && blot !== this && mutationsMap.has(blot.domNode)) {\n                blot.update(mutationsMap.get(blot.domNode) || [], context);\n            }\n        });\n        context.mutationsMap = mutationsMap;\n        if (mutationsMap.has(this.domNode)) {\n            super.update(mutationsMap.get(this.domNode), context);\n        }\n        this.optimize(mutations, context);\n    }\n}\nScrollBlot.blotName = 'scroll';\nScrollBlot.defaultChild = _block__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nScrollBlot.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _abstract_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nScrollBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BLOCK_BLOT;\nScrollBlot.tagName = 'DIV';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/scroll.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/blot/text.ts":
/*!*************************************************!*\
  !*** ./node_modules/parchment/src/blot/text.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n\n\nclass TextBlot extends _abstract_leaf__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(scroll, node) {\n        super(scroll, node);\n        this.text = this.statics.value(this.domNode);\n    }\n    static create(value) {\n        return document.createTextNode(value);\n    }\n    static value(domNode) {\n        return domNode.data;\n    }\n    deleteAt(index, length) {\n        this.domNode.data = this.text =\n            this.text.slice(0, index) + this.text.slice(index + length);\n    }\n    index(node, offset) {\n        if (this.domNode === node) {\n            return offset;\n        }\n        return -1;\n    }\n    insertAt(index, value, def) {\n        if (def == null) {\n            this.text = this.text.slice(0, index) + value + this.text.slice(index);\n            this.domNode.data = this.text;\n        }\n        else {\n            super.insertAt(index, value, def);\n        }\n    }\n    length() {\n        return this.text.length;\n    }\n    optimize(context) {\n        super.optimize(context);\n        this.text = this.statics.value(this.domNode);\n        if (this.text.length === 0) {\n            this.remove();\n        }\n        else if (this.next instanceof TextBlot && this.next.prev === this) {\n            this.insertAt(this.length(), this.next.value());\n            this.next.remove();\n        }\n    }\n    position(index, _inclusive = false) {\n        return [this.domNode, index];\n    }\n    split(index, force = false) {\n        if (!force) {\n            if (index === 0) {\n                return this;\n            }\n            if (index === this.length()) {\n                return this.next;\n            }\n        }\n        const after = this.scroll.create(this.domNode.splitText(index));\n        this.parent.insertBefore(after, this.next || undefined);\n        this.text = this.statics.value(this.domNode);\n        return after;\n    }\n    update(mutations, _context) {\n        if (mutations.some((mutation) => {\n            return (mutation.type === 'characterData' && mutation.target === this.domNode);\n        })) {\n            this.text = this.statics.value(this.domNode);\n        }\n    }\n    value() {\n        return this.text;\n    }\n}\nTextBlot.blotName = 'text';\nTextBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INLINE_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/text.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/collection/linked-list.ts":
/*!**************************************************************!*\
  !*** ./node_modules/parchment/src/collection/linked-list.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\nclass LinkedList {\n    constructor() {\n        this.head = null;\n        this.tail = null;\n        this.length = 0;\n    }\n    append(...nodes) {\n        this.insertBefore(nodes[0], null);\n        if (nodes.length > 1) {\n            const rest = nodes.slice(1);\n            this.append(...rest);\n        }\n    }\n    at(index) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur && index > 0) {\n            index -= 1;\n            cur = next();\n        }\n        return cur;\n    }\n    contains(node) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            if (cur === node) {\n                return true;\n            }\n            cur = next();\n        }\n        return false;\n    }\n    indexOf(node) {\n        const next = this.iterator();\n        let cur = next();\n        let index = 0;\n        while (cur) {\n            if (cur === node) {\n                return index;\n            }\n            index += 1;\n            cur = next();\n        }\n        return -1;\n    }\n    insertBefore(node, refNode) {\n        if (node == null) {\n            return;\n        }\n        this.remove(node);\n        node.next = refNode;\n        if (refNode != null) {\n            node.prev = refNode.prev;\n            if (refNode.prev != null) {\n                refNode.prev.next = node;\n            }\n            refNode.prev = node;\n            if (refNode === this.head) {\n                this.head = node;\n            }\n        }\n        else if (this.tail != null) {\n            this.tail.next = node;\n            node.prev = this.tail;\n            this.tail = node;\n        }\n        else {\n            node.prev = null;\n            this.head = this.tail = node;\n        }\n        this.length += 1;\n    }\n    offset(target) {\n        let index = 0;\n        let cur = this.head;\n        while (cur != null) {\n            if (cur === target) {\n                return index;\n            }\n            index += cur.length();\n            cur = cur.next;\n        }\n        return -1;\n    }\n    remove(node) {\n        if (!this.contains(node)) {\n            return;\n        }\n        if (node.prev != null) {\n            node.prev.next = node.next;\n        }\n        if (node.next != null) {\n            node.next.prev = node.prev;\n        }\n        if (node === this.head) {\n            this.head = node.next;\n        }\n        if (node === this.tail) {\n            this.tail = node.prev;\n        }\n        this.length -= 1;\n    }\n    iterator(curNode = this.head) {\n        // TODO use yield when we can\n        return () => {\n            const ret = curNode;\n            if (curNode != null) {\n                curNode = curNode.next;\n            }\n            return ret;\n        };\n    }\n    find(index, inclusive = false) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            const length = cur.length();\n            if (index < length ||\n                (inclusive &&\n                    index === length &&\n                    (cur.next == null || cur.next.length() !== 0))) {\n                return [cur, index];\n            }\n            index -= length;\n            cur = next();\n        }\n        return [null, 0];\n    }\n    forEach(callback) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            callback(cur);\n            cur = next();\n        }\n    }\n    forEachAt(index, length, callback) {\n        if (length <= 0) {\n            return;\n        }\n        const [startNode, offset] = this.find(index);\n        let curIndex = index - offset;\n        const next = this.iterator(startNode);\n        let cur = next();\n        while (cur && curIndex < index + length) {\n            const curLength = cur.length();\n            if (index > curIndex) {\n                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));\n            }\n            else {\n                callback(cur, 0, Math.min(curLength, index + length - curIndex));\n            }\n            curIndex += curLength;\n            cur = next();\n        }\n    }\n    map(callback) {\n        return this.reduce((memo, cur) => {\n            memo.push(callback(cur));\n            return memo;\n        }, []);\n    }\n    reduce(callback, memo) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            memo = callback(memo, cur);\n            cur = next();\n        }\n        return memo;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedList);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/collection/linked-list.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/error.ts":
/*!*********************************************!*\
  !*** ./node_modules/parchment/src/error.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ParchmentError; });\nclass ParchmentError extends Error {\n    constructor(message) {\n        message = '[Parchment] ' + message;\n        super(message);\n        this.message = message;\n        this.name = this.constructor.name;\n    }\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/error.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/parchment.ts":
/*!*************************************************!*\
  !*** ./node_modules/parchment/src/parchment.ts ***!
  \*************************************************/
/*! exports provided: ParentBlot, ContainerBlot, LeafBlot, EmbedBlot, ScrollBlot, BlockBlot, InlineBlot, TextBlot, Attributor, ClassAttributor, StyleAttributor, AttributorStore, Registry, Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blot_abstract_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blot/abstract/container */ \"./node_modules/parchment/src/blot/abstract/container.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ContainerBlot\", function() { return _blot_abstract_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _blot_abstract_leaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blot/abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LeafBlot\", function() { return _blot_abstract_leaf__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _blot_abstract_parent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blot/abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ParentBlot\", function() { return _blot_abstract_parent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _blot_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blot/block */ \"./node_modules/parchment/src/blot/block.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BlockBlot\", function() { return _blot_block__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _blot_embed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blot/embed */ \"./node_modules/parchment/src/blot/embed.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EmbedBlot\", function() { return _blot_embed__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _blot_inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blot/inline */ \"./node_modules/parchment/src/blot/inline.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InlineBlot\", function() { return _blot_inline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _blot_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blot/scroll */ \"./node_modules/parchment/src/blot/scroll.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ScrollBlot\", function() { return _blot_scroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _blot_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blot/text */ \"./node_modules/parchment/src/blot/text.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextBlot\", function() { return _blot_text__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Attributor\", function() { return _attributor_attributor__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _attributor_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributor/class */ \"./node_modules/parchment/src/attributor/class.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ClassAttributor\", function() { return _attributor_class__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AttributorStore\", function() { return _attributor_store__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _attributor_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributor/style */ \"./node_modules/parchment/src/attributor/style.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StyleAttributor\", function() { return _attributor_style__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Registry\", function() { return _registry__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Scope\", function() { return _scope__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/parchment.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/registry.ts":
/*!************************************************!*\
  !*** ./node_modules/parchment/src/registry.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Registry; });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scope */ \"./node_modules/parchment/src/scope.ts\");\n\n\nclass Registry {\n    constructor() {\n        this.attributes = {};\n        this.classes = {};\n        this.tags = {};\n        this.types = {};\n    }\n    static find(node, bubble = false) {\n        if (node == null) {\n            return null;\n        }\n        if (this.blots.has(node)) {\n            return this.blots.get(node) || null;\n        }\n        if (bubble) {\n            return this.find(node.parentNode, bubble);\n        }\n        return null;\n    }\n    create(scroll, input, value) {\n        const match = this.query(input);\n        if (match == null) {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Unable to create ${input} blot`);\n        }\n        const blotClass = match;\n        const node = \n        // @ts-ignore\n        input instanceof Node || input.nodeType === Node.TEXT_NODE\n            ? input\n            : blotClass.create(value);\n        const blot = new blotClass(scroll, node, value);\n        Registry.blots.set(blot.domNode, blot);\n        return blot;\n    }\n    find(node, bubble = false) {\n        return Registry.find(node, bubble);\n    }\n    query(query, scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ANY) {\n        let match;\n        if (typeof query === 'string') {\n            match = this.types[query] || this.attributes[query];\n            // @ts-ignore\n        }\n        else if (query instanceof Text || query.nodeType === Node.TEXT_NODE) {\n            match = this.types.text;\n        }\n        else if (typeof query === 'number') {\n            if (query & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BLOCK) {\n                match = this.types.block;\n            }\n            else if (query & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].INLINE) {\n                match = this.types.inline;\n            }\n        }\n        else if (query instanceof HTMLElement) {\n            const names = (query.getAttribute('class') || '').split(/\\s+/);\n            names.some((name) => {\n                match = this.classes[name];\n                if (match) {\n                    return true;\n                }\n                return false;\n            });\n            match = match || this.tags[query.tagName];\n        }\n        if (match == null) {\n            return null;\n        }\n        // @ts-ignore\n        if (scope & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & match.scope && scope & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TYPE & match.scope) {\n            return match;\n        }\n        return null;\n    }\n    register(...definitions) {\n        if (definitions.length > 1) {\n            return definitions.map((d) => {\n                return this.register(d);\n            });\n        }\n        const definition = definitions[0];\n        if (typeof definition.blotName !== 'string' &&\n            typeof definition.attrName !== 'string') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Invalid definition');\n        }\n        else if (definition.blotName === 'abstract') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Cannot register abstract class');\n        }\n        this.types[definition.blotName || definition.attrName] = definition;\n        if (typeof definition.keyName === 'string') {\n            this.attributes[definition.keyName] = definition;\n        }\n        else {\n            if (definition.className != null) {\n                this.classes[definition.className] = definition;\n            }\n            if (definition.tagName != null) {\n                if (Array.isArray(definition.tagName)) {\n                    definition.tagName = definition.tagName.map((tagName) => {\n                        return tagName.toUpperCase();\n                    });\n                }\n                else {\n                    definition.tagName = definition.tagName.toUpperCase();\n                }\n                const tagNames = Array.isArray(definition.tagName)\n                    ? definition.tagName\n                    : [definition.tagName];\n                tagNames.forEach((tag) => {\n                    if (this.tags[tag] == null || definition.className == null) {\n                        this.tags[tag] = definition;\n                    }\n                });\n            }\n        }\n        return definition;\n    }\n}\nRegistry.blots = new WeakMap();\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/registry.ts?");

/***/ }),

/***/ "./node_modules/parchment/src/scope.ts":
/*!*********************************************!*\
  !*** ./node_modules/parchment/src/scope.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\nvar Scope;\n(function (Scope) {\n    Scope[Scope[\"TYPE\"] = 3] = \"TYPE\";\n    Scope[Scope[\"LEVEL\"] = 12] = \"LEVEL\";\n    Scope[Scope[\"ATTRIBUTE\"] = 13] = \"ATTRIBUTE\";\n    Scope[Scope[\"BLOT\"] = 14] = \"BLOT\";\n    Scope[Scope[\"INLINE\"] = 7] = \"INLINE\";\n    Scope[Scope[\"BLOCK\"] = 11] = \"BLOCK\";\n    Scope[Scope[\"BLOCK_BLOT\"] = 10] = \"BLOCK_BLOT\";\n    Scope[Scope[\"INLINE_BLOT\"] = 6] = \"INLINE_BLOT\";\n    Scope[Scope[\"BLOCK_ATTRIBUTE\"] = 9] = \"BLOCK_ATTRIBUTE\";\n    Scope[Scope[\"INLINE_ATTRIBUTE\"] = 5] = \"INLINE_ATTRIBUTE\";\n    Scope[Scope[\"ANY\"] = 15] = \"ANY\";\n})(Scope || (Scope = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scope);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/scope.ts?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://Quill/./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/quill-delta/dist/AttributeMap.js":
/*!*******************************************************!*\
  !*** ./node_modules/quill-delta/dist/AttributeMap.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ \"./node_modules/quill-delta/node_modules/deep-equal/index.js\"));\nvar extend_1 = __importDefault(__webpack_require__(/*! extend */ \"./node_modules/extend/index.js\"));\nvar AttributeMap;\n(function (AttributeMap) {\n    function compose(a, b, keepNull) {\n        if (a === void 0) { a = {}; }\n        if (b === void 0) { b = {}; }\n        if (typeof a !== 'object') {\n            a = {};\n        }\n        if (typeof b !== 'object') {\n            b = {};\n        }\n        var attributes = extend_1.default(true, {}, b);\n        if (!keepNull) {\n            attributes = Object.keys(attributes).reduce(function (copy, key) {\n                if (attributes[key] != null) {\n                    copy[key] = attributes[key];\n                }\n                return copy;\n            }, {});\n        }\n        for (var key in a) {\n            if (a[key] !== undefined && b[key] === undefined) {\n                attributes[key] = a[key];\n            }\n        }\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.compose = compose;\n    function diff(a, b) {\n        if (a === void 0) { a = {}; }\n        if (b === void 0) { b = {}; }\n        if (typeof a !== 'object') {\n            a = {};\n        }\n        if (typeof b !== 'object') {\n            b = {};\n        }\n        var attributes = Object.keys(a)\n            .concat(Object.keys(b))\n            .reduce(function (attrs, key) {\n            if (!deep_equal_1.default(a[key], b[key])) {\n                attrs[key] = b[key] === undefined ? null : b[key];\n            }\n            return attrs;\n        }, {});\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.diff = diff;\n    function invert(attr, base) {\n        if (attr === void 0) { attr = {}; }\n        if (base === void 0) { base = {}; }\n        attr = attr || {};\n        var baseInverted = Object.keys(base).reduce(function (memo, key) {\n            if (base[key] !== attr[key] && attr[key] !== undefined) {\n                memo[key] = base[key];\n            }\n            return memo;\n        }, {});\n        return Object.keys(attr).reduce(function (memo, key) {\n            if (attr[key] !== base[key] && base[key] === undefined) {\n                memo[key] = null;\n            }\n            return memo;\n        }, baseInverted);\n    }\n    AttributeMap.invert = invert;\n    function transform(a, b, priority) {\n        if (priority === void 0) { priority = false; }\n        if (typeof a !== 'object') {\n            return b;\n        }\n        if (typeof b !== 'object') {\n            return undefined;\n        }\n        if (!priority) {\n            return b; // b simply overwrites us without priority\n        }\n        var attributes = Object.keys(b).reduce(function (attrs, key) {\n            if (a[key] === undefined) {\n                attrs[key] = b[key]; // null is a valid value\n            }\n            return attrs;\n        }, {});\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.transform = transform;\n})(AttributeMap || (AttributeMap = {}));\nexports.default = AttributeMap;\n//# sourceMappingURL=AttributeMap.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/AttributeMap.js?");

/***/ }),

/***/ "./node_modules/quill-delta/dist/Delta.js":
/*!************************************************!*\
  !*** ./node_modules/quill-delta/dist/Delta.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ \"./node_modules/quill-delta/node_modules/deep-equal/index.js\"));\nvar extend_1 = __importDefault(__webpack_require__(/*! extend */ \"./node_modules/extend/index.js\"));\nvar fast_diff_1 = __importDefault(__webpack_require__(/*! fast-diff */ \"./node_modules/fast-diff/diff.js\"));\nvar AttributeMap_1 = __importDefault(__webpack_require__(/*! ./AttributeMap */ \"./node_modules/quill-delta/dist/AttributeMap.js\"));\nvar Op_1 = __importDefault(__webpack_require__(/*! ./Op */ \"./node_modules/quill-delta/dist/Op.js\"));\nvar NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()\nvar Delta = /** @class */ (function () {\n    function Delta(ops) {\n        // Assume we are given a well formed ops\n        if (Array.isArray(ops)) {\n            this.ops = ops;\n        }\n        else if (ops != null && Array.isArray(ops.ops)) {\n            this.ops = ops.ops;\n        }\n        else {\n            this.ops = [];\n        }\n    }\n    Delta.prototype.insert = function (arg, attributes) {\n        var newOp = {};\n        if (typeof arg === 'string' && arg.length === 0) {\n            return this;\n        }\n        newOp.insert = arg;\n        if (attributes != null &&\n            typeof attributes === 'object' &&\n            Object.keys(attributes).length > 0) {\n            newOp.attributes = attributes;\n        }\n        return this.push(newOp);\n    };\n    Delta.prototype.delete = function (length) {\n        if (length <= 0) {\n            return this;\n        }\n        return this.push({ delete: length });\n    };\n    Delta.prototype.retain = function (length, attributes) {\n        if (length <= 0) {\n            return this;\n        }\n        var newOp = { retain: length };\n        if (attributes != null &&\n            typeof attributes === 'object' &&\n            Object.keys(attributes).length > 0) {\n            newOp.attributes = attributes;\n        }\n        return this.push(newOp);\n    };\n    Delta.prototype.push = function (newOp) {\n        var index = this.ops.length;\n        var lastOp = this.ops[index - 1];\n        newOp = extend_1.default(true, {}, newOp);\n        if (typeof lastOp === 'object') {\n            if (typeof newOp.delete === 'number' &&\n                typeof lastOp.delete === 'number') {\n                this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };\n                return this;\n            }\n            // Since it does not matter if we insert before or after deleting at the same index,\n            // always prefer to insert first\n            if (typeof lastOp.delete === 'number' && newOp.insert != null) {\n                index -= 1;\n                lastOp = this.ops[index - 1];\n                if (typeof lastOp !== 'object') {\n                    this.ops.unshift(newOp);\n                    return this;\n                }\n            }\n            if (deep_equal_1.default(newOp.attributes, lastOp.attributes)) {\n                if (typeof newOp.insert === 'string' &&\n                    typeof lastOp.insert === 'string') {\n                    this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };\n                    if (typeof newOp.attributes === 'object') {\n                        this.ops[index - 1].attributes = newOp.attributes;\n                    }\n                    return this;\n                }\n                else if (typeof newOp.retain === 'number' &&\n                    typeof lastOp.retain === 'number') {\n                    this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };\n                    if (typeof newOp.attributes === 'object') {\n                        this.ops[index - 1].attributes = newOp.attributes;\n                    }\n                    return this;\n                }\n            }\n        }\n        if (index === this.ops.length) {\n            this.ops.push(newOp);\n        }\n        else {\n            this.ops.splice(index, 0, newOp);\n        }\n        return this;\n    };\n    Delta.prototype.chop = function () {\n        var lastOp = this.ops[this.ops.length - 1];\n        if (lastOp && lastOp.retain && !lastOp.attributes) {\n            this.ops.pop();\n        }\n        return this;\n    };\n    Delta.prototype.filter = function (predicate) {\n        return this.ops.filter(predicate);\n    };\n    Delta.prototype.forEach = function (predicate) {\n        this.ops.forEach(predicate);\n    };\n    Delta.prototype.map = function (predicate) {\n        return this.ops.map(predicate);\n    };\n    Delta.prototype.partition = function (predicate) {\n        var passed = [];\n        var failed = [];\n        this.forEach(function (op) {\n            var target = predicate(op) ? passed : failed;\n            target.push(op);\n        });\n        return [passed, failed];\n    };\n    Delta.prototype.reduce = function (predicate, initialValue) {\n        return this.ops.reduce(predicate, initialValue);\n    };\n    Delta.prototype.changeLength = function () {\n        return this.reduce(function (length, elem) {\n            if (elem.insert) {\n                return length + Op_1.default.length(elem);\n            }\n            else if (elem.delete) {\n                return length - elem.delete;\n            }\n            return length;\n        }, 0);\n    };\n    Delta.prototype.length = function () {\n        return this.reduce(function (length, elem) {\n            return length + Op_1.default.length(elem);\n        }, 0);\n    };\n    Delta.prototype.slice = function (start, end) {\n        if (start === void 0) { start = 0; }\n        if (end === void 0) { end = Infinity; }\n        var ops = [];\n        var iter = Op_1.default.iterator(this.ops);\n        var index = 0;\n        while (index < end && iter.hasNext()) {\n            var nextOp = void 0;\n            if (index < start) {\n                nextOp = iter.next(start - index);\n            }\n            else {\n                nextOp = iter.next(end - index);\n                ops.push(nextOp);\n            }\n            index += Op_1.default.length(nextOp);\n        }\n        return new Delta(ops);\n    };\n    Delta.prototype.compose = function (other) {\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        var ops = [];\n        var firstOther = otherIter.peek();\n        if (firstOther != null &&\n            typeof firstOther.retain === 'number' &&\n            firstOther.attributes == null) {\n            var firstLeft = firstOther.retain;\n            while (thisIter.peekType() === 'insert' &&\n                thisIter.peekLength() <= firstLeft) {\n                firstLeft -= thisIter.peekLength();\n                ops.push(thisIter.next());\n            }\n            if (firstOther.retain - firstLeft > 0) {\n                otherIter.next(firstOther.retain - firstLeft);\n            }\n        }\n        var delta = new Delta(ops);\n        while (thisIter.hasNext() || otherIter.hasNext()) {\n            if (otherIter.peekType() === 'insert') {\n                delta.push(otherIter.next());\n            }\n            else if (thisIter.peekType() === 'delete') {\n                delta.push(thisIter.next());\n            }\n            else {\n                var length_1 = Math.min(thisIter.peekLength(), otherIter.peekLength());\n                var thisOp = thisIter.next(length_1);\n                var otherOp = otherIter.next(length_1);\n                if (typeof otherOp.retain === 'number') {\n                    var newOp = {};\n                    if (typeof thisOp.retain === 'number') {\n                        newOp.retain = length_1;\n                    }\n                    else {\n                        newOp.insert = thisOp.insert;\n                    }\n                    // Preserve null when composing with a retain, otherwise remove it for inserts\n                    var attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');\n                    if (attributes) {\n                        newOp.attributes = attributes;\n                    }\n                    delta.push(newOp);\n                    // Optimization if rest of other is just retain\n                    if (!otherIter.hasNext() &&\n                        deep_equal_1.default(delta.ops[delta.ops.length - 1], newOp)) {\n                        var rest = new Delta(thisIter.rest());\n                        return delta.concat(rest).chop();\n                    }\n                    // Other op should be delete, we could be an insert or retain\n                    // Insert + delete cancels out\n                }\n                else if (typeof otherOp.delete === 'number' &&\n                    typeof thisOp.retain === 'number') {\n                    delta.push(otherOp);\n                }\n            }\n        }\n        return delta.chop();\n    };\n    Delta.prototype.concat = function (other) {\n        var delta = new Delta(this.ops.slice());\n        if (other.ops.length > 0) {\n            delta.push(other.ops[0]);\n            delta.ops = delta.ops.concat(other.ops.slice(1));\n        }\n        return delta;\n    };\n    Delta.prototype.diff = function (other, cursor) {\n        if (this.ops === other.ops) {\n            return new Delta();\n        }\n        var strings = [this, other].map(function (delta) {\n            return delta\n                .map(function (op) {\n                if (op.insert != null) {\n                    return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;\n                }\n                var prep = delta === other ? 'on' : 'with';\n                throw new Error('diff() called ' + prep + ' non-document');\n            })\n                .join('');\n        });\n        var retDelta = new Delta();\n        var diffResult = fast_diff_1.default(strings[0], strings[1], cursor);\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        diffResult.forEach(function (component) {\n            var length = component[1].length;\n            while (length > 0) {\n                var opLength = 0;\n                switch (component[0]) {\n                    case fast_diff_1.default.INSERT:\n                        opLength = Math.min(otherIter.peekLength(), length);\n                        retDelta.push(otherIter.next(opLength));\n                        break;\n                    case fast_diff_1.default.DELETE:\n                        opLength = Math.min(length, thisIter.peekLength());\n                        thisIter.next(opLength);\n                        retDelta.delete(opLength);\n                        break;\n                    case fast_diff_1.default.EQUAL:\n                        opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);\n                        var thisOp = thisIter.next(opLength);\n                        var otherOp = otherIter.next(opLength);\n                        if (deep_equal_1.default(thisOp.insert, otherOp.insert)) {\n                            retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));\n                        }\n                        else {\n                            retDelta.push(otherOp).delete(opLength);\n                        }\n                        break;\n                }\n                length -= opLength;\n            }\n        });\n        return retDelta.chop();\n    };\n    Delta.prototype.eachLine = function (predicate, newline) {\n        if (newline === void 0) { newline = '\\n'; }\n        var iter = Op_1.default.iterator(this.ops);\n        var line = new Delta();\n        var i = 0;\n        while (iter.hasNext()) {\n            if (iter.peekType() !== 'insert') {\n                return;\n            }\n            var thisOp = iter.peek();\n            var start = Op_1.default.length(thisOp) - iter.peekLength();\n            var index = typeof thisOp.insert === 'string'\n                ? thisOp.insert.indexOf(newline, start) - start\n                : -1;\n            if (index < 0) {\n                line.push(iter.next());\n            }\n            else if (index > 0) {\n                line.push(iter.next(index));\n            }\n            else {\n                if (predicate(line, iter.next(1).attributes || {}, i) === false) {\n                    return;\n                }\n                i += 1;\n                line = new Delta();\n            }\n        }\n        if (line.length() > 0) {\n            predicate(line, {}, i);\n        }\n    };\n    Delta.prototype.invert = function (base) {\n        var inverted = new Delta();\n        this.reduce(function (baseIndex, op) {\n            if (op.insert) {\n                inverted.delete(Op_1.default.length(op));\n            }\n            else if (op.retain && op.attributes == null) {\n                inverted.retain(op.retain);\n                return baseIndex + op.retain;\n            }\n            else if (op.delete || (op.retain && op.attributes)) {\n                var length_2 = (op.delete || op.retain);\n                var slice = base.slice(baseIndex, baseIndex + length_2);\n                slice.forEach(function (baseOp) {\n                    if (op.delete) {\n                        inverted.push(baseOp);\n                    }\n                    else if (op.retain && op.attributes) {\n                        inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));\n                    }\n                });\n                return baseIndex + length_2;\n            }\n            return baseIndex;\n        }, 0);\n        return inverted.chop();\n    };\n    Delta.prototype.transform = function (arg, priority) {\n        if (priority === void 0) { priority = false; }\n        priority = !!priority;\n        if (typeof arg === 'number') {\n            return this.transformPosition(arg, priority);\n        }\n        var other = arg;\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        var delta = new Delta();\n        while (thisIter.hasNext() || otherIter.hasNext()) {\n            if (thisIter.peekType() === 'insert' &&\n                (priority || otherIter.peekType() !== 'insert')) {\n                delta.retain(Op_1.default.length(thisIter.next()));\n            }\n            else if (otherIter.peekType() === 'insert') {\n                delta.push(otherIter.next());\n            }\n            else {\n                var length_3 = Math.min(thisIter.peekLength(), otherIter.peekLength());\n                var thisOp = thisIter.next(length_3);\n                var otherOp = otherIter.next(length_3);\n                if (thisOp.delete) {\n                    // Our delete either makes their delete redundant or removes their retain\n                    continue;\n                }\n                else if (otherOp.delete) {\n                    delta.push(otherOp);\n                }\n                else {\n                    // We retain either their retain or insert\n                    delta.retain(length_3, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));\n                }\n            }\n        }\n        return delta.chop();\n    };\n    Delta.prototype.transformPosition = function (index, priority) {\n        if (priority === void 0) { priority = false; }\n        priority = !!priority;\n        var thisIter = Op_1.default.iterator(this.ops);\n        var offset = 0;\n        while (thisIter.hasNext() && offset <= index) {\n            var length_4 = thisIter.peekLength();\n            var nextType = thisIter.peekType();\n            thisIter.next();\n            if (nextType === 'delete') {\n                index -= Math.min(length_4, index - offset);\n                continue;\n            }\n            else if (nextType === 'insert' && (offset < index || !priority)) {\n                index += length_4;\n            }\n            offset += length_4;\n        }\n        return index;\n    };\n    Delta.Op = Op_1.default;\n    Delta.AttributeMap = AttributeMap_1.default;\n    return Delta;\n}());\nmodule.exports = Delta;\n//# sourceMappingURL=Delta.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Delta.js?");

/***/ }),

/***/ "./node_modules/quill-delta/dist/Iterator.js":
/*!***************************************************!*\
  !*** ./node_modules/quill-delta/dist/Iterator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Op_1 = __importDefault(__webpack_require__(/*! ./Op */ \"./node_modules/quill-delta/dist/Op.js\"));\nvar Iterator = /** @class */ (function () {\n    function Iterator(ops) {\n        this.ops = ops;\n        this.index = 0;\n        this.offset = 0;\n    }\n    Iterator.prototype.hasNext = function () {\n        return this.peekLength() < Infinity;\n    };\n    Iterator.prototype.next = function (length) {\n        if (!length) {\n            length = Infinity;\n        }\n        var nextOp = this.ops[this.index];\n        if (nextOp) {\n            var offset = this.offset;\n            var opLength = Op_1.default.length(nextOp);\n            if (length >= opLength - offset) {\n                length = opLength - offset;\n                this.index += 1;\n                this.offset = 0;\n            }\n            else {\n                this.offset += length;\n            }\n            if (typeof nextOp.delete === 'number') {\n                return { delete: length };\n            }\n            else {\n                var retOp = {};\n                if (nextOp.attributes) {\n                    retOp.attributes = nextOp.attributes;\n                }\n                if (typeof nextOp.retain === 'number') {\n                    retOp.retain = length;\n                }\n                else if (typeof nextOp.insert === 'string') {\n                    retOp.insert = nextOp.insert.substr(offset, length);\n                }\n                else {\n                    // offset should === 0, length should === 1\n                    retOp.insert = nextOp.insert;\n                }\n                return retOp;\n            }\n        }\n        else {\n            return { retain: Infinity };\n        }\n    };\n    Iterator.prototype.peek = function () {\n        return this.ops[this.index];\n    };\n    Iterator.prototype.peekLength = function () {\n        if (this.ops[this.index]) {\n            // Should never return 0 if our index is being managed correctly\n            return Op_1.default.length(this.ops[this.index]) - this.offset;\n        }\n        else {\n            return Infinity;\n        }\n    };\n    Iterator.prototype.peekType = function () {\n        if (this.ops[this.index]) {\n            if (typeof this.ops[this.index].delete === 'number') {\n                return 'delete';\n            }\n            else if (typeof this.ops[this.index].retain === 'number') {\n                return 'retain';\n            }\n            else {\n                return 'insert';\n            }\n        }\n        return 'retain';\n    };\n    Iterator.prototype.rest = function () {\n        if (!this.hasNext()) {\n            return [];\n        }\n        else if (this.offset === 0) {\n            return this.ops.slice(this.index);\n        }\n        else {\n            var offset = this.offset;\n            var index = this.index;\n            var next = this.next();\n            var rest = this.ops.slice(this.index);\n            this.offset = offset;\n            this.index = index;\n            return [next].concat(rest);\n        }\n    };\n    return Iterator;\n}());\nexports.default = Iterator;\n//# sourceMappingURL=Iterator.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Iterator.js?");

/***/ }),

/***/ "./node_modules/quill-delta/dist/Op.js":
/*!*********************************************!*\
  !*** ./node_modules/quill-delta/dist/Op.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Iterator_1 = __importDefault(__webpack_require__(/*! ./Iterator */ \"./node_modules/quill-delta/dist/Iterator.js\"));\nvar Op;\n(function (Op) {\n    function iterator(ops) {\n        return new Iterator_1.default(ops);\n    }\n    Op.iterator = iterator;\n    function length(op) {\n        if (typeof op.delete === 'number') {\n            return op.delete;\n        }\n        else if (typeof op.retain === 'number') {\n            return op.retain;\n        }\n        else {\n            return typeof op.insert === 'string' ? op.insert.length : 1;\n        }\n    }\n    Op.length = length;\n})(Op || (Op = {}));\nexports.default = Op;\n//# sourceMappingURL=Op.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Op.js?");

/***/ }),

/***/ "./node_modules/quill-delta/node_modules/deep-equal/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/quill-delta/node_modules/deep-equal/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var objectKeys = __webpack_require__(/*! object-keys */ \"./node_modules/quill-delta/node_modules/object-keys/index.js\");\nvar isArguments = __webpack_require__(/*! is-arguments */ \"./node_modules/is-arguments/index.js\");\nvar is = __webpack_require__(/*! object-is */ \"./node_modules/object-is/index.js\");\nvar isRegex = __webpack_require__(/*! is-regex */ \"./node_modules/is-regex/index.js\");\nvar flags = __webpack_require__(/*! regexp.prototype.flags */ \"./node_modules/regexp.prototype.flags/index.js\");\nvar isDate = __webpack_require__(/*! is-date-object */ \"./node_modules/is-date-object/index.js\");\n\nvar getTime = Date.prototype.getTime;\n\nfunction deepEqual(actual, expected, options) {\n  var opts = options || {};\n\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (opts.strict ? is(actual, expected) : actual === expected) {\n    return true;\n  }\n\n  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.\n  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {\n    return opts.strict ? is(actual, expected) : actual == expected;\n  }\n\n  /*\n   * 7.4. For all other Object pairs, including Array objects, equivalence is\n   * determined by having the same number of owned properties (as verified\n   * with Object.prototype.hasOwnProperty.call), the same set of keys\n   * (although not necessarily the same order), equivalent values for every\n   * corresponding key, and an identical 'prototype' property. Note: this\n   * accounts for both named and indexed properties on Arrays.\n   */\n  // eslint-disable-next-line no-use-before-define\n  return objEquiv(actual, expected, opts);\n}\n\nfunction isUndefinedOrNull(value) {\n  return value === null || value === undefined;\n}\n\nfunction isBuffer(x) {\n  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {\n    return false;\n  }\n  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {\n    return false;\n  }\n  if (x.length > 0 && typeof x[0] !== 'number') {\n    return false;\n  }\n  return true;\n}\n\nfunction objEquiv(a, b, opts) {\n  /* eslint max-statements: [2, 50] */\n  var i, key;\n  if (typeof a !== typeof b) { return false; }\n  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }\n\n  // an identical 'prototype' property.\n  if (a.prototype !== b.prototype) { return false; }\n\n  if (isArguments(a) !== isArguments(b)) { return false; }\n\n  var aIsRegex = isRegex(a);\n  var bIsRegex = isRegex(b);\n  if (aIsRegex !== bIsRegex) { return false; }\n  if (aIsRegex || bIsRegex) {\n    return a.source === b.source && flags(a) === flags(b);\n  }\n\n  if (isDate(a) && isDate(b)) {\n    return getTime.call(a) === getTime.call(b);\n  }\n\n  var aIsBuffer = isBuffer(a);\n  var bIsBuffer = isBuffer(b);\n  if (aIsBuffer !== bIsBuffer) { return false; }\n  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here\n    if (a.length !== b.length) { return false; }\n    for (i = 0; i < a.length; i++) {\n      if (a[i] !== b[i]) { return false; }\n    }\n    return true;\n  }\n\n  if (typeof a !== typeof b) { return false; }\n\n  try {\n    var ka = objectKeys(a);\n    var kb = objectKeys(b);\n  } catch (e) { // happens when one is a string literal and the other isn't\n    return false;\n  }\n  // having the same number of owned properties (keys incorporates hasOwnProperty)\n  if (ka.length !== kb.length) { return false; }\n\n  // the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  // ~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] != kb[i]) { return false; }\n  }\n  // equivalent values for every corresponding key, and ~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!deepEqual(a[key], b[key], opts)) { return false; }\n  }\n\n  return true;\n}\n\nmodule.exports = deepEqual;\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/deep-equal/index.js?");

/***/ }),

/***/ "./node_modules/quill-delta/node_modules/object-keys/implementation.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/quill-delta/node_modules/object-keys/implementation.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar keysShim;\nif (!Object.keys) {\n\t// modified from https://github.com/es-shims/es5-shim\n\tvar has = Object.prototype.hasOwnProperty;\n\tvar toStr = Object.prototype.toString;\n\tvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/quill-delta/node_modules/object-keys/isArguments.js\"); // eslint-disable-line global-require\n\tvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\tvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\n\tvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\n\tvar dontEnums = [\n\t\t'toString',\n\t\t'toLocaleString',\n\t\t'valueOf',\n\t\t'hasOwnProperty',\n\t\t'isPrototypeOf',\n\t\t'propertyIsEnumerable',\n\t\t'constructor'\n\t];\n\tvar equalsConstructorPrototype = function (o) {\n\t\tvar ctor = o.constructor;\n\t\treturn ctor && ctor.prototype === o;\n\t};\n\tvar excludedKeys = {\n\t\t$applicationCache: true,\n\t\t$console: true,\n\t\t$external: true,\n\t\t$frame: true,\n\t\t$frameElement: true,\n\t\t$frames: true,\n\t\t$innerHeight: true,\n\t\t$innerWidth: true,\n\t\t$onmozfullscreenchange: true,\n\t\t$onmozfullscreenerror: true,\n\t\t$outerHeight: true,\n\t\t$outerWidth: true,\n\t\t$pageXOffset: true,\n\t\t$pageYOffset: true,\n\t\t$parent: true,\n\t\t$scrollLeft: true,\n\t\t$scrollTop: true,\n\t\t$scrollX: true,\n\t\t$scrollY: true,\n\t\t$self: true,\n\t\t$webkitIndexedDB: true,\n\t\t$webkitStorageInfo: true,\n\t\t$window: true\n\t};\n\tvar hasAutomationEqualityBug = (function () {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined') { return false; }\n\t\tfor (var k in window) {\n\t\t\ttry {\n\t\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}());\n\tvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t}\n\t\ttry {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n\n\tkeysShim = function keys(object) {\n\t\tvar isObject = object !== null && typeof object === 'object';\n\t\tvar isFunction = toStr.call(object) === '[object Function]';\n\t\tvar isArguments = isArgs(object);\n\t\tvar isString = isObject && toStr.call(object) === '[object String]';\n\t\tvar theKeys = [];\n\n\t\tif (!isObject && !isFunction && !isArguments) {\n\t\t\tthrow new TypeError('Object.keys called on a non-object');\n\t\t}\n\n\t\tvar skipProto = hasProtoEnumBug && isFunction;\n\t\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\t\ttheKeys.push(String(i));\n\t\t\t}\n\t\t}\n\n\t\tif (isArguments && object.length > 0) {\n\t\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\t\ttheKeys.push(String(j));\n\t\t\t}\n\t\t} else {\n\t\t\tfor (var name in object) {\n\t\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\t\ttheKeys.push(String(name));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (hasDontEnumBug) {\n\t\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn theKeys;\n\t};\n}\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/implementation.js?");

/***/ }),

/***/ "./node_modules/quill-delta/node_modules/object-keys/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/quill-delta/node_modules/object-keys/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/quill-delta/node_modules/object-keys/isArguments.js\");\n\nvar origKeys = Object.keys;\nvar keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ \"./node_modules/quill-delta/node_modules/object-keys/implementation.js\");\n\nvar originalKeys = Object.keys;\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\tvar args = Object.keys(arguments);\n\t\t\treturn args && args.length === arguments.length;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t}\n\t\t\t\treturn originalKeys(object);\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/index.js?");

/***/ }),

/***/ "./node_modules/quill-delta/node_modules/object-keys/isArguments.js":
/*!**************************************************************************!*\
  !*** ./node_modules/quill-delta/node_modules/object-keys/isArguments.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/isArguments.js?");

/***/ }),

/***/ "./node_modules/regexp.prototype.flags/implementation.js":
/*!***************************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/implementation.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar $Object = Object;\nvar $TypeError = TypeError;\n\nmodule.exports = function flags() {\n\tif (this != null && this !== $Object(this)) {\n\t\tthrow new $TypeError('RegExp.prototype.flags getter called on non-object');\n\t}\n\tvar result = '';\n\tif (this.global) {\n\t\tresult += 'g';\n\t}\n\tif (this.ignoreCase) {\n\t\tresult += 'i';\n\t}\n\tif (this.multiline) {\n\t\tresult += 'm';\n\t}\n\tif (this.dotAll) {\n\t\tresult += 's';\n\t}\n\tif (this.unicode) {\n\t\tresult += 'u';\n\t}\n\tif (this.sticky) {\n\t\tresult += 'y';\n\t}\n\treturn result;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/implementation.js?");

/***/ }),

/***/ "./node_modules/regexp.prototype.flags/index.js":
/*!******************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ \"./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/regexp.prototype.flags/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/regexp.prototype.flags/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/regexp.prototype.flags/shim.js\");\n\nvar flagsBound = callBind(implementation);\n\ndefine(flagsBound, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = flagsBound;\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/index.js?");

/***/ }),

/***/ "./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js?");

/***/ }),

/***/ "./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js?");

/***/ }),

/***/ "./node_modules/regexp.prototype.flags/polyfill.js":
/*!*********************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/polyfill.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/regexp.prototype.flags/implementation.js\");\n\nvar supportsDescriptors = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\").supportsDescriptors;\nvar $gOPD = Object.getOwnPropertyDescriptor;\nvar $TypeError = TypeError;\n\nmodule.exports = function getPolyfill() {\n\tif (!supportsDescriptors) {\n\t\tthrow new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');\n\t}\n\tif ((/a/mig).flags === 'gim') {\n\t\tvar descriptor = $gOPD(RegExp.prototype, 'flags');\n\t\tif (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {\n\t\t\treturn descriptor.get;\n\t\t}\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/polyfill.js?");

/***/ }),

/***/ "./node_modules/regexp.prototype.flags/shim.js":
/*!*****************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/shim.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar supportsDescriptors = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\").supportsDescriptors;\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/regexp.prototype.flags/polyfill.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\nvar defineProperty = Object.defineProperty;\nvar TypeErr = TypeError;\nvar getProto = Object.getPrototypeOf;\nvar regex = /a/;\n\nmodule.exports = function shimFlags() {\n\tif (!supportsDescriptors || !getProto) {\n\t\tthrow new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');\n\t}\n\tvar polyfill = getPolyfill();\n\tvar proto = getProto(regex);\n\tvar descriptor = gOPD(proto, 'flags');\n\tif (!descriptor || descriptor.get !== polyfill) {\n\t\tdefineProperty(proto, 'flags', {\n\t\t\tconfigurable: true,\n\t\t\tenumerable: false,\n\t\t\tget: polyfill\n\t\t});\n\t}\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/shim.js?");

/***/ }),

/***/ "./node_modules/side-channel/index.js":
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ \"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js\");\nvar inspect = __webpack_require__(/*! object-inspect */ \"./node_modules/object-inspect/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\nvar $WeakMap = GetIntrinsic('%WeakMap%', true);\nvar $Map = GetIntrinsic('%Map%', true);\nvar $push = callBound('Array.prototype.push');\n\nvar $weakMapGet = callBound('WeakMap.prototype.get', true);\nvar $weakMapSet = callBound('WeakMap.prototype.set', true);\nvar $weakMapHas = callBound('WeakMap.prototype.has', true);\nvar $mapGet = callBound('Map.prototype.get', true);\nvar $mapSet = callBound('Map.prototype.set', true);\nvar $mapHas = callBound('Map.prototype.has', true);\nvar objectGet = function (objects, key) { // eslint-disable-line consistent-return\n\tfor (var i = 0; i < objects.length; i += 1) {\n\t\tif (objects[i].key === key) {\n\t\t\treturn objects[i].value;\n\t\t}\n\t}\n};\nvar objectSet = function (objects, key, value) {\n\tfor (var i = 0; i < objects.length; i += 1) {\n\t\tif (objects[i].key === key) {\n\t\t\tobjects[i].value = value; // eslint-disable-line no-param-reassign\n\t\t\treturn;\n\t\t}\n\t}\n\t$push(objects, {\n\t\tkey: key,\n\t\tvalue: value\n\t});\n};\nvar objectHas = function (objects, key) {\n\tfor (var i = 0; i < objects.length; i += 1) {\n\t\tif (objects[i].key === key) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n};\n\nmodule.exports = function getSideChannel() {\n\tvar $wm;\n\tvar $m;\n\tvar $o;\n\tvar channel = {\n\t\tassert: function (key) {\n\t\t\tif (!channel.has(key)) {\n\t\t\t\tthrow new $TypeError('Side channel does not contain ' + inspect(key));\n\t\t\t}\n\t\t},\n\t\tget: function (key) { // eslint-disable-line consistent-return\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif ($wm) {\n\t\t\t\t\treturn $weakMapGet($wm, key);\n\t\t\t\t}\n\t\t\t} else if ($Map) {\n\t\t\t\tif ($m) {\n\t\t\t\t\treturn $mapGet($m, key);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif ($o) { // eslint-disable-line no-lonely-if\n\t\t\t\t\treturn objectGet($o, key);\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\thas: function (key) {\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif ($wm) {\n\t\t\t\t\treturn $weakMapHas($wm, key);\n\t\t\t\t}\n\t\t\t} else if ($Map) {\n\t\t\t\tif ($m) {\n\t\t\t\t\treturn $mapHas($m, key);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif ($o) { // eslint-disable-line no-lonely-if\n\t\t\t\t\treturn objectHas($o, key);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t},\n\t\tset: function (key, value) {\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif (!$wm) {\n\t\t\t\t\t$wm = new $WeakMap();\n\t\t\t\t}\n\t\t\t\t$weakMapSet($wm, key, value);\n\t\t\t} else if ($Map) {\n\t\t\t\tif (!$m) {\n\t\t\t\t\t$m = new $Map();\n\t\t\t\t}\n\t\t\t\t$mapSet($m, key, value);\n\t\t\t} else {\n\t\t\t\tif (!$o) {\n\t\t\t\t\t$o = [];\n\t\t\t\t}\n\t\t\t\tobjectSet($o, key, value);\n\t\t\t}\n\t\t}\n\t};\n\treturn channel;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/index.js?");

/***/ }),

/***/ "./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js":
/*!****************************************************************************!*\
  !*** ./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js?");

/***/ }),

/***/ "./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js":
/*!********************************************************************************!*\
  !*** ./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js?");

/***/ }),

/***/ "./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://Quill/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/which-boxed-primitive/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/which-boxed-primitive/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar isString = __webpack_require__(/*! is-string */ \"./node_modules/is-string/index.js\");\nvar isNumber = __webpack_require__(/*! is-number-object */ \"./node_modules/is-number-object/index.js\");\nvar isBoolean = __webpack_require__(/*! is-boolean-object */ \"./node_modules/is-boolean-object/index.js\");\nvar isSymbol = __webpack_require__(/*! is-symbol */ \"./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js\");\nvar isBigInt = __webpack_require__(/*! is-bigint */ \"./node_modules/is-bigint/index.js\");\n\n// eslint-disable-next-line consistent-return\nmodule.exports = function whichBoxedPrimitive(value) {\n\t// eslint-disable-next-line eqeqeq\n\tif (value == null || (typeof value !== 'object' && typeof value !== 'function')) {\n\t\treturn null;\n\t}\n\tif (isString(value)) {\n\t\treturn 'String';\n\t}\n\tif (isNumber(value)) {\n\t\treturn 'Number';\n\t}\n\tif (isBoolean(value)) {\n\t\treturn 'Boolean';\n\t}\n\tif (isSymbol(value)) {\n\t\treturn 'Symbol';\n\t}\n\tif (isBigInt(value)) {\n\t\treturn 'BigInt';\n\t}\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-boxed-primitive/index.js?");

/***/ }),

/***/ "./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar toStr = Object.prototype.toString;\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nif (hasSymbols) {\n\tvar symToStr = Symbol.prototype.toString;\n\tvar symStringRegex = /^Symbol\\(.*\\)$/;\n\tvar isSymbolObject = function isRealSymbolObject(value) {\n\t\tif (typeof value.valueOf() !== 'symbol') {\n\t\t\treturn false;\n\t\t}\n\t\treturn symStringRegex.test(symToStr.call(value));\n\t};\n\n\tmodule.exports = function isSymbol(value) {\n\t\tif (typeof value === 'symbol') {\n\t\t\treturn true;\n\t\t}\n\t\tif (toStr.call(value) !== '[object Symbol]') {\n\t\t\treturn false;\n\t\t}\n\t\ttry {\n\t\t\treturn isSymbolObject(value);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n} else {\n\n\tmodule.exports = function isSymbol(value) {\n\t\t// this environment does not support Symbols.\n\t\treturn  false && false;\n\t};\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js?");

/***/ }),

/***/ "./node_modules/which-collection/index.js":
/*!************************************************!*\
  !*** ./node_modules/which-collection/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar isMap = __webpack_require__(/*! is-map */ \"./node_modules/is-map/index.js\");\nvar isSet = __webpack_require__(/*! is-set */ \"./node_modules/is-set/index.js\");\nvar isWeakMap = __webpack_require__(/*! is-weakmap */ \"./node_modules/is-weakmap/index.js\");\nvar isWeakSet = __webpack_require__(/*! is-weakset */ \"./node_modules/is-weakset/index.js\");\n\nmodule.exports = function whichCollection(value) {\n\tif (value && typeof value === 'object') {\n\t\tif (isMap(value)) {\n\t\t\treturn 'Map';\n\t\t}\n\t\tif (isSet(value)) {\n\t\t\treturn 'Set';\n\t\t}\n\t\tif (isWeakMap(value)) {\n\t\t\treturn 'WeakMap';\n\t\t}\n\t\tif (isWeakSet(value)) {\n\t\t\treturn 'WeakSet';\n\t\t}\n\t}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-collection/index.js?");

/***/ }),

/***/ "./node_modules/which-typed-array/index.js":
/*!*************************************************!*\
  !*** ./node_modules/which-typed-array/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar forEach = __webpack_require__(/*! foreach */ \"./node_modules/foreach/index.js\");\nvar availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ \"./node_modules/available-typed-arrays/index.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js\");\n\nvar $toString = callBound('Object.prototype.toString');\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\nvar hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';\n\nvar typedArrays = availableTypedArrays();\n\nvar $slice = callBound('String.prototype.slice');\nvar toStrTags = {};\nvar gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ \"./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js\");\nvar getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');\nif (hasToStringTag && gOPD && getPrototypeOf) {\n\tforEach(typedArrays, function (typedArray) {\n\t\tif (typeof global[typedArray] === 'function') {\n\t\t\tvar arr = new global[typedArray]();\n\t\t\tif (!(Symbol.toStringTag in arr)) {\n\t\t\t\tthrow new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');\n\t\t\t}\n\t\t\tvar proto = getPrototypeOf(arr);\n\t\t\tvar descriptor = gOPD(proto, Symbol.toStringTag);\n\t\t\tif (!descriptor) {\n\t\t\t\tvar superProto = getPrototypeOf(proto);\n\t\t\t\tdescriptor = gOPD(superProto, Symbol.toStringTag);\n\t\t\t}\n\t\t\ttoStrTags[typedArray] = descriptor.get;\n\t\t}\n\t});\n}\n\nvar tryTypedArrays = function tryAllTypedArrays(value) {\n\tvar foundName = false;\n\tforEach(toStrTags, function (getter, typedArray) {\n\t\tif (!foundName) {\n\t\t\ttry {\n\t\t\t\tvar name = getter.call(value);\n\t\t\t\tif (name === typedArray) {\n\t\t\t\t\tfoundName = name;\n\t\t\t\t}\n\t\t\t} catch (e) {}\n\t\t}\n\t});\n\treturn foundName;\n};\n\nvar isTypedArray = __webpack_require__(/*! is-typed-array */ \"./node_modules/is-typed-array/index.js\");\n\nmodule.exports = function whichTypedArray(value) {\n\tif (!isTypedArray(value)) { return false; }\n\tif (!hasToStringTag) { return $slice($toString(value), 8, -1); }\n\treturn tryTypedArrays(value);\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/index.js?");

/***/ }),

/***/ "./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js?");

/***/ }),

/***/ "./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js?");

/***/ }),

/***/ "./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js?");

/***/ }),

/***/ "./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');\nif ($gOPD) {\n\ttry {\n\t\t$gOPD([], 'length');\n\t} catch (e) {\n\t\t// IE 8 has a broken gOPD\n\t\t$gOPD = null;\n\t}\n}\n\nmodule.exports = $gOPD;\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js?");

/***/ }),

/***/ "./quill.js":
/*!******************!*\
  !*** ./quill.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./core.js\");\n/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats/align */ \"./formats/align.js\");\n/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats/direction */ \"./formats/direction.js\");\n/* harmony import */ var _formats_indent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formats/indent */ \"./formats/indent.js\");\n/* harmony import */ var _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formats/blockquote */ \"./formats/blockquote.js\");\n/* harmony import */ var _formats_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formats/header */ \"./formats/header.js\");\n/* harmony import */ var _formats_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formats/list */ \"./formats/list.js\");\n/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formats/background */ \"./formats/background.js\");\n/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formats/color */ \"./formats/color.js\");\n/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formats/font */ \"./formats/font.js\");\n/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formats/size */ \"./formats/size.js\");\n/* harmony import */ var _formats_bold__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formats/bold */ \"./formats/bold.js\");\n/* harmony import */ var _formats_italic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formats/italic */ \"./formats/italic.js\");\n/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formats/link */ \"./formats/link.js\");\n/* harmony import */ var _formats_script__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formats/script */ \"./formats/script.js\");\n/* harmony import */ var _formats_strike__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formats/strike */ \"./formats/strike.js\");\n/* harmony import */ var _formats_underline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formats/underline */ \"./formats/underline.js\");\n/* harmony import */ var _formats_formula__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formats/formula */ \"./formats/formula.js\");\n/* harmony import */ var _formats_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formats/image */ \"./formats/image.js\");\n/* harmony import */ var _formats_video__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formats/video */ \"./formats/video.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./formats/code */ \"./formats/code.js\");\n/* harmony import */ var _modules_syntax__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/syntax */ \"./modules/syntax.js\");\n/* harmony import */ var _modules_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/table */ \"./modules/table.js\");\n/* harmony import */ var _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/toolbar */ \"./modules/toolbar.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/icons */ \"./ui/icons.js\");\n/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ui/picker */ \"./ui/picker.js\");\n/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/color-picker */ \"./ui/color-picker.js\");\n/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/icon-picker */ \"./ui/icon-picker.js\");\n/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ui/tooltip */ \"./ui/tooltip.js\");\n/* harmony import */ var _themes_bubble__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./themes/bubble */ \"./themes/bubble.js\");\n/* harmony import */ var _themes_snow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./themes/snow */ \"./themes/snow.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  'attributors/attribute/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionAttribute\"],\n  'attributors/class/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignClass\"],\n  'attributors/class/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundClass\"],\n  'attributors/class/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorClass\"],\n  'attributors/class/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionClass\"],\n  'attributors/class/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontClass\"],\n  'attributors/class/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeClass\"],\n  'attributors/style/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignStyle\"],\n  'attributors/style/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundStyle\"],\n  'attributors/style/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorStyle\"],\n  'attributors/style/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionStyle\"],\n  'attributors/style/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontStyle\"],\n  'attributors/style/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeStyle\"]\n}, true);\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  'formats/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignClass\"],\n  'formats/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionClass\"],\n  'formats/indent': _formats_indent__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'formats/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundStyle\"],\n  'formats/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorStyle\"],\n  'formats/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontClass\"],\n  'formats/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeClass\"],\n  'formats/blockquote': _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  'formats/code-block': _formats_code__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  'formats/header': _formats_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'formats/list': _formats_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  'formats/bold': _formats_bold__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  'formats/code': _formats_code__WEBPACK_IMPORTED_MODULE_20__[\"Code\"],\n  'formats/italic': _formats_italic__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  'formats/link': _formats_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  'formats/script': _formats_script__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  'formats/strike': _formats_strike__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  'formats/underline': _formats_underline__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  'formats/formula': _formats_formula__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  'formats/image': _formats_image__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  'formats/video': _formats_video__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  'modules/syntax': _modules_syntax__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  'modules/table': _modules_table__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  'modules/toolbar': _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n  'themes/bubble': _themes_bubble__WEBPACK_IMPORTED_MODULE_29__[\"default\"],\n  'themes/snow': _themes_snow__WEBPACK_IMPORTED_MODULE_30__[\"default\"],\n  'ui/icons': _ui_icons__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n  'ui/picker': _ui_picker__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n  'ui/icon-picker': _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n  'ui/color-picker': _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n  'ui/tooltip': _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__[\"default\"]\n}, true);\n/* harmony default export */ __webpack_exports__[\"default\"] = (_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://Quill/./quill.js?");

/***/ }),

/***/ "./themes/base.js":
/*!************************!*\
  !*** ./themes/base.js ***!
  \************************/
/*! exports provided: BaseTooltip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseTooltip\", function() { return BaseTooltip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseTheme; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _core_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/theme */ \"./core/theme.js\");\n/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/color-picker */ \"./ui/color-picker.js\");\n/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icon-picker */ \"./ui/icon-picker.js\");\n/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/picker */ \"./ui/picker.js\");\n/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/tooltip */ \"./ui/tooltip.js\");\n\n\n\n\n\n\n\nconst ALIGNS = [false, 'center', 'right', 'justify'];\nconst COLORS = ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'];\nconst FONTS = [false, 'serif', 'monospace'];\nconst HEADERS = ['1', '2', '3', false];\nconst SIZES = ['small', false, 'large', 'huge'];\n\nclass BaseTheme extends _core_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n\n    const listener = e => {\n      if (!document.body.contains(quill.root)) {\n        document.body.removeEventListener('click', listener);\n        return;\n      }\n\n      if (this.tooltip != null && !this.tooltip.root.contains(e.target) && document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) {\n        this.tooltip.hide();\n      }\n\n      if (this.pickers != null) {\n        this.pickers.forEach(picker => {\n          if (!picker.container.contains(e.target)) {\n            picker.close();\n          }\n        });\n      }\n    };\n\n    quill.emitter.listenDOM('click', document.body, listener);\n  }\n\n  addModule(name) {\n    const module = super.addModule(name);\n\n    if (name === 'toolbar') {\n      this.extendToolbar(module);\n    }\n\n    return module;\n  }\n\n  buildButtons(buttons, icons) {\n    Array.from(buttons).forEach(button => {\n      const className = button.getAttribute('class') || '';\n      className.split(/\\s+/).forEach(name => {\n        if (!name.startsWith('ql-')) return;\n        name = name.slice('ql-'.length);\n        if (icons[name] == null) return;\n\n        if (name === 'direction') {\n          button.innerHTML = icons[name][''] + icons[name].rtl;\n        } else if (typeof icons[name] === 'string') {\n          button.innerHTML = icons[name];\n        } else {\n          const value = button.value || '';\n\n          if (value != null && icons[name][value]) {\n            button.innerHTML = icons[name][value];\n          }\n        }\n      });\n    });\n  }\n\n  buildPickers(selects, icons) {\n    this.pickers = Array.from(selects).map(select => {\n      if (select.classList.contains('ql-align')) {\n        if (select.querySelector('option') == null) {\n          fillSelect(select, ALIGNS);\n        }\n\n        return new _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__[\"default\"](select, icons.align);\n      }\n\n      if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {\n        const format = select.classList.contains('ql-background') ? 'background' : 'color';\n\n        if (select.querySelector('option') == null) {\n          fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');\n        }\n\n        return new _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__[\"default\"](select, icons[format]);\n      }\n\n      if (select.querySelector('option') == null) {\n        if (select.classList.contains('ql-font')) {\n          fillSelect(select, FONTS);\n        } else if (select.classList.contains('ql-header')) {\n          fillSelect(select, HEADERS);\n        } else if (select.classList.contains('ql-size')) {\n          fillSelect(select, SIZES);\n        }\n      }\n\n      return new _ui_picker__WEBPACK_IMPORTED_MODULE_5__[\"default\"](select);\n    });\n\n    const update = () => {\n      this.pickers.forEach(picker => {\n        picker.update();\n      });\n    };\n\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, update);\n  }\n\n}\n\nBaseTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _core_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        formula() {\n          this.quill.theme.tooltip.edit('formula');\n        },\n\n        image() {\n          let fileInput = this.container.querySelector('input.ql-image[type=file]');\n\n          if (fileInput == null) {\n            fileInput = document.createElement('input');\n            fileInput.setAttribute('type', 'file');\n            fileInput.setAttribute('accept', this.quill.uploader.options.mimetypes.join(', '));\n            fileInput.classList.add('ql-image');\n            fileInput.addEventListener('change', () => {\n              const range = this.quill.getSelection(true);\n              this.quill.uploader.upload(range, fileInput.files);\n              fileInput.value = '';\n            });\n            this.container.appendChild(fileInput);\n          }\n\n          fileInput.click();\n        },\n\n        video() {\n          this.quill.theme.tooltip.edit('video');\n        }\n\n      }\n    }\n  }\n});\n\nclass BaseTooltip extends _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n  constructor(quill, boundsContainer) {\n    super(quill, boundsContainer);\n    this.textbox = this.root.querySelector('input[type=\"text\"]');\n    this.listen();\n  }\n\n  listen() {\n    this.textbox.addEventListener('keydown', event => {\n      if (event.key === 'Enter') {\n        this.save();\n        event.preventDefault();\n      } else if (event.key === 'Escape') {\n        this.cancel();\n        event.preventDefault();\n      }\n    });\n  }\n\n  cancel() {\n    this.hide();\n  }\n\n  edit(mode = 'link', preview = null) {\n    this.root.classList.remove('ql-hidden');\n    this.root.classList.add('ql-editing');\n\n    if (preview != null) {\n      this.textbox.value = preview;\n    } else if (mode !== this.root.getAttribute('data-mode')) {\n      this.textbox.value = '';\n    }\n\n    this.position(this.quill.getBounds(this.quill.selection.savedRange));\n    this.textbox.select();\n    this.textbox.setAttribute('placeholder', this.textbox.getAttribute(\"data-\".concat(mode)) || '');\n    this.root.setAttribute('data-mode', mode);\n  }\n\n  restoreFocus() {\n    const {\n      scrollTop\n    } = this.quill.scrollingContainer;\n    this.quill.focus();\n    this.quill.scrollingContainer.scrollTop = scrollTop;\n  }\n\n  save() {\n    let {\n      value\n    } = this.textbox;\n\n    switch (this.root.getAttribute('data-mode')) {\n      case 'link':\n        {\n          const {\n            scrollTop\n          } = this.quill.root;\n\n          if (this.linkRange) {\n            this.quill.formatText(this.linkRange, 'link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n            delete this.linkRange;\n          } else {\n            this.restoreFocus();\n            this.quill.format('link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n          }\n\n          this.quill.root.scrollTop = scrollTop;\n          break;\n        }\n\n      case 'video':\n        {\n          value = extractVideoUrl(value);\n        }\n      // eslint-disable-next-line no-fallthrough\n\n      case 'formula':\n        {\n          if (!value) break;\n          const range = this.quill.getSelection(true);\n\n          if (range != null) {\n            const index = range.index + range.length;\n            this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n\n            if (this.root.getAttribute('data-mode') === 'formula') {\n              this.quill.insertText(index + 1, ' ', _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n            }\n\n            this.quill.setSelection(index + 2, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n          }\n\n          break;\n        }\n\n      default:\n    }\n\n    this.textbox.value = '';\n    this.hide();\n  }\n\n}\n\nfunction extractVideoUrl(url) {\n  let match = url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtube\\.com\\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtu\\.be\\/([a-zA-Z0-9_-]+)/);\n\n  if (match) {\n    return \"\".concat(match[1] || 'https', \"://www.youtube.com/embed/\").concat(match[2], \"?showinfo=0\");\n  } // eslint-disable-next-line no-cond-assign\n\n\n  if (match = url.match(/^(?:(https?):\\/\\/)?(?:www\\.)?vimeo\\.com\\/(\\d+)/)) {\n    return \"\".concat(match[1] || 'https', \"://player.vimeo.com/video/\").concat(match[2], \"/\");\n  }\n\n  return url;\n}\n\nfunction fillSelect(select, values, defaultValue = false) {\n  values.forEach(value => {\n    const option = document.createElement('option');\n\n    if (value === defaultValue) {\n      option.setAttribute('selected', 'selected');\n    } else {\n      option.setAttribute('value', value);\n    }\n\n    select.appendChild(option);\n  });\n}\n\n\n\n//# sourceURL=webpack://Quill/./themes/base.js?");

/***/ }),

/***/ "./themes/bubble.js":
/*!**************************!*\
  !*** ./themes/bubble.js ***!
  \**************************/
/*! exports provided: BubbleTooltip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BubbleTooltip\", function() { return BubbleTooltip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BubbleTheme; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./themes/base.js\");\n/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/selection */ \"./core/selection.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icons */ \"./ui/icons.js\");\n\n\n\n\n\nconst TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{\n  header: 1\n}, {\n  header: 2\n}, 'blockquote']];\n\nclass BubbleTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__[\"BaseTooltip\"] {\n  constructor(quill, bounds) {\n    super(quill, bounds);\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, (type, range, oldRange, source) => {\n      if (type !== _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SELECTION_CHANGE) return;\n\n      if (range != null && range.length > 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        this.show(); // Lock our width so we will expand beyond our offsetParent boundaries\n\n        this.root.style.left = '0px';\n        this.root.style.width = '';\n        this.root.style.width = \"\".concat(this.root.offsetWidth, \"px\");\n        const lines = this.quill.getLines(range.index, range.length);\n\n        if (lines.length === 1) {\n          this.position(this.quill.getBounds(range));\n        } else {\n          const lastLine = lines[lines.length - 1];\n          const index = this.quill.getIndex(lastLine);\n          const length = Math.min(lastLine.length() - 1, range.index + range.length - index);\n          const indexBounds = this.quill.getBounds(new _core_selection__WEBPACK_IMPORTED_MODULE_3__[\"Range\"](index, length));\n          this.position(indexBounds);\n        }\n      } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) {\n        this.hide();\n      }\n    });\n  }\n\n  listen() {\n    super.listen();\n    this.root.querySelector('.ql-close').addEventListener('click', () => {\n      this.root.classList.remove('ql-editing');\n    });\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      // Let selection be restored by toolbar handlers before repositioning\n      setTimeout(() => {\n        if (this.root.classList.contains('ql-hidden')) return;\n        const range = this.quill.getSelection();\n\n        if (range != null) {\n          this.position(this.quill.getBounds(range));\n        }\n      }, 1);\n    });\n  }\n\n  cancel() {\n    this.show();\n  }\n\n  position(reference) {\n    const shift = super.position(reference);\n    const arrow = this.root.querySelector('.ql-tooltip-arrow');\n    arrow.style.marginLeft = '';\n\n    if (shift !== 0) {\n      arrow.style.marginLeft = \"\".concat(-1 * shift - arrow.offsetWidth / 2, \"px\");\n    }\n\n    return shift;\n  }\n\n}\n\nBubbleTooltip.TEMPLATE = ['<span class=\"ql-tooltip-arrow\"></span>', '<div class=\"ql-tooltip-editor\">', '<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">', '<a class=\"ql-close\"></a>', '</div>'].join('');\n\nclass BubbleTheme extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {\n      options.modules.toolbar.container = TOOLBAR_CONFIG;\n    }\n\n    super(quill, options);\n    this.quill.container.classList.add('ql-bubble');\n  }\n\n  extendToolbar(toolbar) {\n    this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);\n    this.tooltip.root.appendChild(toolbar.container);\n    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  }\n\n}\n\nBubbleTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        link(value) {\n          if (!value) {\n            this.quill.format('link', false);\n          } else {\n            this.quill.theme.tooltip.edit();\n          }\n        }\n\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://Quill/./themes/bubble.js?");

/***/ }),

/***/ "./themes/snow.js":
/*!************************!*\
  !*** ./themes/snow.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./themes/base.js\");\n/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/link */ \"./formats/link.js\");\n/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/selection */ \"./core/selection.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/icons */ \"./ui/icons.js\");\n\n\n\n\n\n\nconst TOOLBAR_CONFIG = [[{\n  header: ['1', '2', '3', false]\n}], ['bold', 'italic', 'underline', 'link'], [{\n  list: 'ordered'\n}, {\n  list: 'bullet'\n}], ['clean']];\n\nclass SnowTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__[\"BaseTooltip\"] {\n  constructor(quill, bounds) {\n    super(quill, bounds);\n    this.preview = this.root.querySelector('a.ql-preview');\n  }\n\n  listen() {\n    super.listen();\n    this.root.querySelector('a.ql-action').addEventListener('click', event => {\n      if (this.root.classList.contains('ql-editing')) {\n        this.save();\n      } else {\n        this.edit('link', this.preview.textContent);\n      }\n\n      event.preventDefault();\n    });\n    this.root.querySelector('a.ql-remove').addEventListener('click', event => {\n      if (this.linkRange != null) {\n        const range = this.linkRange;\n        this.restoreFocus();\n        this.quill.formatText(range, 'link', false, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n        delete this.linkRange;\n      }\n\n      event.preventDefault();\n      this.hide();\n    });\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SELECTION_CHANGE, (range, oldRange, source) => {\n      if (range == null) return;\n\n      if (range.length === 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        const [link, offset] = this.quill.scroll.descendant(_formats_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], range.index);\n\n        if (link != null) {\n          this.linkRange = new _core_selection__WEBPACK_IMPORTED_MODULE_4__[\"Range\"](range.index - offset, link.length());\n          const preview = _formats_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"].formats(link.domNode);\n          this.preview.textContent = preview;\n          this.preview.setAttribute('href', preview);\n          this.show();\n          this.position(this.quill.getBounds(this.linkRange));\n          return;\n        }\n      } else {\n        delete this.linkRange;\n      }\n\n      this.hide();\n    });\n  }\n\n  show() {\n    super.show();\n    this.root.removeAttribute('data-mode');\n  }\n\n}\n\nSnowTooltip.TEMPLATE = ['<a class=\"ql-preview\" rel=\"noopener noreferrer\" target=\"_blank\" href=\"about:blank\"></a>', '<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">', '<a class=\"ql-action\"></a>', '<a class=\"ql-remove\"></a>'].join('');\n\nclass SnowTheme extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {\n      options.modules.toolbar.container = TOOLBAR_CONFIG;\n    }\n\n    super(quill, options);\n    this.quill.container.classList.add('ql-snow');\n  }\n\n  extendToolbar(toolbar) {\n    toolbar.container.classList.add('ql-snow');\n    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    this.tooltip = new SnowTooltip(this.quill, this.options.bounds);\n\n    if (toolbar.container.querySelector('.ql-link')) {\n      this.quill.keyboard.addBinding({\n        key: 'k',\n        shortKey: true\n      }, (range, context) => {\n        toolbar.handlers.link.call(toolbar, !context.format.link);\n      });\n    }\n  }\n\n}\n\nSnowTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        link(value) {\n          if (value) {\n            const range = this.quill.getSelection();\n            if (range == null || range.length === 0) return;\n            let preview = this.quill.getText(range);\n\n            if (/^\\S+@\\S+\\.\\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {\n              preview = \"mailto:\".concat(preview);\n            }\n\n            const {\n              tooltip\n            } = this.quill.theme;\n            tooltip.edit('link', preview);\n          } else {\n            this.quill.format('link', false);\n          }\n        }\n\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnowTheme);\n\n//# sourceURL=webpack://Quill/./themes/snow.js?");

/***/ }),

/***/ "./ui/color-picker.js":
/*!****************************!*\
  !*** ./ui/color-picker.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ \"./ui/picker.js\");\n\n\nclass ColorPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(select, label) {\n    super(select);\n    this.label.innerHTML = label;\n    this.container.classList.add('ql-color-picker');\n    Array.from(this.container.querySelectorAll('.ql-picker-item')).slice(0, 7).forEach(item => {\n      item.classList.add('ql-primary');\n    });\n  }\n\n  buildItem(option) {\n    const item = super.buildItem(option);\n    item.style.backgroundColor = option.getAttribute('value') || '';\n    return item;\n  }\n\n  selectItem(item, trigger) {\n    super.selectItem(item, trigger);\n    const colorLabel = this.label.querySelector('.ql-color-label');\n    const value = item ? item.getAttribute('data-value') || '' : '';\n\n    if (colorLabel) {\n      if (colorLabel.tagName === 'line') {\n        colorLabel.style.stroke = value;\n      } else {\n        colorLabel.style.fill = value;\n      }\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorPicker);\n\n//# sourceURL=webpack://Quill/./ui/color-picker.js?");

/***/ }),

/***/ "./ui/icon-picker.js":
/*!***************************!*\
  !*** ./ui/icon-picker.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ \"./ui/picker.js\");\n\n\nclass IconPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(select, icons) {\n    super(select);\n    this.container.classList.add('ql-icon-picker');\n    Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach(item => {\n      item.innerHTML = icons[item.getAttribute('data-value') || ''];\n    });\n    this.defaultItem = this.container.querySelector('.ql-selected');\n    this.selectItem(this.defaultItem);\n  }\n\n  selectItem(target, trigger) {\n    super.selectItem(target, trigger);\n    const item = target || this.defaultItem;\n    if (this.label.innerHTML === item.innerHTML) return;\n    this.label.innerHTML = item.innerHTML;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconPicker);\n\n//# sourceURL=webpack://Quill/./ui/icon-picker.js?");

/***/ }),

/***/ "./ui/icons.js":
/*!*********************!*\
  !*** ./ui/icons.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/align-left.svg */ \"./assets/icons/align-left.svg\");\n/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/align-center.svg */ \"./assets/icons/align-center.svg\");\n/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/align-right.svg */ \"./assets/icons/align-right.svg\");\n/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/align-justify.svg */ \"./assets/icons/align-justify.svg\");\n/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/background.svg */ \"./assets/icons/background.svg\");\n/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/blockquote.svg */ \"./assets/icons/blockquote.svg\");\n/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/bold.svg */ \"./assets/icons/bold.svg\");\n/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/clean.svg */ \"./assets/icons/clean.svg\");\n/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/code.svg */ \"./assets/icons/code.svg\");\n/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/color.svg */ \"./assets/icons/color.svg\");\n/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/direction-ltr.svg */ \"./assets/icons/direction-ltr.svg\");\n/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/direction-rtl.svg */ \"./assets/icons/direction-rtl.svg\");\n/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/formula.svg */ \"./assets/icons/formula.svg\");\n/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/icons/header.svg */ \"./assets/icons/header.svg\");\n/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/icons/header-2.svg */ \"./assets/icons/header-2.svg\");\n/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/icons/italic.svg */ \"./assets/icons/italic.svg\");\n/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icons/image.svg */ \"./assets/icons/image.svg\");\n/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/icons/indent.svg */ \"./assets/icons/indent.svg\");\n/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icons/outdent.svg */ \"./assets/icons/outdent.svg\");\n/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icons/link.svg */ \"./assets/icons/link.svg\");\n/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/icons/list-bullet.svg */ \"./assets/icons/list-bullet.svg\");\n/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/icons/list-check.svg */ \"./assets/icons/list-check.svg\");\n/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/icons/list-ordered.svg */ \"./assets/icons/list-ordered.svg\");\n/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/icons/subscript.svg */ \"./assets/icons/subscript.svg\");\n/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/icons/superscript.svg */ \"./assets/icons/superscript.svg\");\n/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/icons/strike.svg */ \"./assets/icons/strike.svg\");\n/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/icons/table.svg */ \"./assets/icons/table.svg\");\n/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/icons/underline.svg */ \"./assets/icons/underline.svg\");\n/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/icons/video.svg */ \"./assets/icons/video.svg\");\n/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  align: {\n    '': _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default.a,\n    center: _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default.a,\n    right: _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    justify: _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default.a\n  },\n  background: _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  blockquote: _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  bold: _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n  clean: _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n  code: _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,\n  'code-block': _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,\n  color: _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default.a,\n  direction: {\n    '': _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default.a,\n    rtl: _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default.a\n  },\n  formula: _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default.a,\n  header: {\n    '1': _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default.a,\n    '2': _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default.a\n  },\n  italic: _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default.a,\n  image: _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default.a,\n  indent: {\n    '+1': _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default.a,\n    '-1': _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default.a\n  },\n  link: _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default.a,\n  list: {\n    bullet: _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default.a,\n    check: _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default.a,\n    ordered: _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default.a\n  },\n  script: {\n    sub: _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default.a,\n    super: _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default.a\n  },\n  strike: _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default.a,\n  table: _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default.a,\n  underline: _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default.a,\n  video: _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default.a\n});\n\n//# sourceURL=webpack://Quill/./ui/icons.js?");

/***/ }),

/***/ "./ui/picker.js":
/*!**********************!*\
  !*** ./ui/picker.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/dropdown.svg */ \"./assets/icons/dropdown.svg\");\n/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__);\n\nlet optionsCounter = 0;\n\nfunction toggleAriaAttribute(element, attribute) {\n  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));\n}\n\nclass Picker {\n  constructor(select) {\n    this.select = select;\n    this.container = document.createElement('span');\n    this.buildPicker();\n    this.select.style.display = 'none';\n    this.select.parentNode.insertBefore(this.container, this.select);\n    this.label.addEventListener('mousedown', () => {\n      this.togglePicker();\n    });\n    this.label.addEventListener('keydown', event => {\n      switch (event.key) {\n        case 'Enter':\n          this.togglePicker();\n          break;\n\n        case 'Escape':\n          this.escape();\n          event.preventDefault();\n          break;\n\n        default:\n      }\n    });\n    this.select.addEventListener('change', this.update.bind(this));\n  }\n\n  togglePicker() {\n    this.container.classList.toggle('ql-expanded'); // Toggle aria-expanded and aria-hidden to make the picker accessible\n\n    toggleAriaAttribute(this.label, 'aria-expanded');\n    toggleAriaAttribute(this.options, 'aria-hidden');\n  }\n\n  buildItem(option) {\n    const item = document.createElement('span');\n    item.tabIndex = '0';\n    item.setAttribute('role', 'button');\n    item.classList.add('ql-picker-item');\n\n    if (option.hasAttribute('value')) {\n      item.setAttribute('data-value', option.getAttribute('value'));\n    }\n\n    if (option.textContent) {\n      item.setAttribute('data-label', option.textContent);\n    }\n\n    item.addEventListener('click', () => {\n      this.selectItem(item, true);\n    });\n    item.addEventListener('keydown', event => {\n      switch (event.key) {\n        case 'Enter':\n          this.selectItem(item, true);\n          event.preventDefault();\n          break;\n\n        case 'Escape':\n          this.escape();\n          event.preventDefault();\n          break;\n\n        default:\n      }\n    });\n    return item;\n  }\n\n  buildLabel() {\n    const label = document.createElement('span');\n    label.classList.add('ql-picker-label');\n    label.innerHTML = _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default.a;\n    label.tabIndex = '0';\n    label.setAttribute('role', 'button');\n    label.setAttribute('aria-expanded', 'false');\n    this.container.appendChild(label);\n    return label;\n  }\n\n  buildOptions() {\n    const options = document.createElement('span');\n    options.classList.add('ql-picker-options'); // Don't want screen readers to read this until options are visible\n\n    options.setAttribute('aria-hidden', 'true');\n    options.tabIndex = '-1'; // Need a unique id for aria-controls\n\n    options.id = \"ql-picker-options-\".concat(optionsCounter);\n    optionsCounter += 1;\n    this.label.setAttribute('aria-controls', options.id);\n    this.options = options;\n    Array.from(this.select.options).forEach(option => {\n      const item = this.buildItem(option);\n      options.appendChild(item);\n\n      if (option.selected === true) {\n        this.selectItem(item);\n      }\n    });\n    this.container.appendChild(options);\n  }\n\n  buildPicker() {\n    Array.from(this.select.attributes).forEach(item => {\n      this.container.setAttribute(item.name, item.value);\n    });\n    this.container.classList.add('ql-picker');\n    this.label = this.buildLabel();\n    this.buildOptions();\n  }\n\n  escape() {\n    // Close menu and return focus to trigger label\n    this.close(); // Need setTimeout for accessibility to ensure that the browser executes\n    // focus on the next process thread and after any DOM content changes\n\n    setTimeout(() => this.label.focus(), 1);\n  }\n\n  close() {\n    this.container.classList.remove('ql-expanded');\n    this.label.setAttribute('aria-expanded', 'false');\n    this.options.setAttribute('aria-hidden', 'true');\n  }\n\n  selectItem(item, trigger = false) {\n    const selected = this.container.querySelector('.ql-selected');\n    if (item === selected) return;\n\n    if (selected != null) {\n      selected.classList.remove('ql-selected');\n    }\n\n    if (item == null) return;\n    item.classList.add('ql-selected');\n    this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);\n\n    if (item.hasAttribute('data-value')) {\n      this.label.setAttribute('data-value', item.getAttribute('data-value'));\n    } else {\n      this.label.removeAttribute('data-value');\n    }\n\n    if (item.hasAttribute('data-label')) {\n      this.label.setAttribute('data-label', item.getAttribute('data-label'));\n    } else {\n      this.label.removeAttribute('data-label');\n    }\n\n    if (trigger) {\n      this.select.dispatchEvent(new Event('change'));\n      this.close();\n    }\n  }\n\n  update() {\n    let option;\n\n    if (this.select.selectedIndex > -1) {\n      const item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];\n      option = this.select.options[this.select.selectedIndex];\n      this.selectItem(item);\n    } else {\n      this.selectItem(null);\n    }\n\n    const isActive = option != null && option !== this.select.querySelector('option[selected]');\n    this.label.classList.toggle('ql-active', isActive);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Picker);\n\n//# sourceURL=webpack://Quill/./ui/picker.js?");

/***/ }),

/***/ "./ui/tooltip.js":
/*!***********************!*\
  !*** ./ui/tooltip.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\nclass Tooltip {\n  constructor(quill, boundsContainer) {\n    this.quill = quill;\n    this.boundsContainer = boundsContainer || document.body;\n    this.root = quill.addContainer('ql-tooltip');\n    this.root.innerHTML = this.constructor.TEMPLATE;\n\n    if (this.quill.root === this.quill.scrollingContainer) {\n      this.quill.root.addEventListener('scroll', () => {\n        this.root.style.marginTop = \"\".concat(-1 * this.quill.root.scrollTop, \"px\");\n      });\n    }\n\n    this.hide();\n  }\n\n  hide() {\n    this.root.classList.add('ql-hidden');\n  }\n\n  position(reference) {\n    const left = reference.left + reference.width / 2 - this.root.offsetWidth / 2; // root.scrollTop should be 0 if scrollContainer !== root\n\n    const top = reference.bottom + this.quill.root.scrollTop;\n    this.root.style.left = \"\".concat(left, \"px\");\n    this.root.style.top = \"\".concat(top, \"px\");\n    this.root.classList.remove('ql-flip');\n    const containerBounds = this.boundsContainer.getBoundingClientRect();\n    const rootBounds = this.root.getBoundingClientRect();\n    let shift = 0;\n\n    if (rootBounds.right > containerBounds.right) {\n      shift = containerBounds.right - rootBounds.right;\n      this.root.style.left = \"\".concat(left + shift, \"px\");\n    }\n\n    if (rootBounds.left < containerBounds.left) {\n      shift = containerBounds.left - rootBounds.left;\n      this.root.style.left = \"\".concat(left + shift, \"px\");\n    }\n\n    if (rootBounds.bottom > containerBounds.bottom) {\n      const height = rootBounds.bottom - rootBounds.top;\n      const verticalShift = reference.bottom - reference.top + height;\n      this.root.style.top = \"\".concat(top - verticalShift, \"px\");\n      this.root.classList.add('ql-flip');\n    }\n\n    return shift;\n  }\n\n  show() {\n    this.root.classList.remove('ql-editing');\n    this.root.classList.remove('ql-hidden');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tooltip);\n\n//# sourceURL=webpack://Quill/./ui/tooltip.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./quill.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./quill.js */\"./quill.js\");\n\n\n//# sourceURL=webpack://Quill/multi_./quill.js?");

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack://Quill/./util.inspect_(ignored)?");

/***/ })

/******/ })["default"];
});
});var toolbar = [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
  list: 'ordered'
}, {
  list: 'bullet'
}], [{
  script: 'super'
}], [{
  indent: '-1'
}, {
  indent: '+1'
}], [{
  size: ['small', false, 'large', 'huge']
}], [{
  header: [1, 2, 3, 4, 5, 6, false]
}], [{
  color: []
}, {
  background: []
}], [{
  align: []
}], ['link', 'image'], [{
  table: 'TD'
}, {
  'table-insert-row': 'TIR'
}, {
  'table-insert-column': 'TIC'
}, {
  'table-delete-row': 'TDR'
}, {
  'table-delete-column': 'TDC'
}], ['showHtml']];var ICON_SVGS = {
  maxsize: "<svg viewBox=\"0 0 18 18\">\n      <path d=\"M2 6 L 2 2 6 2M12 2 L 16 2 16 6\" class=\"ql-stroke\"></path>\n      <path d=\"M2 12 L 2 16 6 16M12 16 L 16 16 16 12\" class=\"ql-stroke\"></path>\n    </svg>",
  minsize: "<svg viewBox=\"0 0 18 18\">\n      <path d=\"M2 6 L 6 6 6 2M12 2 L 12 6 16 6\" class=\"ql-stroke\"></path>\n      <path d=\"M2 12 L 6 12 6 16M12 16 L 12 12 16 12\" class=\"ql-stroke\"></path>\n    </svg>",
  'table-insert-row': "<svg viewbox=\"0 0 18 18\">\n    <g class=\"ql-fill ql-stroke ql-thin ql-transparent\">\n      <rect height=\"3\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"4.5\" y=\"2.5\"></rect>\n      <rect height=\"3\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"4.5\" y=\"12.5\"></rect>\n    </g>\n    <rect class=\"ql-fill ql-stroke ql-thin\" height=\"3\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"8.5\" y=\"7.5\"></rect>\n    <polygon class=\"ql-fill ql-stroke ql-thin\" points=\"4.5 11 2.5 9 4.5 7 4.5 11\"></polygon>\n    <line class=\"ql-stroke\" x1=\"6\" x2=\"4\" y1=\"9\" y2=\"9\"></line>\n  </svg>",
  'table-insert-column': "<svg viewbox=\"0 0 18 18\">\n    <g class=\"ql-fill ql-transparent\">\n      <rect height=\"10\" rx=\"1\" ry=\"1\" width=\"4\" x=\"12\" y=\"2\"></rect>\n      <rect height=\"10\" rx=\"1\" ry=\"1\" width=\"4\" x=\"2\" y=\"2\"></rect>\n    </g>\n    <path class=\"ql-fill\" d=\"M11.354,4.146l-2-2a0.5,0.5,0,0,0-.707,0l-2,2A0.5,0.5,0,0,0,7,5H8V6a1,1,0,0,0,2,0V5h1A0.5,0.5,0,0,0,11.354,4.146Z\"></path>\n    <rect class=\"ql-fill\" height=\"8\" rx=\"1\" ry=\"1\" width=\"4\" x=\"7\" y=\"8\"></rect>\n  </svg>",
  'table-delete-row': "<svg viewbox=\"0 0 18 18\">\n    <g class=\"ql-fill ql-stroke ql-thin ql-transparent\">\n      <rect height=\"3\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"4.5\" y=\"2.5\"></rect>\n      <rect height=\"3\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"4.5\" y=\"12.5\"></rect>\n    </g>\n    <rect class=\"ql-fill ql-stroke ql-thin\" height=\"3\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"8.5\" y=\"7.5\"></rect>\n    <line class=\"ql-stroke ql-thin\" x1=\"6.5\" x2=\"3.5\" y1=\"7.5\" y2=\"10.5\"></line>\n    <line class=\"ql-stroke ql-thin\" x1=\"3.5\" x2=\"6.5\" y1=\"7.5\" y2=\"10.5\"></line>\n  </svg>",
  'table-delete-column': "<svg viewbox=\"0 0 18 18\">\n    <g class=\"ql-fill ql-transparent\">\n      <rect height=\"10\" rx=\"1\" ry=\"1\" width=\"4\" x=\"2\" y=\"6\"></rect>\n      <rect height=\"10\" rx=\"1\" ry=\"1\" width=\"4\" x=\"12\" y=\"6\"></rect>\n    </g>\n    <rect class=\"ql-fill\" height=\"8\" rx=\"1\" ry=\"1\" width=\"4\" x=\"7\" y=\"2\"></rect>\n    <path class=\"ql-fill\" d=\"M9.707,13l1.146-1.146a0.5,0.5,0,0,0-.707-0.707L9,12.293,7.854,11.146a0.5,0.5,0,0,0-.707.707L8.293,13,7.146,14.146a0.5,0.5,0,1,0,.707.707L9,13.707l1.146,1.146a0.5,0.5,0,0,0,.707-0.707Z\"></path>\n  </svg>"
};/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$5.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$4.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString;/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$1;
}

var _baseIsArguments = baseIsArguments;/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$1;

  return value === proto;
}

var _isPrototype = isPrototype;/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$1;/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity_1;
}

var _castFunction = castFunction;/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach$1(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayEach : _baseEach;
  return func(collection, _castFunction(iteratee));
}

var forEach_1 = forEach$1;var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;var defaults$1 = defaults_1;var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults$1.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel_1('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}var debug$1 = createCommonjsModule(function (module, exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = ms;

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}
});var browser = createCommonjsModule(function (module, exports) {
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug$1;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
});var node = createCommonjsModule(function (module, exports) {
/**
 * Module dependencies.
 */




/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug$1;
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util__default["default"].deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
}

var stream = 1 === fd ? process.stdout :
             2 === fd ? process.stderr :
             createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty__default["default"].isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util__default["default"].inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util__default["default"].inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = new Date().toUTCString()
      + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util__default["default"].format.apply(util__default["default"], arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream (fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty__default["default"].WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = fs__default["default"];
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = net__default["default"];
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());
});var src = createCommonjsModule(function (module) {
/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = browser;
} else {
  module.exports = node;
}
});var debug;

var debug_1 = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = src("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug !== "function") {
      debug = function () { /* */ };
    }
  }
  debug.apply(null, arguments);
};var URL = url__default["default"].URL;


var Writable = stream__default["default"].Writable;



// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  abortRequest(this._currentRequest);
  this.emit("abort");
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url__default["default"].format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var e = 0; e < events.length; e++) {
    request.on(events[e], eventHandlers[events[e]]);
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      statusCode >= 300 && statusCode < 400) {
    // Abort the current request
    abortRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();

    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new TooManyRedirectsError());
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
        // RFC7231§6.4.4: The 303 (See Other) status code indicates that
        // the server is redirecting the user agent to a different resource […]
        // A user agent can perform a retrieval request targeting that URI
        // (a GET or HEAD request if using HTTP) […]
        (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      removeMatchingHeaders(/^content-/i, this._options.headers);
    }

    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = url__default["default"].parse(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
      url__default["default"].format(Object.assign(currentUrlParts, { host: currentHost }));

    // Determine the URL of the redirection
    var redirectUrl;
    try {
      redirectUrl = url__default["default"].resolve(currentUrl, location);
    }
    catch (cause) {
      this.emit("error", new RedirectionError(cause));
      return;
    }

    // Create the redirected request
    debug_1("redirecting to", redirectUrl);
    this._isRedirect = true;
    var redirectUrlParts = url__default["default"].parse(redirectUrl);
    Object.assign(this._options, redirectUrlParts);

    // Drop the Authorization header if redirecting to another domain
    if (!(redirectUrlParts.host === currentHost || isSubdomainOf(redirectUrlParts.host, currentHost))) {
      removeMatchingHeaders(/^authorization$/i, this._options.headers);
    }

    // Evaluate the beforeRedirect callback
    if (typeof this._options.beforeRedirect === "function") {
      var responseDetails = { headers: response.headers };
      try {
        this._options.beforeRedirect.call(null, this._options, responseDetails);
      }
      catch (err) {
        this.emit("error", err);
        return;
      }
      this._sanitizeOptions(this._options);
    }

    // Perform the redirected request
    try {
      this._performRequest();
    }
    catch (cause) {
      this.emit("error", new RedirectionError(cause));
    }
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        }
        catch (err) {
          /* istanbul ignore next */
          input = url__default["default"].parse(urlStr);
        }
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;

      assert__default["default"].equal(options.protocol, protocol, "protocol mismatch");
      debug_1("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header].toString().trim();
      delete headers[header];
    }
  }
  return lastValue;
}

function createErrorType(code, defaultMessage) {
  function CustomError(cause) {
    Error.captureStackTrace(this, this.constructor);
    if (!cause) {
      this.message = defaultMessage;
    }
    else {
      this.message = defaultMessage + ": " + cause.message;
      this.cause = cause;
    }
  }
  CustomError.prototype = new Error();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  CustomError.prototype.code = code;
  return CustomError;
}

function abortRequest(request) {
  for (var e = 0; e < events.length; e++) {
    request.removeListener(events[e], eventHandlers[events[e]]);
  }
  request.on("error", noop);
  request.abort();
}

function isSubdomainOf(subdomain, domain) {
  const dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

// Exports
var followRedirects = wrap({ http: http__default["default"], https: https__default["default"] });
var wrap_1 = wrap;
followRedirects.wrap = wrap_1;var data = {
  "version": "0.24.0"
};var httpFollow = followRedirects.http;
var httpsFollow = followRedirects.https;


var VERSION$1 = data.version;





var isHttps = /https:?/;

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
var http_1 = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    var resolve = function resolve(value) {
      done();
      resolvePromise(value);
    };
    var reject = function reject(value) {
      done();
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;
    var headerNames = {};

    Object.keys(headers).forEach(function storeLowerName(name) {
      headerNames[name.toLowerCase()] = name;
    });

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    if ('user-agent' in headerNames) {
      // User-Agent is specified; handle case where no UA header is desired
      if (!headers[headerNames['user-agent']]) {
        delete headers[headerNames['user-agent']];
      }
      // Otherwise, use specified value
    } else {
      // Only set header if it hasn't been set in config
      headers['User-Agent'] = 'axios/' + VERSION$1;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      if (!headerNames['content-length']) {
        headers['Content-Length'] = data.length;
      }
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url__default["default"].parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth && headerNames.authorization) {
      delete headers[headerNames.authorization];
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url__default["default"].parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }

        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https__default["default"] : http__default["default"];
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    if (config.insecureHTTPParser) {
      options.insecureHTTPParser = config.insecureHTTPParser;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib__default["default"].createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        var totalResponseBytes = 0;
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
            if (!config.responseEncoding || config.responseEncoding === 'utf8') {
              responseData = utils.stripBOM(responseData);
            }
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      var timeout = parseInt(config.timeout, 10);

      if (isNaN(timeout)) {
        reject(createError(
          'error trying to parse `config.timeout` to int',
          config,
          'ERR_PARSE_TIMEOUT',
          req
        ));

        return;
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, function handleRequestTimeout() {
        req.abort();
        var transitional = config.transitional || defaults$1.transitional;
        reject(createError(
          'timeout of ' + timeout + 'ms exceeded',
          config,
          transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
          req
        ));
      });
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(!cancel || (cancel && cancel.type) ? new Cancel_1('canceled') : cancel);
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }


    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = http_1;
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  var context = this || defaults$1;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel_1('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults$1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};var VERSION = data.version;

var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

var validator = {
  assertOptions: assertOptions,
  validators: validators$1
};var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios_1;

// Expose Cancel & CancelToken
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel;
axios$1.VERSION = data.version;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError;

var axios_1 = axios$1;

// Allow use of default import syntax in TypeScript
var _default = axios$1;
axios_1.default = _default;var axios = axios_1;var InlineBlot = quill.import("blots/block");

var LoadingImage = /*#__PURE__*/function (_InlineBlot) {
  _inherits(LoadingImage, _InlineBlot);

  var _super = _createSuper(LoadingImage);

  function LoadingImage() {
    _classCallCheck(this, LoadingImage);

    return _super.apply(this, arguments);
  }

  _createClass(LoadingImage, [{
    key: "deleteAt",
    value: function deleteAt(index, length) {
      _get(_getPrototypeOf(LoadingImage.prototype), "deleteAt", this).call(this, index, length);

      this.cache = {};
    }
  }], [{
    key: "create",
    value: function create(src) {
      var node = _get(_getPrototypeOf(LoadingImage), "create", this).call(this, src);

      if (src === true) return node;
      var image = document.createElement("img");
      image.setAttribute("src", src);
      node.appendChild(image);
      return node;
    }
  }, {
    key: "value",
    value: function value(domNode) {
      var _domNode$dataset = domNode.dataset,
          src = _domNode$dataset.src,
          custom = _domNode$dataset.custom;
      return {
        src: src,
        custom: custom
      };
    }
  }]);

  return LoadingImage;
}(InlineBlot);

LoadingImage.blotName = "imageBlot";
LoadingImage.className = "image-uploading";
LoadingImage.tagName = "span";
quill.register({
  "formats/imageBlot": LoadingImage
});
var LoadingImage$1 = LoadingImage;var ImageUploader = /*#__PURE__*/function () {
  function ImageUploader(quill, options) {
    _classCallCheck(this, ImageUploader);

    this.quill = quill;
    this.options = options;
    this.range = null;
    if (typeof this.options.upload !== 'function') console.warn('[Missing config] upload function that returns a promise is required');
    var toolbar = this.quill.getModule('toolbar');
    toolbar.addHandler('image', this.selectLocalImage.bind(this));
    this.handleDrop = this.handleDrop.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
    this.quill.root.addEventListener('drop', this.handleDrop, false);
    this.quill.root.addEventListener('paste', this.handlePaste, false);
  }

  _createClass(ImageUploader, [{
    key: "selectLocalImage",
    value: function selectLocalImage() {
      var _this = this;

      this.range = this.quill.getSelection();
      this.fileHolder = document.createElement('input');
      this.fileHolder.setAttribute('type', 'file');
      this.fileHolder.setAttribute('accept', 'image/*');
      this.fileHolder.setAttribute('style', 'visibility:hidden');
      this.fileHolder.onchange = this.fileChanged.bind(this);
      document.body.appendChild(this.fileHolder);
      this.fileHolder.click();
      window.requestAnimationFrame(function () {
        document.body.removeChild(_this.fileHolder);
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(evt) {
      var _this2 = this;

      evt.stopPropagation();
      evt.preventDefault();

      if (evt.dataTransfer && evt.dataTransfer.files && evt.dataTransfer.files.length) {
        if (document.caretRangeFromPoint) {
          var selection = document.getSelection();
          var range = document.caretRangeFromPoint(evt.clientX, evt.clientY);

          if (selection && range) {
            selection.setBaseAndExtent(range.startContainer, range.startOffset, range.startContainer, range.startOffset);
          }
        } else {
          var _selection = document.getSelection();

          var _range = document.caretPositionFromPoint(evt.clientX, evt.clientY);

          if (_selection && _range) {
            _selection.setBaseAndExtent(_range.offsetNode, _range.offset, _range.offsetNode, _range.offset);
          }
        }

        this.range = this.quill.getSelection();
        var file = evt.dataTransfer.files[0];
        this.quill.deleteText(this.range.index - 1, 1);
        setTimeout(function () {
          _this2.range = _this2.quill.getSelection();

          _this2.readAndUploadFile(file);
        }, 0);
      }
    }
  }, {
    key: "handlePaste",
    value: function handlePaste(evt) {
      var _this3 = this;

      var clipboard = evt.clipboardData || window.clipboardData;

      if (clipboard && (clipboard.items || clipboard.files)) {
        var items = clipboard.items || clipboard.files;
        console.log('🚀 ~ file: quill.imageUploader.js ~ line 92 ~ ImageUploader ~ handlePaste ~ clipboard', clipboard);
        console.log('🚀 ~ file: quill.imageUploader.js ~ line 92 ~ ImageUploader ~ handlePaste ~ items', items);
        var IMAGE_MIME_REGEX = /^image\/(jpe?g|gif|png|svg|webp)$/i;

        for (var i = 0; i < items.length; i++) {
          if (IMAGE_MIME_REGEX.test(items[i].type)) {
            (function () {
              console.log('🚀 ~ file: quill.imageUploader.js ~ line 96 ~ ImageUploader ~ handlePaste ~ items[i]', items[i]);
              console.log('🚀 ~ file: quill.imageUploader.js ~ line 97 ~ ImageUploader ~ handlePaste ~ file', file);
              var file = items[i].getAsFile ? items[i].getAsFile() : items[i];

              if (file) {
                _this3.range = _this3.quill.getSelection();

                _this3.quill.deleteText(_this3.range.index - 1, 1);

                evt.preventDefault();
                setTimeout(function () {
                  _this3.range = _this3.quill.getSelection();

                  _this3.readAndUploadFile(file);
                }, 0);
              }
            })();
          }
        }
      }
    }
  }, {
    key: "readAndUploadFile",
    value: function readAndUploadFile(file) {
      var _this4 = this;

      var isUploadReject = false;
      var fileReader = new FileReader();
      fileReader.addEventListener('load', function () {
        if (!isUploadReject) {
          var base64ImageSrc = fileReader.result;

          _this4.insertBase64Image(base64ImageSrc);
        }
      }, false);

      if (file) {
        fileReader.readAsDataURL(file);
      }

      this.options.upload(file).then(function (imageUrl) {
        _this4.insertToEditor(imageUrl);
      }, function (error) {
        isUploadReject = true;

        _this4.removeBase64Image();

        console.warn(error);
      });
    }
  }, {
    key: "fileChanged",
    value: function fileChanged() {
      var file = this.fileHolder.files[0];
      this.readAndUploadFile(file);
    }
  }, {
    key: "insertBase64Image",
    value: function insertBase64Image(url) {
      var range = this.range;
      this.quill.insertEmbed(range.index, LoadingImage$1.blotName, "".concat(url), 'user');
    }
  }, {
    key: "insertToEditor",
    value: function insertToEditor(url) {
      var range = this.range;
      this.quill.deleteText(range.index, 3, 'user');
      this.quill.insertEmbed(range.index, 'image', "".concat(url), 'user');
      range.index++;
      this.quill.setSelection(range, 'user');
    }
  }, {
    key: "removeBase64Image",
    value: function removeBase64Image() {
      var range = this.range;
      this.quill.deleteText(range.index, 3, 'user');
    }
  }]);

  return ImageUploader;
}();

window.ImageUploader = ImageUploader;
var ImageUploader$1 = ImageUploader;var imageResize_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o});},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=38)}([function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n;},function(t,e,n){var o=n(22),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i;},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n;},function(t,e,n){function o(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1]);}}var r=n(75),i=n(76),a=n(77),s=n(78),u=n(79);o.prototype.clear=r,o.prototype.delete=i,o.prototype.get=a,o.prototype.has=s,o.prototype.set=u,t.exports=o;},function(t,e,n){function o(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return -1}var r=n(8);t.exports=o;},function(t,e,n){function o(t){return null==t?void 0===t?u:s:c&&c in Object(t)?i(t):a(t)}var r=n(16),i=n(64),a=n(87),s="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=o;},function(t,e,n){function o(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}var r=n(73);t.exports=o;},function(t,e,n){var o=n(11),r=o(Object,"create");t.exports=r;},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n;},function(t,e,n){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r});var r=function t(e){o(this,t),this.onCreate=function(){},this.onDestroy=function(){},this.onUpdate=function(){},this.quill=e.quill,this.overlay=e.overlay,this.img=e.img,this.options=e.options,this.requestUpdate=e.onUpdate;};},function(t,e,n){function o(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n;}var r=n(21);t.exports=o;},function(t,e,n){function o(t,e){var n=i(t,e);return r(n)?n:void 0}var r=n(48),i=n(65);t.exports=o;},function(t,e,n){function o(t){return null!=t&&i(t.length)&&!r(t)}var r=n(13),i=n(30);t.exports=o;},function(t,e,n){function o(t){if(!i(t))return !1;var e=r(t);return e==s||e==u||e==a||e==c}var r=n(5),i=n(0),a="[object AsyncFunction]",s="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";t.exports=o;},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t};},function(t,e,n){var o=n(11),r=n(1),i=o(r,"Map");t.exports=i;},function(t,e,n){var o=n(1),r=o.Symbol;t.exports=r;},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n;},function(t,e,n){function o(t,e,n){(void 0===n||i(t[e],n))&&(void 0!==n||e in t)||r(t,e,n);}var r=n(10),i=n(8);t.exports=o;},function(t,e,n){function o(t,e,n,l,f){t!==e&&a(e,function(a,c){if(u(a))f||(f=new r),s(t,e,c,n,o,l,f);else {var p=l?l(t[c],a,c+"",t,e,f):void 0;void 0===p&&(p=a),i(t,c,p);}},c);}var r=n(41),i=n(18),a=n(46),s=n(51),u=n(0),c=n(32);t.exports=o;},function(t,e,n){function o(t,e){return a(i(t,e,r),t+"")}var r=n(26),i=n(89),a=n(90);t.exports=o;},function(t,e,n){var o=n(11),r=function(){try{var t=o(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=r;},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n;}).call(e,n(107));},function(t,e,n){var o=n(88),r=o(Object.getPrototypeOf,Object);t.exports=r;},function(t,e){function n(t,e){return !!(e=null==e?o:e)&&("number"==typeof t||r.test(t))&&t>-1&&t%1==0&&t<e}var o=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=n;},function(t,e){function n(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||o)}var o=Object.prototype;t.exports=n;},function(t,e){function n(t){return t}t.exports=n;},function(t,e,n){var o=n(47),r=n(2),i=Object.prototype,a=i.hasOwnProperty,s=i.propertyIsEnumerable,u=o(function(){return arguments}())?o:function(t){return r(t)&&a.call(t,"callee")&&!s.call(t,"callee")};t.exports=u;},function(t,e){var n=Array.isArray;t.exports=n;},function(t,e,n){(function(t){var o=n(1),r=n(102),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i,u=s?o.Buffer:void 0,c=u?u.isBuffer:void 0,l=c||r;t.exports=l;}).call(e,n(14)(t));},function(t,e){function n(t){return "number"==typeof t&&t>-1&&t%1==0&&t<=o}var o=9007199254740991;t.exports=n;},function(t,e,n){var o=n(49),r=n(54),i=n(86),a=i&&i.isTypedArray,s=a?r(a):o;t.exports=s;},function(t,e,n){function o(t){return a(t)?r(t,!0):i(t)}var r=n(43),i=n(50),a=n(12);t.exports=o;},function(t,e,n){e.a={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"},displayStyles:{position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"},toolbarStyles:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default"},toolbarButtonStyles:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvgStyles:{fill:"#444",stroke:"#444",strokeWidth:"2"}};},function(t,e,n){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}var a=n(9);n.d(e,"a",function(){return s});var s=function(t){function e(){var t,n,i,a;o(this,e);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=i=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),i.onCreate=function(){i.display=document.createElement("div"),Object.assign(i.display.style,i.options.displayStyles),i.overlay.appendChild(i.display);},i.onDestroy=function(){},i.onUpdate=function(){if(i.display&&i.img){var t=i.getCurrentSize();if(i.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30)Object.assign(i.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"==i.img.style.float){var e=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"auto",bottom:"-"+(e.height+4)+"px",left:"-"+(e.width+4)+"px"});}else {var n=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"-"+(n.width+4)+"px",bottom:"-"+(n.height+4)+"px",left:"auto"});}}},i.getCurrentSize=function(){return [i.img.width,Math.round(i.img.width/i.img.naturalWidth*i.img.naturalHeight)]},a=n,r(i,a)}return i(e,t),e}(a.a);},function(t,e,n){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}var a=n(9);n.d(e,"a",function(){return s});var s=function(t){function e(){var t,n,i,a;o(this,e);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=i=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),i.onCreate=function(){i.boxes=[],i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.positionBoxes();},i.onDestroy=function(){i.setCursor("");},i.positionBoxes=function(){var t=-parseFloat(i.options.handleStyles.width)/2+"px",e=-parseFloat(i.options.handleStyles.height)/2+"px";[{left:t,top:e},{right:t,top:e},{right:t,bottom:e},{left:t,bottom:e}].forEach(function(t,e){Object.assign(i.boxes[e].style,t);});},i.addBox=function(t){var e=document.createElement("div");Object.assign(e.style,i.options.handleStyles),e.style.cursor=t,e.style.width=i.options.handleStyles.width+"px",e.style.height=i.options.handleStyles.height+"px",e.addEventListener("mousedown",i.handleMousedown,!1),i.overlay.appendChild(e),i.boxes.push(e);},i.handleMousedown=function(t){i.dragBox=t.target,i.dragStartX=t.clientX,i.preDragWidth=i.img.width||i.img.naturalWidth,i.setCursor(i.dragBox.style.cursor),document.addEventListener("mousemove",i.handleDrag,!1),document.addEventListener("mouseup",i.handleMouseup,!1);},i.handleMouseup=function(){i.setCursor(""),document.removeEventListener("mousemove",i.handleDrag),document.removeEventListener("mouseup",i.handleMouseup);},i.handleDrag=function(t){if(i.img){var e=t.clientX-i.dragStartX;i.dragBox===i.boxes[0]||i.dragBox===i.boxes[3]?i.img.width=Math.round(i.preDragWidth-e):i.img.width=Math.round(i.preDragWidth+e),i.requestUpdate();}},i.setCursor=function(t){[document.body,i.img].forEach(function(e){e.style.cursor=t;});},a=n,r(i,a)}return i(e,t),e}(a.a);},function(t,e,n){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}var a=n(105),s=n.n(a),u=n(104),c=n.n(u),l=n(106),f=n.n(l),p=n(9);n.d(e,"a",function(){return d});var d=function(t){function e(){var t,n,i,a;o(this,e);for(var u=arguments.length,l=Array(u),p=0;p<u;p++)l[p]=arguments[p];return n=i=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),i.onCreate=function(){i.toolbar=document.createElement("div"),Object.assign(i.toolbar.style,i.options.toolbarStyles),i.overlay.appendChild(i.toolbar),i._defineAlignments(),i._addToolbarButtons();},i.onDestroy=function(){},i.onUpdate=function(){},i._defineAlignments=function(){var t=i.quill.constructor.imports.parchment,e=new t.StyleAttributor("float","float"),n=new t.StyleAttributor("margin","margin"),o=new t.StyleAttributor("display","display");i.alignments=[{icon:s.a,apply:function(){o.add(i.img,"inline"),e.add(i.img,"left"),n.add(i.img,"0 1em 1em 0");},isApplied:function(){return "left"==e.value(i.img)}},{icon:c.a,apply:function(){o.add(i.img,"block"),e.remove(i.img),n.add(i.img,"auto");},isApplied:function(){return "auto"==n.value(i.img)}},{icon:f.a,apply:function(){o.add(i.img,"inline"),e.add(i.img,"right"),n.add(i.img,"0 0 1em 1em");},isApplied:function(){return "right"==e.value(i.img)}}];},i._addToolbarButtons=function(){var t=i.quill.constructor.imports.parchment,e=new t.StyleAttributor("float","float"),n=new t.StyleAttributor("margin","margin"),o=new t.StyleAttributor("display","display"),r=[];i.alignments.forEach(function(t,a){var s=document.createElement("span");r.push(s),s.innerHTML=t.icon,s.addEventListener("click",function(){r.forEach(function(t){return t.style.filter=""}),t.isApplied()?(e.remove(i.img),n.remove(i.img),o.remove(i.img)):(i._selectButton(s),t.apply()),i.requestUpdate();}),Object.assign(s.style,i.options.toolbarButtonStyles),a>0&&(s.style.borderLeftWidth="0"),Object.assign(s.children[0].style,i.options.toolbarButtonSvgStyles),t.isApplied()&&i._selectButton(s),i.toolbar.appendChild(s);});},i._selectButton=function(t){t.style.filter="invert(20%)";},a=n,r(i,a)}return i(e,t),e}(p.a);},function(t,e,n){var o=n(17),r=n(20),i=n(63),a=n(101),s=r(function(t){return t.push(void 0,i),o(a,void 0,t)});t.exports=s;},function(t,e,n){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=n(37),i=n.n(r),a=n(33),s=n(34),u=n(36),c=n(35),l={DisplaySize:s.a,Toolbar:u.a,Resize:c.a},f=function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t),this.getQuillClass=function(){return n.quill.constructor},this.initializeModules=function(){n.removeModules(),n.modules=n.moduleClasses.map(function(t){return new(l[t]||t)(n)}),n.modules.forEach(function(t){t.onCreate();}),n.onUpdate();},this.onUpdate=function(){n.repositionElements(),n.modules.forEach(function(t){t.onUpdate();});},this.removeModules=function(){n.modules.forEach(function(t){t.onDestroy();}),n.modules=[];},this.handleClick=function(t){if(t.target&&t.target.tagName&&"IMG"===t.target.tagName.toUpperCase()){if(n.img===t.target)return;n.img&&n.hide(),n.show(t.target);}else n.img&&n.hide();},this.show=function(t){n.img=t,n.showOverlay(),n.initializeModules();},this.showOverlay=function(){n.overlay&&n.hideOverlay(),n.quill.setSelection(null),n.setUserSelect("none"),document.addEventListener("keyup",n.checkImage,!0),n.quill.root.addEventListener("input",n.checkImage,!0),n.overlay=document.createElement("div"),Object.assign(n.overlay.style,n.options.overlayStyles),n.quill.root.parentNode.appendChild(n.overlay),n.repositionElements();},this.hideOverlay=function(){n.overlay&&(n.quill.root.parentNode.removeChild(n.overlay),n.overlay=void 0,document.removeEventListener("keyup",n.checkImage),n.quill.root.removeEventListener("input",n.checkImage),n.setUserSelect(""));},this.repositionElements=function(){if(n.overlay&&n.img){var t=n.quill.root.parentNode,e=n.img.getBoundingClientRect(),o=t.getBoundingClientRect();Object.assign(n.overlay.style,{left:e.left-o.left-1+t.scrollLeft+"px",top:e.top-o.top+t.scrollTop+"px",width:e.width+"px",height:e.height+"px"});}},this.hide=function(){n.hideOverlay(),n.removeModules(),n.img=void 0;},this.setUserSelect=function(t){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach(function(e){n.quill.root.style[e]=t,document.documentElement.style[e]=t;});},this.checkImage=function(t){n.img&&(46!=t.keyCode&&8!=t.keyCode||n.getQuillClass().find(n.img).deleteAt(0),n.hide());},this.quill=e;var s=!1;r.modules&&(s=r.modules.slice()),this.options=i()({},r,a.a),s!==!1&&(this.options.modules=s),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1),this.quill.root.addEventListener("scroll",this.hide,!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,this.modules=[];};e.default=f;},function(t,e,n){function o(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1]);}}var r=n(66),i=n(67),a=n(68),s=n(69),u=n(70);o.prototype.clear=r,o.prototype.delete=i,o.prototype.get=a,o.prototype.has=s,o.prototype.set=u,t.exports=o;},function(t,e,n){function o(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1]);}}var r=n(80),i=n(81),a=n(82),s=n(83),u=n(84);o.prototype.clear=r,o.prototype.delete=i,o.prototype.get=a,o.prototype.has=s,o.prototype.set=u,t.exports=o;},function(t,e,n){function o(t){var e=this.__data__=new r(t);this.size=e.size;}var r=n(3),i=n(92),a=n(93),s=n(94),u=n(95),c=n(96);o.prototype.clear=i,o.prototype.delete=a,o.prototype.get=s,o.prototype.has=u,o.prototype.set=c,t.exports=o;},function(t,e,n){var o=n(1),r=o.Uint8Array;t.exports=r;},function(t,e,n){function o(t,e){var n=a(t),o=!n&&i(t),l=!n&&!o&&s(t),p=!n&&!o&&!l&&c(t),d=n||o||l||p,h=d?r(t.length,String):[],y=h.length;for(var v in t)!e&&!f.call(t,v)||d&&("length"==v||l&&("offset"==v||"parent"==v)||p&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||u(v,y))||h.push(v);return h}var r=n(53),i=n(27),a=n(28),s=n(29),u=n(24),c=n(31),l=Object.prototype,f=l.hasOwnProperty;t.exports=o;},function(t,e,n){function o(t,e,n){var o=t[e];s.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n);}var r=n(10),i=n(8),a=Object.prototype,s=a.hasOwnProperty;t.exports=o;},function(t,e,n){var o=n(0),r=Object.create,i=function(){function t(){}return function(e){if(!o(e))return {};if(r)return r(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i;},function(t,e,n){var o=n(62),r=o();t.exports=r;},function(t,e,n){function o(t){return i(t)&&r(t)==a}var r=n(5),i=n(2),a="[object Arguments]";t.exports=o;},function(t,e,n){function o(t){return !(!a(t)||i(t))&&(r(t)?d:u).test(s(t))}var r=n(13),i=n(74),a=n(0),s=n(97),u=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,f=c.toString,p=l.hasOwnProperty,d=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=o;},function(t,e,n){function o(t){return a(t)&&i(t.length)&&!!s[r(t)]}var r=n(5),i=n(30),a=n(2),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,t.exports=o;},function(t,e,n){function o(t){if(!r(t))return a(t);var e=i(t),n=[];for(var o in t)("constructor"!=o||!e&&u.call(t,o))&&n.push(o);return n}var r=n(0),i=n(25),a=n(85),s=Object.prototype,u=s.hasOwnProperty;t.exports=o;},function(t,e,n){function o(t,e,n,o,g,x,m){var _=t[n],j=e[n],w=m.get(j);if(w)return void r(t,n,w);var O=x?x(_,j,n+"",t,e,m):void 0,S=void 0===O;if(S){var A=l(j),E=!A&&p(j),z=!A&&!E&&v(j);O=j,A||E||z?l(_)?O=_:f(_)?O=s(_):E?(S=!1,O=i(j,!0)):z?(S=!1,O=a(j,!0)):O=[]:y(j)||c(j)?(O=_,c(_)?O=b(_):(!h(_)||o&&d(_))&&(O=u(j))):S=!1;}S&&(m.set(j,O),g(O,j,o,x,m),m.delete(j)),r(t,n,O);}var r=n(18),i=n(56),a=n(57),s=n(58),u=n(71),c=n(27),l=n(28),f=n(99),p=n(29),d=n(13),h=n(0),y=n(100),v=n(31),b=n(103);t.exports=o;},function(t,e,n){var o=n(98),r=n(21),i=n(26),a=r?function(t,e){return r(t,"toString",{configurable:!0,enumerable:!1,value:o(e),writable:!0})}:i;t.exports=a;},function(t,e){function n(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o}t.exports=n;},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n;},function(t,e,n){function o(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}var r=n(42);t.exports=o;},function(t,e,n){(function(t){function o(t,e){if(e)return t.slice();var n=t.length,o=c?c(n):new t.constructor(n);return t.copy(o),o}var r=n(1),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i,u=s?r.Buffer:void 0,c=u?u.allocUnsafe:void 0;t.exports=o;}).call(e,n(14)(t));},function(t,e,n){function o(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var r=n(55);t.exports=o;},function(t,e){function n(t,e){var n=-1,o=t.length;for(e||(e=Array(o));++n<o;)e[n]=t[n];return e}t.exports=n;},function(t,e,n){function o(t,e,n,o){var a=!n;n||(n={});for(var s=-1,u=e.length;++s<u;){var c=e[s],l=o?o(n[c],t[c],c,n,t):void 0;void 0===l&&(l=t[c]),a?i(n,c,l):r(n,c,l);}return n}var r=n(44),i=n(10);t.exports=o;},function(t,e,n){var o=n(1),r=o["__core-js_shared__"];t.exports=r;},function(t,e,n){function o(t){return r(function(e,n){var o=-1,r=n.length,a=r>1?n[r-1]:void 0,s=r>2?n[2]:void 0;for(a=t.length>3&&"function"==typeof a?(r--,a):void 0,s&&i(n[0],n[1],s)&&(a=r<3?void 0:a,r=1),e=Object(e);++o<r;){var u=n[o];u&&t(e,u,o,a);}return e})}var r=n(20),i=n(72);t.exports=o;},function(t,e){function n(t){return function(e,n,o){for(var r=-1,i=Object(e),a=o(e),s=a.length;s--;){var u=a[t?s:++r];if(n(i[u],u,i)===!1)break}return e}}t.exports=n;},function(t,e,n){function o(t,e,n,a,s,u){return i(t)&&i(e)&&(u.set(e,t),r(t,e,void 0,o,u),u.delete(e)),t}var r=n(19),i=n(0);t.exports=o;},function(t,e,n){function o(t){var e=a.call(t,u),n=t[u];try{t[u]=void 0;}catch(t){}var o=s.call(t);return e?t[u]=n:delete t[u],o}var r=n(16),i=Object.prototype,a=i.hasOwnProperty,s=i.toString,u=r?r.toStringTag:void 0;t.exports=o;},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n;},function(t,e,n){function o(){this.__data__=r?r(null):{},this.size=0;}var r=n(7);t.exports=o;},function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n;},function(t,e,n){function o(t){var e=this.__data__;if(r){var n=e[t];return n===i?void 0:n}return s.call(e,t)?e[t]:void 0}var r=n(7),i="__lodash_hash_undefined__",a=Object.prototype,s=a.hasOwnProperty;t.exports=o;},function(t,e,n){function o(t){var e=this.__data__;return r?void 0!==e[t]:a.call(e,t)}var r=n(7),i=Object.prototype,a=i.hasOwnProperty;t.exports=o;},function(t,e,n){function o(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?i:e,this}var r=n(7),i="__lodash_hash_undefined__";t.exports=o;},function(t,e,n){function o(t){return "function"!=typeof t.constructor||a(t)?{}:r(i(t))}var r=n(45),i=n(23),a=n(25);t.exports=o;},function(t,e,n){function o(t,e,n){if(!s(n))return !1;var o=typeof e;return !!("number"==o?i(n)&&a(e,n.length):"string"==o&&e in n)&&r(n[e],t)}var r=n(8),i=n(12),a=n(24),s=n(0);t.exports=o;},function(t,e){function n(t){var e=typeof t;return "string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n;},function(t,e,n){function o(t){return !!i&&i in t}var r=n(60),i=function(){var t=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=o;},function(t,e){function n(){this.__data__=[],this.size=0;}t.exports=n;},function(t,e,n){function o(t){var e=this.__data__,n=r(e,t);return !(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)}var r=n(4),i=Array.prototype,a=i.splice;t.exports=o;},function(t,e,n){function o(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}var r=n(4);t.exports=o;},function(t,e,n){function o(t){return r(this.__data__,t)>-1}var r=n(4);t.exports=o;},function(t,e,n){function o(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}var r=n(4);t.exports=o;},function(t,e,n){function o(){this.size=0,this.__data__={hash:new r,map:new(a||i),string:new r};}var r=n(39),i=n(3),a=n(15);t.exports=o;},function(t,e,n){function o(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}var r=n(6);t.exports=o;},function(t,e,n){function o(t){return r(this,t).get(t)}var r=n(6);t.exports=o;},function(t,e,n){function o(t){return r(this,t).has(t)}var r=n(6);t.exports=o;},function(t,e,n){function o(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}var r=n(6);t.exports=o;},function(t,e){function n(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}t.exports=n;},function(t,e,n){(function(t){var o=n(22),r="object"==typeof e&&e&&!e.nodeType&&e,i=r&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===r,s=a&&o.process,u=function(){try{return s&&s.binding&&s.binding("util")}catch(t){}}();t.exports=u;}).call(e,n(14)(t));},function(t,e){function n(t){return r.call(t)}var o=Object.prototype,r=o.toString;t.exports=n;},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n;},function(t,e,n){function o(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var o=arguments,a=-1,s=i(o.length-e,0),u=Array(s);++a<s;)u[a]=o[e+a];a=-1;for(var c=Array(e+1);++a<e;)c[a]=o[a];return c[e]=n(u),r(t,this,c)}}var r=n(17),i=Math.max;t.exports=o;},function(t,e,n){var o=n(52),r=n(91),i=r(o);t.exports=i;},function(t,e){function n(t){var e=0,n=0;return function(){var a=i(),s=r-(a-n);if(n=a,s>0){if(++e>=o)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var o=800,r=16,i=Date.now;t.exports=n;},function(t,e,n){function o(){this.__data__=new r,this.size=0;}var r=n(3);t.exports=o;},function(t,e){function n(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=n;},function(t,e){function n(t){return this.__data__.get(t)}t.exports=n;},function(t,e){function n(t){return this.__data__.has(t)}t.exports=n;},function(t,e,n){function o(t,e){var n=this.__data__;if(n instanceof r){var o=n.__data__;if(!i||o.length<s-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(o);}return n.set(t,e),this.size=n.size,this}var r=n(3),i=n(15),a=n(40),s=200;t.exports=o;},function(t,e){function n(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return ""}var o=Function.prototype,r=o.toString;t.exports=n;},function(t,e){function n(t){return function(){return t}}t.exports=n;},function(t,e,n){function o(t){return i(t)&&r(t)}var r=n(12),i=n(2);t.exports=o;},function(t,e,n){function o(t){if(!a(t)||r(t)!=s)return !1;var e=i(t);if(null===e)return !0;var n=f.call(e,"constructor")&&e.constructor;return "function"==typeof n&&n instanceof n&&l.call(n)==p}var r=n(5),i=n(23),a=n(2),s="[object Object]",u=Function.prototype,c=Object.prototype,l=u.toString,f=c.hasOwnProperty,p=l.call(Object);t.exports=o;},function(t,e,n){var o=n(19),r=n(61),i=r(function(t,e,n,r){o(t,e,n,r);});t.exports=i;},function(t,e){function n(){return !1}t.exports=n;},function(t,e,n){function o(t){return r(t,i(t))}var r=n(59),i=n(32);t.exports=o;},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>';},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>';},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>';},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this");}catch(t){"object"==typeof window&&(n=window);}t.exports=n;}])});
});var viewSource = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var QuillHtmlSourceModule =
  /** @class */
  function () {
    function QuillHtmlSourceModule(quill, options) {
      if (options === void 0) {
        options = {};
      }

      this.classToolbarButton = 'ql-html';
      this.classEditor = 'ql-html-editor';
      this.showingHtml = false;
      this.quill = quill;
      this.options = options;
      this.container = this.quill.root.parentElement;
      this.toolbar = this.quill.getModule('toolbar');
      this.initToolbar();
      this.initHtmlTextArea();
    }

    QuillHtmlSourceModule.prototype.initToolbar = function () {
      var _this = this; // create toolbar button


      var toolbarEl = this.toolbar.container;
      var buttonContainer = document.createElement('span');
      buttonContainer.setAttribute('class', 'ql-formats');
      buttonContainer.style = 'float: right;margin-right: 0;';
      var button = document.createElement('button');
      button.innerHTML = '<svg version="1.1" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g><path d="m12.309 3.4883v2.207l3.3047 3.3047-3.3047 3.3086v2.2031l5.5117-5.5117z"/><path d="m5.6953 5.6953v-2.207l-5.5156 5.5117 5.5156 5.5117v-2.2031l-3.3086-3.3086z"/><path d="m10.102 6.7969-4.4062 4.4062h2.2031l4.4102-4.4062z"/></g></svg>';
      button.type = 'button';
      button.classList.add(this.classToolbarButton); // event binding

      button.onclick = function (e) {
        e.preventDefault();

        var htmlEditor = _this.container.querySelector('.' + _this.classEditor);

        var htmlTextArea = htmlEditor.querySelector('textarea');
        htmlEditor.style.display = _this.showingHtml ? 'none' : '';

        var textEditor = _this.container.querySelector('.ql-editor');

        textEditor.style.display = _this.showingHtml ? '' : 'none';

        if (_this.showingHtml) {
          textEditor.innerHTML = htmlTextArea.value;
        } else {
          htmlTextArea.value = textEditor.innerHTML;
        }

        _this.showingHtml = !_this.showingHtml;
      }; // append button


      buttonContainer.appendChild(button);
      toolbarEl.appendChild(buttonContainer);
    };
    /**
     * <div class="ql-html-editor">
     *   <textarea class="ql-html-editor-textarea"></textarea>
     * </div>
     */


    QuillHtmlSourceModule.prototype.initHtmlTextArea = function () {
      var htmlTextAreaEditor = this.container.querySelector('.' + this.classEditor);

      if (htmlTextAreaEditor == null) {
        // Textarea
        var txtArea = document.createElement('textarea');
        txtArea.style.cssText = 'width: 100%;margin: 0px;background: rgb(29, 29, 29);box-sizing: border-box;color: rgb(204, 204, 204);font-size: 15px;outline: none;padding: 20px;line-height: 24px;font-family: Consolas, Menlo, Monaco, &quot;Courier New&quot;, monospace;position: absolute;top: 0;bottom: 0;border: none;resize: none;';
        txtArea.classList.add('ql-html'); // Textarea Wrapper (Html Editor)

        var htmlEditor = document.createElement('div');
        htmlEditor.classList.add(this.classEditor);
        htmlEditor.style.cssText = 'position: absolute; height: 100%; width: 100%; display: none;';
        htmlEditor.appendChild(txtArea);
        this.container.appendChild(htmlEditor);
      }
    };

    return QuillHtmlSourceModule;
  }();

  exports.default = QuillHtmlSourceModule;
});
var QuillHtmlSourceButton = viewSource;//
var Quill = window.Quill || quill || quill;
Quill.register('modules/imageUploader', ImageUploader$1);
Quill.register('modules/imageResize', imageResize_min);
Quill.register('modules/htmlSource', QuillHtmlSourceButton);
var script = {
  name: 'VueQuillS3',
  props: {
    value: String,
    width: Number,
    height: Number,
    placeholder: String,
    toolbar: [Object, Array],
    zIndex: [String, Number],
    fullscreen: {
      type: Boolean,
      default: false
    },
    signedParams: {
      type: Object,
      default: function _default() {
        return {
          path: 'news/tepm',
          url: 'https://api.boholight.co/upload/publish'
        };
      }
    },
    syncOutput: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: 'snow'
    },
    hasBorder: Boolean,
    disabled: Boolean,
    imgAccept: String,
    showFullButton: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      content: '',
      isFullscreen: this.fullscreen,
      quill: null,
      Quill: Quill,
      icons: null
    };
  },
  watch: {
    fullscreen: function fullscreen(val) {
      this.isFullscreen = val;
    },
    content: function content(newVal) {
      if (this.quill) {
        var newValHtml = this.quill.clipboard.convert({
          html: newVal
        });

        if (newValHtml && newValHtml !== this._content) {
          this._content = newValHtml;
          this.quill.setContents(newValHtml);
        } else if (!newVal) {
          this.quill.setText('');
        }
      }
    },
    value: function value(newVal) {
      if (this.quill) {
        var newValHtml = this.quill.clipboard.convert({
          html: newVal
        });

        if (newValHtml && newValHtml !== this._content) {
          this._content = newValHtml;
          this.quill.setContents(newValHtml);
        } else if (!newValHtml) {
          this.quill.setText('');
        }
      }
    },
    disabled: function disabled(newVal, oldVal) {
      this.setDisabled(newVal);
    }
  },
  methods: {
    initCustomToolbarIcon: function initCustomToolbarIcon() {
      var _this = this;

      this.icons = Quill.import('ui/icons');
      forEach_1(ICON_SVGS, function (iconValue, iconName) {
        _this.icons[iconName] = iconValue;
      });
    },
    initialize: function initialize() {
      var _this2 = this;

      var quillEditor = this.$refs.quillEditor;
      var quill = new Quill(quillEditor, {
        debug: 'warn',
        modules: {
          table: true,
          imageResize: {},
          imageUploader: {
            upload: function upload(file) {
              return _this2.actImageUploadHandler(file);
            }
          },
          htmlSource: {},
          toolbar: {
            container: this.toolbar || toolbar,
            handlers: {
              table: this.actTableHandler,
              'table-insert-row': this.actTableInsertRowHandler,
              'table-insert-column': this.actTableInsertColumnHandler,
              'table-delete-row': this.actTableDeleteRowHandler,
              'table-delete-column': this.actTableDeleteColumnHandler
            }
          }
        },
        placeholder: this.placeholder || 'Insert text here ...',
        theme: this.theme
      });
      this.quill = quill;
      this.quill.enable(false);

      if (this.value || this.content) {
        var delta = this.value || this.content;

        if (Array.isArray(delta)) {
          this.quill.setContents(delta, 'silent');
        } else {
          var htmlData = this.quill.clipboard.convert({
            html: delta
          });
          this.quill.setContents(htmlData, 'silent');
        }
      }

      if (this.theme === 'snow' && this.showFullButton) {
        this.initFullBtn();
      }

      if (!this.disabled) {
        this.quill.enable(true);
      }

      quill.on('text-change', function (delta, oldDelta, source) {
        var html = _this2.$refs.quillEditor.children[0].innerHTML;
        var quill = _this2.quill;

        var text = _this2.quill.getText();

        if (html === '<p><br></p>') html = '';
        _this2._content = html;

        _this2.$emit('change', {
          html: html,
          text: text,
          quill: quill
        });
      });
      quill.on('selection-change', function (range) {
        if (!range) {
          _this2.$emit('blur', _this2.quill);
        } else {
          _this2.$emit('focus', _this2.quill);
        }
      });
      this.$emit('init', quill, this);
    },
    initFullBtn: function initFullBtn() {
      var _this3 = this;

      var childs = this.$refs.quillEditorBox.children;
      var fullBtn = document.createElement('SPAN');
      fullBtn.className = 'ql-formats ql-resize';
      fullBtn.style = 'float: right;margin-right: 0;';
      var that = this;

      function setSizeBtn() {
        var icon = '';

        if (that.isFullscreen) {
          icon = that.icons.minsize;
        } else {
          icon = that.icons.maxsize;
        }

        fullBtn.innerHTML = '<button type="button" class="ql-fullscreen">' + icon + '</button>';
      }

      setSizeBtn();
      fullBtn.addEventListener('click', function () {
        _this3.isFullscreen = !_this3.isFullscreen;
        setSizeBtn();
      }, false);

      for (var i in childs) {
        if (childs[i].className.indexOf('ql-toolbar') > -1) {
          childs[i].append(fullBtn);
          break;
        }
      }
    },
    setDisabled: function setDisabled(val) {
      this.quill.enable(!val);
    },
    getContent: function getContent(val) {
      return this.quill.container.firstChild.innerHTML;
    },
    actTableHandler: function actTableHandler() {
      this.quill.getModule('table').insertTable(2, 3);
    },
    actTableInsertRowHandler: function actTableInsertRowHandler() {
      this.quill.getModule('table').insertRowBelow();
    },
    actTableInsertColumnHandler: function actTableInsertColumnHandler() {
      this.quill.getModule('table').insertColumnRight();
    },
    actTableDeleteRowHandler: function actTableDeleteRowHandler() {
      this.quill.getModule('table').deleteRow();
    },
    actTableDeleteColumnHandler: function actTableDeleteColumnHandler() {
      this.quill.getModule('table').deleteColumn();
    },
    actImageUploadHandler: function actImageUploadHandler(file) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var type = file.type,
            name = file.name;
        var _this4$signedParams = _this4.signedParams,
            path = _this4$signedParams.path,
            url = _this4$signedParams.url;
        var filePath = path + '/' + name;
        var fileType = type;
        var signedUrl = url;

        try {
          return axios({
            method: 'POST',
            url: signedUrl,
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              filePath: filePath,
              fileType: fileType
            }
          }).then(function (res) {
            var statusHeader = res.status,
                data = res.data;
            if (statusHeader !== 200) reject('Upload failed');
            var signedRequest = data.signedRequest,
                url = data.url,
                status = data.status;
            if (!status) reject('Upload failed');
            axios.put(signedRequest, file, {
              headers: {
                'Content-Type': fileType
              }
            }).then(function (res) {
              if (!res.status) reject('Upload failed');
              resolve(url);
            }).catch(function (error) {
              console.error('Error:', error);
              reject('Upload failed');
            });
          });
        } catch (err) {
          console.error('Error:', error);
          reject('Upload failed');
        }
      });
    }
  },
  mounted: function mounted() {
    this.initCustomToolbarIcon();
    this.initialize();
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "quillEditorBox",
    staticClass: "quill-editor",
    class: {
      'quill-fullscreen': _vm.isFullscreen,
      'quill-no-border': !_vm.hasBorder,
      disabled: _vm.disabled
    },
    style: {
      width: _vm.isFullscreen ? '' : _vm.width + 'px',
      height: _vm.isFullscreen ? '' : _vm.height + 'px',
      zIndex: _vm.zIndex
    }
  }, [_vm._ssrNode("<div></div> <input type=\"file\"" + _vm._ssrAttr("accept", _vm.imgAccept) + " style=\"display: none\">")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-6a46ba08";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var VueQuillS3 = __vue_component__;VueQuillS3.install = function (Vue) {
  Vue.component(VueQuillS3.name, VueQuillS3);
};var components$1=/*#__PURE__*/Object.freeze({__proto__:null,'default':VueQuillS3,VueQuillS3:VueQuillS3});var install = function installVueQuillS3(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,VueQuillS3:VueQuillS3});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;