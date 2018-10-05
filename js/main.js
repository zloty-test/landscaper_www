
var menu = (function(){
    var data = {
        menuBtn : document.querySelector('#js-menu-btn'),
        menuContent : document.querySelector('#js-menu-content')
    };
    data.menuBtn.addEventListener('click',function(){
        data.menuContent.classList.toggle('menu-content--on');
    });
})();
