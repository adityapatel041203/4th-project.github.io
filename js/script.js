
$(document).ready(function () {

  $(".accordian li").click(function () {
    $("p").hide();
    $(this).next("p").slideDown();
    $(".accordian li span i").css("rotate", "0deg");
    $(this).find(".arrow i").css("rotate", "180deg");
  });



  $(function () {
    var header = $(".header-1");

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        header.addClass("fixed-header");
      } else {
        header.removeClass("fixed-header");
      }
    });
  });

  $(function () {
    var header = $(".header-2");

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        header.addClass("fixed-header");
      } else {
        header.removeClass("fixed-header");
      }
    });
  });


  $(".header-2 .menu-icon").click(function () {
    $(".header-2 .slide-down").slideToggle();
  });


  $('.main-slider').slick({
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

});