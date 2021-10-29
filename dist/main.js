/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home_tab\": () => (/* binding */ home_tab)\n/* harmony export */ });\nconst home_tab = () => {\r\n    const content = document.querySelector('div#content');\r\n    const body = document.querySelector('body');\r\n    const description = document.createElement('p');\r\n    const main = document.createElement('main');\r\n\r\n    description.textContent = `Multi award winning Little Truffle Dining Room & Bar provides guests with an intimate and relaxed venue, allowing lovers of food and wine to indulge in the palatable menu prepared by Chef Daniel Ridgeway &\\nchef de cuisine Jason Burt. Here you will explore the exceptional wine\\nlist, displaying a choice of local and wine from around the world.`\r\n    \r\n    body.setAttribute('style', `background-image: url(../src/img/restaurantImage.jfif);\r\n                                background-size: cover;\r\n                                height: 100%`);\r\n    main.setAttribute('style', `display: flex; \r\n                                flex-direction: column; \r\n                                align-items: center; \r\n                                justify-content: center;\r\n                                padding: 2rem;\r\n                                margin: 5rem;\r\n                                position: absolute;\r\n                                top: 25%;\r\n                                background: rgba(0, 0, 0, 0.75)`);\r\n    description.setAttribute('style', 'width: 100%; height: 100%; padding: 10px;');\r\n\r\n    main.append(description);\r\n\r\n    content.append(main);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n\r\n\r\nconst content = document.querySelector('#content');\r\nconst header = document.createElement('header');\r\nconst nav = document.createElement('nav');\r\nconst flexContainer = document.createElement('div');\r\nconst title = document.createElement('h1');\r\n\r\nflexContainer.className = 'flex-container';\r\ntitle.textContent = 'The Reastaurant';\r\ntitle.setAttribute('style', 'background: rgba(0, 0, 0, 0.75');\r\n\r\nnav.append(flexContainer);\r\nheader.append(nav);\r\n\r\nconst home_btn = document.createElement('button');\r\nhome_btn.textContent = 'Home';\r\nhome_btn.id = 'homeBtn';\r\nflexContainer.append(home_btn);\r\nhome_btn.addEventListener('click', () => {\r\n    removeContent();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home_tab)();\r\n});\r\n\r\nconst menu_btn = document.createElement('button');\r\nmenu_btn.textContent = 'Menu';\r\nmenu_btn.id = 'menuBtn';\r\nflexContainer.append(menu_btn);\r\nmenu_btn.addEventListener('click', () => {\r\n    removeContent();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.menu_tab)();\r\n});\r\n\r\nconst contact_btn = document.createElement('button');\r\ncontact_btn.textContent = 'Contact';\r\ncontact_btn.id = 'contactBtn';\r\nflexContainer.append(contact_btn);\r\ncontact_btn.addEventListener('click', () => {\r\n    removeContent();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home_tab)();\r\n});\r\n\r\nconst removeContent = () => {\r\n    content.replaceChildren();\r\n    content.append(title, header);\r\n};\r\n\r\ncontent.append(title, header);\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home_tab)();\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu_tab\": () => (/* binding */ menu_tab)\n/* harmony export */ });\nconst menu_tab = () => {\r\n    const content = document.querySelector('#content');\r\n\r\n    const sushi = ['salmon', 'california', 'tuna'];\r\n    let sushiDivs = [];\r\n\r\n    sushi.forEach(sush => {\r\n        const sushDiv = document.createElement('div');\r\n        sushDiv.id = sush;\r\n        const sushiImg = document.createElement('img');\r\n        sushiImg.style.width = '25%';\r\n        sushiImg.style.height = 'auto';\r\n        sushDiv.append(sushiImg);\r\n        sushiDivs.push(sushDiv);\r\n    });\r\n\r\n    sushiDivs[0].firstElementChild.src = '../src/img/fresh-salmon-sushi-rolls.jpg';\r\n    sushiDivs[1].firstElementChild.src = '../src/img/californiaSushiRoll.jpg';\r\n\r\n    sushiDivs.forEach(div => {\r\n        content.append(div);\r\n    });\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;