$(document).ready(function() {
    const sections = $('div[id]');
    const navLinks = $('.navbar .navbar-links a');
    const mobileLinks = $('.mobile-links a');

    function updateActiveSection() {
      let maxVisibleArea = 0;
      let activeSection = null;

      sections.each(function() {
        const visibleArea = getVisibleArea($(this)[0]);

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          activeSection = $(this).attr('id');
        }
      });

      navLinks.each(function() {
        $(this).removeAttr('id', 'active');
        if ($(this).attr('href') === `#${activeSection}`) {
          $(this).attr('id', 'active');
        }
      });
       mobileLinks.each(function() {
        $(this).removeAttr('id', 'active');
        if ($(this).attr('href') === `#${activeSection}`) {
          $(this).attr('id', 'active');
        }
      });
    }

    function getVisibleArea(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = $(window).height();
      const windowWidth = $(window).width();
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
      return visibleHeight * visibleWidth;
    }

    $(window).on("scroll resize", function() {
      updateActiveSection();
    });

    updateActiveSection();

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
  });

  function setCurrentYear() {
    var currentYear = new Date().getFullYear();
    $('#currentYear').text(currentYear);
  }

  setCurrentYear();


  function toggleNavbar() {
    var navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("show");
    }
