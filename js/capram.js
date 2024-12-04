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
    
 
    
  $('.category-checkbox').change(function() {
        var $this = $(this); // Reference to the current checkbox
        var $label = $this.closest('label');
        var subcatego = $label.find('.subcatego');
        var downIcon = $label.find('i.fa-sort-down');
        var upIcon = $label.find('i.fa-sort-up');

        // If the checkbox is checked
        if ($this.is(':checked')) {
            // Close all subcategories and reset icons
            $('.subcatego').not(subcatego).slideUp('fast');
            $('.category-checkbox').not($this).prop('checked', false); // Uncheck other checkboxes
            
            $('i.fa-sort-down').show(); // Show all down icons
            $('i.fa-sort-up').hide(); // Hide all up icons

            // Open the current subcategory and switch icons
            subcatego.stop(true, true).slideDown('fast');
            downIcon.hide(); // Hide the down icon for the current category
            upIcon.show(); // Show the up icon for the current category
        } else {
            // Close the current subcategory and reset icons
            subcatego.stop(true, true).slideUp('fast');
            downIcon.show(); // Show the down icon for the current category
            upIcon.hide(); // Hide the up icon for the current category
        }
    }); 
    
    
    
    
    


    $('.subcategory-item').on('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Get data attributes
        const categoryId = $(this).data('category');
        const subcategoryId = $(this).data('subcategory');

        // Redirect to the second page with parameters
        window.location.href = `boutique.html?category=${categoryId}&subcategory=${subcategoryId}`;
    });
    
   // Function to get URL parameters
    function getUrlParameter(name) {
        const regex = new RegExp('[?&]' + name + '=([^&#]*)', 'i');
        const results = regex.exec(window.location.href);
        return results ? decodeURIComponent(results[1]) : null;
    }

    const categoryId = getUrlParameter('category');
    const subcategoryId = getUrlParameter('subcategory');

    // Check the main category checkbox and show its subcategories
    if (categoryId) {
        $(`#catagory_${categoryId}`).prop('checked', true);
        // Show subcategories for the checked main category
        const subcategories = $(`#catagory_${categoryId}`).closest('label').find('.subcatego');
        subcategories.slideDown(); // Show subcategories
    }

    // Check the subcategory checkbox and apply font weight
    if (subcategoryId) {
        $(`#subCatego_${subcategoryId}`).prop('checked', true);
        // Bold only the specific subcategory name
        $(`#subCatego_${subcategoryId}`).closest('li').find('.subCategory-name').css('font-weight', 'bold');
    }

    // Toggle subcategories based on main category checkbox
    $('.category-checkbox').change(function() {
        const subcategories = $(this).closest('label').find('.subcatego');
        
        if ($(this).is(':checked')) {
            subcategories.slideDown(); // Show subcategories
        } else {
            subcategories.slideUp(); // Hide subcategories
            // Uncheck all subcategory checkboxes if the main category is unchecked
            subcategories.find('.subCategory-checkbox').prop('checked', false);
            subcategories.find('.subCategory-name').css('font-weight', 'normal'); // Reset font weight
        }
    });

    // Subcategory click event
    $('.subCategory-checkbox').change(function() {
        const $subCategoryName = $(this).closest('li').find('.subCategory-name');
        if ($(this).is(':checked')) {
            $subCategoryName.css('font-weight', 'bold'); // Bold the name only for the clicked subcategory
        } else {
            $subCategoryName.css('font-weight', 'normal'); // Reset to normal if unchecked
        }
    });
    
    
    
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
    $('.new-product-img').append('<img class="new-red-icon" src="images/new.png" alt="" >');
})();
    
    (function() {
    $('.promotion-img').append('<img class="promotion-red-icon" src="images/promo.png" alt="" >');
})();
    
        (function() {
    $('.chrono-product-img').append('<img class="chrono-red-icon" src="images/24h.png" alt="" >');
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
    
    

(function($) {
    // Function to activate the first category on page load
    function activateFirstCategory() {
        // Find the first category element
        var $firstCategory = $('.goToCategoTarget').first();
        var firstCategoryId = $firstCategory.data('category');

        // Add the 'activey' class to the first category's title
      /*  $firstCategory.find('.categoBoxTitle').addClass('activey');*/

        // Slide down the first subcategory
      /*  $('#subcategory-' + firstCategoryId).slideDown(300);*/
    }

 function openSubcategory(categoryId) {
    var $subcategory = $('#subcategory-' + categoryId);

    // Hide all other subcategories and remove 'activey' class from other titles
    $('.subcategory').slideUp(300);
    $('.categoBoxTitle').removeClass('activey');

    // Show the subcategory for the clicked category with 300ms duration
    $subcategory.slideDown(300, function() {
        // Once the sliding down is complete, scroll to the category element, offset by 30px
        $('html, body').animate({
            scrollTop: $('.goToCategoTarget[data-category="' + categoryId + '"]').offset().top - 30
        }, 300); // Adjust the duration of the scroll animation as needed
    });

    $('.goToCategoTarget[data-category="' + categoryId + '"] .categoBoxTitle').addClass('activey'); // Add 'activey' class to the clicked category
}


    // When a category is clicked
    $('.goToCategoTarget').click(function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        var categoryId = $(this).data('category'); // Get the category ID

        // Check if the clicked subcategory is currently visible
        var $subcategory = $('#subcategory-' + categoryId);

        if ($subcategory.is(':visible')) {
            // If it is visible, slide it up (hide) with 300ms duration
            $subcategory.slideUp(300);
            $(this).find('.categoBoxTitle').removeClass('activey'); // Remove 'activey' class
        } else {
            // Call the function to open the subcategory
            openSubcategory(categoryId);
        }
    });

    // Handle clicks on main menu links
    $('.main-menu__link').click(function(event) {
        var targetId = $(this).attr('href').split('#')[1]; // Get the target ID from the link
        var categoryId = null;

        // Find the corresponding category based on the target ID
        $('.goToCategoTarget').each(function() {
            if ($(this).find('.categoBoxTitle').attr('id') === targetId) {
                categoryId = $(this).data('category'); // Get the corresponding category ID
            }
        });

        if (categoryId) {
            // Allow the link to navigate normally to the new page
            // No need to call preventDefault here
            openSubcategory(categoryId); // Open the corresponding subcategory
        }
    });

    // Check if there's a hash in the URL and open the corresponding subcategory on page load
    $(window).on('load', function() {
        var hash = window.location.hash; // Get the hash from the URL
        if (hash) {
            var targetId = hash.substring(1); // Remove the '#' from the hash
            var categoryId = null;

            // Find the corresponding category based on the target ID
            $('.goToCategoTarget').each(function() {
                if ($(this).find('.categoBoxTitle').attr('id') === targetId) {
                    categoryId = $(this).data('category'); // Get the corresponding category ID
                }
            });

            if (categoryId) {
                openSubcategory(categoryId); // Open the corresponding subcategory
            }
        } else {
          activateFirstCategory();  // If there's no hash, activate the first category
        }
    });

    // Call the function to activate the first category when the page loads
   activateFirstCategory();

})(jQuery);

    /*
    
    (function($) {
    // Function to activate the first category on page load
    function activateFirstCategory() {
        // Find the first category element
        var $firstCategory = $('.goToCategoTarget').first();
        var firstCategoryId = $firstCategory.data('category');

        // Add the 'activey' class to the first category's title
        $firstCategory.find('.categoBoxTitle').addClass('activey');

        // Rotate the chevron down for the active category
        $firstCategory.find('.fa-chevron-down').addClass('rotate');

        // Slide down the first subcategory
        $('#subcategory-' + firstCategoryId).slideDown(300);
    }

    // Function to add chevron to all categoBoxTitle elements
    function addChevronIcons() {
        $('.categoBoxTitle').each(function() {
            // Append a chevron span element to each categoBoxTitle
            $(this).append('<i class="fa-solid fa-chevron-down"></i>'); // Unicode chevron-down
        });
    }

    function openSubcategory(categoryId) {
        var $subcategory = $('#subcategory-' + categoryId);

        // Hide all other subcategories and remove 'activey' class and rotate chevron
        $('.subcategory').slideUp(300);
        $('.categoBoxTitle').removeClass('activey');
        $('.fa-chevron-down').removeClass('rotate');

        // Show the subcategory for the clicked category with 300ms duration
        $subcategory.slideDown(300, function() {
            // Once the sliding down is complete, scroll to the category element, offset by 30px
            $('html, body').animate({
                scrollTop: $('.goToCategoTarget[data-category="' + categoryId + '"]').offset().top - 30
            }, 300); // Adjust the duration of the scroll animation as needed
        });

        // Add 'activey' class and rotate chevron for the clicked category
        $('.goToCategoTarget[data-category="' + categoryId + '"] .categoBoxTitle').addClass('activey');
        $('.goToCategoTarget[data-category="' + categoryId + '"] .fa-chevron-down').addClass('rotate');
    }

    // When a category is clicked
    $('.goToCategoTarget').click(function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        var categoryId = $(this).data('category'); // Get the category ID

        // Check if the clicked subcategory is currently visible
        var $subcategory = $('#subcategory-' + categoryId);

        if ($subcategory.is(':visible')) {
            // If it is visible, slide it up (hide) with 300ms duration
            $subcategory.slideUp(300);
            $(this).find('.categoBoxTitle').removeClass('activey'); // Remove 'activey' class
            $(this).find('.fa-chevron-down').removeClass('rotate'); // Rotate the chevron back
        } else {
            // Call the function to open the subcategory
            openSubcategory(categoryId);
        }
    });

    // Handle clicks on main menu links
    $('.main-menu__link').click(function(event) {
        var targetId = $(this).attr('href').split('#')[1]; // Get the target ID from the link
        var categoryId = null;

        // Find the corresponding category based on the target ID
        $('.goToCategoTarget').each(function() {
            if ($(this).find('.categoBoxTitle').attr('id') === targetId) {
                categoryId = $(this).data('category'); // Get the corresponding category ID
            }
        });

        if (categoryId) {
            // Allow the link to navigate normally to the new page
            openSubcategory(categoryId); // Open the corresponding subcategory
        }
    });

    // Check if there's a hash in the URL and open the corresponding subcategory on page load
    $(window).on('load', function() {
        var hash = window.location.hash; // Get the hash from the URL
        if (hash) {
            var targetId = hash.substring(1); // Remove the '#' from the hash
            var categoryId = null;

            // Find the corresponding category based on the target ID
            $('.goToCategoTarget').each(function() {
                if ($(this).find('.categoBoxTitle').attr('id') === targetId) {
                    categoryId = $(this).data('category'); // Get the corresponding category ID
                }
            });

            if (categoryId) {
                openSubcategory(categoryId); // Open the corresponding subcategory
            }
        } else {
         /*   activateFirstCategory();  // If there's no hash, activate the first category
        }
    });

    // Call the function to add chevron icons
    addChevronIcons();

    // Call the function to activate the first category when the page loads
  /*  activateFirstCategory();

})(jQuery);*/
    
    
(function ($) {
  // Default mode: dark
  const savedMode = localStorage.getItem('mode') || 'dark'; // Default to dark if no mode is saved

  if (savedMode === 'light') {
    $("body").addClass('light');
    $(".moon").addClass('sun');
    $(".tdnn").addClass('day');
    $(".logo__image img").attr('src', 'images/logo.png');
    $(".site-footer__payments img").attr('src', 'images/logo.png');
    $(".carrosserie-img img").attr('src', 'images/carrosserie-white.jpg');
    $(".nightMode").prop('disabled', true); // Disable night mode CSS
    $(".darkModeCheck").last().append('<i class="fa-solid fa-check"></i>'); // Add check icon to "Désactivé"
  } else {
    $(".logo__image img").attr('src', 'images/logo_white.png');
    $(".site-footer__payments img").attr('src', 'images/logo_white.png');
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
      $(".carrosserie-img img").attr('src', 'images/carrosserie-white.jpg');
      $(".nightMode").prop('disabled', true);
      localStorage.setItem('mode', 'light');
      $(".darkModeCheck i").remove(); // Remove all check icons
      $(".darkModeCheck").last().append('<i class="fa-solid fa-check"></i>'); // Add check icon to "Désactivé"
    } else {
      $(".logo__image img").attr('src', 'images/logo_white.png');
      $(".site-footer__payments img").attr('src', 'images/logo_white.png');
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
      $(".carrosserie-img img").attr('src', 'images/carrosserie-white.jpg');
      $(".nightMode").prop('disabled', true);
      localStorage.setItem('mode', 'light');
      $(".darkModeCheck i").remove(); // Remove all check icons
      $(this).append('<i class="fa-solid fa-check"></i>'); // Add check icon to "Désactivé"
    }
  });
})(jQuery);



$(function () {
    // Function to update the title based on the button clicked
    $('.section-header__groups-button').on('click', function () {
        // Get the text of the clicked button
        var buttonText = $(this).text();

        // Find the title element and update its text based on the button clicked
        if (buttonText === 'Nouveautés') {
            $('.section-header__title').text('Nouveautés');
        } else if (buttonText === 'Promotions') {
            $('.section-header__title').text('Promotions');
        } else if (buttonText === 'Aroma') {
            $('.section-header__title').text('Aroma');
        }

        // Optional: Remove active class from all buttons and add it to the clicked button
        $('.section-header__groups-button').removeClass('section-header__groups-button--active');
        $(this).addClass('section-header__groups-button--active');
    });
});

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

    
    
    
    
    
(function ($) {
  const lang = 'FR'; // Only French description included
  const typeCountdown = 'time'; // 'time' for countdown to a specific time, 'date' for countdown to a designated date
  let EndDate = '2019/07/10, 22:00'; // Expiration Date yyyy/mm/dd, hh:mm (used if typeCountdown = 'date')
  let days = 1; // Number of days before the end (used if typeCountdown = 'time')
  let timeOut = '00:00'; // 'hh:mm' (used if typeCountdown = 'time')
  const ColorDigitEnd = '#bfbfbf';

  let hours, minutes, target_date, ExpirationDate;
  let formatCountdown = null;
  let day_lang = 'Jours', hour_lang = 'Heures', minute_lang = 'Minutes', second_lang = 'Secondes';

  function daysLeft(target) {
    if (target > 24 * 60 * 60 * 1000) {
      formatCountdown = 'day|hour|minute|second';
    } else if (target > 60 * 60 * 1000) {
      formatCountdown = 'hour|minute|second';
    } else {
      formatCountdown = 'minute|second';
    }
  }

  if (typeCountdown === 'time') {
    timeOut = timeOut.split(':');
    hours = timeOut[0];
    minutes = timeOut[1];
    target_date = (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60) * 1000;

    daysLeft(target_date);
    target_date += new Date().getTime();
  } else if (typeCountdown === 'date') {
    ExpirationDate = new Date(EndDate);
    target_date = ExpirationDate - new Date();
    daysLeft(target_date);
    target_date += new Date().getTime();
  } else {
    target_date = 0;
    formatCountdown = 'day|hour|minute|second';
  }

  class Countdown {
    constructor(userOptions) {
      this.options = $.extend(
        {
          cont: null,
          countdown: true,
          endDate: { day: 0, hour: 0, minute: 0, second: 0 },
          endCallback: null,
          outputFormat: formatCountdown,
          outputTranslation: {
            day: day_lang,
            hour: hour_lang,
            minute: minute_lang,
            second: second_lang,
          },
        },
        userOptions
      );

      this.lastTick = null;
      this.intervalsBySize = ['day', 'hour', 'minute', 'second'];
      this.interval = null;
      this.digitConts = {};
    }

    start() {
      let endDate = this._getDate(this.options.endDate);
      let endDateData = this._prepareTimeByOutputFormat(endDate);

      this._writeData(endDateData);
      this.lastTick = endDateData;

      if (this.options.countdown && endDate.getTime() <= Date.now()) {
        if (typeof this.options.endCallback === 'function') {
          this.stop();
          this.options.endCallback();
        }
      } else {
        this.interval = setInterval(() => {
          this._updateView(this._prepareTimeByOutputFormat(endDate));
        }, 1000);
      }
    }

    stop() {
      if (this.interval !== null) {
        clearInterval(this.interval);
      }
    }

    _getDate(date) {
      if (typeof date === 'object') {
        return date instanceof Date ? date : new Date(date.day, date.hour, date.minute, date.second);
      } else if (typeof date === 'number' || typeof date === 'string') {
        return new Date(date);
      } else {
        return new Date();
      }
    }

    _prepareTimeByOutputFormat(dateObj) {
      let output = {}, timeDiff = this.options.countdown ? dateObj.getTime() - Date.now() : Date.now() - dateObj.getTime();

      this.intervalsBySize.forEach((item) => {
        if (this.options.outputFormat.includes(item)) {
          let value;
          if (timeDiff > 0) {
            switch (item) {
              case 'day': value = Math.trunc(timeDiff / (24 * 60 * 60 * 1000)); timeDiff %= 24 * 60 * 60 * 1000; break;
              case 'hour': value = Math.trunc(timeDiff / (60 * 60 * 1000)); timeDiff %= 60 * 60 * 1000; break;
              case 'minute': value = Math.trunc(timeDiff / (60 * 1000)); timeDiff %= 60 * 1000; break;
              case 'second': value = Math.trunc(timeDiff / 1000); timeDiff %= 1000; break;
            }
          } else {
            value = '00';
            $('.digit_cont').css('color', ColorDigitEnd);
          }
          output[item] = value.toString().padStart(2, '0').split('');
        }
      });

      return output;
    }

    _writeData(data) {
      let code = '';

      for (let intervalName in data) {
        if (data.hasOwnProperty(intervalName)) {
          let element = `<div><div class="interval_cont interval_cont_${intervalName}">`;
          let description = `<div class="description-chrono">${this.options.outputTranslation[intervalName]}</div>`;

          data[intervalName].forEach((digit, index) => {
            element += `<div class="digit_cont digit_cont_${index}">${this._getDigitElementString(digit, '0')}</div>`;
          });

          code += element + '</div>' + description + '</div>';
        }
      }
      $(this.options.cont).html(code);
      this.lastTick = data;
    }

    _getDigitElementString(newDigit, lastDigit) {
      return `
        <div class="last_placeholder"><span>${lastDigit}</span></div>
        <div class="new_placeholder">${newDigit}</div>
        <div class="last_rotate">${lastDigit}</div>
        <div class="new_rotate"><div class="rotated"><span>${newDigit}</span></div></div>`;
    }

    _updateView(data) {
      for (let intervalName in data) {
        if (data.hasOwnProperty(intervalName)) {
          data[intervalName].forEach((digit, index) => {
            if (this.lastTick[intervalName][index] !== data[intervalName][index]) {
              this._getDigitCont(intervalName, index).html(this._getDigitElementString(data[intervalName][index], this.lastTick[intervalName][index]));
            }
          });
        }
      }
      this.lastTick = data;
    }

    _getDigitCont(intervalName, index) {
      if (!this.digitConts[`${intervalName}_${index}`]) {
        this.digitConts[`${intervalName}_${index}`] = $(`.interval_cont_${intervalName} .digit_cont_${index}`);
      }
      return this.digitConts[`${intervalName}_${index}`];
    }
  }

  const cd = new Countdown({
    cont: $('.flip-countdown'),
    endDate: target_date,
    endCallback: function () {
      const nextTarget = Date.now() + 24 * 60 * 60 * 1000;
      cd.stop();
      cd.options.endDate = nextTarget;
      cd.start();
    },
  });

  cd.start();
})(jQuery);

    
    
    
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
