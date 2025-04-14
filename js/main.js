(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        $('#preloader').delay(700).fadeOut(700);
    });

    // Initiate WOW.js
    new WOW().init();

    // Header Scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('header-scrolled');
            $('.back-to-top').addClass('active');
        } else {
            $('.header').removeClass('header-scrolled');
            $('.back-to-top').removeClass('active');
        }
    });

    // Smooth scrolling on nav links
    $('.navbar-nav a, .footer-links a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Mobile Navigation Toggle
    $('.navbar-toggler').on('click', function () {
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').removeClass('show');
        } else {
            $('.navbar-collapse').addClass('show');
        }
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.navbar-toggler, .navbar-collapse').length) {
            $('.navbar-collapse').removeClass('show');
        }
    });

    // Skills progress bars
    $('.progress-bar').each(function() {
        $(this).css("width", "0");
    });
    
    $('.skill-item').waypoint(function() {
        $('.progress-bar').each(function() {
            const progressValue = $(this).attr('aria-valuenow') + '%';
            $(this).css("width", progressValue);
        });
    }, { offset: '80%' });

    // Portfolio filter
    $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    // Back to top button
    $('.back-to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Form validation
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        let isValid = true;
        const requiredFields = $(this).find('[required]');
        
        requiredFields.each(function() {
            if (!$(this).val()) {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        if (isValid) {
            // Burada gerçek bir form gönderimi olacak
            alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
            this.reset();
        } else {
            alert('Lütfen tüm zorunlu alanları doldurun.');
        }
    });

    // Change nav-link active state on scroll
    $(window).scroll(function() {
        const scrollDistance = $(window).scrollTop();
        
        // Check the position of each section
        $('section').each(function() {
            const sectionTop = $(this).offset().top - 100;
            const sectionId = $(this).attr('id');
            
            if (sectionId && scrollDistance >= sectionTop) {
                $('.navbar-nav .nav-link').removeClass('active');
                $('.navbar-nav .nav-link[href="#' + sectionId + '"]').addClass('active');
            }
        });
    }).scroll();

    // Activate tooltips
    $('[data-toggle="tooltip"]').tooltip();

})(jQuery);

