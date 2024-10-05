;
(function($) {
    "use strict";

    $(document).ready(function() {

        /*-------------------------------
            Navbar Fix
        ------------------------------*/
        if ($(window).width() < 991) {
            navbarFix()
        }
        /*------------------------------
            smoth achor effect
        ------------------------------*/
        $(document).on('click', '.navbar-nav li a', function(e) {
            var anchor = $(this).attr('href');
            var link = anchor.slice(0, 1);
            if ('#' == link) {
                e.preventDefault();
                var top = $(anchor).offset().top;
                $('html, body').animate({
                    scrollTop: $(anchor).offset().top
                }, 1000);
                $(this).parent().addClass('current-menu-item').siblings().removeClass('current-menu-item');
            }

        });
        // Poll Btn
        $(".poll-btn").click(function(){
            $(".poll-wrapper").toggleClass("vote");
        });
         /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click', '#body-overlay', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.border-none', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '#search', function(e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });


        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });

        /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

        /*------------------------------
            counter section activation
        -------------------------------*/
        var counternumber = $('.count-num');
        counternumber.counterUp({
            delay: 20,
            time: 1000
        });
        // MouseEvent
        var $mosueOverEffect = $('.outer');
        if ($mosueOverEffect.length > 0) {
            VanillaTilt.init(document.querySelectorAll(".outer"), {
                max: 80,
                speed: 400,
                perspective: 200,
                scale: 1.2,
                reverse: true,
            });
        }
        /**-----------------------------
         *  countdown
         * ---------------------------*/
        if ($("#mycountdown").length > 0) {
            $("#mycountdown").countdown("2022/09/20", function(event) {
                $('.month').text(
                    event.strftime('%m')
                );
                $('.days').text(
                    event.strftime('%n')
                );
                $('.hours').text(
                    event.strftime('%H')
                );
                $('.mins').text(
                    event.strftime('%M')
                );
                $('.secs').text(
                    event.strftime('%S')
                );
            });

        }
        // Clinet - active
        $('.client-active-area').owlCarousel({
                loop: true,
                items: 4,
                nav: true,
                margin: 100,
                dots: false,
                navText: ['<span data-icon="&#x23;"></span>', '<span data-icon="&#x24;"></span>'],
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    }
                }
            })
         /*---------------------------
            testimonial carousel
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1500,
                margin: 30,
                dots: false,
                nav: true,
                // center: true,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }
        /*---------------------------
            testimonial carousel Two
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel-two');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 3000,
                dots: false,
                nav: true,
                center: true,
                margin: 25,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    },
                    1440: {
                        items: 5
                    },
                    1920: {
                        items: 5
                    }
                }
            });
        }

        /*---------------------------
            testimonial carousel three
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel-three');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                autoplaySpeed: 2500,
                smartSpeed: 2500,
                margin: 30,
                items: 2,
                dots: true,
                nav: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                // animateOut: 'fadeOut',
                // animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                }
            });
        }
        /*---------------------------
            testimonial carousel Four
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel-four');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                autoplaySpeed: 2500,
                smartSpeed: 2500,
                margin: 30,
                items: 2,
                dots: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                // animateOut: 'fadeOut',
                // animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                }
            });
        }
        /*---------------------------
            testimonial carousel five
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel-five');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                items: 2,
                dots: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                }
            });
        }
        /*---------------------------
            testimonial carousel six
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel-six');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                items: 2,
                dots: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    },
                }
            });
        }
        /*---------------------------
            testimonial carousel seven
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel-seven');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                items: 2,
                center: true,
                dots: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    },
                }
            });
        }
        /*---------------------------
            testimonial eight
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel-eight');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1500,
                smartSpeed: 1000,
                margin: 30,
                dots: false,
                nav: true,
                center: true,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }
        /*---------------------------
            testimonial eight
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel-nine');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                smartSpeed: 800,
                margin: 30,
                dots: false,
                nav: true,
                center: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }
        /*---------------------------
            Header-slider-one
        ---------------------------*/
        var $TestimonialCarousel = $('.header-slider-one');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 500,
                autoplaySpeed: 2500,
                smartSpeed: 2500,
                margin: 30,
                items: 2,
                dots: true,
                nav: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                // animateOut: 'fadeOut',
                // animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }
        /*---------------------------
            Header-slider-two
        ---------------------------*/
        var $TestimonialCarousel = $('.header-slider-two');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                items: 2,
                dots: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }

        /*---------------------------
            Legend slider
        ---------------------------*/
        var $TestimonialCarousel = $('.legend-slider-one');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                items: 4,
                dots: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1400: {
                        items: 3
                    },
                    1920: {
                        items: 4
                    }
                }
            });
        }

    });



    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function() {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        // Sticky-Memu
        if ($(window).width() > 991) {
            StickyMenu();
        }



    });


    $(window).on('resize', function() {
        /*-------------------------------
            Navbar Fix
        ------------------------------*/
        if ($(window).width() < 991) {
            navbarFix()
        }
    });


    $(window).on('load', function() {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

    });

    function navbarFix() {
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a, .navbar-area .navbar-nav li.appside-megamenu>a', function(e) {
            e.preventDefault();
        })
    }

    function StickyMenu() {
        /*--------------------------
        sticky menu activation
        ---------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 700) {
            mainMenuTop.addClass('animated fadeInDown nav-fixed');
        } else {
            mainMenuTop.removeClass('animated fadeInDown nav-fixed ');
        }
        lastScrollTop = st;
    }
    function submenuReverse() {$(window).scrollTop()
        if ($(window).scrollTop() > 400) {
            $('.nav-style-03 .sub-menu').removeClass('menu-reverse')
        } else {
            $('.nav-style-03 .sub-menu').addClass('menu-reverse')
        }
    }
    /*---------------------------
        Histoy Slider one
    ---------------------------*/
      var $HistoryCarousel = $('.history-slider-one');
        if ($HistoryCarousel.length > 0) {
            $HistoryCarousel.slick({ 
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                asNavFor: '.history-slider-two',
                appendArrows: $('.slick-slider-controls .slick-nav'),
                prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
                nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }
    /*---------------------------
        Histoy Slider two
    ---------------------------*/
    var $HistoryCarousel = $('.history-slider-two');
    if ($HistoryCarousel.length > 0) {
        $HistoryCarousel.slick({ 
            slidesToShow: 12,
            slidesToScroll: 1,
            asNavFor: '.history-slider-one',
            dots: false,
            arrows: false,
            infinite: true,
            focusOnSelect: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsive: [
                {
                  breakpoint: 0,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 460,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 599,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 6,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                      slidesToShow: 7,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 8,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1920,
                    settings: {
                      slidesToShow: 12,
                      slidesToScroll: 1
                    }
                }
            ]
        });
    }
    /*---------------------------
        political Slider one
    ---------------------------*/
    var $headerSlider = $('.political-slider-one');
	if ($headerSlider.length > 0) {
		$headerSlider.slick({
			slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 2500,
            speed: 700,
            asNavFor: '.political-slider-two',
		});
    }
    /*---------------------------
        political Slider two
    ---------------------------*/
    var $headerSlider = $('.political-slider-two');
	if ($headerSlider.length > 0) {
		$headerSlider.slick({
			slidesToShow: 3,
            slidesToScroll: 3,
            asNavFor: '.political-slider-one',
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            focusOnSelect: true,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
		});
	}
    // Vote Poll js
    const options = document.querySelectorAll(".label");
    for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", ()=>{
        for (let j = 0; j < options.length; j++) {
        if(options[j].classList.contains("selected")){
            options[j].classList.remove("selected");
        }
        }

        options[i].classList.add("selected");
        for (let k = 0; k < options.length; k++) {
        options[k].classList.add("selectall");
        }

        let forVal = options[i].getAttribute("for");
        let selectInput = document.querySelector("#"+forVal);
        let getAtt = selectInput.getAttribute("type");
        if(getAtt == "checkbox"){
        selectInput.setAttribute("type", "radio");
        }else if(selectInput.checked == true){
        options[i].classList.remove("selected");
        selectInput.setAttribute("type", "checkbox");
        }

        let array = [];
        for (let l = 0; l < options.length; l++) {
        if(options[l].classList.contains("selected")){
            array.push(l);
        }
        }
        if(array.length == 0){
        for (let m = 0; m < options.length; m++) {
            options[m].removeAttribute("class");
        }
        }
    });
    }

     // Menu Submenu Dropdown style
    //  $(".menu-item-has-children a").on("click", function () {
    //      var element = $(this).parent("li");
    //      if (element.hasClass("show")) {
    //          element.removeClass("show");
    //          element.children("ul").slideUp(500);
    //      } else {
    //          element.siblings("li").removeClass('show');
    //          element.addClass("show");
    //          element.siblings("li").find("ul").slideUp(500);
    //          element.children('ul').slideDown(500);
    //      }
    //  });
    
        $(".header-nav li a").on("click", function () {
            var element = $(this).parent("li");
            if (element.hasClass("show")) {
            element.removeClass("show");
            element.children("ul").slideUp(500);
            }
            else {
            element.siblings("li").removeClass('show');
            element.addClass("show");
            element.siblings("li").find("ul").slideUp(500);
            element.children('ul').slideDown(500);
            }
        });

    $(window).on('scroll', function () {
        submenuReverse()
    })
    
})(jQuery);