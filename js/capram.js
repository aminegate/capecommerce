$(document).ready(function() {
    
   
       
    
    
    // Show the user-sub-menu when hovering over the span
    $(".settingsName").on("mouseenter", function() {
        $(".user-sub-menu").stop(true, true).slideDown(250); // Slide down the user sub-menu
    });

    // Hide the user-sub-menu only when the mouse leaves both the span and the sub-menu
    $(".settingsName").on("mouseleave", function() {
        // Use a timeout to allow for mouse movement to the ul
        setTimeout(function() {
            if (!$(".user-sub-menu").is(":hover")) { // Check if mouse is not over the sub-menu
                $(".user-sub-menu").stop(true, true).slideUp(250); // Slide up (close) the user sub-menu
            }
        }, 100); // Adjust the delay as necessary
    });

    // Keep the user-sub-menu visible when hovering over it
    $(".user-sub-menu").on("mouseenter", function() {
        $(this).stop(true, true).slideDown(250); // Keep the submenu open
    });

    // Hide the user-sub-menu when the mouse leaves the sub-menu
    $(".user-sub-menu").on("mouseleave", function() {
        $(this).stop(true, true).slideUp(250); // Slide up when mouse leaves the sub-menu
    });
    
      (function() {
      // Get the current year
      var currentYear = new Date().getFullYear();
      // Update the copyright year in the footer
      $('#copyright-year').text(currentYear);
    })();
    
 
    

    
    
    
    



    
    
    /*************************************************/
    
(function() {
  var inputs = ['#CL_Car', '#CL_Car1']; // Add CL_Car1
  var datalistes = ['#carte', '#carte1']; // Add carte1

  inputs.forEach(function(inputSelector, index) {
    var input = $(inputSelector);
    var dataliste = $(datalistes[index]);

    input.on('focus', function() {
      dataliste.css('display', 'block'); // Show the datalist when the input is focused
      input.css('border-radius', '5px 5px 0 0'); // Change border radius
    });

    // Handle option click
    dataliste.find('option').on('click', function() {
      input.val($(this).val()); // Set the input value to the clicked option
      dataliste.css('display', 'none'); // Hide the options after selection
      input.css('border-radius', '5px'); // Reset border radius
    });

    input.on('input', function() {
      var text = input.val().toUpperCase(); // Get the input value
      var hasVisibleOptions = false; // Track if there are visible options

      // Iterate through options and show/hide based on input
      dataliste.find('option').each(function() {
        if ($(this).val().toUpperCase().indexOf(text) > -1) {
          $(this).css('display', 'block'); // Show matching option
          hasVisibleOptions = true; // At least one option is visible
        } else {
          $(this).css('display', 'none'); // Hide non-matching option
        }
      });

      // Show or hide the dropdown based on visible options
      if (hasVisibleOptions) {
        dataliste.css('display', 'block'); // Show dropdown if matches
      } else {
        dataliste.css('display', 'none'); // Hide if no matches
      }
    });

    var currentFocus = -1; // Track the current focused option
    input.on('keydown', function(e) {
      var options = dataliste.find('option'); // Get all options in the datalist
      
      if (e.keyCode === 40) { // Down arrow
        currentFocus++;
        addActive(options); // Highlight the next option
      } else if (e.keyCode === 38) { // Up arrow
        currentFocus--;
        addActive(options); // Highlight the previous option
      } else if (e.keyCode === 13) { // Enter key
        e.preventDefault();
        if (currentFocus > -1) {
          $(options[currentFocus]).click(); // Simulate a click on the active option
        }
      }
    });

    function addActive(x) {
      if (!x) return false; // Exit if no options
      removeActive(x); // Remove active class from all
      if (currentFocus >= x.length) currentFocus = 0; // Wrap to first option
      if (currentFocus < 0) currentFocus = (x.length - 1); // Wrap to last option
      $(x[currentFocus]).addClass('active'); // Add active class to current option
    }

    function removeActive(x) {
      $(x).removeClass('active'); // Remove active class from all options
    }
  });

  // Close datalist when clicking outside
  $(document).on('click', function(event) {
    var target = $(event.target);
    // Check if the click is outside the input and datalists
    if (!target.closest(inputs.join(',')).length && !target.closest(datalistes.join(',')).length) {
      $(datalistes.join(',')).css('display', 'none'); // Hide all datalists
      inputs.forEach(function(inputSelector) {
        $(inputSelector).css('border-radius', '5px'); // Reset border radius for all inputs
      });
    }
  });
})();

(function() {
    $('.nouveaute_item').prepend('<img class="new-red-icon" src="images/new.png" alt="" >');
})();
    
    (function() {
    $('.promotion_item').prepend('<img class="promotion-red-icon" src="images/promo.png" alt="" >');
})();
    
        (function() {
    $('.chrono_item').prepend('<img class="chrono-red-icon" src="images/24h.png" alt="" >');
})();
    
    
        
 // Cartes Tabs   


function openTab(evt, tabName) {
    // Hide all elements with class="tabcontent" by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the class "active" from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Update the URL hash without page jump
    history.replaceState(null, null, '#' + tabName);
}

// Check if a tab is specified in the URL hash on page load
window.onload = function() {
    var hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash) {
        var tabLink = document.getElementById(hash + 'Tab');
        if (tabLink) {
            tabLink.click(); // Simulate click on the corresponding tab
        }
    }
};
    
  


    
    
(function ($) {
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
})(jQuery);





(function($) {
    $('#whatsapp-chat').on('click', function() {
        window.open('https://wa.me/yourwhatsappnumber', '_blank');
    });
})(jQuery);

    
(function ($) {
    $('.associated').click(function () {
        // Retrieve the dialog ID from the data-dialog attribute
        let productDialogId = $(this).data('dialog');
        
        // Find the dialog element using the ID and open it
        let dialogElement = $('#' + productDialogId);
        
        if (dialogElement.length) {
            dialogElement[0].showModal();
            // Add no-scroll class to body to prevent scrolling
            $('body').addClass('no-scroll');
        }
    });

    // Close the dialog when the close button is clicked
    $('.dialog-close').click(function () {
        $(this).closest('dialog')[0].close();
        // Remove no-scroll class from body to restore scrolling
        $('body').removeClass('no-scroll');
    });
})(jQuery);


(function() {
    const pathname = window.location.pathname;

    // Define the expected subcategory pages
    const subcategoryPages = ['categorie.html', 'accueil.html', 'capcarrosserie.html', 'capservice.html'];
    const boutiquePage = 'boutique.html';

    // Function to highlight the selected filter item and scroll into view
    const highlightSelected = function() {
        // Remove existing borders from all filter items
        $('.filter-list__item').css({
            'border': 'none' // Reset border for all items
        });

        // Add orange border to the selected item
        $(this).closest('.filter-list__item').css({
            'border': '4px solid orange',  // Change border color to orange
            'border-radius': '6px'
        })[0].scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll the item into view
    };

    // Subcategory page logic
    if (subcategoryPages.some(page => pathname.endsWith(page))) {
        // Set up click event for both selectors
        $('.subcategory-item img, .block-brands__item-link img, .capramCartesImg').on('click', function(event) {
            event.preventDefault();

            // Get the alt attribute of the clicked item
            const altText = $(this).attr('alt');
            console.log('Alt text:', altText);

            if (altText) {
                // Store the alt text as the shop name
                localStorage.setItem('shopName', altText);
                window.location.href = 'boutique.html';
            } else {
                console.error('Alt text is undefined.');
            }
        });
    } 

    // Highlight filter images on any page when clicked
    $('.filter-list__item img').on('click', function() {
        const $filterItem = $(this).closest('.filter-list__item');
        const $radioButton = $filterItem.find('input[type="radio"]'); // Find the corresponding radio button
        const newShopName = $radioButton.val(); // Get the value of the radio button

        if (newShopName) {
            localStorage.setItem('shopName', newShopName); // Update shop name with the radio value

            // Update the displayed shop name instantly on boutique page
            if (pathname.endsWith(boutiquePage)) {
                $('.famille-shop-name').text(`${newShopName} `); // Update the displayed shop name
            }

            highlightSelected.call(this); // Highlight the corresponding radio item and scroll to it
        }
    });

    // Logic for boutique page to initially highlight the stored shop name
    if (pathname.endsWith(boutiquePage)) {
        const shopName = localStorage.getItem('shopName');
        if (shopName) {
            $('.famille-shop-name').text(`${shopName} `);

            // Highlight and scroll to the corresponding radio button's parent item based on stored shop name
            $(`input[type="radio"][value="${shopName}"]`).closest('.filter-list__item').css({
                'border': '4px solid orange', // Change border color to orange
                'border-radius': '6px'
            })[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            console.warn('No shop name found in localStorage.');
        }
    }

    // Function to add border to the radio button's filter item when clicked
    $('input[type="radio"]').on('click', function() {
        const $filterItem = $(this).closest('.filter-list__item'); // Get the corresponding filter item
        highlightSelected.call($filterItem.find('img')); // Highlight the item and scroll to it
    });

})();


    
(function($) {
    $(function() {
        // Select the input, search button, and search term display span for both existing and new forms
        const $searchInput = $('.search__input');
        const $searchButton = $('.search__button');
        const $searchTermDisplay = $('.block-header__title .search-term');

        // Selectors for the new form elements
        const $notFoundSearchInput = $('.not-found__search-input');
        const $notFoundSearchButton = $('.not-found__search-button');

        // Function to handle the redirection to the results page
        function redirectToResults(searchTerm) {
            if (searchTerm) {
                // Redirect to the results page with the search term as a query parameter
                window.location.href = `resultats.html?search=${encodeURIComponent(searchTerm)}`;
            }
        }

        // Event listener for keypress (Enter key) on the existing search input
        $searchInput.on('keypress', function(event) {
            if (event.which === 13) { // 13 is the Enter key
                event.preventDefault(); // Prevent default form submission
                redirectToResults($searchInput.val().trim());
            }
        });

        // Event listener for the existing search button click
        $searchButton.on('click', function(event) {
            event.preventDefault(); // Prevent default button action
            redirectToResults($searchInput.val().trim());
        });

        // Event listener for keypress (Enter key) on the new not-found search input
        $notFoundSearchInput.on('keypress', function(event) {
            if (event.which === 13) { // 13 is the Enter key
                event.preventDefault(); // Prevent default form submission
                redirectToResults($notFoundSearchInput.val().trim());
            }
        });

        // Event listener for the new not-found search button click
        $notFoundSearchButton.on('click', function(event) {
            event.preventDefault(); // Prevent default button action
            redirectToResults($notFoundSearchInput.val().trim());
        });

        // Check for a search term in the URL, update input and display span
        const urlParams = new URLSearchParams(window.location.search);
        const searchTermFromURL = urlParams.get('search');
        if (searchTermFromURL) {
            const decodedTerm = decodeURIComponent(searchTermFromURL);
            $searchInput.val(decodedTerm); // Set search term in existing input
            $notFoundSearchInput.val(decodedTerm); // Set search term in new input
            $searchTermDisplay.text(decodedTerm); // Set search term in <span>
        }
    });
})(jQuery);

    

    
(function($) {
    $('.product_all_info_image .image__tag').on('click', function() {
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
        setTimeout(function() {
            overlay.css('opacity', '1');
            $('#popupImage').css('transform', 'scale(1)');
        }, 10);
        
        // Close overlay when clicked and remove it from the DOM
        overlay.on('click', function() {
            overlay.css('opacity', '0');
            $('#popupImage').css('transform', 'scale(0.8)');
            
            setTimeout(function() {
                overlay.remove();
            }, 300); // match the transition duration
        });
    });
})(jQuery);


        // Function to check if both inputs are filled
function checkInputs() {
    const isUsernameFilled = $('#fname').val() !== '';
    const isPasswordFilled = $('#pwd').val() !== '';
    const submitButton = $('input[type="submit"]'); // Assuming the button is the submit input

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
$('#fname').on('focus input', function() {
    const placeholderText = 'Nom d\'utilisateur';
    $(this).attr('placeholder', ''); // Hide placeholder on focus
    checkInputs(); // Check inputs while typing
});

// Handle input events for password
$('#pwd').on('focus input', function() {
    const placeholderText = 'Mot de pass';
    $(this).attr('placeholder', ''); // Hide placeholder on focus
    checkInputs(); // Check inputs while typing
});

// Restore placeholder on blur (when clicking away) if input is empty
$('.loginWrapper input[type="text"], .loginWrapper input[type="password"]').on('blur', function() {
    const placeholderText = $(this).is('#fname') ? 'Nom d\'utilisateur' : 'Mot de pass'; // Determine placeholder text
    if ($(this).val() === '') {
        $(this).attr('placeholder', placeholderText); // Restore placeholder if input is empty
    }
});

// Toggle visibility for both username and password placeholders
$('.fa-eye').on('click', function() {
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




    
    
    
          // Function to handle login
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

    
(function() {
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
    setTimeout(function() {
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

        return { hours: hours, minutes: minutes, seconds: seconds };
    }

    // Update the countdown every second
    setInterval(function() {
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

    
    
(function ($) {
    $(function () {
        const video = $('#oilVideo')[0]; // Access the video element
        const playButton = $('.play-button');
        const playIcon = playButton.find('i');
        const fullscreenButton = $('.fullscreen-button');
        const volumeControl = $('.volume-control');
        
        // Play/Pause functionality
        playButton.on('click', function () {
            if (video.paused) {
                video.play();
                playIcon.removeClass('fa-play').addClass('fa-pause'); // Change to pause icon
                // Show fullscreen and volume controls after play starts
                fullscreenButton.fadeIn();
                volumeControl.fadeIn();
            } else {
                video.pause();
                playIcon.removeClass('fa-pause').addClass('fa-play'); // Change back to play icon
                // Hide fullscreen and volume controls when paused
                fullscreenButton.fadeOut();
                volumeControl.fadeOut();
            }
        });

        // Reset to play icon when the video ends
        $(video).on('ended', function () {
            playIcon.removeClass('fa-pause').addClass('fa-play');
            // Hide fullscreen and volume controls when the video ends
            fullscreenButton.fadeOut();
            volumeControl.fadeOut();
        });

        // Fullscreen functionality
        fullscreenButton.on('click', function () {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { // Firefox
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE/Edge
                video.msRequestFullscreen();
            }
        });

        // Volume control functionality
        volumeControl.on('input', function () {
            video.volume = $(this).val() / 100; // Volume control as a percentage
        });
    });
})(jQuery);

    

    
});
