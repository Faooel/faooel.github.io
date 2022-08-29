document.querySelectorAll(".carousel").forEach(carousel =>{
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });
        carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
    ${buttonsHtml.join("")}
    </div>
    `); //Créer et ajouter le carousel-nav

    //Activer les boutons de nav
    const buttons = carousel.querySelectorAll(".carousel-button");
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel-item-select"));
            buttons.forEach(button => button.classList.remove("carousel-button-select"));
    //selectioner les photos avec le bouton
            items[i].classList.add("carousel-item-select");
            button.classList.add("carousel-button-selet");
        });
    });

    //Pour faire apparaitre la premiére photo //
    items[0].classList.add("carousel-item-select");
    buttons[0].classList.add("carousel-button-select");
});
