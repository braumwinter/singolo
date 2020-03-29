/* якоря */
const anchors = document.getElementsByClassName('nav-item-link');
const burgerAnchors = document.getElementsByClassName('burger-item-link');

/* флаги для телефонов */
let flagBlockV = true;
let flagBlockH = true;
let flagBlockС = true;

/* флаг для мобильного меню */
let flagBurger = true;

/* переход к якорям */
for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();

        anchor.className = 'nav-item-link nav-item-active';

        const blockID = anchor.getAttribute('href').substr(1);

        for (let index of anchors) {
            if (index.getAttribute('href').substr(1) != blockID) {
                index.className = 'nav-item-link';
            }
        }

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, false);
}

/* пролистывание страницы */
window.addEventListener('scroll', function () {
    let width = document.body.clientWidth;

    if(width > 767) {
        if (this.pageYOffset < 600) {
        for (let index of anchors) {
            if (index.getAttribute('href').substr(1) == 'slider') {
                index.className = 'nav-item-link nav-item-active';
            } else {
                index.className = 'nav-item-link';
            }
        }
    } else if (this.pageYOffset < 1100) {
        for (let index of anchors) {
            if (index.getAttribute('href').substr(1) == 'services') {
                index.className = 'nav-item-link nav-item-active';
            } else {
                index.className = 'nav-item-link';
            }
        }
    } else if (this.pageYOffset < 1970) {
        for (let index of anchors) {
            if (index.getAttribute('href').substr(1) == 'portfolio') {
                index.className = 'nav-item-link nav-item-active';
            } else {
                index.className = 'nav-item-link';
            }
        }
    } else if (this.pageYOffset < 2700) {
        for (let index of anchors) {
            if (index.getAttribute('href').substr(1) == 'about') {
                index.className = 'nav-item-link nav-item-active';
            } else {
                index.className = 'nav-item-link';
            }
        }
    } else {
        for (let index of anchors) {
            if (index.getAttribute('href').substr(1) == 'contact') {
                index.className = 'nav-item-link nav-item-active';
            } else {
                index.className = 'nav-item-link';
            }
        }
    }
    } else {
        if (this.pageYOffset < 300) {
            for (let index of burgerAnchors) {
                if (index.getAttribute('href').substr(1) == 'slider') {
                    index.className = 'burger-item-link burger-item-active';
                } else {
                    index.className = 'burger-item-link';
                }
            }
        } else if (this.pageYOffset < 1300) {
            for (let index of burgerAnchors) {
                if (index.getAttribute('href').substr(1) == 'services') {
                    index.className = 'burger-item-link burger-item-active';
                } else {
                    index.className = 'burger-item-link';
                }
            }
        } else if (this.pageYOffset < 2800) {
            for (let index of burgerAnchors) {
                if (index.getAttribute('href').substr(1) == 'portfolio') {
                    index.className = 'burger-item-link burger-item-active';
                } else {
                    index.className = 'burger-item-link';
                }
            }
        } else if (this.pageYOffset < 4700) {
            for (let index of burgerAnchors) {
                if (index.getAttribute('href').substr(1) == 'about') {
                    index.className = 'burger-item-link burger-item-active';
                } else {
                    index.className = 'burger-item-link';
                }
            }
        } else {
            for (let index of burgerAnchors) {
                if (index.getAttribute('href').substr(1) == 'contact') {
                    index.className = 'burger-item-link burger-item-active';
                } else {
                    index.className = 'burger-item-link';
                }
            }
        }
    }
    
});

/* переход к мобильным якорям */
for (let anchor of burgerAnchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();

        anchor.className = 'burger-item-link burger-item-active';

        const blockID = anchor.getAttribute('href').substr(1);

        for (let index of burgerAnchors) {
            if (index.getAttribute('href').substr(1) != blockID) {
                index.className = 'burger-item-link';
            }
        }

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, false);
}

/* слайдер */
let slider = document.getElementById('slider-container');

/* левый скрытый блок */
let slideLeft = document.createElement('div');
slideLeft.className = 'slide-item';
slideLeft.style.marginLeft = '-100%';
let slideLeftItem = document.createElement('div');
slideLeftItem.className = 'relative-slider-item';
let slideImgLeft = document.createElement('img');
slideImgLeft.className = 'slide-img';
slideImgLeft.src = './assets/imgs/slide_2.png';
slideImgLeft.alt = 'phone-img';
slider.appendChild(slideLeft);
slideLeft.appendChild(slideLeftItem);
slideLeftItem.appendChild(slideImgLeft);

/* центральный блок */
let slideCenter = document.createElement('div');
slideCenter.className = 'slide-item';
slideCenter.style.marginLeft = '0';
let slideCenterItem = document.createElement('div');
slideCenterItem.className = 'relative-slider-item';

let slideImgCenter = document.createElement('img');
slideImgCenter.className = 'slide-img';
slideImgCenter.src = './assets/imgs/slide_1.png';
slideImgCenter.alt = 'phone-img';
slider.appendChild(slideCenter);
slideCenter.appendChild(slideCenterItem);
slideCenterItem.appendChild(slideImgCenter);

/* взаимодействие с вертикальным экраном */
let blackBlockV = document.createElement('div');
blackBlockV.innerHTML = ' ';
blackBlockV.className = 'blackBlock';
blackBlockV.id = 'blackBlockV';
slideCenterItem.appendChild(blackBlockV);
let clickBlockV = document.createElement('div');
clickBlockV.innerHTML = ' ';
clickBlockV.className = 'clickBlock';
clickBlockV.id = 'clickBlockV';
clickBlockV.addEventListener('click', () => {
    if (flagBlockV) {
        document.getElementById('blackBlockV').style.opacity = '1';
    } else {
        document.getElementById('blackBlockV').style.opacity = '0';
    }

    flagBlockV = !flagBlockV;
}, false);
slideCenterItem.appendChild(clickBlockV);

/* взаимодействие с горизонтальным экраном */
let blackBlockH = document.createElement('div');
blackBlockH.innerHTML = ' ';
blackBlockH.className = 'blackBlock';
blackBlockH.id = 'blackBlockH';
slideCenterItem.appendChild(blackBlockH);
let clickBlockH = document.createElement('div');
clickBlockH.innerHTML = ' ';
clickBlockH.className = 'clickBlock';
clickBlockH.id = 'clickBlockH';
clickBlockH.addEventListener('click', () => {
    if (flagBlockH) {
        document.getElementById('blackBlockH').style.opacity = '1';
    } else {
        document.getElementById('blackBlockH').style.opacity = '0';
    }

    flagBlockH = !flagBlockH;
}, false);
slideCenterItem.appendChild(clickBlockH);

/* правый скрытый блок */
let slideRight = document.createElement('div');
slideRight.className = 'slide-item';
slideRight.style.marginLeft = '100%';
let slideRightItem = document.createElement('div');
slideRightItem.className = 'relative-slider-item';
let slideImgRight = document.createElement('img');
slideImgRight.className = 'slide-img';
slideImgRight.src = './assets/imgs/slide_2.png';
slideImgRight.alt = 'phone-img';
slider.appendChild(slideRight);
slideRight.appendChild(slideRightItem);
slideRightItem.appendChild(slideImgRight);

/* стрелки слайдера */
let arrowNext = document.getElementById('slider-arrow-next');
let arrowPrev = document.getElementById('slider-arrow-prev');

/* стрелка вперед */
arrowNext.addEventListener("click", () => {
    let sliderBackground = window.getComputedStyle(document.getElementById('slider')).backgroundColor;

    let sliderItem = slider.childNodes;
    let slideNext = document.createElement('div');
    slideNext.className = 'slide-item';
    let slideNextItem = document.createElement('div');
    slideNextItem.className = 'relative-slider-item';
    let slideImgNext = document.createElement('img');
    slideImgNext.className = 'slide-img';
    slideImgNext.alt = 'phone-img';

    /*розовый слайд*/
    if (sliderBackground == 'rgb(240, 108, 100)') {
        document.getElementById('slider').style.backgroundColor = '#648BF0';
        document.getElementsByClassName('slider-line')[0].style.backgroundColor = '#5e86f7';

        /* слайды уезжают вместе с розовыми блоками */
        sliderItem[1].style.marginLeft = '-100%';
        sliderItem[2].style.marginLeft = '0';

        /* первый удаляется */
        sliderItem[0].remove();

        /* новый розовый создается */
        slideNext.style.marginLeft = '100%';
        slideImgNext.src = './assets/imgs/slide_1.png';

        slider.appendChild(slideNext);
        slideNext.appendChild(slideNextItem);
        slideNextItem.appendChild(slideImgNext);

        /* к голубому цепляется интерактив */
        let blackBlockС = document.createElement('div');
        blackBlockС.innerHTML = ' ';
        blackBlockС.className = 'blackBlock';
        blackBlockС.id = 'blackBlockС';
        sliderItem[1].childNodes[0].appendChild(blackBlockС);
        let clickBlockС = document.createElement('div');
        clickBlockС.innerHTML = ' ';
        clickBlockС.className = 'clickBlock';
        clickBlockС.id = 'clickBlockС';
        flagBlockС = true;
        clickBlockС.addEventListener('click', () => {
            if (flagBlockС) {
                document.getElementById('blackBlockС').style.opacity = '1';
            } else {
                document.getElementById('blackBlockС').style.opacity = '0';
            }

            flagBlockС = !flagBlockС;
        }, false);
        sliderItem[1].childNodes[0].appendChild(clickBlockС);

        /* голубой слайд */
    } else if (sliderBackground == 'rgb(100, 139, 240)') {
        document.getElementById('slider').style.backgroundColor = '#f06c64';
        document.getElementsByClassName('slider-line')[0].style.backgroundColor = '#ea676b';

        /* слайды уезжают */
        sliderItem[1].style.marginLeft = '-100%';
        sliderItem[2].style.marginLeft = '0';

        /* первый удаляется */
        sliderItem[0].remove();

        /* создается новый голубой */
        slideNext.style.marginLeft = '100%';
        slideImgNext.src = './assets/imgs/slide_2.png';

        slider.appendChild(slideNext);
        slideNext.appendChild(slideNextItem);
        slideNextItem.appendChild(slideImgNext);

        /* к центральному розовому цепляются блоки */
        let blackBlockV = document.createElement('div');
        blackBlockV.innerHTML = ' ';
        blackBlockV.className = 'blackBlock';
        blackBlockV.id = 'blackBlockV';
        sliderItem[1].childNodes[0].appendChild(blackBlockV);
        let clickBlockV = document.createElement('div');
        clickBlockV.innerHTML = ' ';
        clickBlockV.className = 'clickBlock';
        clickBlockV.id = 'clickBlockV';
        flagBlockV = true;

        clickBlockV.addEventListener('click', () => {
            if (flagBlockV) {
                document.getElementById('blackBlockV').style.opacity = '1';
            } else {
                document.getElementById('blackBlockV').style.opacity = '0';
            }

            flagBlockV = !flagBlockV;
        }, false);
        sliderItem[1].childNodes[0].appendChild(clickBlockV);

        let blackBlockH = document.createElement('div');
        blackBlockH.innerHTML = ' ';
        blackBlockH.className = 'blackBlock';
        blackBlockH.id = 'blackBlockH';
        sliderItem[1].childNodes[0].appendChild(blackBlockH);
        let clickBlockH = document.createElement('div');
        clickBlockH.innerHTML = ' ';
        clickBlockH.className = 'clickBlock';
        clickBlockH.id = 'clickBlockH';

        flagBlockH = true;

        clickBlockH.addEventListener('click', () => {
            if (flagBlockH) {
                document.getElementById('blackBlockH').style.opacity = '1';
            } else {
                document.getElementById('blackBlockH').style.opacity = '0';
            }

            flagBlockH = !flagBlockH;
        }, false);
        sliderItem[1].childNodes[0].appendChild(clickBlockH);
    }
}, false);

/* стрелка назад */
arrowPrev.addEventListener("click", () => {
    let sliderBackground = window.getComputedStyle(document.getElementById('slider')).backgroundColor;

    let sliderItem = slider.childNodes;
    let slidePrev = document.createElement('div');
    slidePrev.className = 'slide-item';
    let slidePrevItem = document.createElement('div');
    slidePrevItem.className = 'relative-slider-item';
    let slideImgPrev = document.createElement('img');
    slideImgPrev.className = 'slide-img';
    slideImgPrev.alt = 'phone-img';

    /* розовый слайд */
    if (sliderBackground == 'rgb(240, 108, 100)') {
        document.getElementById('slider').style.backgroundColor = '#648BF0';
        document.getElementsByClassName('slider-line')[0].style.backgroundColor = '#5e86f7';

        /* слайды уезжают вместе с блоками */
        sliderItem[0].style.marginLeft = '0';
        sliderItem[1].style.marginLeft = '100%';

        /* удаляется последний слайд */
        sliderItem[2].remove();

        /*место первого создается новый розовый */
        slidePrev.style.marginLeft = '-100%';
        slideImgPrev.src = './assets/imgs/slide_1.png';

        slider.prepend(slidePrev);
        slidePrev.appendChild(slidePrevItem);
        slidePrevItem.appendChild(slideImgPrev);

        /* к голубому цепляется интерактив */
        let blackBlockС = document.createElement('div');
        blackBlockС.innerHTML = ' ';
        blackBlockС.className = 'blackBlock';
        blackBlockС.id = 'blackBlockС';
        sliderItem[1].childNodes[0].appendChild(blackBlockС);
        let clickBlockС = document.createElement('div');
        clickBlockС.innerHTML = ' ';
        clickBlockС.className = 'clickBlock';
        clickBlockС.id = 'clickBlockС';
        flagBlockС = true;
        clickBlockС.addEventListener('click', () => {
            if (flagBlockС) {
                document.getElementById('blackBlockС').style.opacity = '1';
            } else {
                document.getElementById('blackBlockС').style.opacity = '0';
            }

            flagBlockС = !flagBlockС;
        }, false);
        sliderItem[1].childNodes[0].appendChild(clickBlockС);

        /* голубой слайд */
    } else if (sliderBackground == 'rgb(100, 139, 240)') {
        document.getElementById('slider').style.backgroundColor = '#f06c64';
        document.getElementsByClassName('slider-line')[0].style.backgroundColor = '#ea676b';

        /* блоки уезжают */
        sliderItem[0].style.marginLeft = '0';
        sliderItem[1].style.marginLeft = '100%';

        /* последний удаляется */
        sliderItem[2].remove();

        /* на место первого слайда создается новый голубой */
        slidePrev.style.marginLeft = '-100%';
        slideImgPrev.src = './assets/imgs/slide_2.png';

        slider.prepend(slidePrev);
        slidePrev.appendChild(slidePrevItem);
        slidePrevItem.appendChild(slideImgPrev);

        /* на средний слайд цепляются интерактивные блоки */
        let blackBlockV = document.createElement('div');
        blackBlockV.innerHTML = ' ';
        blackBlockV.className = 'blackBlock';
        blackBlockV.id = 'blackBlockV';
        sliderItem[1].childNodes[0].appendChild(blackBlockV);
        let clickBlockV = document.createElement('div');
        clickBlockV.innerHTML = ' ';
        clickBlockV.className = 'clickBlock';
        clickBlockV.id = 'clickBlockV';
        flagBlockV = true;

        clickBlockV.addEventListener('click', () => {
            if (flagBlockV) {
                document.getElementById('blackBlockV').style.opacity = '1';
            } else {
                document.getElementById('blackBlockV').style.opacity = '0';
            }

            flagBlockV = !flagBlockV;
        }, false);
        sliderItem[1].childNodes[0].appendChild(clickBlockV);

        let blackBlockH = document.createElement('div');
        blackBlockH.innerHTML = ' ';
        blackBlockH.className = 'blackBlock';
        blackBlockH.id = 'blackBlockH';
        sliderItem[1].childNodes[0].appendChild(blackBlockH);
        let clickBlockH = document.createElement('div');
        clickBlockH.innerHTML = ' ';
        clickBlockH.className = 'clickBlock';
        clickBlockH.id = 'clickBlockH';

        flagBlockH = true;

        clickBlockH.addEventListener('click', () => {
            if (flagBlockH) {
                document.getElementById('blackBlockH').style.opacity = '1';
            } else {
                document.getElementById('blackBlockH').style.opacity = '0';
            }

            flagBlockH = !flagBlockH;
        }, false);
        sliderItem[1].childNodes[0].appendChild(clickBlockH);
    }
}, false);

/* блок портфолио */
const portfolioUl = document.getElementById('porfolio-list');

/* функция перемешивания массива */
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/* массив с числами от 1 до 12 */
var randomImg = [];
for (var i = 1; i <= 12; i++) {
    randomImg.push(i);
}

shuffle(randomImg);

/* заполнение портфолио */
for (let portfolioItem = 0; portfolioItem < 12; portfolioItem++) {
    let portfolioLi = document.createElement('li');
    portfolioLi.className = 'portfolio-item';
    portfolioLi.id = portfolioItem;
    portfolioLi.addEventListener('click', () => {
        let portfList = document.getElementsByClassName('portfolio-item');
        for (let index of portfList) {
            if (index.id == portfolioItem) {
                index.className = 'portfolio-item portfolio-item-active';
            } else {
                index.className = 'portfolio-item';
            }
        }
    }, false);

    let portfolioImg = document.createElement('img');
    portfolioImg.className = 'portfolio-img';
    portfolioImg.src = './assets/imgs/Image' + randomImg[portfolioItem] + '.png';
    portfolioImg.alt = 'image ' + randomImg[portfolioItem];

    portfolioUl.appendChild(portfolioLi);
    portfolioLi.appendChild(portfolioImg);
}

/* навигация в портфолио */
const portfolioNav = document.getElementsByClassName('portfolio-nav-item');

for (let itemNav of portfolioNav) {
    itemNav.addEventListener('click', (e) => {
        e.preventDefault();

        itemNav.className = 'portfolio-nav-item portfolio-nav-item-active';

        const contentItem = itemNav.innerHTML;
        console.log(contentItem);

        for (let index of portfolioNav) {
            if (index.innerHTML != contentItem) {
                index.className = 'portfolio-nav-item';
            }
        }

        shuffle(randomImg);
        portfolioUl.innerHTML = '';

        for (let portfolioItem = 0; portfolioItem < 12; portfolioItem++) {
            let portfolioLi = document.createElement('li');
            portfolioLi.className = 'portfolio-item';
            portfolioLi.id = portfolioItem;
            portfolioLi.addEventListener('click', () => {
                let portfList = document.getElementsByClassName('portfolio-item');
                for (let index of portfList) {
                    if (index.id == portfolioItem) {
                        index.className = 'portfolio-item portfolio-item-active';
                    } else {
                        index.className = 'portfolio-item';
                    }
                }
            }, false);

            let portfolioImg = document.createElement('img');
            portfolioImg.className = 'portfolio-img';
            portfolioImg.src = './assets/imgs/Image' + randomImg[portfolioItem] + '.png';
            portfolioImg.alt = 'image ' + randomImg[portfolioItem];

            portfolioUl.appendChild(portfolioLi);
            portfolioLi.appendChild(portfolioImg);
        }

    }, false);
}

/* взаимодействие с формой */
let form = document.getElementById('form');
function Validate(){
    let topicTemp = form.elements.subject.value;
    let topic = topicTemp.trim();
    let describeTemp = form.elements.describe.value;
    let describe = describeTemp.trim();
    let topicMessage;
    let describeMessage;

    if(topic.length === 0){
        topicMessage = 'No subject';
    } else {
        topicMessage = 'Subject: ' + topic;
    }

    if(describe.length === 0){
        describeMessage = 'No description';
    } else {
        if(describe.length > 50) {
            describeMessage = 'Description: ' + describe.slice(0, 50) + '...';
        } else {
            describeMessage = 'Description: ' + describe;
        }
    }

    let blocker = document.createElement('div');
    blocker.id = 'blocker';

    let body = document.getElementsByTagName('body');
    body[0].prepend(blocker);
    body[0].style.overflow = 'hidden';

    let messageBlock = document.createElement('div');
    messageBlock.id = 'messageBlock';
    blocker.appendChild(messageBlock);

    let headerText = document.createElement('h2');
    headerText.id = 'headerText';
    headerText.innerHTML = 'The letter was sent';
    messageBlock.appendChild(headerText);

    let topicText = document.createElement('h3');
    topicText.id = 'topicText';
    topicText.innerHTML = topicMessage;
    messageBlock.appendChild(topicText);

    let describeText = document.createElement('p');
    describeText.id = 'describeText';
    describeText.innerHTML = describeMessage;
    messageBlock.appendChild(describeText);

    let button = document.createElement('button');
    button.id = 'buttonWindow';
    button.innerHTML = 'OK';
    button.addEventListener('click', ()=>{
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementById('blocker').remove();
        document.getElementById('input-name').value = '';
        document.getElementById('input-email').value = '';
        document.getElementById('input-subject').value = '';
        document.getElementById('describe').value = '';
    }, false);
    messageBlock.appendChild(button);
}


let burger = document.getElementById('burger-menu');
let burgerButton = document.getElementById('burger-button');

burgerButton.addEventListener('click', () => {
    let height = document.body.clientHeight;
    console.log(height);
    if(flagBurger) {
        flagBurger = !flagBurger;

        burgerButton.style.transform = 'rotate(90deg)';

        burger.style.display = 'flex';
        burger.style.height = height + 'px';
    } else {
        flagBurger = !flagBurger;

        burgerButton.style.transform = 'rotate(0deg)';

        burger.style.display = 'none';
    }
}, false);