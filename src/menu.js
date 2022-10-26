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

export function createMenu() {
    const main = document.createElement('main');
    main.setAttribute('id', 'menu-page');

    for (let item in menuItems) main.append(menuItems[item]);

    return main;
};