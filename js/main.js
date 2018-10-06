var menu = (function () {
    var data = {
        menuBtn: document.querySelector('#js-menu-btn'),
        menuContent: document.querySelector('#js-menu-content')
    };
    data.menuBtn.addEventListener('click', function () {
        data.menuContent.classList.toggle('menu-content--on');
    });
})();
// Lex js scrolling function
const aboutUsScroll = document.querySelectorAll(".menu-content__item__about");

aboutUsScroll.forEach(menu => {
    menu.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector("#about").offsetTop
        });
    })
});