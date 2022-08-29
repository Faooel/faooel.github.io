const senna1 = document.querySelector('.senna1');
const senna2 = document.querySelector('.senna2');
const senna3 = document.querySelector('.senna3');
const senna4 = document.querySelector('.senna4');


senna1.style.opacity = '1';
senna2.style.opacity = '0';
senna3.style.opacity = '0';
senna4.style.opacity = '0';

let currentComponent = senna1;

function resetOpacity() {
    senna1.style.opacity = "0"
    senna2.style.opacity = "0"
    senna3.style.opacity = "0"
    senna4.style.opacity = "0"
}

function switchComponent() {
    if (currentComponent === senna1)
        currentComponent = senna2;
    else if (currentComponent === senna2)
        currentComponent = senna3;
    else if (currentComponent === senna3)
        currentComponent = senna4;
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
