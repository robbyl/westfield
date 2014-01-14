

$(document).ready(function() {


    $('#accordion-1').easyAccordion({
        autoStart: true,
        slideInterval: 10000,
        pauseOnHover: true,
        actOnHover: false,
        continuous: true
    });

    $('#accordion-2').easyAccordion({
        autoStart: true,
        slideInterval: 2000,
        actOnHover: false
    });

    $('#accordion-3').easyAccordion({
        autoStart: false,
        startSlide: 3,
        actOnHover: false,
        slideNum: false
    });

    $('#accordion-4').easyAccordion({
        autoStart: false,
        slideInterval: 5000,
    });

    $("#slider").easySlider({
        auto: true,
        continuous: true,
        pause: 3000,
        speed: 2500

    });


});