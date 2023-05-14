/****************************/
/* Header button */
/****************************/
$('.header__cta').on('mouseenter', () => {
  $('.header__cta').css({
    backgroundColor: '#162542',
    color: '#fff',
  });
});

$('.header__cta').on('mouseleave', () => {
  $('.header__cta').css({
    backgroundColor: '#e8eff2',
    color: '#162542',
  });
});

/****************************/
/* Hero button */
/****************************/
$('.section-hero__link').on('mouseenter', () => {
  $('.section-hero__link').toggleClass('section-hero__link--bg--orange-light');
});

$('.section-hero__link').on('mouseenter', () => {
  $('.section-hero__link').css({
    backgroundColor: '#ff9b62',
  });
});

$('.section-hero__link').on('mouseleave', () => {
  $('.section-hero__link').css({
    backgroundColor: '#f16718',
  });
});

/****************************/
/* Section features */
/****************************/
$('.section-features__box').hide();

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('.section-features__box').each(function (index) {
      $(this)
        .delay(500 * index)
        .fadeIn(1000);
    });
  }
});
