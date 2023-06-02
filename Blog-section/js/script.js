$(document).ready(function () {
    
    $(function () {
        var header = $(".header-1");

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
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
            if (scroll >= 50) {
                header.addClass("fixed-header");
            } else {
                header.removeClass("fixed-header");
            }
        });
    });

    $(".header-1 .menu li a").click(function () {
        $(".header-1 .menu li a").css("color", "#fff");
        $(this).css("color", "#65E4A3");
    });

    $(".header-2 .menu li a").click(function () {
        $(".header-2 .menu li a").css("color", "#fff");
        $(this).css("color", "#65E4A3");
    });

    $(".header-2 .menu-icon").click(function () {
        $(".header-2 .slide-down").slideToggle();
    });
      
});