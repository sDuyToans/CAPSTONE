// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();

$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("active");
        }
    });
});

$(document).ready(function () {
    $("#lightgallery").lightGallery();
});

$(document).ready(function() {
  
    //Pour afficher le bouton 
      var offset = 120;
      var duration = 500;
      $(window).scroll(function() {
          if (jQuery(this).scrollTop() > offset) {
              $('.back-to-top').fadeIn(duration);
          } else {
              $('.back-to-top').fadeOut(duration);
          }
      });
    
    //Pour le smoth scroll
    $(function() {
       $('a[href*=#]:not([href=#])').click(function() {
           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
                 $('html,body').animate({
            scrollTop: target.offset().top
            }, 500);
            return false;
            }
          }
      });
      });
  });




