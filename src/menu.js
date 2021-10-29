const menu_tab = () => {
    const content = document.querySelector('#content');

    const sushi = ['salmon', 'california', 'tuna'];
    let sushiDivs = [];

    sushi.forEach(sush => {
        const sushDiv = document.createElement('div');
        sushDiv.id = sush;
        const sushiImg = document.createElement('img');
        sushiImg.style.width = '25%';
        sushiImg.style.height = 'auto';
        sushDiv.append(sushiImg);
        sushiDivs.push(sushDiv);
    });

    sushiDivs[0].firstElementChild.src = '../src/img/fresh-salmon-sushi-rolls.jpg';
    sushiDivs[1].firstElementChild.src = '../src/img/californiaSushiRoll.jpg';

    sushiDivs.forEach(div => {
        content.append(div);
    });

};

export {
    menu_tab
};