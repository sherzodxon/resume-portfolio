 //Sticky menu

 var sticky = document.querySelector('.nav');
 var origOffsetY = sticky.offsetTop;

 // function onScroll(e) {
 //     window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
 //         sticky.classList.remove('fixed');
 // }
 // document.addEventListener('scroll', onScroll);


 // Требуется jQuery


 // Scroll active

 $(window).scroll(function () {
     var scrollDistance = $(window).scrollTop();

     $('section').each(function (i) {
         if ($(this).position().top - 21 <= scrollDistance) {
             $('a[href*="#"]:not([href="#"]).nav-active').removeClass('nav-active');
             $('a').eq(i).addClass('nav-active');
         }
     });

 }).scroll();

 //Scroll to anchor

 $(function () {
     $('a[href*="#"]:not([href="#"])').click(function () {

         $('a').each(function () {
             $(this).removeClass('nav-active');
         })
         $(this).addClass('nav-active');
         if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html, body').animate({
                     scrollTop: target.offset().top - 20
                 }, 300);
                 return false;
             }
         }
     });
 });

 $(document).ready(function () {
     $('.skills__list').owlCarousel({
         loop: true,
         margin: 30,
         items: 3,
         dots: true,
         autoplay: true,
         autoplayTimeout: 2000,
         autoplayHoverPause: false,
         responsiveClass: true,
         responsive: {
             0: {
                 items: 1,
                 
             },
             600: {
                 items: 2,
                
             },
             1000: {
                 items: 3,
             }
         },
         nav: false
     });

 });

 //input-validation
 