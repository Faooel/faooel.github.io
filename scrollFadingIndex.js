const laudaComponent = document.querySelector('.lauda-component');
const storyf11 = document.querySelector('.story-f1-1');
const storyf12 = document.querySelector('.story-f1-3');
const storyf13 = document.querySelector('.story-f1-4')

laudaComponent.style.opacity = '1';
storyf11.style.opacity = '0';
storyf12.style.opacity = '0';
storyf13.style.opacity = '0';

let currentComponent = laudaComponent;

function resetOpacity() {
    laudaComponent.style.opacity = "0"
    storyf11.style.opacity = "0"
    storyf12.style.opacity = "0"
    storyf13.style.opacity = "0"
}

function switchComponent() {
    if (currentComponent === laudaComponent)
        currentComponent = storyf11;
    else if (currentComponent === storyf11)
        currentComponent = storyf12;
    else if (currentComponent === storyf12)
        currentComponent = storyf13;
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

