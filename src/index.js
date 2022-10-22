import { createNav, createMain } from './home'

const content = document.querySelector('#content');

const nav = createNav();
content.append(nav);

const main = createMain();
content.append(main);

console.log('valid');