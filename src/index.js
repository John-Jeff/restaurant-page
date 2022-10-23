import { createNav, createMain } from './home'

const content = document.querySelector('#content');

const nav = createNav();
content.append(nav);

const main = createMain();
content.append(main);

document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();

    while (content.firstElementChild) {
        content.removeChild(content.children[0]);
    };

    console.log('home working');
    const nav = createNav();
    content.append(nav);

    const main = createMain();
    content.append(main);
})

console.log('valid');