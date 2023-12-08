$(document).ready(function() {
    $(window).on('scroll', function() {
      var scrollPos = $(window).scrollTop();

      $('div[id]').each(function() {
        var offsetTop = $(this).offset().top;
        var offsetBottom = offsetTop + $(this).outerHeight();
        var targetId = $(this).attr('id');

        if (scrollPos >= offsetTop && scrollPos <= offsetBottom) {
          $('.navbar-links a').removeAttr('id', 'active');
          $('.navbar-links a[href="#' + targetId + '"]').attr('id', 'active');
          $('.mobile-links a').removeAttr('id', 'active');
          $('.mobile-links a[href="#' + targetId + '"]').attr('id', 'active');
        }
      });
    });

    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });

    $(document).on('scroll', function () {
      let offset = window.pageYOffset;
      document.body.style.backgroundPositionY = offset * 0.5 + 'px';
    });

    function setCurrentYear() {
      var currentYear = new Date().getFullYear();
      $('#currentYear').text(currentYear);
    }
  
    setCurrentYear();
  });

  function toggleNavbar() {
    var navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("show");
    }