

jQuery(document).ready(function($){

    
(function ($) {
    $(function () {
        // Adjust styles for all input[type="month"]
        $("input[type='month']").each(function () {
            var inputHeight = $(this).outerHeight();
            $(this).css({
                "line-height": inputHeight + "px", // Match line-height to input height
                "padding": "0"
        });
    });
})(jQuery);

/*............................................................................
................................. Front-End ..................................
............................................................................*/
    
/*
.
.
.
.
*/

/*====================== Highlight Inputs on Focus ===================*/
    
(function () {
    // Add a focus event listener to select elements (excluding '#view-option-sort'),
    // textarea, and input elements (excluding those of type 'submit').
$("select:not('#view-option-sort'), textarea, input:not([type='submit']):not([type='checkbox']):not([type='search'])")


        .on("focus", function () {
            // When the element gains focus, apply a 3px solid border with the color #f2d6a1.
            $(this).css("border", "3px solid #f2d6a1");
        })
        .on("blur", function () {
            // When the element loses focus, reset the border to its default style.
            $(this).css("border", "");
        });
})();

/*======== Apply Orange/Black Bg to Headers in reglement.html ========*/
    
(function () {

    var gradients = [
        'linear-gradient(90deg, rgba(247, 148, 61, 1) 50%, rgba(255, 187, 128, 1) 100%)', // Gradient 1 (orange)
        'linear-gradient(90deg, #31353D 50%, rgba(0, 0, 0, 0.8) 100%)' // Gradient 2 (black)
    ];
    // Loop through each element with the class 'reglementBoxHeader'
    $('.reglementBoxHeader').each(function (index) {
        // Alternate the gradient based on the index (even/odd)
        var gradientIndex = index % 2; // 0 for even, 1 for odd
        $(this).css('background', gradients[gradientIndex]); // Apply the gradient to the background
    });
})();
    
/*==================== Scroll Back To Top Button =====================*/

(function () {
  function initializeScrollProgress() {
    // Insert HTML dynamically
    $('body').prepend(`
      <div class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" 
                style="transition: stroke-dashoffset 10ms linear; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 248.567px;">
          </path>
        </svg>
      </div>
    `);

    var $progressWrap = $('.progress-wrap');
    var $progressPath = $('.progress-wrap path');

    if ($progressPath.length === 0) {
      console.warn('SVG path not found');
      return;
    }

    var pathLength = $progressPath.get(0).getTotalLength();

    // Initial setup of progress path
    $progressPath.css({
      'transition': 'none',
      'stroke-dasharray': pathLength + ' ' + pathLength,
      'stroke-dashoffset': pathLength
    });
    $progressPath.get(0).getBoundingClientRect();

    // Apply transition
    $progressPath.css({
      'transition': 'stroke-dashoffset 10ms linear'
    });

    // Function to update progress based on scroll
    function updateProgress() {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      $progressPath.css('stroke-dashoffset', progress);
    }

    // Initial progress update
    updateProgress();

    // Bind scroll event to update progress and handle progress wrap visibility
    $(window).on('scroll', function() {
      updateProgress();
      if ($(this).scrollTop() > 800) {
        $progressWrap.addClass('active-progress').fadeIn();
      } else {
        $progressWrap.removeClass('active-progress').fadeOut();
      }
    });

    // Smooth scroll to top on progress wrap click
    $progressWrap.on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 550);
      return false;
    });

    // Hide the progress-wrap by default
    $progressWrap.hide();
  }

  // Call the function to initialize the scroll progress
  initializeScrollProgress();
})();

/*========== Apply Brand-Specific Background Color on Hover ==========*/

(function () {
    var colorMap = {

        "002200":    "#015fa5", //fristom
        "LOC009":    "#f56624", //misfilter
        "000022":    "#00944c", //onfil
        "44118824":  "#e20500", //alco
        "44118834":  "#299545", //capfilter
        "000044":    "#edcc47", //gebe
        "000034":    "#175da9", //ate
        "005400":    "#111111", //prof.additif
        "44118822":  "#1b1464", //professional
        "SKF":       "#044f7c", //SKF
        "000011":    "#281e52", //dolz
        "000030":    "#45779c", //fae
        "LOC006":    "#e21d27", //hardex
        "000010":    "#078351", //lpr
        "000018":    "#b21f28", //formpart
        "002900":    "#23386d", //a-n
        "000040":    "#27458e", //diesel
        "000109":    "#263f78", //meyle
        "000080":    "#2556a5", //haug
        "000039":    "#122244"  //3gr

    };

    $('.subcategoryImg').each(function() {
        var imgElement = $(this).find('img');
        var imgSrc = imgElement.attr('src');

        console.log("Image src: " + imgSrc);

        if (imgSrc) {
            var imgName = imgSrc.split('/').pop().split('.')[0];
            console.log("Extracted image name: " + imgName);

            if (colorMap[imgName]) {
                var color = colorMap[imgName];

                // Add the color as a class to the img element
                imgElement.addClass('image-background-' + imgName);

                console.log("Applied background color: " + color);

                // Apply hover effect directly to the image
                imgElement.hover(
                    function() {
                        // On hover, change the background color of the image
                        $(this).css('background-color', color);
                        console.log("Hover - Applied background color: " + color);
                    },
                    function() {
                        // On hover out, revert to the original background color of the image
                        $(this).css('background-color', '');
                        console.log("Hover out - Reset background color");
                    }
                );
            } else {
                console.log("No matching color found for image: " + imgName);
            }
        } else {
            console.log("No src attribute found for image.");
        }
    });
})();

/*========================= Display Input Month =======================*/

(function () {
    $('input[type="month"]').on('focus click', function () {

        $(this)[0].showPicker(); // Open the native picker
    });
})(); 

/*================== Horizontal Tabs in compte.html ==================*/
    
(function () {
// tab arrow click
(function () {
    $(function () {
        var $navTabs = $('.nav-tabs'); // Cache the nav-tabs element
        var $navItems = $('.nav-item'); // Cache the nav-items (tabs)

        // Check if the element exists on the page
        if ($navTabs.length === 0) {
            console.log("No '.nav-tabs' element found on this page. Skipping script.");
            return;
        }

        var scrollPosition = 0;
        var containerWidth = $('.nav-scroll-container').width(); // Width of the visible scrollable container
        var totalWidth = $navTabs[0].scrollWidth; // Total width of the ul element
        var maxScroll = totalWidth - containerWidth; // Maximum scroll value (when the last tab is fully visible)

        var isDragging = false;
        var startX = 0;
        var currentX = 0;
        var velocity = 0;
        var friction = 0.95;

        function updateScrollButtons() {
            $('#scrollLeftBtn').prop('disabled', scrollPosition <= 0);
            $('#scrollRightBtn').prop('disabled', scrollPosition >= maxScroll);
        }

        function applyScroll(position) {
            scrollPosition = Math.max(0, Math.min(position, maxScroll)); // Clamp the position
            $navTabs.css('transform', 'translateX(-' + scrollPosition + 'px)');
            updateScrollButtons();
        }

        function scrollToTab($tab) {
            var tabOffset = $tab.position().left; // Left position of the tab relative to the container
            var tabWidth = $tab.outerWidth(); // Width of the tab
            var newScrollPosition = tabOffset - (containerWidth / 2) + (tabWidth / 2); // Center the tab in the visible area
            applyScroll(newScrollPosition);
        }

        // Scroll right button
        $('#scrollRightBtn').click(function () {
            applyScroll(scrollPosition + $navItems.outerWidth(true));
        });

        // Scroll left button
        $('#scrollLeftBtn').click(function () {
            applyScroll(scrollPosition - $navItems.outerWidth(true));
        });

        // Click event for centering the tab
        $navItems.click(function () {
            scrollToTab($(this));
        });

        // Dragging functionality
        $('.nav-scroll-container').on('mousedown touchstart', function (e) {
            isDragging = true;
            startX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
            velocity = 0; // Reset velocity
            $(this).css('cursor', 'grabbing');
        });

        $(document).on('mousemove touchmove', function (e) {
            if (isDragging) {
                currentX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
                var distance = (startX - currentX) * 1.4; // Scale for smoother drag
                velocity = distance; // Capture velocity for momentum
                applyScroll(scrollPosition + distance);
                startX = currentX;
            }
        });

        $(document).on('mouseup touchend', function () {
            if (isDragging) {
                isDragging = false;
                $('.nav-scroll-container').css('cursor', 'grab');
                applyMomentum();
            }
        });

        function applyMomentum() {
            if (Math.abs(velocity) > 1) {
                velocity *= friction; // Apply friction
                applyScroll(scrollPosition + velocity);
                requestAnimationFrame(applyMomentum);
            }
        }

        // Handle hash navigation
        var hash = window.location.hash;
        if (hash) {
            var $targetTab = $(`a[href="${hash}"]`).closest('.nav-item'); // Find the tab by hash
            if ($targetTab.length > 0) {
                $targetTab.find('a').tab('show'); // Activate the tab
                scrollToTab($targetTab); // Scroll to the tab horizontally
                // Scroll vertically to the tab content
                $('html, body').animate({
                    scrollTop: $targetTab.offset().top - 30 // Adjust the offset as needed
                }, 1000);
            }
        }

        // Adjust DataTable columns when the tab is shown
        $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
            $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
        });

        // Initialize button states
        updateScrollButtons();
    });
})();
    
// center the tab clicked in mobile version
(function () {
    const menuSelector = '.account-nav'; // Scrollable container
    const linkSelector = '.account-nav__list a'; // Links within the menu

    // Store the clicked link's href in localStorage before page refresh
    $(linkSelector).on('click', function () {
        localStorage.setItem('lastClickedLink', $(this).attr('href'));
    });

    // On page load, center the last clicked link
    $(document).ready(function () {
        const lastClickedHref = localStorage.getItem('lastClickedLink');
        if (lastClickedHref) {
            const lastClickedItem = $(`${linkSelector}[href="${lastClickedHref}"]`).parent(); // Target the parent <li>
            if (lastClickedItem.length) {
                const parentContainer = $(menuSelector); // Scrollable container
                const linkOffset = lastClickedItem.position().left; // Left offset of the item
                const containerWidth = parentContainer.width(); // Width of the scrollable container
                const itemWidth = lastClickedItem.outerWidth(); // Width of the clicked item

                // Calculate the new scroll position to center the item
                const newScrollLeft = parentContainer.scrollLeft() + linkOffset - (containerWidth / 2) + (itemWidth / 2);

                // Set the scroll position
                parentContainer.scrollLeft(newScrollLeft);

                // Clear localStorage after scrolling
                localStorage.removeItem('lastClickedLink');
            }
        }
    });
})();
})();    

/*====================== Zoom-In in compte.html ======================*/

(function () {
        // Append the popup overlay HTML to the body
        $('body').append(`
        <div id="imagePopupOverlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); display: flex; align-items: center; justify-content: center; z-index: 1000; opacity: 0; pointer-events: none; transition: opacity 0.3s;">
            <img id="popupImage" src="" style="max-width: 90%; max-height: 90%; margin: auto; transform: scale(0.8); transition: transform 0.3s;">
        </div>
    `);

        // Click handler for images inside imgFileWrapper
        $('.imgFileWrapper img').on('click', function () {
            const imgSrc = $(this).attr('src'); // Get the image source
            $('#popupImage').attr('src', imgSrc); // Set the popup image source

            // Show the overlay with animation
            $('#imagePopupOverlay')
                .css({
                    'pointer-events': 'auto'
                })
                .animate({
                    opacity: 1
                }, 300);
            $('#popupImage').css({
                transform: 'scale(1)'
            });
        });

        // Click handler to close the popup overlay
        $('#imagePopupOverlay').on('click', function () {
            $(this)
                .animate({
                    opacity: 0
                }, 300, function () {
                    $(this).css({
                        'pointer-events': 'none'
                    });
                });
            $('#popupImage').css({
                transform: 'scale(0.8)'
            });
        });
    })();
    
/*=================== Zoom-In in product-full.html ===================*/ 
    
(function () {
    $('.product_all_info_image .image__tag').on('click', function () {
        const imgSrc = $(this).attr('src');

        // Create and append the overlay with the image and animation classes
        const overlay = $(`
            <div id="imagePopupOverlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); display: flex; align-items: center; justify-content: center; z-index: 1000; opacity: 0; transition: opacity 0.3s;">
                <img id="popupImage" src="${imgSrc}" style="max-width: 90%; max-height: 90%; margin: auto; transform: scale(0.8); transition: transform 0.3s;">
            </div>
        `);

        // Append the overlay to the body
        $('body').append(overlay);

        // Trigger the fade-in and scale-up effect
        setTimeout(function () {
            overlay.css('opacity', '1');
            $('#popupImage').css('transform', 'scale(1)');
        }, 10);

        // Close overlay when clicked and remove it from the DOM
        overlay.on('click', function () {
            overlay.css('opacity', '0');
            $('#popupImage').css('transform', 'scale(0.8)');

            setTimeout(function () {
                overlay.remove();
            }, 300); // match the transition duration
        });
    });
})();

/*==== Datatable [Prevent Horizontal Scrolling on Window Resize] =====*/

(function () {
        $(window).on('resize', function () {
            const width = $(window).width();
            $('body').css('overflow-x', 'hidden'); // Ensure no horizontal scrolling
        }).trigger('resize'); // Trigger the function on load
})();
    
/*======================== Paramètre Button ==========================*/
    
(function () {
    // Show the user-sub-menu when hovering over the span
    $(".settingsName").on("mouseenter", function () {
        $(".user-sub-menu").stop(true, true).slideDown(250); // Slide down the user sub-menu
    });

    // Hide the user-sub-menu only when the mouse leaves both the span and the sub-menu
    $(".settingsName").on("mouseleave", function () {
        // Use a timeout to allow for mouse movement to the ul
        setTimeout(function () {
            if (!$(".user-sub-menu").is(":hover")) { // Check if mouse is not over the sub-menu
                $(".user-sub-menu").stop(true, true).slideUp(250); // Slide up (close) the user sub-menu
            }
        }, 100); // Adjust the delay as necessary
    });

    // Keep the user-sub-menu visible when hovering over it
    $(".user-sub-menu").on("mouseenter", function () {
        $(this).stop(true, true).slideDown(250); // Keep the submenu open
    });

    // Hide the user-sub-menu when the mouse leaves the sub-menu
    $(".user-sub-menu").on("mouseleave", function () {
        $(this).stop(true, true).slideUp(250); // Slide up when mouse leaves the sub-menu
    });
})();
 
/*=================== Copyright year in the footer ===================*/
    
(function () {
        // Get the current year
        var currentYear = new Date().getFullYear();
        // Update the copyright year in the footer
        $('#copyright-year').text(currentYear);
    })();
    
/*=========================== Red Banners ============================*/
    
(function () {
// nouveaute    
(function () {
    $('.nouveaute_item').prepend('<img class="new-red-icon" src="images/new.png" alt="" >');
})();

// promotion    
(function () {
    $('.promotion_item').prepend('<img class="promotion-red-icon" src="images/promo.png" alt="" >');
})();

// chrono
(function () {
    $('.chrono_item').prepend('<img class="chrono-red-icon" src="images/24h.png" alt="" >');
})();

 })();   
    
/*======================== Dark mode switch ==========================*/

(function () {
    // Default mode: dark
    const savedMode = localStorage.getItem('mode') || 'dark'; // Default to dark if no mode is saved

    if (savedMode === 'light') {
        $("body").addClass('light');
        $(".moon").addClass('sun');
        $(".tdnn").addClass('day');
        $(".logo__image img").attr('src', 'images/logo.png');
        $(".site-footer__payments img").attr('src', 'images/logo.png');
        $(".logoPathTarget .logo__image img").attr('src', '../images/logo.png');
        $(".logoPathTarget .site-footer__payments img").attr('src', '../images/logo.png');
        $(".carrosserie-img img").attr('src', 'images/carrosserie-white.jpg');
        $(".nightMode").prop('disabled', true); // Disable night mode CSS
        $(".darkModeCheck").last().append('<i class="fa-solid fa-check"></i>'); // Add check icon to "Désactivé"
    } else {
        $(".logo__image img").attr('src', 'images/logo_white.png');
        $(".site-footer__payments img").attr('src', 'images/logo_white.png');
        $(".logoPathTarget .logo__image img").attr('src', '../images/logo_white.png');
        $(".logoPathTarget .site-footer__payments img").attr('src', '../images/logo_white.png');
        $(".carrosserie-img img").attr('src', 'images/carrosserie.jpg');
        $(".nightMode").prop('disabled', false); // Enable night mode CSS
        $(".darkModeCheck").first().append('<i class="fa-solid fa-check"></i>'); // Add check icon to "Activé"
    }

    // Toggle theme when clicking ".tdnn"
    $('.tdnn').click(function () {
        $("body").toggleClass('light');
        $(".moon").toggleClass('sun');
        $(".tdnn").toggleClass('day');

        if ($("body").hasClass('light')) {
            $(".logo__image img").attr('src', 'images/logo.png');
            $(".site-footer__payments img").attr('src', 'images/logo.png');
            $(".logoPathTarget .logo__image img").attr('src', '../images/logo.png');
            $(".logoPathTarget .site-footer__payments img").attr('src', '../images/logo.png');
            $(".carrosserie-img img").attr('src', 'images/carrosserie-white.jpg');
            $(".nightMode").prop('disabled', true);
            localStorage.setItem('mode', 'light');
            $(".darkModeCheck i").remove(); // Remove all check icons
            $(".darkModeCheck").last().append('<i class="fa-solid fa-check"></i>'); // Add check icon to "Désactivé"
        } else {
            $(".logo__image img").attr('src', 'images/logo_white.png');
            $(".site-footer__payments img").attr('src', 'images/logo_white.png');
            $(".logoPathTarget .logo__image img").attr('src', '../images/logo_white.png');
            $(".logoPathTarget .site-footer__payments img").attr('src', '../images/logo_white.png');
            $(".carrosserie-img img").attr('src', 'images/carrosserie.jpg');
            $(".nightMode").prop('disabled', false);
            localStorage.setItem('mode', 'dark');
            $(".darkModeCheck i").remove(); // Remove all check icons
            $(".darkModeCheck").first().append('<i class="fa-solid fa-check"></i>'); // Add check icon to "Activé"
        }
    });

    // Handle ".darkModeCheck" clicks
    $(".darkModeCheck").click(function () {
        const isActivé = $(this).text().trim().startsWith('Activé');
        if (isActivé) {
            $("body").removeClass('light');
            $(".moon").removeClass('sun');
            $(".tdnn").removeClass('day');
            $(".logo__image img").attr('src', 'images/logo_white.png');
            $(".site-footer__payments img").attr('src', 'images/logo_white.png');
            $(".logoPathTarget .logo__image img").attr('src', '../images/logo_white.png');
            $(".logoPathTarget .site-footer__payments img").attr('src', '../images/logo_white.png');
            $(".carrosserie-img img").attr('src', 'images/carrosserie.jpg');
            $(".nightMode").prop('disabled', false);
            localStorage.setItem('mode', 'dark');
            $(".darkModeCheck i").remove(); // Remove all check icons
            $(this).append('<i class="fa-solid fa-check"></i>'); // Add check icon to "Activé"
        } else {
            $("body").addClass('light');
            $(".moon").addClass('sun');
            $(".tdnn").addClass('day');
            $(".logo__image img").attr('src', 'images/logo.png');
            $(".site-footer__payments img").attr('src', 'images/logo.png');
            $(".logoPathTarget .logo__image img").attr('src', '../images/logo.png');
            $(".logoPathTarget .site-footer__payments img").attr('src', '../images/logo.png');
            $(".carrosserie-img img").attr('src', 'images/carrosserie-white.jpg');
            $(".nightMode").prop('disabled', true);
            localStorage.setItem('mode', 'light');
            $(".darkModeCheck i").remove(); // Remove all check icons
            $(this).append('<i class="fa-solid fa-check"></i>'); // Add check icon to "Désactivé"
        }
    });
})();
     
/*======================== Chrono Animation ==========================*/

(function () {
    // cube animation
    var areaHTML =
        '<div class="area">' +
        '<ul class="circles">' +
        '<li></li>' +
        '<li></li>' +
        '<li></li>' +
        '<li></li>' +
        '<li></li>' +
        '<li></li>' +
        '<li></li>' +
        '<li></li>' +
        '<li></li>' +
        '<li></li>' +
        '</ul>' +
        '</div>';

    // Hide the counter initially to avoid flickering
    $('#the-24h-countdown p').css('visibility', 'hidden');

    // labels
    function renderCountdown() {
        return (
            '<div class="timeWrapper">' +
            areaHTML +
            '<span class="countDownWrapper hours">0</span>' +
            '<div class="label-hour">heures</div>' + // Label for hours
            '</div>' +
            '<div class="timeWrapper">' +
            areaHTML +
            '<span class="countDownWrapper min">00</span>' +
            '<div class="label-minute">minutes</div>' + // Label for minutes
            '</div>' +
            '<div class="timeWrapper">' +
            areaHTML +
            '<span class="countDownWrapper sec">00</span>' +
            '<div class="label-second">secondes</div>' + // Label for seconds
            '</div>'
        );
    }

    // Initial call to render the countdown structure
    $('#the-24h-countdown p').html(renderCountdown());

    // Show the counter with animation after the page is fully ready
    setTimeout(function () {
        $('#the-24h-countdown p').css('visibility', 'visible');
    }, 100);

    // Get the time remaining from midnight
    function getRemainingTime() {
        var now = new Date();
        var midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0); // Set to midnight of the next day

        // Calculate the remaining time in milliseconds
        var remainingTime = midnight - now;

        var hours = Math.floor(remainingTime / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    // Update the countdown every second
    setInterval(function () {
        var time = getRemainingTime();

        // Format the values with leading zeros if needed
        var hours = (time.hours < 10 ? '0' : '') + time.hours;
        var minutes = (time.minutes < 10 ? '0' : '') + time.minutes;
        var seconds = (time.seconds < 10 ? '0' : '') + time.seconds;

        // Update the countdown values
        $('#the-24h-countdown .hours').text(hours);
        $('#the-24h-countdown .min').text(minutes);
        $('#the-24h-countdown .sec').text(seconds);
    }, 1000);
})();
    
/*================ Lubrifiant Video in Accueil.com ===================*/

(function () {
  // Check if the current page is accueil.html
  if (window.location.pathname.includes('accueil.html')) {
    const playerMiddle = videojs('#my-video'); // Replace with your middle video ID
    const atlanticDiv = document.querySelector('.atlantic'); // Target the atlantic div

    let atlanticPositionTop = 0;

    // Function to update the position of the atlantic div dynamically
    function updateAtlanticPosition() {
      if (atlanticDiv) {
        const rect = atlanticDiv.getBoundingClientRect(); // Get the position and dimensions of the atlantic div
        atlanticPositionTop = rect.top + window.scrollY; // Get the position relative to the page
      }
    }

    // Update the position on page load and on window resize
    window.addEventListener('load', updateAtlanticPosition);
    window.addEventListener('resize', updateAtlanticPosition);

    playerMiddle.on('fullscreenchange', function () {
      const currentScrollPosition = window.scrollY; // Get the current scroll position

      if (playerMiddle.isFullscreen()) {
        // Save the current scroll position when entering fullscreen
        console.log("Entered fullscreen, scroll position saved: " + currentScrollPosition);
      } else {
        // When exiting fullscreen, restore the scroll position relative to the Atlantic div
        console.log("Exited fullscreen, restoring scroll position to: " + atlanticPositionTop);
        window.scrollTo(0, atlanticPositionTop); // Scroll to the Atlantic div position

        // Optionally, blur the header video or handle other events
        const $headerVideo = $('#header-video'); // Target the header <video> element
        if ($headerVideo.length) {
          $headerVideo.blur();
        }
      }
    });
  }
})();

/*========================== Menu in Mobile ==========================*/

(function () {
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
})();
    
/*=========================== Owl Carousel ===========================*/

(function () {
    
// carousel for all pages    
(function() {
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

    })();
// carousel for 'produit associé' in product-full.html     
(function() {
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

    })();
// Header Slider 
(function() {
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
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
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
})();
    
})();
 
/*=================== Display search bar in mobile ===================*/
    
(function () {
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
})();  
    
/*===== Image PopUp on Click [reference non géré] in compte.html =====*/

(function () {
        // Append the popup overlay HTML to the body
        $('body').append(`
        <div id="imagePopupOverlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); display: flex; align-items: center; justify-content: center; z-index: 1000; opacity: 0; pointer-events: none; transition: opacity 0.3s;">
            <img id="popupImage" src="" style="max-width: 90%; max-height: 90%; margin: auto; transform: scale(0.8); transition: transform 0.3s;">
        </div>
    `);

        // Function to handle newly uploaded images
        function handleNewImages(wrapper) {
            const img = wrapper.find('img');
            img.hide(); // Hide the uploaded image
            wrapper.find('a').css('display', 'flex'); // Ensure icon + name remain visible
        }

        // Observe changes to imgFileWrapper for dynamically added images
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                $(mutation.addedNodes).each(function () {
                    if ($(this).is('.imgFileWrapper')) {
                        handleNewImages($(this)); // Handle the new image wrapper
                    } else if ($(this).find('.imgFileWrapper').length > 0) {
                        $(this).find('.imgFileWrapper').each(function () {
                            handleNewImages($(this)); // Handle nested image wrappers
                        });
                    }
                });
            });
        });

        // Start observing the parent container
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        // Click handler for imgFileWrapper
        $('body').on('click', '.imgFileWrapper', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            const img = $(this).find('img'); // Get the hidden image
            const imgSrc = img.attr('src'); // Get the image source
            if (imgSrc) {
                $('#popupImage').attr('src', imgSrc); // Set the popup image source

                // Show the overlay with animation
                $('#imagePopupOverlay')
                    .css({
                        'pointer-events': 'auto'
                    })
                    .animate({
                        opacity: 1
                    }, 300);
                $('#popupImage').css({
                    transform: 'scale(1)'
                });
            }
        });

        // Click handler to close the popup overlay
        $('#imagePopupOverlay').on('click', function () {
            $(this)
                .animate({
                    opacity: 0
                }, 300, function () {
                    $(this).css({
                        'pointer-events': 'none'
                    });
                });
            $('#popupImage').css({
                transform: 'scale(0.8)'
            });
        });
    })();
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
/*............................................................................
................................. Back-End ...................................
............................................................................*/
    
/*
.
.
.
.
*/ 
    
/*========== Toggle Eye Checkbox via Click in reglement.html =========*/
    
(function () {
    $('.toggleContainer').on('click', function () {
        // Find the previous sibling element with the class 'toggleCheckbox'.
        var checkbox = $(this).prev('.toggleCheckbox');
        // Toggle the 'checked' property of the checkbox.
        checkbox.prop('checked', !checkbox.prop('checked'));
    });
})();

/*=========== Delete Confirmation Modal in reglement.html ============*/
    
(function () {
    function openModal() {
        $(".modal-overlay").fadeIn();
        $("#confirmationModal").fadeIn();
    }

    function closeModal() {
        $(".modal-overlay").fadeOut();
        $("#confirmationModal").fadeOut();
    }

    $(".closeBtn").on("click", function () {
        openModal();
    });

    $("#btnOui").on("click", function () {
        closeModal();
    });

    $("#btnNo").on("click", function () {
        closeModal();
    });

    $(".modal-overlay").on("click", function () {
        closeModal();
    });
})();
    
/*================== Produit associé modal + Button ==================*/
    
(function () {
    $('.associated').each(function (index) {
        // Generate the dialog ID
        var dialogIndex = index + 1; // Incremental index starts from 1
        var dialogId = 'dialog-promo-page-' + dialogIndex;

        // Set the data-dialog attribute and corresponding dialog ID
        $(this).attr('data-dialog', dialogId);
        var correspondingDialog = $(this).next('.dialog-wrapper');
        correspondingDialog.attr('id', dialogId);

        // Add click event to open the corresponding dialog
        $(this).on('click', function () {
            // Show the dialog
            $('#' + dialogId).get(0).showModal();
            // Add no-scroll class to body to prevent scrolling
            $('body').addClass('no-scroll');
        });
    });

    // Close the dialog when the close button is clicked
    $('.dialog-close').click(function () {
        $(this).closest('dialog')[0].close();
        // Remove no-scroll class from body to restore scrolling
        $('body').removeClass('no-scroll');
    });
})();

/*============================ Input Month ===========================*/

(function () {
    const date = new Date();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    $('input[type="month"]').val(`${year}-${month}`);
})();
    
/*========= Upload image [reference non géré] in compte.html =========*/    
    
(function () {
    $("#file-upload").on("change", function () {
        var fileName = this.files[0] ? this.files[0].name : "Aucun fichier choisi";
        $(".file-name").text(fileName);

        // Simulate progress bar update
        $(".progress-bar").css("width", "0%");
        var progress = 0;
        var interval = setInterval(function () {
            progress += 10;
            $(".progress-bar").css("width", progress + "%");
            if (progress >= 100) {
                clearInterval(interval);
                $(".file-name").text("Téléchargement terminé!");
            }
        }, 100);
    });
})();

/*===================== Datatable in compte.html =====================*/

(function () {

    // Check if the table exists before initializing DataTable
    if ($('#table__one,#table__two,#table__three,#table__four,#table__five').length) {
        $('#table__one,#table__two,#table__three,#table__four,#table__five').DataTable({
            paging: true,
            responsive: true,
            searching: true,
            ordering: false,
            info: false,
            pageLength: 5,
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'colvis',
                    text: 'Toggle Columns'
                    },
                {
                    extend: 'excelHtml5',
                    text: 'Export to Excel'
                    },
                {
                    text: 'Refresh',
                    action: function (e, dt, node, config) {
                        dt.ajax.reload();
                    }
                    }
                ],
            language: {
                search: "Rechercher  :  ",
                lengthMenu: "Afficher _MENU_ enregistrements par page",
                info: "Affichage de _START_ à _END_ sur _TOTAL_ enregistrements",
                infoEmpty: "Aucun enregistrement à afficher",
                infoFiltered: "(filtré à partir de _MAX_ enregistrements au total)",
                paginate: {
                    first: '<i class="fa-solid fa-backward-step"></i>',
                    last: '<i class="fa-solid fa-forward-step"></i>',
                    next: '<i class="fa-solid fa-caret-right"></i>',
                    previous: '<i class="fa-solid fa-caret-left"></i>'
                },
                zeroRecords: "Aucun résultat trouvé",
                emptyTable: "Aucune donnée disponible dans le tableau"
            },
            lengthMenu: [5, 10, 25, 50],
            buttons: [
                {
                    extend: 'colvis',
                    text: '<i class="fa-solid fa-table-columns"></i>'
                    },
                {
                    extend: 'pageLength',
                    text: '<i class="fa-solid fa-arrow-down-1-9"></i>',
                    titleAttr: 'Select number of rows per page',
                    options: [
                            [5, 10, 15, -1],
                            ['5 rows', '10 rows', '15 rows', 'All rows']
                        ],
                    },
                {
                    extend: 'excelHtml5',
                    text: '<i class="fa-solid fa-file-excel"></i>'
                    },
                {
                    text: '<i class="fa-solid fa-arrows-rotate"></i>',
                    action: function (e, dt, node, config) {
                        dt.ajax.reload();
                    }
                    }
                ]
        });
    }

})();

/*========== Display Confirmation Message for Added Product ==========*/

(function () {
        $('button.product-card__addtocart-icon, .product__actions-item.product__actions-item--addtocart button, td.wishlist__column.wishlist__column--body.wishlist__column--button button').on('click', function () {
            // Create the notification if it doesn't exist
            if ($('#cart-notification').length === 0) {
                $('body').append(`
                <div id="cart-notification" style="display: none; position: fixed; top: 0; left: 0; right: 0; background-color: #4CAF50; color: white; text-align: center; padding: 10px; font-size: 16px; z-index: 1000;">
                    Le produit a été ajouté au panier.
                </div>
            `);
            }
            // Show the notification
            $('#cart-notification').stop(true, true).fadeIn().delay(2000).fadeOut();
        });
})(); 

/*============================= Datalist =============================*/
    
(function () {
    // Inject CSS dynamically to style the inputs and toggle icons
    $('<style>')
        .prop('type', 'text/css')
        .html(`
        input[list] {
            position: relative;
        }
        .toggle-icon {
            position: absolute;
            right: 10px;
            bottom: 30%;
            color: black;
            pointer-events: none;
            transition: transform 0.2s ease;
        }

        .form-reg .toggle-icon {
            bottom: 21%;
            right: 15px;
        }

        .form-section-two .toggle-icon {
            bottom: 25%;
            right: 15px;
        }
    `)
        .appendTo('head');

    // Append toggle icons dynamically to each input[list] element
    $('input[list]').each(function () {
        $(this).after('<i class="fa fa-chevron-down toggle-icon"></i>');
    });

    // Define selectors for the inputs and corresponding datalists
    var inputs = ['#CL_Car', '#CL_Car1', '#clientNameInput', '#transportNameInput', '#agenceInput'];
    var datalistes = ['#carte', '#carte1', '#clientNameList', '#transportNameList', '#agenceList'];

    // Loop through the inputs and datalists to handle interactions
    inputs.forEach(function (inputSelector, index) {
        var input = $(inputSelector); // Get the current input element
        var dataliste = $(datalistes[index]); // Get the corresponding datalist

        // Handle input mousedown event to toggle the display of datalist
        input.on('mousedown', function (e) {
            e.preventDefault(); // Prevent the default action (like focus)
            if (dataliste.css('display') === 'none') {
                dataliste.css('display', 'block'); // Show the datalist
                input.css('border-radius', '5px 5px 0 0'); // Change border radius
                input.next('.toggle-icon')
                    .removeClass('fa-chevron-down')
                    .addClass('fa-chevron-up'); // Change toggle icon to up
            } else {
                dataliste.css('display', 'none'); // Hide the datalist
                input.css('border-radius', '5px'); // Reset border radius
                input.next('.toggle-icon')
                    .removeClass('fa-chevron-up')
                    .addClass('fa-chevron-down'); // Change toggle icon to down
            }
        });

        // Handle option click to update the input value and close the dropdown
        dataliste.find('option').on('click', function () {
            input.val($(this).val()); // Set the input value to the selected option
            dataliste.css('display', 'none'); // Hide the datalist
            input.css('border-radius', '5px'); // Reset border radius
            input.next('.toggle-icon')
                .removeClass('fa-chevron-up')
                .addClass('fa-chevron-down'); // Reset toggle icon to down
        });

        // Handle input text changes to filter datalist options
        input.on('input', function () {
            var text = input.val().toUpperCase(); // Get the input value in uppercase
            var hasVisibleOptions = false; // Flag to track if there are any visible options

            // Iterate through options and show/hide based on input
            dataliste.find('option').each(function () {
                if ($(this).val().toUpperCase().indexOf(text) > -1) {
                    $(this).css('display', 'block'); // Show matching option
                    hasVisibleOptions = true; // At least one option is visible
                } else {
                    $(this).css('display', 'none'); // Hide non-matching option
                }
            });

            // Show or hide the dropdown based on whether there are visible options
            if (hasVisibleOptions) {
                dataliste.css('display', 'block'); // Show dropdown if options match
            } else {
                dataliste.css('display', 'none'); // Hide if no options match
            }
        });

        var currentFocus = -1; // Track the currently focused option

        // Handle keyboard navigation (up, down, enter) within the datalist
        input.on('keydown', function (e) {
            var options = dataliste.find('option'); // Get all options in the datalist

            // Down arrow key (40) - highlight next option
            if (e.keyCode === 40) {
                currentFocus++;
                addActive(options); // Highlight the next option
            } 
            // Up arrow key (38) - highlight previous option
            else if (e.keyCode === 38) {
                currentFocus--;
                addActive(options); // Highlight the previous option
            } 
            // Enter key (13) - select the focused option
            else if (e.keyCode === 13) {
                e.preventDefault(); // Prevent form submission on enter
                if (currentFocus > -1) {
                    $(options[currentFocus]).click(); // Simulate a click on the active option
                }
            }
        });

        // Add active class to the current option
        function addActive(x) {
            if (!x) return false; // Exit if no options
            removeActive(x); // Remove active class from all options
            if (currentFocus >= x.length) currentFocus = 0; // Wrap to first option
            if (currentFocus < 0) currentFocus = (x.length - 1); // Wrap to last option
            $(x[currentFocus]).addClass('active'); // Add active class to current option
        }

        // Remove active class from all options
        function removeActive(x) {
            $(x).removeClass('active'); // Remove active class
        }
    });

    // Close the datalist if clicked outside of the input or datalist
    $(document).on('click', function (event) {
        var target = $(event.target);
        // Check if the click is outside the input and datalists
        if (!target.closest(inputs.join(',')).length && !target.closest(datalistes.join(',')).length) {
            $(datalistes.join(',')).css('display', 'none'); // Hide all datalists
            inputs.forEach(function (inputSelector) {
                var input = $(inputSelector);
                input.css('border-radius', '5px'); // Reset border radius for all inputs
                input.next('.toggle-icon')
                    .removeClass('fa-chevron-up')
                    .addClass('fa-chevron-down'); // Reset toggle icon to down
            });
        }
    });
})();

/*====================== Sidebar carte filter ========================*/
    
(function () {    

// Carte filter
(function () {
    
    const pathname = window.location.pathname;

    // Define the expected subcategory pages
    const subcategoryPages = ['accueil.html', 'capcarrosserie.html', 'capservice.html', '../categorie/accessoires.html', '../categorie/allumage.html', '../categorie/autres.html', '../categorie/carrosserie.html', '../categorie/courrois.html', '../categorie/divers.html', '../categorie/echappement.html', '../categorie/embrayage.html', '../categorie/filtration.html', '../categorie/freinage.html', '../categorie/goujon.html', '../categorie/lubrifiant.html', '../categorie/moteur.html', '../categorie/refroidissement.html', '../categorie/soufflet.html', '../categorie/suspension.html'];
    const boutiquePage = 'boutique.html';

    // Function to highlight the selected filter item and scroll into view in SideBar Filter
    const highlightSelected = function () {
        $('.filter-list__item').css({
            'border': 'none' // Reset border for all items
        });

        $(this).closest('.filter-list__item').css({
            'border': '4px solid orange', // Change border color to orange
            'border-radius': '6px'
        })[0].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        }); // Scroll the item into view
    };

    // Display carte image in Boutique.html
    if (subcategoryPages.some(page => pathname.endsWith(page))) {
        // Modified event to prevent propagation and store the image src correctly
        $('.subcategory-item img, .block-brands__item-link img, .capramCartesImg').on('click', function (event) {
            event.preventDefault();
            let imgSrc = $(this).attr('src');
            // Remove ../ to ensure proper image path
            imgSrc = imgSrc.replace(/^(\.\.\/)+/, '');
            console.log('Image source:', imgSrc);

            if (imgSrc) {
                localStorage.setItem('selectedImage', imgSrc);
                window.location.href = 'boutique.html';
            } else {
                console.error('Image source is undefined.');
            }
        });
    }
    
    // Alphabetically Sort and Handle carte image selection in Accueil.html
    (function () {
        $(function () {
            const $list = $('.block-brands__list');
            const $items = $list.find('.block-brands__item');

            // Sort the items alphabetically by the alt attribute of the images
            const sortedItems = $items.sort(function (a, b) {
                const altA = $(a).find('img').attr('alt').toLowerCase();
                const altB = $(b).find('img').attr('alt').toLowerCase();
                return altA.localeCompare(altB);
            });

            // Append the sorted items back into the list
            $list.find('.block-brands__divider').remove(); // Remove all dividers
            $list.empty(); // Clear the list
            sortedItems.each(function (index, item) {
                $list.append('<li class="block-brands__divider" role="presentation"></li>'); // Add a divider before each item
                $list.append(item);
            });

            // Re-attach click events after sorting to make sure they work with the newly ordered items
            $('.subcategoryImg img, .block-brands__item-link img').on('click', function (event) {
                event.stopPropagation(); // Prevent the click from propagating to other handlers

                // Directly get the src attribute from the clicked <img>
                let imgSrc = $(this).attr('src'); // This is the correct way to get the src from the clicked <img>

                // Remove ../ to ensure proper image path
                imgSrc = imgSrc.replace(/^(\.\.\/)+/, '');

                if (imgSrc) {
                    $('.famille-shop-name').html(`<img src="${imgSrc}" alt="Selected Image">`); // Update the span with the image
                    localStorage.setItem('selectedImage', imgSrc); // Store the selected image in localStorage
                    // Call the function to highlight the matching filter item based on the image src
                    highlightMatchingFilterItem(imgSrc);
                } else {
                    console.error('No image source found for the image in subcategoryImg.');
                }
            });
        });
    })();

    // Change Carte Image in Header Based on Sidebar Filter Selection
    $('.filter-list__item img').on('click', function () {
        const $filterItem = $(this).closest('.filter-list__item');
        const $radioButton = $filterItem.find('input[type="radio"]');
        let newImageSrc = $(this).attr('src');
        // Remove ../ to ensure proper image path
        newImageSrc = newImageSrc.replace(/^(\.\.\/)+/, '');

        if (newImageSrc) {
            localStorage.setItem('selectedImage', newImageSrc);

            if (pathname.endsWith(boutiquePage)) {
                $('.famille-shop-name').html(`<img src="${newImageSrc}" alt="Selected Image">`);
            }

            highlightSelected.call(this);
        }
    });

    // Logic for boutique page to initially highlight the stored image
    if (pathname.endsWith(boutiquePage)) {
        let selectedImage = localStorage.getItem('selectedImage');
        if (selectedImage) {
            $('.famille-shop-name').html(`<img src="${selectedImage}" alt="Selected Image">`);

            $(`img[src="${selectedImage}"]`).closest('.filter-list__item').css({
                'border': '4px solid orange',
                'border-radius': '6px'
            })[0].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            console.warn('No selected image found in localStorage.');
        }
    }

    // Function to highlight the filter item that matches the subcategory img's src
    function highlightMatchingFilterItem(imgSrc) {
        // Look for the filter item with an image whose src matches the subcategory image's src
        const $matchingFilterItem = $('.filter-list__item img').filter(function () {
            return $(this).attr('src') === imgSrc;
        }).closest('.filter-list__item');

        if ($matchingFilterItem.length) {
            $matchingFilterItem.css({
                'border': '4px solid orange',
                'border-radius': '6px'
            })[0].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

})();
    
// Open/close sidebar
(function () {
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
})();
    
// Sidebar in Mobile    
(function () {
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
})();
    
})();    

/*=========================== Search Bar =============================*/

(function () {

    // Select the input, search button, and search term display span for both existing and new forms
    const $searchInput = $('.search__input');
    const $searchButton = $('.search__button');
    const $searchTermDisplay = $('.block-header__title .search-term');

    // Selectors for the not-found form elements
    const $notFoundSearchInput = $('.not-found__search-input');
    const $notFoundSearchButton = $('.not-found__search-button');

    // Selectors for the mobile search form elements
    const $mobileSearchInput = $('.mobile-search__input');
    const $mobileSearchButton = $('.mobile-search__button--search');
    const $mobileSearchCloseButton = $('.mobile-search__button--close');

    // Function to determine the correct path for the results page
    function getResultsPagePath() {
        // Check if the current page is inside a subfolder
        const currentPath = window.location.pathname;
        const isInSubfolder = currentPath.includes('/categorie/'); // Change '/folder/' to match your subfolder's name
        
        // If we're inside a subfolder, go up one level and point to resultats.html
        return isInSubfolder ? '../resultats.html' : 'resultats.html';
    }

    // Function to handle the redirection to the results page
    function redirectToResults(searchTerm) {
        if (searchTerm) {
            const targetUrl = `${getResultsPagePath()}?search=${encodeURIComponent(searchTerm)}`;
            window.location.href = targetUrl;
        }
    }

    // Function to check if no results are found
    function checkForNoResults() {
        const noResultsIndicator = $('.no-results'); // You can customize this to check for specific elements indicating no results
        if (noResultsIndicator.length > 0) {
            window.location.href = '404.html'; // Redirect to 404 if no results are found
        }
    }

    // Event listeners for search inputs and buttons
    $searchInput.on('keypress', function (event) {
        if (event.which === 13) { // 13 is the Enter key
            event.preventDefault(); // Prevent default form submission
            redirectToResults($searchInput.val().trim());
        }
    });

    $searchButton.on('click', function (event) {
        event.preventDefault(); // Prevent default button action
        redirectToResults($searchInput.val().trim());
    });

    $notFoundSearchInput.on('keypress', function (event) {
        if (event.which === 13) { // 13 is the Enter key
            event.preventDefault(); // Prevent default form submission
            redirectToResults($notFoundSearchInput.val().trim());
        }
    });

    $notFoundSearchButton.on('click', function (event) {
        event.preventDefault(); // Prevent default button action
        redirectToResults($notFoundSearchInput.val().trim());
    });

    $mobileSearchInput.on('keypress', function (event) {
        if (event.which === 13) { // 13 is the Enter key
            event.preventDefault(); // Prevent default form submission
            redirectToResults($mobileSearchInput.val().trim());
        }
    });

    $mobileSearchButton.on('click', function (event) {
        event.preventDefault(); // Prevent default button action
        redirectToResults($mobileSearchInput.val().trim());
    });

    $mobileSearchCloseButton.on('click', function () {
        $mobileSearchInput.val(''); // Clear the mobile search input
    });

    // Check for a search term in the URL, update input and display span
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromURL = urlParams.get('search');
    if (searchTermFromURL) {
        const decodedTerm = decodeURIComponent(searchTermFromURL);
        $searchInput.val(decodedTerm); // Set search term in existing input
        $notFoundSearchInput.val(decodedTerm); // Set search term in not-found input
        $mobileSearchInput.val(decodedTerm); // Set search term in mobile input
        $searchTermDisplay.text(decodedTerm); // Set search term in <span>
    }

    // Call this on the results page to check if no results were found
    if (window.location.pathname === 'resultats.html') {
        checkForNoResults();
    }

})();
    
/*=========================== Login Page =============================*/    

(function () {
    // Enable/Disable Submit Button Based on Input Field Validation
    function checkInputs() {
        const isUsernameFilled = $('#fname').val() !== '';
        const isPasswordFilled = $('#pwd').val() !== '';
        const submitButton = $('.loginSubmit'); // Assuming the button is the submit input

        // Add or remove the class and enable/disable the button based on input values
        if (isUsernameFilled && isPasswordFilled) {
            submitButton.addClass('btnGradient') // Add gradient class
                .removeAttr('disabled') // Enable button
                .css('cursor', 'pointer'); // Change cursor to pointer
        } else {
            submitButton.removeClass('btnGradient') // Remove gradient class
                .attr('disabled', 'disabled') // Disable button
                .css('cursor', 'default'); // Change cursor back to default
        }
    }

    // Handle input events for username
    $('#fname').on('focus input', function () {
        const placeholderText = 'Nom d\'utilisateur';
        $(this).attr('placeholder', ''); // Hide placeholder on focus
        checkInputs(); // Check inputs while typing
    });

    // Handle input events for password
    $('#pwd').on('focus input', function () {
        const placeholderText = 'Mot de pass';
        $(this).attr('placeholder', ''); // Hide placeholder on focus
        checkInputs(); // Check inputs while typing
    });

    // Restore placeholder on blur (when clicking away) if input is empty
    $('.loginWrapper input[type="text"], .loginWrapper input[type="password"]').on('blur', function () {
        const placeholderText = $(this).is('#fname') ? 'Nom d\'utilisateur' : 'Mot de pass'; // Determine placeholder text
        if ($(this).val() === '') {
            $(this).attr('placeholder', placeholderText); // Restore placeholder if input is empty
        }
    });

    // Toggle visibility for both username and password placeholders
    $('.fa-eye').on('click', function () {
        const input = $(this).siblings('input');
        const isInputEmpty = input.val() === '';
        const placeholderText = input.is('#fname') ? 'Nom d\'utilisateur' : 'Mot de pass'; // Check input type

        // Toggle placeholder visibility
        if (isInputEmpty) {
            input.attr('placeholder', placeholderText); // Show placeholder if input is empty
        } else {
            input.attr('placeholder', ''); // Hide placeholder if input is filled
        }

        checkInputs(); // Check inputs when toggling visibility
    });

    // Check inputs initially to set the button state correctly
    checkInputs();

    // Username + Password Information : to delete
    function handleLogin(event) {
        event.preventDefault(); // Prevent form submission

        var enteredUsername = $('#fname').val();
        var enteredPassword = $('#pwd').val();

        // Fake credentials for demonstration
        var correctUsername = 'admin';
        var correctPassword = 'admin';

        if (enteredUsername === correctUsername && enteredPassword === correctPassword) {

            // Redirect to the main page
            window.location.href = 'accueil.html';
        } else {
            // Show error message if credentials are incorrect
            $('.msgWarning').show();
        }
    }

    // Auto-fill the username and password if they are stored
    if (localStorage.getItem('fname') && localStorage.getItem('pwd')) {
        $('#fname').val(localStorage.getItem('fname'));
        $('#pwd').val(localStorage.getItem('pwd'));
    }

    // Attach the function to the form's submit event
    $('.login-form').on('submit', handleLogin);
})();

/*==================== Initialize custom numbers =====================*/
    
(function () {
        $('.input-number').customNumber();
})();

/*================== Timer (chrono) in Accueil.html ===================*/    

(function () {
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
    })();

 
/*
.
.
.
.
*/ 
    
});

