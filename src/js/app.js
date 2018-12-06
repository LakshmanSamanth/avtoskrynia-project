$(document).ready(function () {

    $(window).on('load', function () {
        var $preloader = $('#preloader'),
            $spinner = $preloader.find('.fa');

        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() < 10) {
            $('#navigation').removeClass('scrolled');
        }

        else {
            $('#navigation').addClass('scrolled');
        }
    });

    $('a.scrollto').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').stop().animate({scrollTop: $(target).offset().top}, 2600, 'easeInOutExpo',
            function () {
                window.location.hash = target;
            });

        $(".btn--toggler").removeClass('active');

        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });

    $('.btn--toggler').click(function () {
        $(this).toggleClass('active');
        $('#navigation').addClass('scrolled');
    });

    halkaBox.run("lightbox", {
        hideButtons: true,       // hide buttons on touch devices (true || false)
        animation: "slide",      // animation type on next/prev ("slide" || "fade")
        theme: "dark",          // lightbox overlay theme ("light" || "dark")
        preload: 2,              // number of images to preload
        swipeDownToClose: false, // swipe down to close (true || false)
        nextPrevOnWheel: true,   // goto next/prev image on wheel (true || false)
        isZoomable: true         // ability to zoom image (true || false)
    });


    // $("div.cycle-slider").cycle({
    //   fx: "fade",
    //   timeout: parseInt($("div.cycle-slider").attr("data-timeout")) || 7e3,
    //   delay: parseInt($("div.cycle-slider").attr("data-delay")) || 2e3,
    //   speed: parseInt($("div.cycle-slider").attr("data-speed")) || 1e3,
    //   slides: ".slide",
    //   prev: "#prev",
    //   next: "#next"
    // });

    // if(typeof($.magnificPopup) == "undefined") {
    //   return false;
    // }
    //
    // $.extend(true, $.magnificPopup.defaults, {
    //   tClose:     'Close',
    //   tLoading:     'Loading...',
    //
    //   gallery: {
    //     tPrev:    'Previous',
    //     tNext:    'Next',
    //     tCounter:   '%curr% / %total%'
    //   },
    //
    //   image:  {
    //     tError:   'Image not loaded!'
    //   },
    //
    //   ajax:   {
    //     tError:   'Content not loaded!'
    //   }
    // });

    // $(".lightbox").each(function() {
    //
    //   var _t      = $(this),
    //     options   = _t.attr('data-plugin-options'),
    //     config    = {},
    //     defaults  = {
    //       type:         'image',
    //       fixedContentPos:  false,
    //       fixedBgPos:     false,
    //       mainClass:      'mfp-no-margins mfp-with-zoom',
    //       image: {
    //         verticalFit:  true
    //       },
    //
    //       zoom: {
    //         enabled:    false,
    //         duration:     300
    //       },
    //
    //       gallery: {
    //         enabled: false,
    //         navigateByImgClick: true,
    //         preload:      [0,1],
    //         arrowMarkup:    '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
    //         tPrev:        'Previou',
    //         tNext:        'Next',
    //         tCounter:       '<span class="mfp-counter">%curr% / %total%</span>'
    //       },
    //     };
    //
    //   if(_t.data("plugin-options")) {
    //     config = $.extend({}, defaults, options, _t.data("plugin-options"));
    //   }
    //
    //   $(this).magnificPopup(config);
    //
    // });

    $('.js-footer-date').text(new Date().getFullYear());

});

