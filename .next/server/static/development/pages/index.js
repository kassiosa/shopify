module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./pages/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => {
  const {
    0: modalEnable,
    1: setModalEnable
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: modalTitle,
    1: setModalTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: modalDescription,
    1: setModalDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: mobileDisableImage,
    1: setMobileDisableImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: mobileDisableText,
    1: setMobileDisableText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: desktopDisableMenu,
    1: setDesktopDisableMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: desktopDisableImage,
    1: setDesktopDisableImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: desktopDisableKeyboard,
    1: setDesktopDisableKeyboard
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: desktopDisableText,
    1: setDesktopDisableText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    title: "Example app"
  }, __jsx("div", {
    className: "app"
  }, __jsx("div", {
    className: "form-container"
  }, __jsx("div", {
    className: "modal-config"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Enable modal",
    checked: modalEnable
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Modal title",
    value: modalTitle,
    multiline: 3
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Modal desc",
    value: modalDescription,
    multiline: 3
  })), __jsx("div", {
    className: "devices-config"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
    variation: "strong"
  }, "Good evening, Dominic."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Disable mobile image",
    checked: mobileDisableImage,
    onChange: newChecked => {
      setMobileDisableImage(newChecked);
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Disable mobile text",
    checked: mobileDisableText,
    onChange: newChecked => {
      setMobileDisableText(newChecked);
    }
  }), __jsx("p", null, "Op\xE7\xF5es de controle para desktop"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Disable desktop menu",
    checked: desktopDisableMenu,
    onChange: newChecked => {
      setDesktopDisableMenu(newChecked);
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Disable desktop image",
    checked: desktopDisableImage
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Disable desktop keyboard",
    checked: desktopDisableKeyboard
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Disable desktop text",
    checked: desktopDisableText
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "large"
  }, "Save")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kassio/Apps/sample-embedded-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map