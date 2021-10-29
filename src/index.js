import { menu_tab} from './menu.js';
import { home_tab } from './home.js';

const content = document.querySelector('#content');
const header = document.createElement('header');
const nav = document.createElement('nav');
const flexContainer = document.createElement('div');
const title = document.createElement('h1');

flexContainer.className = 'flex-container';
title.textContent = 'The Reastaurant';
title.setAttribute('style', 'background: rgba(0, 0, 0, 0.75');

nav.append(flexContainer);
header.append(nav);

const home_btn = document.createElement('button');
home_btn.textContent = 'Home';
home_btn.id = 'homeBtn';
flexContainer.append(home_btn);
home_btn.addEventListener('click', () => {
    removeContent();
    home_tab();
});

const menu_btn = document.createElement('button');
menu_btn.textContent = 'Menu';
menu_btn.id = 'menuBtn';
flexContainer.append(menu_btn);
menu_btn.addEventListener('click', () => {
    removeContent();
    menu_tab();
});

const contact_btn = document.createElement('button');
contact_btn.textContent = 'Contact';
contact_btn.id = 'contactBtn';
flexContainer.append(contact_btn);
contact_btn.addEventListener('click', () => {
    removeContent();
    home_tab();
});

const removeContent = () => {
    content.replaceChildren();
    content.append(title, header);
};

content.append(title, header);
home_tab();