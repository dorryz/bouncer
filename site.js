let isBurgerClicked = false;
const burger = document.querySelector('.hamburger');

initPage();

function initPage() {
    burger.addEventListener('click', burgerClick);
}

function burgerClick() {
        burger.classList.toggle('is-active');
        isBurgerClicked = !isBurgerClicked;
}