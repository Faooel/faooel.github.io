const alonso1 = document.querySelector('.alonso1');
const alonso2 = document.querySelector('.alonso2');
const alonso3 = document.querySelector('.alonso3');
const alonso4 = document.querySelector('.alonso4');


alonso1.style.opacity = '1';
alonso2.style.opacity = '0';
alonso3.style.opacity = '0';
alonso4.style.opacity = '0';

let currentComponent = alonso1;

function resetOpacity() {
    alonso1.style.opacity = "0"
    alonso2.style.opacity = "0"
    alonso3.style.opacity = "0"
    alonso4.style.opacity = "0"
}

function switchComponent() {
    if (currentComponent === alonso1)
        currentComponent = alonso2;
    else if (currentComponent === alonso2)
        currentComponent = alonso3;
    else if (currentComponent === alonso3)
        currentComponent = alonso4;
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
