import { createNav, createMain } from './home'
import { createMenu } from './menu';
import { createContact } from './contact';

const content = document.querySelector('#content');
const nav = createNav();
content.append(nav);
content.append(createMain());

document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('alt-body-background');

    while (content.firstElementChild) {
        content.removeChild(content.children[0]);
    };

    // console.log('home working');
    content.append(nav);
    content.append(createMain());
});

document.querySelector('#menu').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('alt-body-background');

    while (content.firstElementChild) {
        content.removeChild(content.children[0]);
    };

    content.append(nav);
    content.append(createMenu());
});

document.querySelector('#contact').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('alt-body-background');

    while (content.firstElementChild) {
        content.removeChild(content.children[0]);
    };

    content.append(nav);
    content.append(createContact());

});

console.log('valid');