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

export function createContact() {
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