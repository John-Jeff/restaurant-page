/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain),
/* harmony export */   "createNav": () => (/* binding */ createNav)
/* harmony export */ });
// Helper function: Set multiple attributes on a DOM Element
function setAttributes(el, attr) {
    for (let key in attr) {
        el.setAttribute(key, attr[key])
    }
}

// Helper function: Create a new anchor element
function createLink(id) {
    let link = document.createElement('a');
    setAttributes(link, {'href': '', 'id': `${id.toLowerCase()}`});
    link.textContent = id;
    return link;
}

// Create a complete nav bar
function createNav() {
    const nav = document.createElement('nav');

    const logo = document.createElement('img');
    setAttributes(logo, {'id': 'nav-logo', 'alt': 'Nav Logo', 'src': ''});
    nav.append(logo);

    const navLinks = document.createElement('div');
    navLinks.setAttribute('id', 'nav-links');
    
    const home = createLink('Home');
    navLinks.append(home);

    const menu = createLink('Menu');
    navLinks.append(menu);

    const contact = createLink('Contact');
    navLinks.append(contact);

    nav.append(navLinks);

    return nav;
}

// Create a complete main section
function createMain() {
    const main = document.createElement('main');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'MECCA <br> HALAL FOOD';
    main.append(h1);

    const p = document.createElement('p');
    p.innerHTML = 'The <em>best</em> over rice in New York';
    main.append(p);

    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order Now';
    setAttributes(orderButton, {'id': 'order-button', 'type': 'button'});
    main.append(orderButton);

    return main;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenuItem(item, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    const h2 = document.createElement('h2');
    h2.textContent = item;
    const h3 = document.createElement('h3');
    h3.textContent = price;

    itemInfo.append(h2);
    itemInfo.append(h3);
    menuItem.append(itemInfo);

    return menuItem;
};

const menuItems = {
    chickenRice: createMenuItem('Chicken Over Rice', '$8'),
    lambRice: createMenuItem('Lamb Over Rice', '$8'),
    mixedRice: createMenuItem('Mixed Over Rice', '$8'),
    falafelRice: createMenuItem('Falafel Over Rice', '$8'),
    fishRice: createMenuItem('Fish Over Rice', '$8'),
    gyro: createMenuItem('Gyro', '$7'),
};

function createMenu() {
    const main = document.createElement('main');
    main.setAttribute('id', 'menu-page');

    for (let item in menuItems) main.append(menuItems[item]);

    return main;
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



const content = document.querySelector('#content');
const nav = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createNav)();
content.append(nav);
content.append((0,_home__WEBPACK_IMPORTED_MODULE_0__.createMain)());

document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('alt-body-background');

    while (content.firstElementChild) {
        content.removeChild(content.children[0]);
    };

    // console.log('home working');
    content.append(nav);
    content.append((0,_home__WEBPACK_IMPORTED_MODULE_0__.createMain)());
});

document.querySelector('#menu').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('alt-body-background');

    while (content.firstElementChild) {
        content.removeChild(content.children[0]);
    };

    content.append(nav);
    content.append((0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)());
});

console.log('valid');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUJBQXFCLGlCQUFpQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQSx5QkFBeUIsK0NBQStDO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyx1Q0FBdUM7QUFDdkU7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QztBQUNWOztBQUVwQztBQUNBLFlBQVksZ0RBQVM7QUFDckI7QUFDQSxlQUFlLGlEQUFVOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQVU7QUFDN0IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlEQUFVO0FBQzdCLENBQUM7O0FBRUQscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIGZ1bmN0aW9uOiBTZXQgbXVsdGlwbGUgYXR0cmlidXRlcyBvbiBhIERPTSBFbGVtZW50XG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGF0dHIpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cltrZXldKVxuICAgIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uOiBDcmVhdGUgYSBuZXcgYW5jaG9yIGVsZW1lbnRcbmZ1bmN0aW9uIGNyZWF0ZUxpbmsoaWQpIHtcbiAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxpbmssIHsnaHJlZic6ICcnLCAnaWQnOiBgJHtpZC50b0xvd2VyQ2FzZSgpfWB9KTtcbiAgICBsaW5rLnRleHRDb250ZW50ID0gaWQ7XG4gICAgcmV0dXJuIGxpbms7XG59XG5cbi8vIENyZWF0ZSBhIGNvbXBsZXRlIG5hdiBiYXJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2V0QXR0cmlidXRlcyhsb2dvLCB7J2lkJzogJ25hdi1sb2dvJywgJ2FsdCc6ICdOYXYgTG9nbycsICdzcmMnOiAnJ30pO1xuICAgIG5hdi5hcHBlbmQobG9nbyk7XG5cbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkxpbmtzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWxpbmtzJyk7XG4gICAgXG4gICAgY29uc3QgaG9tZSA9IGNyZWF0ZUxpbmsoJ0hvbWUnKTtcbiAgICBuYXZMaW5rcy5hcHBlbmQoaG9tZSk7XG5cbiAgICBjb25zdCBtZW51ID0gY3JlYXRlTGluaygnTWVudScpO1xuICAgIG5hdkxpbmtzLmFwcGVuZChtZW51KTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVMaW5rKCdDb250YWN0Jyk7XG4gICAgbmF2TGlua3MuYXBwZW5kKGNvbnRhY3QpO1xuXG4gICAgbmF2LmFwcGVuZChuYXZMaW5rcyk7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG4vLyBDcmVhdGUgYSBjb21wbGV0ZSBtYWluIHNlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEuaW5uZXJIVE1MID0gJ01FQ0NBIDxicj4gSEFMQUwgRk9PRCc7XG4gICAgbWFpbi5hcHBlbmQoaDEpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmlubmVySFRNTCA9ICdUaGUgPGVtPmJlc3Q8L2VtPiBvdmVyIHJpY2UgaW4gTmV3IFlvcmsnO1xuICAgIG1haW4uYXBwZW5kKHApO1xuXG4gICAgY29uc3Qgb3JkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmRlckJ1dHRvbi50ZXh0Q29udGVudCA9ICdPcmRlciBOb3cnO1xuICAgIHNldEF0dHJpYnV0ZXMob3JkZXJCdXR0b24sIHsnaWQnOiAnb3JkZXItYnV0dG9uJywgJ3R5cGUnOiAnYnV0dG9uJ30pO1xuICAgIG1haW4uYXBwZW5kKG9yZGVyQnV0dG9uKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuIiwiZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaXRlbSwgcHJpY2UpIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgaXRlbUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtSW5mby5jbGFzc0xpc3QuYWRkKCdpdGVtLWluZm8nKTtcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICBpdGVtSW5mby5hcHBlbmQoaDIpO1xuICAgIGl0ZW1JbmZvLmFwcGVuZChoMyk7XG4gICAgbWVudUl0ZW0uYXBwZW5kKGl0ZW1JbmZvKTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn07XG5cbmNvbnN0IG1lbnVJdGVtcyA9IHtcbiAgICBjaGlja2VuUmljZTogY3JlYXRlTWVudUl0ZW0oJ0NoaWNrZW4gT3ZlciBSaWNlJywgJyQ4JyksXG4gICAgbGFtYlJpY2U6IGNyZWF0ZU1lbnVJdGVtKCdMYW1iIE92ZXIgUmljZScsICckOCcpLFxuICAgIG1peGVkUmljZTogY3JlYXRlTWVudUl0ZW0oJ01peGVkIE92ZXIgUmljZScsICckOCcpLFxuICAgIGZhbGFmZWxSaWNlOiBjcmVhdGVNZW51SXRlbSgnRmFsYWZlbCBPdmVyIFJpY2UnLCAnJDgnKSxcbiAgICBmaXNoUmljZTogY3JlYXRlTWVudUl0ZW0oJ0Zpc2ggT3ZlciBSaWNlJywgJyQ4JyksXG4gICAgZ3lybzogY3JlYXRlTWVudUl0ZW0oJ0d5cm8nLCAnJDcnKSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtcGFnZScpO1xuXG4gICAgZm9yIChsZXQgaXRlbSBpbiBtZW51SXRlbXMpIG1haW4uYXBwZW5kKG1lbnVJdGVtc1tpdGVtXSk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVOYXYsIGNyZWF0ZU1haW4gfSBmcm9tICcuL2hvbWUnXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBuYXYgPSBjcmVhdGVOYXYoKTtcbmNvbnRlbnQuYXBwZW5kKG5hdik7XG5jb250ZW50LmFwcGVuZChjcmVhdGVNYWluKCkpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhbHQtYm9keS1iYWNrZ3JvdW5kJyk7XG5cbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGRyZW5bMF0pO1xuICAgIH07XG5cbiAgICAvLyBjb25zb2xlLmxvZygnaG9tZSB3b3JraW5nJyk7XG4gICAgY29udGVudC5hcHBlbmQobmF2KTtcbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVNYWluKCkpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2FsdC1ib2R5LWJhY2tncm91bmQnKTtcblxuICAgIHdoaWxlIChjb250ZW50LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblswXSk7XG4gICAgfTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKG5hdik7XG4gICAgY29udGVudC5hcHBlbmQoY3JlYXRlTWVudSgpKTtcbn0pO1xuXG5jb25zb2xlLmxvZygndmFsaWQnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=