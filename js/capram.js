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
        $firstCategory.find('.categoBoxTitle').addClass('activey');

        // Slide down the first subcategory
        $('#subcategory-' + firstCategoryId).slideDown(300);
    }

    // Function to open subcategory based on the given category ID
    function openSubcategory(categoryId) {
        var $subcategory = $('#subcategory-' + categoryId);

        // Hide all other subcategories and remove 'activey' class from other titles
        $('.subcategory').slideUp(300);
        $('.categoBoxTitle').removeClass('activey');

        // Show the subcategory for the clicked category with 300ms duration
        $subcategory.slideDown(300);
        $('.goToCategoTarget[data-category="' + categoryId + '"] .categoBoxTitle').addClass('activey'); // Add 'activey' class to the clicked category

        // Scroll to the category element, offset by 30px
        $('html, body').animate({
            scrollTop: $('.goToCategoTarget[data-category="' + categoryId + '"]').offset().top - 30
        }, 300); // Adjust the duration of the scroll animation as needed
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
            activateFirstCategory(); // If there's no hash, activate the first category
        }
    });

    // Call the function to activate the first category when the page loads
    activateFirstCategory();

})(jQuery);






    
});
