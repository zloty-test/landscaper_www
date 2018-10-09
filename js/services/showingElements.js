$(document).on("scroll", function () {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width();
  const scrollValue = $(this).scrollTop();
  const $element1 = $(".element1");
  const $element4 = $(".element4");
  const $element2 = $(".row.elements img");
  const $element3 = $(".elements img");
  const element1FromTop = $element1.offset().top;
  const element1Height = $element1.outerHeight();
  if (scrollValue > element1FromTop - windowHeight + 300) {
    $element1.addClass("show");
    $element4.addClass("show");
    if (windowWidth >= 1024) {
      $element2.addClass("rotate");
      $element3.addClass("rotate");
    }
  }
});