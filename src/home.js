const home_tab = () => {
    const content = document.querySelector('div#content');
    const body = document.querySelector('body');
    const description = document.createElement('p');
    const main = document.createElement('main');

    description.textContent = `Multi award winning Little Truffle Dining Room & Bar provides guests with an intimate and relaxed venue, allowing lovers of food and wine to indulge in the palatable menu prepared by Chef Daniel Ridgeway &\nchef de cuisine Jason Burt. Here you will explore the exceptional wine\nlist, displaying a choice of local and wine from around the world.`
    
    body.setAttribute('style', `background-image: url(../src/img/restaurantImage.jfif);
                                background-size: cover;
                                height: 100%`);
    main.setAttribute('style', `display: flex; 
                                flex-direction: column; 
                                align-items: center; 
                                justify-content: center;
                                padding: 2rem;
                                margin: 5rem;
                                position: absolute;
                                top: 25%;
                                background: rgba(0, 0, 0, 0.75)`);
    description.setAttribute('style', 'width: 100%; height: 100%; padding: 10px;');

    main.append(description);

    content.append(main);
};

export {
    home_tab
};