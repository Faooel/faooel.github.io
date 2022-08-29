const carousel = document.querySelector('.carousel');
const alpine1 = document.querySelector('.alpine-1');
const alpine2 = document.querySelector('.alpine-2');

carousel.style.opacity = '1';
alpine1.style.opacity = '0';
alpine2.style.opacity = '0';

let currentComponent = carousel;

function resetOpacity() {
    carousel.style.opacity = "0"
    alpine1.style.opacity = "0"
    alpine2.style.opacity = "0"
}

function switchComponent() {
    if (currentComponent === carousel)
        currentComponent = alpine1;
    else if (currentComponent === alpine1)
        currentComponent = alpine2;
    else if (currentComponent === alpine2);
}

function manageComponent(percent, delta) {
    if (percent >= 0.99 && delta > 0) {
        resetOpacity();
        switchComponent();
        window.scrollTo(0, 0);
    } else if (percent <= 0.01 && delta < 0) {
        resetOpacity();
        switchComponent();
        window.scrollTo(0, document.body.scrollHeight);
    }
}

function changeOpacityOfCurrentConponent(percent) {
    const limit = 0.5 / 100;
    if (percent < 0.5) {
        currentComponent.style.opacity = ((percent / limit) / 100).toString();
    } else if (percent >= 0.5) {
        currentComponent.style.opacity = (1 - ((percent - 0.5) / limit) / 100).toString();
    }
}

window.addEventListener('wheel', function (mouse) {
    const {scrollTop, clientHeight} = document.documentElement;
    window.scrollTo(0, scrollTop + mouse.deltaY);
    changeOpacityOfCurrentConponent(scrollTop / (document.documentElement.scrollHeight - clientHeight));
    manageComponent(scrollTop / (document.documentElement.scrollHeight - clientHeight), mouse.deltaY);
});
