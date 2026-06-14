(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        // AOS Init
        AOS.init({
            once: true,
            duration: 1500,
        });


        // Nav Menu Active 
        $('.header__menu ul li a').click(function(){
            $('li a').removeClass("active");
            $(this).addClass("active");
        });

        
        // Header Menu Collapse
        $(".menu__trigger").on("click", function () {
            $(".menu-list").toggleClass("active");
        });
        

        // Trigger Btn
        $('.menu__trigger').on('click', function() {
          $(this).find('.menu_bar').toggle();
          $(this).find('.menu_cross').toggleClass('active');
        });

        // Featured Wraper
        $('.featured__card--wraper').owlCarousel({
            loop:               true,
            margin:             20,
            items:              1,
            autoplay:           true,
            autoplayTimeout:    2000,
            smartSpeed:         1200,
            autoplayHoverPause: true,
            responsive: {
              0: {
                stagePadding: 60,   
              },
              575: {
                stagePadding: 100,   
              },
              767: {
                stagePadding: 150,
              },
              992: {
                stagePadding: 250,
              },
              1199: {
                stagePadding: 350,
              },
              1449: {
                stagePadding: 400,
              },
              1620: {
                stagePadding: 600,
              },
            },
        });


        // Get the current year
        const currentYear = new Date().getFullYear();
        document.querySelector(".copyright-year").textContent = currentYear;



    }); //---document-ready-----



}(jQuery));


