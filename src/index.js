import {home_tab} from './home.js';

const content = document.querySelector('#content');

const home_btn = document.createElement('button');
home_btn.textContent = 'Home';
home_btn.id = 'homeBtn';
home_btn.addEventListener('click', () => {
    removeContent();
    home_tab();
});

const about_btn = document.createElement('button');
about_btn.textContent = 'About';
about_btn.id = 'aboutBtn';
about_btn.addEventListener('click', () => {
    removeContent();
    home_tab();
});

const contact_btn = document.createElement('button');
contact_btn.textContent = 'Contact';
contact_btn.id = 'contactBtn';
contact_btn.addEventListener('click', () => {
    removeContent();
    home_tab();
});

const removeContent = () => {
    content.replaceChildren();
    content.append(home_btn, about_btn, contact_btn);
}

content.append(home_btn, about_btn, contact_btn);
home_tab();