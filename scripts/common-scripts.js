;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('.main-wrap input:text, .main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        })
        $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.


        var heroHeight = $(".hero-slide-wrap .slide").outerHeight();

        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 100) {
                $('body').addClass('showBg');
            } else {
                $('body').removeClass('showBg');
            }
        });


        // Nav function 
        $("#phone-nav").click(function () {
            $('body').toggleClass('nav-expanded');
            $('.nav-wrap').slideToggle();
        });

        // This function for scroll from bottom animation
        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        // End animation function

        // Footer animation function 
        function footerAnimation() {
            var $animation_elements = $('.line-animation');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($animation_elements, function () {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top - 200;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if (element_top_position <= window_bottom_position) {
                        $element.addClass('in-view');
                    } else {
                        $element.removeClass('in-view');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
            // End animation function
        }
        footerAnimation();
        
        // Hero slider controller
        if ($(window).width() < 768) {
            $('#caption-inner').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                //fade: true,
                asNavFor: '#hero-slide-wrap',
                speed: 1000,
                centerMode: false,
                focusOnSelect: true,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        }

        // Hero slider function
        $('#hero-slide-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            //arrows: true,
            dots: false,
            infinite: true,
            //fade: true,
            centerMode: false,
            speed: 1000,

            responsive: [{
                breakpoint: 99999,
                settings: {
                    unslick: true
                }
            }, {
                breakpoint: 767,
                settings: {

                    asNavFor: '#caption-inner',
                }
            }]
        });

        // Custom nav function 
        function slickCustomNav() {
            if ($(window).width() > 767) {
                $('#hero-slide-wrap').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    $(this).parents('.hero-wrap').find('#caption-inner .slide').removeClass('active');
                    $(this).parents('.hero-wrap').find('#caption-inner .slide').eq(currentSlide).addClass('active');

                });

                $('.hero-wrap').each(function (i) {
                    var item = $(this).find('#caption-inner .slide');
                    item.each(function (i) {
                        $(this).click(function () {
                            $(this).parents('.hero-wrap').find('#caption-inner .slide').removeClass('active');
                            $(this).parents('.hero-wrap').find('#caption-inner .slide').eq(i).addClass('active');
                            $(this).parents('.hero-wrap').find('#hero-slide-wrap').slick('slickGoTo', (i + 1) - 1);
                        })
                    })
                });
            }
        }

        slickCustomNav();

        $(window).on("resize", function () {
            slickCustomNav();
        })

        // Slick custom nav function 
        $('.direction-icon.flex-prev').on('click', function (e) {
            e.preventDefault()
            $('#hero-slide-wrap > .slick-prev').trigger('click');
        });

        $('.direction-icon.flex-next').on('click', function (e) {
            e.preventDefault()
            $('#hero-slide-wrap > .slick-next').trigger('click');
        });
        // //End slick custom nav function 
        
        
        $("div.accordion").bind('click', 'touchend', function(){
               $("div.accordion").find("div.answer:visible").slideUp()
               $("div.accordion").removeClass("active")
            if($(this).parent().find("div.answer:visible").length){
                $(this).removeClass("active")
                $(this).parent().find("div.answer").slideUp()
            } 
            else{
                $(this).addClass("active")
                $(this).parent().find("div.answer").slideDown()
            }
        })
        
        
        // Selectric function
        if($("select.select-stylled").length){
            $('select.select-stylled').selectric();
        }
        
        
        if ($('.phone').length){
           $(".phone").intlTelInput({
               text:false,
                numberType: "MOBILE",
                separateDialCode: true,
                preferredCountries: [ "ZA"],

            });  
        }   
        
        var headerHeight = $(".main-header-section").outerHeight();
        if( $('#scroll-down a').length ){
            $('#scroll-down a').click(function(e){
                e.preventDefault()
                var id = $(this).attr('href')

                $('html, body').stop(true, true).animate({
                    scrollTop: $("#scrolled").offset().top - headerHeight
                }, 1400 );

            })
        }        
        
        
        function workCarousel(){
            //var slideCount = null;
            var totalSlideNumber = 0;
            $('#carousel .carousel-thumb').each(function(i){
                totalSlideNumber =  i + 1;
                totalSlideNumber < 10 ? totalSlideNumber = '0' + totalSlideNumber : totalSlideNumber;
                
            });
            $('.works-count .current' ).text('01');
            $('.works-count .total' ).text(totalSlideNumber);
            
            
        }
        
        workCarousel();
       
        if($("#carousel").length){
            $('#carousel').slick({
                 slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    speed: 400,
                    centerPadding: "0",
                    centerMode: true,
                    arrows:false,
                    //autoplay: true,
                infinite: true,
                arrows: true,
            });
            
            // Custom nav function 
            function carouselCustomNav() {
                $('#carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    $('.query').removeClass('active').find('> p').slideUp();
                    $('.query').eq(currentSlide).addClass('active').find('> p').slideDown();
                    $('.query').eq(currentSlide).removeClass('visited');
                    $('.query').eq(currentSlide).prevAll().addClass('visited');
                    $('.query').eq(currentSlide).nextAll().removeClass('visited');
                    $('.query').eq(0).click(function(){
                        $(this).nextAll().removeClass('visited')
                    })
                });
                $('.query').each(function (i) {
                    var item = $(this).find('>h6');
                    item.click(function(){
                        if($(this).parent().find(" > p:visible").length){ 
                            $(this).parent().find(" > p").slideUp();
                            $(this).parent().removeClass('active');
                        }else{
                            $('.query').eq(i).nextAll().removeClass('visited')
                            $('.query').eq(i).removeClass('visited')
                            $('#carousel').slick('slickGoTo', (i + 1) - 1);      
                        }
                        
                    })
                });

                
            }

            carouselCustomNav();

            /*$(window).on("resize", function () {
                carouselCustomNav();
            })*/
            
        };

        $('#carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var getNumber = nextSlide + 1;
            getNumber < 10 ? getNumber = '0' + getNumber : getNumber;
            $('.works-count .current' ).text(getNumber);
        });
        
        //custom nav trigger
        $('.next').on('click', function(){
            $(this).parents('.carousel-control').find('.slick-next').trigger('click');
        })

        
        $('.prev').on('click', function(){
            $(this).parents('.carousel-control').find('.slick-prev').trigger('click');
        })

        carousel_features();
        if($("#carousel-features").length){
            $('#carousel-features').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                speed: 800,
                centerPadding: "0",
                centerMode: true,
                //autoplay: true,
                asNavFor: '#carousel-content',
            });
        }

        $(".carousel-content-deals").each(function (i) {
            $(this).prepend(i < 10 ? '<span>' + '0' + (i + 1) + '</span>' : '<span>' +(i + 1) +'</span>');
        });
        

        if($("#carousel-content").length){            
            
            $('#carousel-content').slick({
                vertical: true,
                //infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                //fade:true,
                speed: 800,
                //autoplay: false,
                asNavFor: '#carousel-features',
            }).on("mousewheel", function (event) {
                    event.preventDefault();
                if (event.deltaX > 0 || event.deltaY < 0) {
                    $(this).slick('slickNext');
                } else if (event.deltaX < 0 || event.deltaY > 0) {
                    $(this).slick('slickPrev');
                }
            });
            
            
            
        }
        
        function carousel_features(){
            //var slideCount = null;
            var totalSlideNumber = 0;
            $('#carousel-features .carousel-thumb').each(function(i){
                totalSlideNumber =  i + 1;
                totalSlideNumber < 10 ? totalSlideNumber = '0' + totalSlideNumber : totalSlideNumber;
                
            });
            $('.trck-count .current' ).text('01');
            $('.trck-count .total' ).text(totalSlideNumber);
            
        }
       
        
        $('#carousel-features').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var getNumber = nextSlide + 1;
            getNumber < 10 ? getNumber = '0' + getNumber : getNumber;
            $('.trck-count .current' ).text(getNumber);
        });
        
        function setParentheight(element){
            var setHeight = $(element).outerHeight();
            $(element).parent().height(setHeight);
        }
        
        setParentheight(".carousel-frame");
        
        $(window).on("resize", function () {
            setParentheight(".carousel-frame");
        })
        
        

    }); // End ready function.

    $(window).on('load', function () {
        $(".hero-title").fadeIn();
        $(".hero-text-wrap").delay(500).fadeIn(800);
    })



})(jQuery);

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})