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
export function createNav() {
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
export function createMain() {
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
