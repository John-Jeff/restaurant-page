/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
function createInfo(title, info) {
    const div = document.createElement('div');
    div.setAttribute('id', title.toLowerCase());

    const h4 = document.createElement('h4');
    h4.textContent = `${title}:`;

    const p = document.createElement('p');
    p.classList.add('contact-info');
    p.textContent = info;

    div.append(h4);
    div.append(p);

    return div;
}

function createContact() {
    const main = document.createElement('main');
    main.setAttribute('id', 'contact-page');

    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'contact-heading');
    h1.textContent = 'Contact Us';
    main.append(h1);

    main.append(createInfo('Phone', '(718) 541-3678'));
    main.append(createInfo('Address', '83-46 255th St, Queens, NY 11004'));
    main.append(createInfo('Hours', '10AM - 4AM, Every Day'));

    return main;
}

/***/ }),

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
    h1.setAttribute('id', 'home-heading');
    h1.innerHTML = 'MECCA <br> HALAL FOOD';
    main.append(h1);

    const p = document.createElement('p');
    p.setAttribute('id', 'home-desc');
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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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

document.querySelector('#contact').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('alt-body-background');

    while (content.firstElementChild) {
        content.removeChild(content.children[0]);
    };

    content.append(nav);
    content.append((0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)());

});

console.log('valid');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLE1BQU07O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUIsaUJBQWlCLEVBQUU7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDs7QUFFQTtBQUNBLHlCQUF5QiwrQ0FBK0M7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyx1Q0FBdUM7QUFDdkU7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDVjtBQUNNOztBQUUxQztBQUNBLFlBQVksZ0RBQVM7QUFDckI7QUFDQSxlQUFlLGlEQUFVOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQVU7QUFDN0IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlEQUFVO0FBQzdCLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix1REFBYTs7QUFFaEMsQ0FBQzs7QUFFRCxxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVJbmZvKHRpdGxlLCBpbmZvKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCB0aXRsZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBoNC50ZXh0Q29udGVudCA9IGAke3RpdGxlfTpgO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuICAgIHAudGV4dENvbnRlbnQgPSBpbmZvO1xuXG4gICAgZGl2LmFwcGVuZChoNCk7XG4gICAgZGl2LmFwcGVuZChwKTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtcGFnZScpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1oZWFkaW5nJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gICAgbWFpbi5hcHBlbmQoaDEpO1xuXG4gICAgbWFpbi5hcHBlbmQoY3JlYXRlSW5mbygnUGhvbmUnLCAnKDcxOCkgNTQxLTM2NzgnKSk7XG4gICAgbWFpbi5hcHBlbmQoY3JlYXRlSW5mbygnQWRkcmVzcycsICc4My00NiAyNTV0aCBTdCwgUXVlZW5zLCBOWSAxMTAwNCcpKTtcbiAgICBtYWluLmFwcGVuZChjcmVhdGVJbmZvKCdIb3VycycsICcxMEFNIC0gNEFNLCBFdmVyeSBEYXknKSk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn0iLCIvLyBIZWxwZXIgZnVuY3Rpb246IFNldCBtdWx0aXBsZSBhdHRyaWJ1dGVzIG9uIGEgRE9NIEVsZW1lbnRcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWwsIGF0dHIpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cikge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyW2tleV0pXG4gICAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb246IENyZWF0ZSBhIG5ldyBhbmNob3IgZWxlbWVudFxuZnVuY3Rpb24gY3JlYXRlTGluayhpZCkge1xuICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHNldEF0dHJpYnV0ZXMobGluaywgeydocmVmJzogJycsICdpZCc6IGAke2lkLnRvTG93ZXJDYXNlKCl9YH0pO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBpZDtcbiAgICByZXR1cm4gbGluaztcbn1cblxuLy8gQ3JlYXRlIGEgY29tcGxldGUgbmF2IGJhclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxvZ28sIHsnaWQnOiAnbmF2LWxvZ28nLCAnYWx0JzogJ05hdiBMb2dvJywgJ3NyYyc6ICcnfSk7XG4gICAgbmF2LmFwcGVuZChsb2dvKTtcblxuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2TGlua3Muc2V0QXR0cmlidXRlKCdpZCcsICduYXYtbGlua3MnKTtcbiAgICBcbiAgICBjb25zdCBob21lID0gY3JlYXRlTGluaygnSG9tZScpO1xuICAgIG5hdkxpbmtzLmFwcGVuZChob21lKTtcblxuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVMaW5rKCdNZW51Jyk7XG4gICAgbmF2TGlua3MuYXBwZW5kKG1lbnUpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGNyZWF0ZUxpbmsoJ0NvbnRhY3QnKTtcbiAgICBuYXZMaW5rcy5hcHBlbmQoY29udGFjdCk7XG5cbiAgICBuYXYuYXBwZW5kKG5hdkxpbmtzKTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cbi8vIENyZWF0ZSBhIGNvbXBsZXRlIG1haW4gc2VjdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtaGVhZGluZycpO1xuICAgIGgxLmlubmVySFRNTCA9ICdNRUNDQSA8YnI+IEhBTEFMIEZPT0QnO1xuICAgIG1haW4uYXBwZW5kKGgxKTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtZGVzYycpO1xuICAgIHAuaW5uZXJIVE1MID0gJ1RoZSA8ZW0+YmVzdDwvZW0+IG92ZXIgcmljZSBpbiBOZXcgWW9yayc7XG4gICAgbWFpbi5hcHBlbmQocCk7XG5cbiAgICBjb25zdCBvcmRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9yZGVyQnV0dG9uLnRleHRDb250ZW50ID0gJ09yZGVyIE5vdyc7XG4gICAgc2V0QXR0cmlidXRlcyhvcmRlckJ1dHRvbiwgeydpZCc6ICdvcmRlci1idXR0b24nLCAndHlwZSc6ICdidXR0b24nfSk7XG4gICAgbWFpbi5hcHBlbmQob3JkZXJCdXR0b24pO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpdGVtLCBwcmljZSkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBpdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW5mbycpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICAgIGl0ZW1JbmZvLmFwcGVuZChoMik7XG4gICAgaXRlbUluZm8uYXBwZW5kKGgzKTtcbiAgICBtZW51SXRlbS5hcHBlbmQoaXRlbUluZm8pO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufTtcblxuY29uc3QgbWVudUl0ZW1zID0ge1xuICAgIGNoaWNrZW5SaWNlOiBjcmVhdGVNZW51SXRlbSgnQ2hpY2tlbiBPdmVyIFJpY2UnLCAnJDgnKSxcbiAgICBsYW1iUmljZTogY3JlYXRlTWVudUl0ZW0oJ0xhbWIgT3ZlciBSaWNlJywgJyQ4JyksXG4gICAgbWl4ZWRSaWNlOiBjcmVhdGVNZW51SXRlbSgnTWl4ZWQgT3ZlciBSaWNlJywgJyQ4JyksXG4gICAgZmFsYWZlbFJpY2U6IGNyZWF0ZU1lbnVJdGVtKCdGYWxhZmVsIE92ZXIgUmljZScsICckOCcpLFxuICAgIGZpc2hSaWNlOiBjcmVhdGVNZW51SXRlbSgnRmlzaCBPdmVyIFJpY2UnLCAnJDgnKSxcbiAgICBneXJvOiBjcmVhdGVNZW51SXRlbSgnR3lybycsICckNycpLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1wYWdlJyk7XG5cbiAgICBmb3IgKGxldCBpdGVtIGluIG1lbnVJdGVtcykgbWFpbi5hcHBlbmQobWVudUl0ZW1zW2l0ZW1dKTtcblxuICAgIHJldHVybiBtYWluO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5hdiwgY3JlYXRlTWFpbiB9IGZyb20gJy4vaG9tZSdcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgbmF2ID0gY3JlYXRlTmF2KCk7XG5jb250ZW50LmFwcGVuZChuYXYpO1xuY29udGVudC5hcHBlbmQoY3JlYXRlTWFpbigpKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYWx0LWJvZHktYmFja2dyb3VuZCcpO1xuXG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkcmVuWzBdKTtcbiAgICB9O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2hvbWUgd29ya2luZycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKG5hdik7XG4gICAgY29udGVudC5hcHBlbmQoY3JlYXRlTWFpbigpKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdhbHQtYm9keS1iYWNrZ3JvdW5kJyk7XG5cbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGRyZW5bMF0pO1xuICAgIH07XG5cbiAgICBjb250ZW50LmFwcGVuZChuYXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZU1lbnUoKSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYWx0LWJvZHktYmFja2dyb3VuZCcpO1xuXG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkcmVuWzBdKTtcbiAgICB9O1xuXG4gICAgY29udGVudC5hcHBlbmQobmF2KTtcbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVDb250YWN0KCkpO1xuXG59KTtcblxuY29uc29sZS5sb2coJ3ZhbGlkJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9