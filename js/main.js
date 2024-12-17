(function ($) {
    "use strict";
    
  /**  
 (function($) {
    function adjustLayoutBasedOnItems() {
        let $carouselItems = $(".owl-carousel-products .block-products-carousel__column"); // Select carousel items
        let itemCount = $carouselItems.length; // Count items
        let $carousel = $(".block-products-carousel");
        let currentLayout = $carousel.attr("data-layout");

        console.log("Item Count:", itemCount); // Debugging: Check the item count
        console.log("Current Layout:", currentLayout); // Debugging: Check the current layout

        // If there's only one item
        if (itemCount === 1) {
            if (currentLayout !== "grid-1") {
                // Change to grid-1 layout
                $carousel.attr("data-layout", "grid-1");
                $(".change-left-lg").removeClass("col-lg-7 col-lg-8").addClass("col-lg-9");
                $(".change-right-lg").removeClass("col-lg-5 col-lg-4").addClass("col-lg-3");
                $(".section-header__arrows").attr("style", "display: none !important;");

                // Update styles
                $(".product-card__name").css("font-size", "18px");
                $(".fixPos-slider").css("top", "57.4%");
                $(".carousel-right-side .product-card__price.product-card__price--current").css("font-size", "20px");
                 $(".video-one").attr("style", "display: none !important;");
            $(".video-two-hidden").attr("style", "display: block !important;");
            }
        } 
        // If there are two items
        else if (itemCount === 2) {
            if (currentLayout !== "grid-2") {
                $carousel.attr("data-layout", "grid-2");
                $(".change-left-lg").removeClass("col-lg-7 col-lg-9").addClass("col-lg-8");
                $(".change-right-lg").removeClass("col-lg-5 col-lg-3").addClass("col-lg-4");
                 $(".video-one").attr("style", "display: none !important;");
            $(".video-two-hidden").attr("style", "display: block !important;");

                // Update styles
                $(".fixPos-slider").css("top", "46%");
            }
        } 
        // If there are three or more items
        else {
            if (currentLayout !== "grid-3") {
                $carousel.attr("data-layout", "grid-3");
                $(".change-left-lg").removeClass("col-lg-9 col-lg-8").addClass("col-lg-7");
                $(".change-right-lg").removeClass("col-lg-3 col-lg-4").addClass("col-lg-5");

                // Reset styles
                $(".product-card__name").css("font-size", "");
                $(".fixPos-slider").css("top", "");
                $(".carousel-right-side .product-card__price.product-card__price--current").css("font-size", "");
            }
        }

        // Debugging: Log the final classes after changes
        console.log("Left Class:", $(".change-left-lg").attr("class"));
        console.log("Right Class:", $(".change-right-lg").attr("class"));
    }

    // Initialize Owl Carousel with items based on item count
    let $carouselItems = $(".owl-carousel-products .block-products-carousel__column");
    let itemCount = $carouselItems.length;

    $(".owl-carousel-products").owlCarousel({
        items: Math.min(itemCount, 3), // Set items based on the count, max of 3
        margin: 10, // Margin between items
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1 // For small screens
            },
            576: {
                items: 2 // For medium screens (≥576px)
            },
            768: {
                items: Math.min(itemCount, 3) // For larger screens, set items based on count
            }
        },
        onInitialized: adjustLayoutBasedOnItems, // Call the function when initialized
        onChanged: adjustLayoutBasedOnItems // Call the function when items are changed
    });

    // Call the function on window resize to handle dynamic changes
    $(window).on("resize", adjustLayoutBasedOnItems);
})(jQuery);
 
(function($) {
    function adjustLayoutBasedOnItemsV2() {
        let $carouselItems = $(".owl-carousel-products-5 .block-products-carousel__column");
        let itemCount = $carouselItems.length;
        let $carousel = $(".block-products-carousel");
        let currentLayout = $carousel.attr("data-layout");

        console.log("Item Count:", itemCount);
        console.log("Current Layout:", currentLayout);

        // Update the layout based on item count
        if (itemCount === 1 && currentLayout !== "grid-1") {
            $carousel.attr("data-layout", "grid-1");
            $(".change-left-lg").removeClass("col-lg-7 col-lg-8").addClass("col-lg-9");
            $(".change-right-lg").removeClass("col-lg-5 col-lg-4").addClass("col-lg-3");
            $(".product-card__name").attr("style", "font-size: 18px !important;");
            $(".carousel-right-side .product-card__price.product-card__price--current").css("font-size", "20px");
             $(".product-card__rating").attr("style", "display: block !important;");
            $(".designation-hide").attr("style", "display: block !important;");
            $(".bottomFooterWrapper").attr("style", "display: block !important;");
            $(".margin-bottom-5").attr("style", "height: 95px !important;");
            $(".break-line").remove();
            $(".css-fix-5 .brut").attr("style", "display: inline-block !important; font-size: 16px !important;");
            $(".carousel-right-side .product-card__price.product-card__price--current").attr("style", "font-size: 16px !important;");
            $(".stockNumber").attr("style", "top: 53.8% !important;");
            $(".section-header__arrows").attr("style", "display: none !important;");
             $(".video-one").attr("style", "display: none !important;");
            $(".video-two-hidden").attr("style", "display: block !important;");
            
        } else if (itemCount === 2 && currentLayout !== "grid-2") {
            $carousel.attr("data-layout", "grid-2");
            $(".change-left-lg").removeClass("col-lg-7 col-lg-9").addClass("col-lg-8");
            $(".change-right-lg").removeClass("col-lg-5 col-lg-3").addClass("col-lg-4");
            $(".fixPos-slider-2").css("top", "46%");
            $(".product-card__rating").attr("style", "display: block !important;");
            $(".designation-hide").attr("style", "display: block !important;");
            $(".bottomFooterWrapper").attr("style", "display: block !important;");
            $(".margin-bottom-5").attr("style", "height: 95px !important;");
            $(".break-line").remove();
            $(".css-fix-5 .brut").attr("style", "display: inline-block !important; font-size: 16px !important;");
            $(".carousel-right-side .product-card__price.product-card__price--current").attr("style", "font-size: 16px !important;");
            $(".stockNumber").attr("style", "top: 41.8% !important;");
            $(".video-one").attr("style", "display: none !important;");
            $(".video-two-hidden").attr("style", "display: block !important;");
            
        } else if (itemCount === 3 && currentLayout !== "grid-3") {
            $carousel.attr("data-layout", "grid-3");
            $(".change-left-lg").removeClass("col-lg-8 col-lg-9").addClass("col-lg-7");
            $(".change-right-lg").removeClass("col-lg-4 col-lg-3").addClass("col-lg-5");
            $("a.product-reference.slider-2-fontSize").attr("style", "font-size: 18px !important;");
            $(".stockNumber").attr("style", "top: 40.4% !important;");
            $(".carousel-right-side .product-card__price.product-card__price--current").attr("style", "font-size: 16px !important;");
            $(".css-fix-5 .brut").attr("style", "display: inline-block !important; font-size: 16px !important;");
            $(".designation-hide").attr("style", "display: block !important;");
            $(".bottomFooterWrapper").attr("style", "display: block !important;");
            $(".product-card__rating").attr("style", "display: none !important;");
            $(".margin-bottom-5").attr("style", "height: 90px !important;");
            $(".break-line").remove();
            
            
        } else if (itemCount === 4 && currentLayout !== "grid-4") {
            $carousel.attr("data-layout", "grid-4");
            $(".change-left-lg").removeClass("col-lg-9 col-lg-8").addClass("col-lg-7");
            $(".change-right-lg").removeClass("col-lg-3 col-lg-4").addClass("col-lg-5");
            $("a.product-reference.slider-2-fontSize").attr("style", "font-size: 18px !important;");
            $(".stockNumber").attr("style", "top: 39.4% !important;");
            $(".carousel-right-side .product-card__price.product-card__price--current").attr("style", "font-size: 16px !important;");
            $(".product-card__rating").attr("style", "display: none !important;");
            $(".designation-hide").attr("style", "display: none !important;");
            $(".bottomFooterWrapper").attr("style", "display: none !important;");
            
        } 

    else if( itemCount === 5 && currentLayout === "grid-5" ) {
          $(".product-card__rating").attr("style", "display: none !important;");
          $(".designation-hide").attr("style", "display: none !important;");
        $(".bottomFooterWrapper").attr("style", "display: none !important;");
        $(".css-fix-5, .css-fix-5 .brut").attr("style", "font-size: 13px  !important;");
    }

        console.log("Left Class:", $(".change-left-lg").attr("class"));
        console.log("Right Class:", $(".change-right-lg").attr("class"));
    }

    // Initialize Owl Carousel
    let $carouselItems = $(".owl-carousel-products-5 .block-products-carousel__column");
    let itemCount = $carouselItems.length;

    $(".owl-carousel-products-5").owlCarousel({
        items: Math.min(itemCount, 5),
        margin: 13,
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: Math.min(itemCount, 5) }
        },
        onInitialized: adjustLayoutBasedOnItemsV2,
        onChanged: adjustLayoutBasedOnItemsV2
    });

    $(window).on("resize", adjustLayoutBasedOnItemsV2);
})(jQuery);
    
    **/

    let DIRECTION = null;

    function direction() {
        if (DIRECTION === null) {
            DIRECTION = getComputedStyle(document.body).direction;
        }

        return DIRECTION;
    }

    function isRTL() {
        return direction() === 'rtl';
    }


    /*
    // collapse (filter by brand)
    */
    $(function () {
        $('[data-collapse]').each(function (i, element) {
            const collapse = element;
            const openedClass = $(element).data('collapse-opened-class');

            $('[data-collapse-trigger]', collapse).on('click', function () {
                const item = $(this).closest('[data-collapse-item]');
                const content = item.children('[data-collapse-content]');
                const itemParents = item.parents();

                itemParents.slice(0, itemParents.index(collapse) + 1).filter('[data-collapse-item]').css('height', '');

                if (item.is('.' + openedClass)) {
                    const startHeight = content.height();

                    content.css('height', startHeight + 'px');
                    content.height(); // force reflow
                    item.removeClass(openedClass);

                    content.css('height', '');
                } else {
                    const startHeight = content.height();

                    item.addClass(openedClass);

                    const endHeight = content.height();

                    content.css('height', startHeight + 'px');
                    content.height(); // force reflow
                    content.css('height', endHeight + 'px');
                }
            });

            $('[data-collapse-content]', collapse).on('transitionend', function (event) {
                if (event.originalEvent.propertyName === 'height') {
                    $(this).css('height', '');
                }
            });
        });
    });



    /*
    // mobile search
    */
    $(function() {
        const mobileSearch = $('.mobile-header__search');

        if (mobileSearch.length) {
            $('.mobile-indicator--search .mobile-indicator__button').on('click', function() {
                if (mobileSearch.is('.mobile-header__search--open')) {
                    mobileSearch.removeClass('mobile-header__search--open');
                } else {
                    mobileSearch.addClass('mobile-header__search--open');
                    mobileSearch.find('.mobile-search__input')[0].focus();
                }
            });

            mobileSearch.find('.mobile-search__button--close').on('click', function() {
                mobileSearch.removeClass('mobile-header__search--open');
            });

            document.addEventListener('click', function(event) {
                if (!$(event.target).closest('.mobile-indicator--search, .mobile-header__search, .modal').length) {
                    mobileSearch.removeClass('mobile-header__search--open');
                }
            }, true);

            $('.mobile-search__vehicle-picker').on('click', function () {
                $('#vehicle-picker-modal').modal('show');
            });
        }
    });

   
    /*
    // mobile-menu
    */
    $(function () {
        const body = $('body');
        const mobileMenu = $('.mobile-menu');
        const mobileMenuBody = mobileMenu.children('.mobile-menu__body');

        if (mobileMenu.length) {
            const open = function() {
                const bodyWidth = body.width();
                body.css('overflow', 'hidden');
                body.css('paddingRight', (body.width() - bodyWidth) + 'px');

                mobileMenu.addClass('mobile-menu--open');
            };
            const close = function() {
                body.css('overflow', 'auto');
                body.css('paddingRight', '');

                mobileMenu.removeClass('mobile-menu--open');
            };

            $('.mobile-header__menu-button').on('click', function() {
                open();
            });
            $('.mobile-menu__backdrop, .mobile-menu__close').on('click', function() {
                close();
            });
        }

        const panelsStack = [];
        let currentPanel = mobileMenuBody.children('.mobile-menu__panel');

        mobileMenu.on('click', '[data-mobile-menu-trigger]', function(event) {
            const trigger = $(this);
            const item = trigger.closest('[data-mobile-menu-item]');
            let panel = item.data('panel');

            if (!panel) {
                panel = item.children('[data-mobile-menu-panel]').children('.mobile-menu__panel');

                if (panel.length) {
                    mobileMenuBody.append(panel);
                    item.data('panel', panel);
                    panel.width(); // force reflow
                }
            }

            if (panel && panel.length) {
                event.preventDefault();

                panelsStack.push(currentPanel);
                currentPanel.addClass('mobile-menu__panel--hide');

                panel.removeClass('mobile-menu__panel--hidden');
                currentPanel = panel;
            }
        });
        mobileMenu.on('click', '.mobile-menu__panel-back', function() {
            currentPanel.addClass('mobile-menu__panel--hidden');
            currentPanel = panelsStack.pop();
            currentPanel.removeClass('mobile-menu__panel--hide');
        });
    });

    /*
    // off canvas filters
    */
    $(function () {
        const body = $('body');
        const sidebar = $('.sidebar');
        const offcanvas = sidebar.hasClass('sidebar--offcanvas--mobile') ? 'mobile' : 'always';
        const media = matchMedia('(max-width: 991px)');

        if (sidebar.length) {
            const open = function() {
                if (offcanvas === 'mobile' && !media.matches) {
                    return;
                }

                const bodyWidth = body.width();
                body.css('overflow', 'hidden');
                body.css('paddingRight', (body.width() - bodyWidth) + 'px');

                sidebar.addClass('sidebar--open');
            };
            const close = function() {
                body.css('overflow', 'auto');
                body.css('paddingRight', '');

                sidebar.removeClass('sidebar--open');
            };
            const onMediaChange = function() {
                if (offcanvas === 'mobile') {
                    if (!media.matches && sidebar.hasClass('sidebar--open')) {
                        close();
                    }
                }
            };

            if (media.addEventListener) {
                media.addEventListener('change', onMediaChange);
            } else {
                media.addListener(onMediaChange);
            }

            $('.filters-button').on('click', function() {
                open();
            });
            $('.sidebar__backdrop, .sidebar__close').on('click', function() {
                close();
            });
        }
    });




    /*
    // main menu / megamenu
    */
    $(function () {
        const megamenuArea = $('.megamenu-area');

        $('.main-menu__item--submenu--megamenu').on('mouseenter', function() {
            const megamenu = $(this).children('.main-menu__submenu');
            const offsetParent = megamenu.offsetParent();

            if (isRTL()) {
                const position = Math.max(
                    megamenuArea.offset().left,
                    Math.min(
                        $(this).offset().left + $(this).outerWidth() - megamenu.outerWidth(),
                        megamenuArea.offset().left + megamenuArea.outerWidth() - megamenu.outerWidth()
                    )
                ) - offsetParent.offset().left;

                megamenu.css('left', position + 'px');
            } else {
                const position = Math.max(
                    0,
                    Math.min(
                        $(this).offset().left,
                        megamenuArea.offset().left + megamenuArea.outerWidth() - megamenu.outerWidth()
                    )
                ) - offsetParent.offset().left;

                megamenu.css('left', position + 'px');
            }
        });
    });





(function($) {
    $(function() {
        // Initialize Owl Carousel
        var owlCarousel = $('.owl-carousel:not(.slideShowCarousel, .owl-carousel-products)').owlCarousel({
            loop: true, // Enables infinite looping
            margin: 10, // Space between items
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false, // Enables next/prev navigation buttons
            dots: false, // Enables navigation dots
            responsive: {
                0: {
                    items: 1 // 1 item for small screens
                },
                440: {
                    items: 2 // 2 items for medium screens
                },
                768: {
                    items: 3 // 3 items for medium screens
                },
                1024: {
                    items: 4 // 4 items for large screens
                },
                1200: {
                    items: 5 // 5 items for very large screens
                }
            }
        });

        // Custom navigation arrows
        $('.section-header__arrow--prev').on('click', function() {
            owlCarousel.trigger('prev.owl.carousel', [500]);
        });
        $('.section-header__arrow--next').on('click', function() {
            owlCarousel.trigger('next.owl.carousel', [500]);
        });

   
    });
})(jQuery);
    
    
    (function($) {
    $(function() {
        // Initialize Owl Carousel
        var owlCarousel = $('.owl-carousel-products').owlCarousel({
            loop: true, // Enables infinite looping
            margin: 10, // Space between items
            nav: false, // Enables next/prev navigation buttons
            autoplay: true,
            autoplayTimeout: 4000,
            dots: false, // Enables navigation dots
            responsive: {
                0: {
                    items: 1 // 1 item for small screens
                },
                440: {
                    items: 2 // 2 items for medium screens
                },
                768: {
                    items: 2 // 2 items for medium screens
                },
                1024: {
                    items: 2 // 2 items for large screens
                },
                1200: {
                    items: 3 // 3 items for very large screens
                }
            }
        });

        // Custom navigation arrows
        $('.section-header__arrow--prev').on('click', function() {
            owlCarousel.trigger('prev.owl.carousel', [500]);
        });
        $('.section-header__arrow--next').on('click', function() {
            owlCarousel.trigger('next.owl.carousel', [500]);
        });

   
    });
})(jQuery);

   
    
 
    /*
    // initialize custom numbers
    */
    $(function () {
        $('.input-number').customNumber();
    });

  
    /*
    // chrono
    */
    $(function () {
        $('.block-sale').each(function() {
            const owlCarousel = $(this).find('.owl-carousel');

            $(this).find('.block-sale__arrow--prev').on('click', function() {
                owlCarousel.trigger('prev.owl.carousel', [500]);
            });
            $(this).find('.block-sale__arrow--next').on('click', function() {
                owlCarousel.trigger('next.owl.carousel', [500]);
            });
        });
        $('.block-sale__timer').each(function() {
            const timer = $(this);
            const MINUTE = 60;
            const HOUR = MINUTE * 60;
            const DAY = HOUR * 24;

            let left = DAY * 3;

            const format = function(number) {
                let result = number.toFixed();

                if (result.length === 1) {
                    result = '0' + result;
                }

                return result;
            };

            const updateTimer = function() {
                left -= 1;

                if (left < 0) {
                    left = 0;

                    clearInterval(interval);
                }

                const leftDays = Math.floor(left / DAY);
                const leftHours = Math.floor((left - leftDays * DAY) / HOUR);
                const leftMinutes = Math.floor((left - leftDays * DAY - leftHours * HOUR) / MINUTE);
                const leftSeconds = left - leftDays * DAY - leftHours * HOUR - leftMinutes * MINUTE;

                timer.find('.timer__part-value--days').text(format(leftDays));
                timer.find('.timer__part-value--hours').text(format(leftHours));
                timer.find('.timer__part-value--minutes').text(format(leftMinutes));
                timer.find('.timer__part-value--seconds').text(format(leftSeconds));
            };

            const interval = setInterval(updateTimer, 1000);

            updateTimer();
        });
    });

    /*
    // header slider
    */
    $(function () {
    var videoSlider = $('.block-slideshow__carousel .owl-carousel');
    var videoEndDelay = 4000; // 4 seconds delay after the video ends
    var firstLoop = true; // Flag to track the first loop

    // Initialize Owl Carousel
    videoSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: false, // Start with autoplay off
        autoplayTimeout: 4000,
        items: 1,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Chevrons
        rtl: isRTL() // Check for RTL support
    });

    // Pause video on slide change
    videoSlider.on('translate.owl.carousel', function(e) {
        // Pause any playing video
        $('.owl-item .item video').each(function() {
            $(this).get(0).pause();
        });
    });

    // Play video when the slide is active
  videoSlider.on('translated.owl.carousel', function(e) {
    var $activeVideo = $('.owl-item.active').find('video');
    if ($activeVideo.length) {
        $activeVideo.get(0).muted = true; // Mute video for iOS autoplay
        $activeVideo.get(0).playsInline = true; // Inline play for iOS
        $activeVideo.get(0).play().catch(function() {
            console.warn('Video play failed on iOS');
        });
        videoSlider.trigger('stop.owl.autoplay'); // Stop autoplay
    } else {
        videoSlider.trigger('play.owl.autoplay');
    }
});


    // Handle the video end event for all videos
    videoSlider.find('video').each(function() {
        $(this).on('ended', function() {
            // Trigger the next slide immediately after video ends
            videoSlider.trigger('next.owl.carousel');
        });
    });

    // Pause the loop when video is active, and restart after the video ends or on non-video slides
    videoSlider.on('changed.owl.carousel', function(e) {
        var currentSlide = $('.owl-item.active');

        // Pause loop when video is active
        if (currentSlide.find('video').length !== 0) {
            videoSlider.trigger('stop.owl.autoplay');
        } else {
            // If no video, start autoplay after the 4-second delay
            if (firstLoop) {
                // Delay for first loop (for the first transition)
                setTimeout(function() {
                    videoSlider.trigger('play.owl.autoplay');
                }, videoEndDelay);
                firstLoop = false; // Reset flag after first loop
            } else {
                videoSlider.trigger('play.owl.autoplay');
            }
        }
    });
});



   
})(jQuery);