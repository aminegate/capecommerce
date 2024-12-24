(function ($) {
    "use strict";
    

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

    // Store the reference to the first panel
    const firstPanel = mobileMenuBody.children('.mobile-menu__panel').first();
    
    if (mobileMenu.length) {
        const open = function() {
            const bodyWidth = body.width();
            body.css('overflow', 'hidden');
            body.css('paddingRight', (body.width() - bodyWidth) + 'px');

            mobileMenu.addClass('mobile-menu--open');
            
            // When reopening the menu, reset to the first panel
            currentPanel = firstPanel;
            panelsStack.length = 0;  // Clear the stack when reopening
            currentPanel.removeClass('mobile-menu__panel--hidden');
            currentPanel.removeClass('mobile-menu__panel--hide');
        };
        
        const close = function() {
            body.css('overflow', 'auto');
            body.css('paddingRight', '');
            mobileMenu.removeClass('mobile-menu--open');

            // Hide current panel before closing
            if (currentPanel) {
                currentPanel.addClass('mobile-menu__panel--hidden');
            }
        };

        $('.mobile-header__menu-button').on('click', function() {
            open();
        });
        $('.mobile-menu__backdrop, .mobile-menu__close').on('click', function() {
            close();
        });
    }

    const panelsStack = [];
    let currentPanel = firstPanel;  // Start with the first panel

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

        // NEW CODE: Close sidebar on radio button click
        $('input[type="radio"]').on('click', function() {
            close(); // Directly close the sidebar
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
    var videoEndDelay = 10000; // 4 seconds delay after the video ends
    var firstLoop = true; // Flag to track the first loop

    // Initialize Owl Carousel
    videoSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: false, // Start with autoplay off
        autoplayTimeout: 10000,
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