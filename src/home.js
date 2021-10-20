const home_tab = () => {
    const content = document.querySelector('div#content');
    const header = document.createElement('h1');
    const img = document.createElement('img');
    const description = document.createElement('p');

    header.textContent = 'The Reastaurant';
    img.src = '../src/img/restaurantImage.jfif';
    description.textContent = `Multi award winning Little Truffle Dining Room & Bar provides guests with an intimate and relaxed venue, allowing lovers of food and wine to indulge in the palatable menu prepared by Chef Daniel Ridgeway &\nchef de cuisine Jason Burt. Here you will explore the exceptional wine\nlist, displaying a choice of local and wine from around the world.`

    content.append(header, img, description);
};

export {
    home_tab
};