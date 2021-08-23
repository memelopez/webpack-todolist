/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Main styles */\nbody {\n  background-color: rgb(218, 218, 218);\n}\n\n.blackBar {\n  background-color: black;\n  height: 20px;\n  width: 100%;\n}\n\n.bBFooter {\n  position: absolute;\n  bottom: 0;\n}\n\n.appItem {\n  height: 50px;\n  background-color: white;\n}\n\n.btmDiv {\n  height: 65px;\n}\n\n.appItemEdit {\n  height: 50px;\n  background-color: lightyellow;\n}\n\n.noToDos {\n  color: rgb(148, 148, 64);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":["/* Main styles */\nbody {\n  background-color: rgb(218, 218, 218);\n}\n\n.blackBar {\n  background-color: black;\n  height: 20px;\n  width: 100%;\n}\n\n.bBFooter {\n  position: absolute;\n  bottom: 0;\n}\n\n.appItem {\n  height: 50px;\n  background-color: white;\n}\n\n.btmDiv {\n  height: 65px;\n}\n\n.appItemEdit {\n  height: 50px;\n  background-color: lightyellow;\n}\n\n.noToDos {\n  color: rgb(148, 148, 64);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/checkboxes.js":
/*!***************************!*\
  !*** ./src/checkboxes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");
//  Module: related to the status updates with completed checkboxes


const taskCompleted = (position2chage, value) => {
  // Gets list from local storage
  const toDos = _store__WEBPACK_IMPORTED_MODULE_0__.default.getTasks();

  const task2modify = toDos[position2chage];
  task2modify.completed = value;
  toDos[position2chage] = task2modify;

  // Set items to storage
  _store__WEBPACK_IMPORTED_MODULE_0__.default.setTasks(toDos);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCompleted);

/***/ }),

/***/ "./src/clearCompleted.js":
/*!*******************************!*\
  !*** ./src/clearCompleted.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearCompleted)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _isCompleted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isCompleted */ "./src/isCompleted.js");
// Module for clearing completed tasks method




function clearCompleted() {
  // gets todos from local storage
  const tasks = _store__WEBPACK_IMPORTED_MODULE_0__.default.getTasks();

  // create new array from filter()
  const uncompletedTasks = tasks.filter(_isCompleted__WEBPACK_IMPORTED_MODULE_1__.default);

  _store__WEBPACK_IMPORTED_MODULE_0__.default.setTasks(uncompletedTasks);
}

/***/ }),

/***/ "./src/isCompleted.js":
/*!****************************!*\
  !*** ./src/isCompleted.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnsUncompleted)
/* harmony export */ });
//  Module

function returnsUncompleted(task) {
  return !task.completed;
}

/***/ }),

/***/ "./src/removeTask.js":
/*!***************************!*\
  !*** ./src/removeTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeCompleted)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");
// Module for removing task



function removeCompleted(index) {
  // gets todos from local storage
  const todos = _store__WEBPACK_IMPORTED_MODULE_0__.default.getTasks();

  todos.splice(index, 1);

  _store__WEBPACK_IMPORTED_MODULE_0__.default.setTasks(todos);
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Store)
/* harmony export */ });
// Store Class: Encapsulates de locacl storage
class Store {
  // gets tasks from storage and returns an array of objects
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static addTask(task) {
    const tasks = this.getTasks();
    tasks.push(task);
    this.setTasks(tasks);
  }

  // index - saves the total of tasks created ever
  static getIndexTotal() {
    let total;
    if (localStorage.getItem('index') === null) {
      total = 0;
    } else {
      total = JSON.parse(localStorage.getItem('index'));
    }

    return total;
  }

  // increments the index in storage and saves it again
  static setsIndexTotalPlusOne() {
    let total = this.getIndexTotal();
    total += 1;
    localStorage.setItem('index', JSON.stringify(total));
  }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
// Task Class: Represents a to-do
class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  task2string() {
    const srt = `Index: ${this.index} - Description: ${this.description} - Completed: ${this.completed} --`;
    return srt;
  }
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _checkboxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkboxes */ "./src/checkboxes.js");
/* harmony import */ var _removeTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeTask */ "./src/removeTask.js");
/* harmony import */ var _updateTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateTask */ "./src/updateTask.js");
/* harmony import */ var _clearCompleted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearCompleted */ "./src/clearCompleted.js");
// UI Class: Handles UI Tasks







class UI {
  static addApp() {
    this.addTitle();
    this.addForm();
    this.addEmptyUL();
    const todos = _store__WEBPACK_IMPORTED_MODULE_0__.default.getTasks();
    this.addTasksUI(todos);
    this.addbottombtn();
  }

  static addTitle() {
    const appDiv = document.querySelector('#appDiv');

    const div4title = document.createElement('DIV');
    div4title.className = 'd-flex justify-content-start align-items-center border-bottom border-2 px-2 appItem';

    const title = document.createElement('p');
    title.className = 'fs-5 m-0';
    title.innerText = "Today's To Do";

    const icon = document.createElement('ICON');
    icon.className = 'fas fa-sync-alt ms-auto p-2';

    div4title.appendChild(title);
    div4title.appendChild(icon);

    appDiv.appendChild(div4title);
  }

  static addForm() {
    const appDiv = document.querySelector('#appDiv');

    const div4form = document.createElement('DIV');
    const form = document.createElement('FORM');
    form.className = 'd-flex justify-content-start align-items-center border-bottom border-2 px-2 appItem';
    form.action = 'submit';
    form.id = 'addTaskForm';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'taskDesc';
    input.placeholder = 'Add to your list...';
    input.className = 'form-control border-0 fst-italic p-0';

    const icon = document.createElement('ICON');
    icon.className = 'fas fa-sign-in-alt ms-auto p-2';

    const aSubmit = document.createElement('A');
    aSubmit.setAttribute('id', 'clickEnterIcon');

    form.appendChild(input);
    aSubmit.appendChild(icon);
    form.appendChild(aSubmit);
    div4form.appendChild(form);

    appDiv.appendChild(div4form);
  }

  static addEmptyUL() {
    const appDiv = document.querySelector('#appDiv');

    const div4list = document.createElement('DIV');
    const list = document.createElement('UL');
    list.id = 'task-list';
    list.className = 'p-0 m-0';
    div4list.appendChild(list);

    appDiv.appendChild(div4list);
  }

  static addTasksUI(tasks) {
    // Iterates over array tasks to populate HTML list
    if (tasks.length === 0) {
      this.addEmptyToDoMessage();
    } else {
      tasks.forEach((task) => this.addTaskToList(task));
    }
  }

  static addEmptyToDoMessage() {
    const list = document.querySelector('#task-list');

    const item = document.createElement('LI'); // creates list item
    item.className = 'd-flex justify-content-center align-items-center border-bottom border-2 px-2 appItem';

    const p = document.createElement('P');
    p.className = 'm-0 p-0 noToDos';
    p.innerHTML = "No to-do's right now";

    item.appendChild(p);
    list.appendChild(item);
  }

  static addTaskToList(task) {
    const list = document.querySelector('#task-list');

    const item = document.createElement('LI'); // creates list item
    item.className = 'd-flex justify-content-around align-items-center border-bottom border-2 px-2 appItem';

    // creates div for normal view
    const divNormal = document.createElement('DIV');
    divNormal.className = 'd-flex align-items-center normalView';

    const checkbox = document.createElement('INPUT'); // creates checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.completed;
    checkbox.className = 'form-check-label p-2';
    divNormal.appendChild(checkbox); // appends checkbox to item

    const text = document.createElement('P'); // creates p
    text.textContent = task.description;
    text.className = 'm-0 p-2';
    if (task.completed === true) {
      text.classList.add('text-decoration-line-through');
    }
    divNormal.appendChild(text); // appends p to item

    // Create div for edit view
    const divEdit = document.createElement('DIV');
    divEdit.className = 'd-none flex-fill align-items-center editView';

    const inputEdit = document.createElement('INPUT');
    inputEdit.setAttribute('type', 'text');
    inputEdit.className = 'form-control border-0 p-0';
    inputEdit.value = task.description;

    divEdit.appendChild(inputEdit);

    // Creates div for icons
    const div4Icons = document.createElement('DIV');
    div4Icons.className = 'ms-auto';

    const iconEdit = document.createElement('I'); // creates edit icon
    iconEdit.className = 'fas fa-ellipsis-v p-2 edtIcn';
    div4Icons.appendChild(iconEdit); // appends edit icon to item

    const iconAccept = document.createElement('I'); // creates accept icon
    iconAccept.className = 'fas fa-check-circle p-2 d-none acceptIcn';
    div4Icons.appendChild(iconAccept); // appends accpet icon to item

    const iconRemove = document.createElement('I'); // creates remove icon
    iconRemove.className = 'fas fa-trash p-2 d-none removeIcn';
    div4Icons.appendChild(iconRemove); // appends remove icon to item

    item.appendChild(divNormal);
    item.appendChild(divEdit);
    item.appendChild(div4Icons);

    list.appendChild(item); // appends item to list
  }

  static addbottombtn() {
    const appDiv = document.querySelector('#appDiv');

    const btmDiv = document.createElement('DIV');
    btmDiv.className = 'd-flex justify-content-center align-items-center border bg-light btmDiv';

    const pBtm = document.createElement('P');
    pBtm.textContent = 'Clear all completed';
    pBtm.className = 'm-0 btmText';
    pBtm.id = 'pBtm';

    btmDiv.appendChild(pBtm);
    appDiv.appendChild(btmDiv);
  }

  static addTaskStore(description) {
    // gets index from storage
    const index = _store__WEBPACK_IMPORTED_MODULE_0__.default.getIndexTotal();
    // instantiates a new task
    const task = new _task__WEBPACK_IMPORTED_MODULE_1__.default(description, false, index);

    // Add task to local storage
    _store__WEBPACK_IMPORTED_MODULE_0__.default.addTask(task);
    _store__WEBPACK_IMPORTED_MODULE_0__.default.setsIndexTotalPlusOne();

    // Clear description input
    this.clearField();
  }

  static clearField() {
    document.querySelector('#taskDesc').value = '';
  }

  static taskCompleted(index, value) {
    (0,_checkboxes__WEBPACK_IMPORTED_MODULE_2__.default)(index, value);
  }

  static changeLiToEditMode(li) {
    let classesLi = li.className;
    classesLi = classesLi.replace('appItem', 'appItemEdit');
    li.className = classesLi;
    const childrenLi = li.children;

    // change clases of divs
    const normalView = childrenLi[0];
    let classesNV = normalView.className;
    classesNV = classesNV.replace('d-flex', 'd-none');
    normalView.className = classesNV;

    const editView = childrenLi[1];
    let classesE = editView.className;
    classesE = classesE.replace('d-none', 'd-flex');
    editView.className = classesE;

    // show appropriate icons in edit view
    const divIcons = childrenLi[2];
    const icons = divIcons.children;
    icons[0].classList.add('d-none');
    this.changeClassToElement(icons[1], 'd-none', '');
    this.changeClassToElement(icons[2], 'd-none', '');

    // sets focus con the input to edit
    const inputEdit = editView.querySelector('input');
    inputEdit.id = 'inputEdit';
    inputEdit.focus();
  }

  static changeClassToElement(item, oldClass, newClass) {
    let classesItem = item.className;
    classesItem = classesItem.replace(oldClass, newClass);
    item.className = classesItem;
  }

  static removeTask(index) {
    (0,_removeTask__WEBPACK_IMPORTED_MODULE_3__.default)(index);
  }

  static updateTask(index, newDesc) {
    (0,_updateTask__WEBPACK_IMPORTED_MODULE_4__.default)(index, newDesc);
  }

  static clearCompleted() {
    (0,_clearCompleted__WEBPACK_IMPORTED_MODULE_5__.default)();
  }
}

/***/ }),

/***/ "./src/updateTask.js":
/*!***************************!*\
  !*** ./src/updateTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");
// Module for updating task



function updateTask(index, newDesc) {
  // gets todos from local storage
  const todos = _store__WEBPACK_IMPORTED_MODULE_0__.default.getTasks();
  // sets new description in respective index
  todos[index].description = newDesc;
  // sets new todos to storage
  _store__WEBPACK_IMPORTED_MODULE_0__.default.setTasks(todos);
}

/***/ }),

/***/ "./src/validateDescription.js":
/*!************************************!*\
  !*** ./src/validateDescription.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateDescription)
/* harmony export */ });
//  Module: validates the text from user
function validateDescription(text) {
  if (text === null || text === '') {
    return false;
  }
  return true;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _validateDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateDescription */ "./src/validateDescription.js");




// When content loads
document.addEventListener('DOMContentLoaded', _ui__WEBPACK_IMPORTED_MODULE_1__.default.addApp());

// Event: when form is submitted
document.querySelector('#addTaskForm').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if (!(0,_validateDescription__WEBPACK_IMPORTED_MODULE_2__.default)(taskDescription)) {
    console.log('Error - empty description');
  } else {
    // Add task
    _ui__WEBPACK_IMPORTED_MODULE_1__.default.addTaskStore(taskDescription);
    // reloads page
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});

// Event: when icon is clicked to add task
document.querySelector('#clickEnterIcon').addEventListener('click', () => {
  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if (!(0,_validateDescription__WEBPACK_IMPORTED_MODULE_2__.default)(taskDescription)) {
    console.log('Error - empty description');
  } else {
    // Add task
    _ui__WEBPACK_IMPORTED_MODULE_1__.default.addTaskStore(taskDescription);

    // reloads page
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});

// Event: when checkboxes are clicked or 'changed'
document.querySelector('#task-list').addEventListener('change', (e) => {
  // checks if this is trigerring for the correct element
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    // Gets the state of the checked checkbox
    const checkboxState = e.target.checked;

    const ulList = document.querySelector('#task-list');
    const itemChecked = e.target.parentElement.parentElement;
    const nodes = Array.from(ulList.children);
    const index = nodes.indexOf(itemChecked);

    _ui__WEBPACK_IMPORTED_MODULE_1__.default.taskCompleted(index, checkboxState);

    // Reload page
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});

// Event: editing and removing
document.querySelector('#task-list').addEventListener('click', (e) => {
  const classesIcn = e.target.className;
  const classesArr = classesIcn.split(' ');

  const li = e.target.parentElement.parentElement;
  const ulList = document.querySelector('#task-list');
  const nodes = Array.from(ulList.children);
  const index = nodes.indexOf(li);

  // when the three dots icon gets clicked
  if (classesArr.indexOf('edtIcn') !== -1) {
    _ui__WEBPACK_IMPORTED_MODULE_1__.default.changeLiToEditMode(li);
  }

  // when the check icon gets clicked to UPDATE
  if (classesArr.indexOf('removeIcn') !== -1) {
    _ui__WEBPACK_IMPORTED_MODULE_1__.default.removeTask(index);

    // Reload page
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  // when the the trash icon gets clicked to REMOVE
  if (classesArr.indexOf('acceptIcn') !== -1) {
    const newDesc = document.querySelector('#inputEdit').value;
    _ui__WEBPACK_IMPORTED_MODULE_1__.default.updateTask(index, newDesc);

    // Reload page
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});

document.querySelector('#pBtm').addEventListener('click', () => {
  _ui__WEBPACK_IMPORTED_MODULE_1__.default.clearCompleted();

  // Reload page
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9zcmMvY2hlY2tib3hlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vc3JjL2NsZWFyQ29tcGxldGVkLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9zcmMvaXNDb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL3NyYy9yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL3NyYy91cGRhdGVUYXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9zcmMvdmFsaWRhdGVEZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxtRUFBbUUseUNBQXlDLEdBQUcsZUFBZSw0QkFBNEIsaUJBQWlCLGdCQUFnQixHQUFHLGVBQWUsdUJBQXVCLGNBQWMsR0FBRyxjQUFjLGlCQUFpQiw0QkFBNEIsR0FBRyxhQUFhLGlCQUFpQixHQUFHLGtCQUFrQixpQkFBaUIsa0NBQWtDLEdBQUcsY0FBYyw2QkFBNkIsR0FBRyxTQUFTLHVGQUF1RixNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLG1EQUFtRCx5Q0FBeUMsR0FBRyxlQUFlLDRCQUE0QixpQkFBaUIsZ0JBQWdCLEdBQUcsZUFBZSx1QkFBdUIsY0FBYyxHQUFHLGNBQWMsaUJBQWlCLDRCQUE0QixHQUFHLGFBQWEsaUJBQWlCLEdBQUcsa0JBQWtCLGlCQUFpQixrQ0FBa0MsR0FBRyxjQUFjLDZCQUE2QixHQUFHLHFCQUFxQjtBQUMxc0M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLDBHQUEwRyx3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUUvZiwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HOzs7O0FBSW5HOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7O0FBRXBDLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxtRkFBTyxJQUFJLDBGQUFjLEdBQUcsMEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0Q7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDNEI7O0FBRTVCO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQWM7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsb0RBQWM7QUFDaEI7O0FBRUEsaUVBQWUsYUFBYSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjVCOztBQUU0QjtBQUNtQjs7QUFFaEM7QUFDZjtBQUNBLGdCQUFnQixvREFBYzs7QUFFOUI7QUFDQSx3Q0FBd0MsaURBQWtCOztBQUUxRCxFQUFFLG9EQUFjO0FBQ2hCLEM7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUU0Qjs7QUFFYjtBQUNmO0FBQ0EsZ0JBQWdCLG9EQUFjOztBQUU5Qjs7QUFFQSxFQUFFLG9EQUFjO0FBQ2hCLEM7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLFdBQVcsa0JBQWtCLGlCQUFpQixnQkFBZ0IsZUFBZTtBQUN2RztBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUM0QjtBQUNGO0FBQ2U7QUFDSDtBQUNBO0FBQ1E7O0FBRS9CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQWM7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRDtBQUNBLG9DQUFvQzs7QUFFcEMsbURBQW1EO0FBQ25EO0FBQ0Esc0NBQXNDOztBQUV0QyxtREFBbUQ7QUFDbkQ7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlEQUFtQjtBQUNyQztBQUNBLHFCQUFxQiwwQ0FBSTs7QUFFekI7QUFDQSxJQUFJLG1EQUFhO0FBQ2pCLElBQUksaUVBQTJCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBYTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQVU7QUFDZDs7QUFFQTtBQUNBLElBQUksb0RBQVU7QUFDZDs7QUFFQTtBQUNBLElBQUksd0RBQWM7QUFDbEI7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNuUEE7O0FBRTRCOztBQUViO0FBQ2Y7QUFDQSxnQkFBZ0Isb0RBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBYztBQUNoQixDOzs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNDO0FBQ2tDOztBQUV4RDtBQUNBLDhDQUE4QywrQ0FBUzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sNkRBQW1CO0FBQzFCO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSxxREFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZEQUFtQjtBQUMxQjtBQUNBLEdBQUc7QUFDSDtBQUNBLElBQUkscURBQWU7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxzREFBZ0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwyREFBcUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBLElBQUksbURBQWE7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQWE7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsdURBQWlCOztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNYWluIHN0eWxlcyAqL1xcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcbn1cXG5cXG4uYmxhY2tCYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJCRm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLmFwcEl0ZW0ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5idG1EaXYge1xcbiAgaGVpZ2h0OiA2NXB4O1xcbn1cXG5cXG4uYXBwSXRlbUVkaXQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblxcbi5ub1RvRG9zIHtcXG4gIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDY0KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBNYWluIHN0eWxlcyAqL1xcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcbn1cXG5cXG4uYmxhY2tCYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJCRm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLmFwcEl0ZW0ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5idG1EaXYge1xcbiAgaGVpZ2h0OiA2NXB4O1xcbn1cXG5cXG4uYXBwSXRlbUVkaXQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblxcbi5ub1RvRG9zIHtcXG4gIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDY0KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vICBNb2R1bGU6IHJlbGF0ZWQgdG8gdGhlIHN0YXR1cyB1cGRhdGVzIHdpdGggY29tcGxldGVkIGNoZWNrYm94ZXNcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuY29uc3QgdGFza0NvbXBsZXRlZCA9IChwb3NpdGlvbjJjaGFnZSwgdmFsdWUpID0+IHtcbiAgLy8gR2V0cyBsaXN0IGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCB0b0RvcyA9IFN0b3JlLmdldFRhc2tzKCk7XG5cbiAgY29uc3QgdGFzazJtb2RpZnkgPSB0b0Rvc1twb3NpdGlvbjJjaGFnZV07XG4gIHRhc2sybW9kaWZ5LmNvbXBsZXRlZCA9IHZhbHVlO1xuICB0b0Rvc1twb3NpdGlvbjJjaGFnZV0gPSB0YXNrMm1vZGlmeTtcblxuICAvLyBTZXQgaXRlbXMgdG8gc3RvcmFnZVxuICBTdG9yZS5zZXRUYXNrcyh0b0Rvcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrQ29tcGxldGVkOyIsIi8vIE1vZHVsZSBmb3IgY2xlYXJpbmcgY29tcGxldGVkIHRhc2tzIG1ldGhvZFxuXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgcmV0dXJuc1VuY29tcGxldGVkIGZyb20gJy4vaXNDb21wbGV0ZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbXBsZXRlZCgpIHtcbiAgLy8gZ2V0cyB0b2RvcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgdGFza3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuXG4gIC8vIGNyZWF0ZSBuZXcgYXJyYXkgZnJvbSBmaWx0ZXIoKVxuICBjb25zdCB1bmNvbXBsZXRlZFRhc2tzID0gdGFza3MuZmlsdGVyKHJldHVybnNVbmNvbXBsZXRlZCk7XG5cbiAgU3RvcmUuc2V0VGFza3ModW5jb21wbGV0ZWRUYXNrcyk7XG59IiwiLy8gIE1vZHVsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5zVW5jb21wbGV0ZWQodGFzaykge1xuICByZXR1cm4gIXRhc2suY29tcGxldGVkO1xufSIsIi8vIE1vZHVsZSBmb3IgcmVtb3ZpbmcgdGFza1xuXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZChpbmRleCkge1xuICAvLyBnZXRzIHRvZG9zIGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCB0b2RvcyA9IFN0b3JlLmdldFRhc2tzKCk7XG5cbiAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcblxuICBTdG9yZS5zZXRUYXNrcyh0b2Rvcyk7XG59IiwiLy8gU3RvcmUgQ2xhc3M6IEVuY2Fwc3VsYXRlcyBkZSBsb2NhY2wgc3RvcmFnZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICAvLyBnZXRzIHRhc2tzIGZyb20gc3RvcmFnZSBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzXG4gIHN0YXRpYyBnZXRUYXNrcygpIHtcbiAgICBsZXQgdGFza3M7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpID09PSBudWxsKSB7XG4gICAgICB0YXNrcyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIHN0YXRpYyBzZXRUYXNrcyh0YXNrcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tzKCk7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB0aGlzLnNldFRhc2tzKHRhc2tzKTtcbiAgfVxuXG4gIC8vIGluZGV4IC0gc2F2ZXMgdGhlIHRvdGFsIG9mIHRhc2tzIGNyZWF0ZWQgZXZlclxuICBzdGF0aWMgZ2V0SW5kZXhUb3RhbCgpIHtcbiAgICBsZXQgdG90YWw7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmRleCcpID09PSBudWxsKSB7XG4gICAgICB0b3RhbCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdGFsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kZXgnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgLy8gaW5jcmVtZW50cyB0aGUgaW5kZXggaW4gc3RvcmFnZSBhbmQgc2F2ZXMgaXQgYWdhaW5cbiAgc3RhdGljIHNldHNJbmRleFRvdGFsUGx1c09uZSgpIHtcbiAgICBsZXQgdG90YWwgPSB0aGlzLmdldEluZGV4VG90YWwoKTtcbiAgICB0b3RhbCArPSAxO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmRleCcsIEpTT04uc3RyaW5naWZ5KHRvdGFsKSk7XG4gIH1cbn0iLCIvLyBUYXNrIENsYXNzOiBSZXByZXNlbnRzIGEgdG8tZG9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICB0YXNrMnN0cmluZygpIHtcbiAgICBjb25zdCBzcnQgPSBgSW5kZXg6ICR7dGhpcy5pbmRleH0gLSBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufSAtIENvbXBsZXRlZDogJHt0aGlzLmNvbXBsZXRlZH0gLS1gO1xuICAgIHJldHVybiBzcnQ7XG4gIH1cbn0iLCIvLyBVSSBDbGFzczogSGFuZGxlcyBVSSBUYXNrc1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCB0YXNrQ29tcGxldGVkIGZyb20gJy4vY2hlY2tib3hlcyc7XG5pbXBvcnQgcmVtb3ZlVGFzayBmcm9tICcuL3JlbW92ZVRhc2snO1xuaW1wb3J0IHVwZGF0ZVRhc2sgZnJvbSAnLi91cGRhdGVUYXNrJztcbmltcG9ydCBjbGVhckNvbXBsZXRlZCBmcm9tICcuL2NsZWFyQ29tcGxldGVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgYWRkQXBwKCkge1xuICAgIHRoaXMuYWRkVGl0bGUoKTtcbiAgICB0aGlzLmFkZEZvcm0oKTtcbiAgICB0aGlzLmFkZEVtcHR5VUwoKTtcbiAgICBjb25zdCB0b2RvcyA9IFN0b3JlLmdldFRhc2tzKCk7XG4gICAgdGhpcy5hZGRUYXNrc1VJKHRvZG9zKTtcbiAgICB0aGlzLmFkZGJvdHRvbWJ0bigpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRpdGxlKCkge1xuICAgIGNvbnN0IGFwcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBEaXYnKTtcblxuICAgIGNvbnN0IGRpdjR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdjR0aXRsZS5jbGFzc05hbWUgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItMiBweC0yIGFwcEl0ZW0nO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ2ZzLTUgbS0wJztcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIlRvZGF5J3MgVG8gRG9cIjtcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJQ09OJyk7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXN5bmMtYWx0IG1zLWF1dG8gcC0yJztcblxuICAgIGRpdjR0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZGl2NHRpdGxlLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgYXBwRGl2LmFwcGVuZENoaWxkKGRpdjR0aXRsZSk7XG4gIH1cblxuICBzdGF0aWMgYWRkRm9ybSgpIHtcbiAgICBjb25zdCBhcHBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwRGl2Jyk7XG5cbiAgICBjb25zdCBkaXY0Zm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdGT1JNJyk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItMiBweC0yIGFwcEl0ZW0nO1xuICAgIGZvcm0uYWN0aW9uID0gJ3N1Ym1pdCc7XG4gICAgZm9ybS5pZCA9ICdhZGRUYXNrRm9ybSc7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC5pZCA9ICd0YXNrRGVzYyc7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIHRvIHlvdXIgbGlzdC4uLic7XG4gICAgaW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCBib3JkZXItMCBmc3QtaXRhbGljIHAtMCc7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSUNPTicpO1xuICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhcyBmYS1zaWduLWluLWFsdCBtcy1hdXRvIHAtMic7XG5cbiAgICBjb25zdCBhU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQScpO1xuICAgIGFTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdjbGlja0VudGVySWNvbicpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgYVN1Ym1pdC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFTdWJtaXQpO1xuICAgIGRpdjRmb3JtLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgYXBwRGl2LmFwcGVuZENoaWxkKGRpdjRmb3JtKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRFbXB0eVVMKCkge1xuICAgIGNvbnN0IGFwcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBEaXYnKTtcblxuICAgIGNvbnN0IGRpdjRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1VMJyk7XG4gICAgbGlzdC5pZCA9ICd0YXNrLWxpc3QnO1xuICAgIGxpc3QuY2xhc3NOYW1lID0gJ3AtMCBtLTAnO1xuICAgIGRpdjRsaXN0LmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgYXBwRGl2LmFwcGVuZENoaWxkKGRpdjRsaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrc1VJKHRhc2tzKSB7XG4gICAgLy8gSXRlcmF0ZXMgb3ZlciBhcnJheSB0YXNrcyB0byBwb3B1bGF0ZSBIVE1MIGxpc3RcbiAgICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmFkZEVtcHR5VG9Eb01lc3NhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4gdGhpcy5hZGRUYXNrVG9MaXN0KHRhc2spKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkRW1wdHlUb0RvTWVzc2FnZSgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJyk7IC8vIGNyZWF0ZXMgbGlzdCBpdGVtXG4gICAgaXRlbS5jbGFzc05hbWUgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLTIgcHgtMiBhcHBJdGVtJztcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgcC5jbGFzc05hbWUgPSAnbS0wIHAtMCBub1RvRG9zJztcbiAgICBwLmlubmVySFRNTCA9IFwiTm8gdG8tZG8ncyByaWdodCBub3dcIjtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQocCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrVG9MaXN0KHRhc2spIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJyk7IC8vIGNyZWF0ZXMgbGlzdCBpdGVtXG4gICAgaXRlbS5jbGFzc05hbWUgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmQgYWxpZ24taXRlbXMtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLTIgcHgtMiBhcHBJdGVtJztcblxuICAgIC8vIGNyZWF0ZXMgZGl2IGZvciBub3JtYWwgdmlld1xuICAgIGNvbnN0IGRpdk5vcm1hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdk5vcm1hbC5jbGFzc05hbWUgPSAnZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBub3JtYWxWaWV3JztcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKTsgLy8gY3JlYXRlcyBjaGVja2JveFxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcbiAgICBjaGVja2JveC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCBwLTInO1xuICAgIGRpdk5vcm1hbC5hcHBlbmRDaGlsZChjaGVja2JveCk7IC8vIGFwcGVuZHMgY2hlY2tib3ggdG8gaXRlbVxuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTsgLy8gY3JlYXRlcyBwXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgdGV4dC5jbGFzc05hbWUgPSAnbS0wIHAtMic7XG4gICAgaWYgKHRhc2suY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQtZGVjb3JhdGlvbi1saW5lLXRocm91Z2gnKTtcbiAgICB9XG4gICAgZGl2Tm9ybWFsLmFwcGVuZENoaWxkKHRleHQpOyAvLyBhcHBlbmRzIHAgdG8gaXRlbVxuXG4gICAgLy8gQ3JlYXRlIGRpdiBmb3IgZWRpdCB2aWV3XG4gICAgY29uc3QgZGl2RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdkVkaXQuY2xhc3NOYW1lID0gJ2Qtbm9uZSBmbGV4LWZpbGwgYWxpZ24taXRlbXMtY2VudGVyIGVkaXRWaWV3JztcblxuICAgIGNvbnN0IGlucHV0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyk7XG4gICAgaW5wdXRFZGl0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXRFZGl0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wgYm9yZGVyLTAgcC0wJztcbiAgICBpbnB1dEVkaXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgZGl2RWRpdC5hcHBlbmRDaGlsZChpbnB1dEVkaXQpO1xuXG4gICAgLy8gQ3JlYXRlcyBkaXYgZm9yIGljb25zXG4gICAgY29uc3QgZGl2NEljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2NEljb25zLmNsYXNzTmFtZSA9ICdtcy1hdXRvJztcblxuICAgIGNvbnN0IGljb25FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSScpOyAvLyBjcmVhdGVzIGVkaXQgaWNvblxuICAgIGljb25FZGl0LmNsYXNzTmFtZSA9ICdmYXMgZmEtZWxsaXBzaXMtdiBwLTIgZWR0SWNuJztcbiAgICBkaXY0SWNvbnMuYXBwZW5kQ2hpbGQoaWNvbkVkaXQpOyAvLyBhcHBlbmRzIGVkaXQgaWNvbiB0byBpdGVtXG5cbiAgICBjb25zdCBpY29uQWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSScpOyAvLyBjcmVhdGVzIGFjY2VwdCBpY29uXG4gICAgaWNvbkFjY2VwdC5jbGFzc05hbWUgPSAnZmFzIGZhLWNoZWNrLWNpcmNsZSBwLTIgZC1ub25lIGFjY2VwdEljbic7XG4gICAgZGl2NEljb25zLmFwcGVuZENoaWxkKGljb25BY2NlcHQpOyAvLyBhcHBlbmRzIGFjY3BldCBpY29uIHRvIGl0ZW1cblxuICAgIGNvbnN0IGljb25SZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJJyk7IC8vIGNyZWF0ZXMgcmVtb3ZlIGljb25cbiAgICBpY29uUmVtb3ZlLmNsYXNzTmFtZSA9ICdmYXMgZmEtdHJhc2ggcC0yIGQtbm9uZSByZW1vdmVJY24nO1xuICAgIGRpdjRJY29ucy5hcHBlbmRDaGlsZChpY29uUmVtb3ZlKTsgLy8gYXBwZW5kcyByZW1vdmUgaWNvbiB0byBpdGVtXG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGRpdk5vcm1hbCk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChkaXZFZGl0KTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRpdjRJY29ucyk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pOyAvLyBhcHBlbmRzIGl0ZW0gdG8gbGlzdFxuICB9XG5cbiAgc3RhdGljIGFkZGJvdHRvbWJ0bigpIHtcbiAgICBjb25zdCBhcHBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwRGl2Jyk7XG5cbiAgICBjb25zdCBidG1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBidG1EaXYuY2xhc3NOYW1lID0gJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXIgYmctbGlnaHQgYnRtRGl2JztcblxuICAgIGNvbnN0IHBCdG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgcEJ0bS50ZXh0Q29udGVudCA9ICdDbGVhciBhbGwgY29tcGxldGVkJztcbiAgICBwQnRtLmNsYXNzTmFtZSA9ICdtLTAgYnRtVGV4dCc7XG4gICAgcEJ0bS5pZCA9ICdwQnRtJztcblxuICAgIGJ0bURpdi5hcHBlbmRDaGlsZChwQnRtKTtcbiAgICBhcHBEaXYuYXBwZW5kQ2hpbGQoYnRtRGl2KTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrU3RvcmUoZGVzY3JpcHRpb24pIHtcbiAgICAvLyBnZXRzIGluZGV4IGZyb20gc3RvcmFnZVxuICAgIGNvbnN0IGluZGV4ID0gU3RvcmUuZ2V0SW5kZXhUb3RhbCgpO1xuICAgIC8vIGluc3RhbnRpYXRlcyBhIG5ldyB0YXNrXG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGRlc2NyaXB0aW9uLCBmYWxzZSwgaW5kZXgpO1xuXG4gICAgLy8gQWRkIHRhc2sgdG8gbG9jYWwgc3RvcmFnZVxuICAgIFN0b3JlLmFkZFRhc2sodGFzayk7XG4gICAgU3RvcmUuc2V0c0luZGV4VG90YWxQbHVzT25lKCk7XG5cbiAgICAvLyBDbGVhciBkZXNjcmlwdGlvbiBpbnB1dFxuICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyRmllbGQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEZXNjJykudmFsdWUgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyB0YXNrQ29tcGxldGVkKGluZGV4LCB2YWx1ZSkge1xuICAgIHRhc2tDb21wbGV0ZWQoaW5kZXgsIHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBjaGFuZ2VMaVRvRWRpdE1vZGUobGkpIHtcbiAgICBsZXQgY2xhc3Nlc0xpID0gbGkuY2xhc3NOYW1lO1xuICAgIGNsYXNzZXNMaSA9IGNsYXNzZXNMaS5yZXBsYWNlKCdhcHBJdGVtJywgJ2FwcEl0ZW1FZGl0Jyk7XG4gICAgbGkuY2xhc3NOYW1lID0gY2xhc3Nlc0xpO1xuICAgIGNvbnN0IGNoaWxkcmVuTGkgPSBsaS5jaGlsZHJlbjtcblxuICAgIC8vIGNoYW5nZSBjbGFzZXMgb2YgZGl2c1xuICAgIGNvbnN0IG5vcm1hbFZpZXcgPSBjaGlsZHJlbkxpWzBdO1xuICAgIGxldCBjbGFzc2VzTlYgPSBub3JtYWxWaWV3LmNsYXNzTmFtZTtcbiAgICBjbGFzc2VzTlYgPSBjbGFzc2VzTlYucmVwbGFjZSgnZC1mbGV4JywgJ2Qtbm9uZScpO1xuICAgIG5vcm1hbFZpZXcuY2xhc3NOYW1lID0gY2xhc3Nlc05WO1xuXG4gICAgY29uc3QgZWRpdFZpZXcgPSBjaGlsZHJlbkxpWzFdO1xuICAgIGxldCBjbGFzc2VzRSA9IGVkaXRWaWV3LmNsYXNzTmFtZTtcbiAgICBjbGFzc2VzRSA9IGNsYXNzZXNFLnJlcGxhY2UoJ2Qtbm9uZScsICdkLWZsZXgnKTtcbiAgICBlZGl0Vmlldy5jbGFzc05hbWUgPSBjbGFzc2VzRTtcblxuICAgIC8vIHNob3cgYXBwcm9wcmlhdGUgaWNvbnMgaW4gZWRpdCB2aWV3XG4gICAgY29uc3QgZGl2SWNvbnMgPSBjaGlsZHJlbkxpWzJdO1xuICAgIGNvbnN0IGljb25zID0gZGl2SWNvbnMuY2hpbGRyZW47XG4gICAgaWNvbnNbMF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgdGhpcy5jaGFuZ2VDbGFzc1RvRWxlbWVudChpY29uc1sxXSwgJ2Qtbm9uZScsICcnKTtcbiAgICB0aGlzLmNoYW5nZUNsYXNzVG9FbGVtZW50KGljb25zWzJdLCAnZC1ub25lJywgJycpO1xuXG4gICAgLy8gc2V0cyBmb2N1cyBjb24gdGhlIGlucHV0IHRvIGVkaXRcbiAgICBjb25zdCBpbnB1dEVkaXQgPSBlZGl0Vmlldy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGlucHV0RWRpdC5pZCA9ICdpbnB1dEVkaXQnO1xuICAgIGlucHV0RWRpdC5mb2N1cygpO1xuICB9XG5cbiAgc3RhdGljIGNoYW5nZUNsYXNzVG9FbGVtZW50KGl0ZW0sIG9sZENsYXNzLCBuZXdDbGFzcykge1xuICAgIGxldCBjbGFzc2VzSXRlbSA9IGl0ZW0uY2xhc3NOYW1lO1xuICAgIGNsYXNzZXNJdGVtID0gY2xhc3Nlc0l0ZW0ucmVwbGFjZShvbGRDbGFzcywgbmV3Q2xhc3MpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gY2xhc3Nlc0l0ZW07XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVGFzayhpbmRleCkge1xuICAgIHJlbW92ZVRhc2soaW5kZXgpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRhc2soaW5kZXgsIG5ld0Rlc2MpIHtcbiAgICB1cGRhdGVUYXNrKGluZGV4LCBuZXdEZXNjKTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhckNvbXBsZXRlZCgpIHtcbiAgICBjbGVhckNvbXBsZXRlZCgpO1xuICB9XG59IiwiLy8gTW9kdWxlIGZvciB1cGRhdGluZyB0YXNrXG5cbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVGFzayhpbmRleCwgbmV3RGVzYykge1xuICAvLyBnZXRzIHRvZG9zIGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCB0b2RvcyA9IFN0b3JlLmdldFRhc2tzKCk7XG4gIC8vIHNldHMgbmV3IGRlc2NyaXB0aW9uIGluIHJlc3BlY3RpdmUgaW5kZXhcbiAgdG9kb3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgLy8gc2V0cyBuZXcgdG9kb3MgdG8gc3RvcmFnZVxuICBTdG9yZS5zZXRUYXNrcyh0b2Rvcyk7XG59IiwiLy8gIE1vZHVsZTogdmFsaWRhdGVzIHRoZSB0ZXh0IGZyb20gdXNlclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVEZXNjcmlwdGlvbih0ZXh0KSB7XG4gIGlmICh0ZXh0ID09PSBudWxsIHx8IHRleHQgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcbmltcG9ydCB2YWxpZGF0ZURlc2NyaXB0aW9uIGZyb20gJy4vdmFsaWRhdGVEZXNjcmlwdGlvbic7XG5cbi8vIFdoZW4gY29udGVudCBsb2Fkc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmFkZEFwcCgpKTtcblxuLy8gRXZlbnQ6IHdoZW4gZm9ybSBpcyBzdWJtaXR0ZWRcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrRm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIC8vIFByZXZlbnQgYWN0dWFsIHN1Ym1pdFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gR2V0IGZvcm0gdmFsdWVzXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpLnZhbHVlLnRyaW0oKTtcbiAgaWYgKCF2YWxpZGF0ZURlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbikpIHtcbiAgICBjb25zb2xlLmxvZygnRXJyb3IgLSBlbXB0eSBkZXNjcmlwdGlvbicpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFkZCB0YXNrXG4gICAgVUkuYWRkVGFza1N0b3JlKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgLy8gcmVsb2FkcyBwYWdlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59KTtcblxuLy8gRXZlbnQ6IHdoZW4gaWNvbiBpcyBjbGlja2VkIHRvIGFkZCB0YXNrXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xpY2tFbnRlckljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gR2V0IGZvcm0gdmFsdWVzXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpLnZhbHVlLnRyaW0oKTtcbiAgaWYgKCF2YWxpZGF0ZURlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbikpIHtcbiAgICBjb25zb2xlLmxvZygnRXJyb3IgLSBlbXB0eSBkZXNjcmlwdGlvbicpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFkZCB0YXNrXG4gICAgVUkuYWRkVGFza1N0b3JlKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgICAvLyByZWxvYWRzIHBhZ2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn0pO1xuXG4vLyBFdmVudDogd2hlbiBjaGVja2JveGVzIGFyZSBjbGlja2VkIG9yICdjaGFuZ2VkJ1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gIC8vIGNoZWNrcyBpZiB0aGlzIGlzIHRyaWdlcnJpbmcgZm9yIHRoZSBjb3JyZWN0IGVsZW1lbnRcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgIC8vIEdldHMgdGhlIHN0YXRlIG9mIHRoZSBjaGVja2VkIGNoZWNrYm94XG4gICAgY29uc3QgY2hlY2tib3hTdGF0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICBjb25zdCB1bExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gICAgY29uc3QgaXRlbUNoZWNrZWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHVsTGlzdC5jaGlsZHJlbik7XG4gICAgY29uc3QgaW5kZXggPSBub2Rlcy5pbmRleE9mKGl0ZW1DaGVja2VkKTtcblxuICAgIFVJLnRhc2tDb21wbGV0ZWQoaW5kZXgsIGNoZWNrYm94U3RhdGUpO1xuXG4gICAgLy8gUmVsb2FkIHBhZ2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn0pO1xuXG4vLyBFdmVudDogZWRpdGluZyBhbmQgcmVtb3ZpbmdcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXNJY24gPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gIGNvbnN0IGNsYXNzZXNBcnIgPSBjbGFzc2VzSWNuLnNwbGl0KCcgJyk7XG5cbiAgY29uc3QgbGkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IHVsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHVsTGlzdC5jaGlsZHJlbik7XG4gIGNvbnN0IGluZGV4ID0gbm9kZXMuaW5kZXhPZihsaSk7XG5cbiAgLy8gd2hlbiB0aGUgdGhyZWUgZG90cyBpY29uIGdldHMgY2xpY2tlZFxuICBpZiAoY2xhc3Nlc0Fyci5pbmRleE9mKCdlZHRJY24nKSAhPT0gLTEpIHtcbiAgICBVSS5jaGFuZ2VMaVRvRWRpdE1vZGUobGkpO1xuICB9XG5cbiAgLy8gd2hlbiB0aGUgY2hlY2sgaWNvbiBnZXRzIGNsaWNrZWQgdG8gVVBEQVRFXG4gIGlmIChjbGFzc2VzQXJyLmluZGV4T2YoJ3JlbW92ZUljbicpICE9PSAtMSkge1xuICAgIFVJLnJlbW92ZVRhc2soaW5kZXgpO1xuXG4gICAgLy8gUmVsb2FkIHBhZ2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICAvLyB3aGVuIHRoZSB0aGUgdHJhc2ggaWNvbiBnZXRzIGNsaWNrZWQgdG8gUkVNT1ZFXG4gIGlmIChjbGFzc2VzQXJyLmluZGV4T2YoJ2FjY2VwdEljbicpICE9PSAtMSkge1xuICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRFZGl0JykudmFsdWU7XG4gICAgVUkudXBkYXRlVGFzayhpbmRleCwgbmV3RGVzYyk7XG5cbiAgICAvLyBSZWxvYWQgcGFnZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwQnRtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIFVJLmNsZWFyQ29tcGxldGVkKCk7XG5cbiAgLy8gUmVsb2FkIHBhZ2VcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==