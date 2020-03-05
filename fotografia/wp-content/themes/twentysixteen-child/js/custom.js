jQuery(document).ready(function($) {


    /* WINDOW RESIZE */


    $(window).resize(function () {
        
        
        var windowWidth = $(window).width();

        if (windowWidth < 769) {
            /* MOBILE RESIZE */
            $('.slider-casting').slick({
                fade: false,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<a class="arrow-left"></a>',
                nextArrow: '<a class="arrow-right"></a>'
            });

            $('.slider-casting .slide-content h2').each(function(){
                $(this).click(function(){
                    $(this).parent().siblings().find('.slider-img').css('height','0');
                    $(this).siblings('.slider-img').css('height','65.86vw');
                })
            });
            $('.slider-casting .slide-content h2 a').each(function(){
                $(this).removeAttr('href');
            }); 


            var nextTimeout = function(){
                var articleTitleHeight = $('.article-title').height();
                var articleInstaHeight = $('.article-instagram').height();
                var articleMedidasHeight = $('.article-medidas').height();
                var nextModelosTop = articleTitleHeight + articleInstaHeight + articleMedidasHeight - 24;
                var nextJournalTop = articleTitleHeight - 52;
                if (nextJournalTop < 56) {
                    nextJournalTop = 56;
                };
                $('.single-modelos .next-model').css('top',nextModelosTop).css('opacity','1');
                $('.single-post .next-model').css('top',nextJournalTop).css('opacity','1');
            };
            setTimeout(nextTimeout, 100);
            

            /* SMOOTH SCROLL */

            $('a[href*="#"]:not([href="#"])').click(function() {
                var offset = -20; // <-- change the value here
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top + offset
                        }, 500);
                        return false;
                    }
                }
            });
            
        }else{
            /* DESKTOP RESIZE */

            $('.slider-casting').slick({
                fade: false,
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<a class="arrow-left"></a>',
                nextArrow: '<a class="arrow-right"></a>'
            });

            $('.slider-casting .slide-content h2').each(function(){
                $(this).hover(
                  function () {
                    $(this).siblings('.slider-img').show();
                  }, 
                  function () {
                    $(this).siblings('.slider-img').hide();
                  }
                );
            });

            $('.slider-casting .slider-item:odd').each(function(){
                $(this).addClass('slider-item-odd');
            });

            $('.slider-casting .slider-item:even').each(function(){
                $(this).addClass('slider-item-even');
            });

            $('.slider-casting .slider-item:nth-child(3n)').each(function(){
                $(this).addClass('slider-item-3rd');
            });

            $('.slider-casting .slider-item:nth-child(4n)').each(function(){
                $(this).addClass('slider-item-4th');
            });

            $('.slider-casting .slider-item:nth-child(5n)').each(function(){
                $(this).addClass('slider-item-5th');
            });

            $('.slider-casting .slider-item:nth-child(6n)').each(function(){
                $(this).addClass('slider-item-6th');
            });

            $('.slider-casting .slick-arrow').click(function(){
                $('.slider-item').toggleClass('slider-item-alt');
            });


            /* SMOOTH SCROLL */

            $('a[href*="#"]:not([href="#"])').click(function() {
                var offset = -50; // <-- change the value here
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top + offset
                        }, 500);
                        return false;
                    }
                }
            });

            /* MODEL */

            var thumbCount = $('.single-modelos .thumbs').length;
            if ( thumbCount > 5 ) {
                $('.slider-nav').addClass('five_plus');
            }

        }


    });
    $(function(){ $(window).resize() });


    /* HEADER */

    $('header .menu li').each(function(){
        $(this).click(function(){
            $(this).siblings().removeClass('current-menu-item');
            $(this).addClass('current-menu-item');
        });
    });

    $('.btn-menu').click(function(){
        $('.mobile-menu-container').toggleClass('menu-mobile-show');
    });

    $('.mobile-menu-container .btn-voltar').click(function(){
        $('.mobile-menu-container').removeClass('menu-mobile-show');
    });

     $('.mobile-menu .menu a').click(function(){
        $('.mobile-menu-container').removeClass('menu-mobile-show');
     });


    

    if(window.location.href.indexOf("casting") > -1) {
        var anchorTimeout = function(){
            $('.menu-item-16 a').trigger('click');
        };
        setTimeout(anchorTimeout, 100);
    }
    if(window.location.href.indexOf("journal") > -1) {
        var anchorTimeout = function(){
            $('.menu-item-19 a').trigger('click');
        };
        setTimeout(anchorTimeout, 100);
    }
    


    /* SLIDERS */

    $('.slider-header').slick({
        fade: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });
    
    

    $('.slider-journal').slick({
        fade: false,
        infinite: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<a class="arrow-left"></a>',
        nextArrow: '<a class="arrow-right"></a>'
    });

    $('.slider-model').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 15,
        slidesToScroll: 1,
        asNavFor: '.slider-model',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        autoplay: false,
        draggable: false
    });







    /* MUSIC */

    $('.music-block').clone().appendTo('.music-ext');
    
    var animaLeft=0;
    $larguraAnimaItem1 = Math.round($('.music-block .music-container:first-child').width());
    var animaContent = $('.music-ext').html();
    //console.log(animaContent);
    setInterval(function() {
        $('.music-ext').css('transform', 'translateX(' + (animaLeft-=1) + 'px)');
        //console.log($larguraAnimaItem1);
        //console.log(animaLeft);
        if ( animaLeft*(-1) == $larguraAnimaItem1 ) {
            //console.log('deu');
            $('.music-ext').append(animaContent);
        }else if ( animaLeft*(-1) % $larguraAnimaItem1 === 0 ) {
            $('.music-ext').append(animaContent);
        }
    }, 10);
    

    /* FOOTER */

    $('.footer input').keyup(function(){
        if (!$(this).val().length == 0) {
            $(this).addClass('input-fill');
            // if ( $('.btn-news').length < 1 ) {
            //     $(this).after('<a class="btn-news"></a>')    
            // };
            $('.mc4wp-form-fields input[type="submit"]').css('opacity','1');
        }else{
            $(this).removeClass('input-fill');
            //$('.btn-news').remove();
            $('.mc4wp-form-fields input[type="submit"]').css('opacity','0');
        }
    });




});