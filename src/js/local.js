$(document).ready(function () {
    var body = $('body');
    body.on('click', '.page-header__toggle-btn', function () {
      event.preventDefault();
      $('.main-nav').removeClass('main-nav--closed');
      $('.main-nav').addClass('main-nav--opened');
      $('.page-header__top').addClass('page-header__top--opened');
    });

    body.on('click', '.page-header__close-btn', function () {
      event.preventDefault();
      $('.main-nav').removeClass('main-nav--opened');
      $('.main-nav').addClass('main-nav--closed');
      $('.page-header__top').removeClass('page-header__top--opened');
    });


  body.on('click', '.page-header__callback-toggle', function () {
      event.preventDefault();
      $('.page-header__callback-container').addClass('page-header__callback-container--opened');
      $('.page-header__top').addClass('page-header__top--callback');
    });

  body.on('click', '.page-header__callback-close', function () {
      event.preventDefault();
      $('.page-header__callback-container').removeClass('page-header__callback-container--opened');
      $('.page-header__top').removeClass('page-header__top--callback');
    });


  body.on('click', '.search-form__btn--one-way', function () {
      event.preventDefault();
      $('.search-form__btn--roundtrip').removeClass('search-form__btn--active');
      $('.search-form__btn--one-way').addClass('search-form__btn--active');
    });

  body.on('click', '.search-form__btn--roundtrip', function () {
      event.preventDefault();
      $('.search-form__btn--one-way').removeClass('search-form__btn--active');
      $('.search-form__btn--roundtrip').addClass('search-form__btn--active');
    });


  body.on('click', '.page-header__callback-button', function () {
      event.preventDefault();
      $('.popup-free').addClass('popup-show');
      $('.blur').addClass('blur-visible');
    });

  body.on('click', '.popup__close', function () {
      event.preventDefault();
      $('.blur').removeClass('blur-visible');
      $(this).parent().removeClass('popup-show');
    });

  body.on('click', '.section-top-offers__call-button', function () {
      event.preventDefault();
      $('.popup-fast').addClass('popup-show');
      $('.blur').addClass('blur-visible');
    });


  function simpleValidate() {
    body.on('focus', 'input', function () {
      $(this).parent('.input-wrapper').addClass('input-warning');
    });

    body.on('blur', 'input', function () {
      if ($(this).val()) {
        $(this).parent('.input-wrapper').removeClass('input-warning');
      };
    });
  };

  simpleValidate();

});
