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
const galleryScroll = document.querySelectorAll(".menu-content__item__gallery");

aboutUsScroll.forEach(menu => {
    menu.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector("#about").offsetTop
        });
    })
});

galleryScroll.forEach(menu => {
    menu.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector("#gallery").offsetTop
        });
    })
});

// Lex gallery filter function

const galleryBtns = document.querySelectorAll(".section-gallery__button");
const galleryImages = document.querySelectorAll(".section-gallery__wrapper__img");

galleryBtns.forEach(btn => {

    btn.addEventListener("click", () => {
        for (let i = 0; i < galleryBtns.length; i++) {
            galleryBtns[i].classList.remove("section-gallery__button--active");
        }
        btn.classList.add("section-gallery__button--active");

        // Image filter

        switch (btn.textContent) {
            case "ALL":
                {
                    galleryImages.forEach(img => {
                        img.classList.add("section-gallery__wrapper__img--active");
                    })
                    break;
                }
            case "LAWN CARE":
                {
                    galleryImages.forEach(img => {
                        img.classList.remove("section-gallery__wrapper__img--active");
                        if (img.classList.contains("lawn")) {
                            img.classList.add("section-gallery__wrapper__img--active");
                        }
                    })
                    break;
                }
            case "GARDEN CARE":
                {
                    galleryImages.forEach(img => {
                        img.classList.remove("section-gallery__wrapper__img--active");
                        if (img.classList.contains("garden")) {
                            img.classList.add("section-gallery__wrapper__img--active");
                        }
                    })
                    break;
                }
            case "PLANTING":
                {
                    galleryImages.forEach(img => {
                        img.classList.remove("section-gallery__wrapper__img--active");
                        if (img.classList.contains("planting")) {
                            img.classList.add("section-gallery__wrapper__img--active");
                        }
                    })
                    break;
                }
        }

        //    
    })
})


// lightbox options

lightbox.option({
    'wrapAround': true
})