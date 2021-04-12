$(document).ready(function () {
   $('.slider').slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      speed: 500,
      easing: 'ease',
      autoplay: true,
      autoplaySpeed: 1000,
      draggable: true,
      swipe: true,
      // touchThreshold:
      // touchMoveie
      // waitForAnimate:
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1
            }
         }, {
            breakpoint: 480,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
});
$(document).ready(function () {
   $('.sliter').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease',
      Infinity: true,
      autoplay: false,
      autoplaySpeed: 1000,
      // touchThreshold:
      // touchMoveie
      // waitForAnimate:
   });
});
