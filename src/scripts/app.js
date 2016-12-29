$(function () {
    /*各种音效都放在这里*/
    //打字声：
    var audioTyping = new Audio('audios/typing.mp3');
    audioTyping.loop = true;

    //创建swiper
    var appSwiper = new Swiper('.swiper-container', {
        initialSlide: 0,
        direction : 'vertical',
        grabCursor: true,
        onInit: function (swiper) {
            //页面第一次加载时执行
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
            triggerScene1(swiper);
            triggerScene4();
            triggerScene2();
        },
        onSlideChangeStart: function (swiper) {
            clearTypefont();
        },
        onSlideNextStart(swiper) {
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper); 
            //页面滑动结束后执行
            var currPage = swiper.activeIndex;
            //滑动到相应页面时执行对应动画效果
            switch (currPage) {
                case 0:
                    triggerScene1();
                    break;
                case 1:
                    break;
                case 2:
                    triggerScene2();
                    break;
                case 2:
                    triggerScene3();
                    break;
                case 3:
                    // triggerScene4(swiper);
                    break;
                case 4:
                    triggerScene5();
                    break;
                case 5:
                    triggerScene6();
                    break;
                case 6:
                    triggerScene7();
                    break;
                case 7:
                    triggerScene8();
                    break;
                case 8:
                    triggerScene9();
                    break;
                default:
                    break;
            }
        }
    });

    function triggerScene1() {
        console.log('entry scene1...');
        var scene = $('.scene1');
        var typefont1_1 = scene.find('.typefont1-1');
        var typefont1_2 = scene.find('.typefont1-2');
        var typefont1_3 = scene.find('.typefont1-3');
        var typefont1_4 = scene.find('.typefont1-4');
        typefont1_1.typed({
            strings: [typefont1_1.attr('data-typefont')],
            typeSpeed: 150,
            startDelay: 1500,
            showCursor: false,
            preStringTyped: function () {
                audioTyping.play();
            },
            onStringTyped: function () {
                audioTyping.pause();
            }
        });
        typefont1_2.typed({
            strings: [typefont1_2.attr('data-typefont')],
            typeSpeed: 0,
            startDelay: 1500 + 10000,
            showCursor: false
        });
        typefont1_3.typed({
            strings: [typefont1_3.attr('data-typefont')],
            typeSpeed: 0,
            startDelay: 7000 + 10000,
            showCursor: false
        });
        typefont1_4.typed({
            strings: [typefont1_4.attr('data-typefont')],
            typeSpeed: 0,
            startDelay: 14500 + 10000,
            showCursor: false
        });
    }

    function triggerScene2() {
        console.log('entry scene2...');
        for (var i = 0; i < 200; i++) {
            var imgUrl = ['images/scene2-pop-blue.png', 'images/scene2-pop-pink.png', 'images/scene2-pop-red.png', 'images/scene2-pop-orange.png', 'images/scene2-pop-yellow.png', 'images/scene2-pop-white.png']
            $('.scene2')
                .append(
                    '<img src="' + imgUrl[Math.floor(Math.random() * 6)] + '" class="scene2-img' + i + ' ani" width="' + (Math.random() * 10 + 10) + '%" alt="">'
                )
            var animateEffect = ['fadeInRightBig', 'fadeInRight', 'fadeInUp', 'fadeInUpBig', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig']
                // animateEffect[Math.floor(Math.random() * 8)]
            $('.scene2-img' + i)
                .attr('swiper-animate-effect', 'zoomIn')
                .attr('swiper-animate-duration', '0.5s')
                .attr('swiper-animate-delay', 0.8 + Math.random() * 3 + 's')
                .css({
                    position: 'absolute',
                    left: Math.random() * 110 - 10 + '%',
                    top: Math.random() * 110 - 10 + '%'
                });
        }
        $('.scene2').append('<div class="scene2-bg2 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="4s"></div>');
    }

    function triggerScene3() {
        
    }

    function triggerScene4() {
        console.log('entry scene4...');
        for (var i = 1; i < 10; i++) {
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
            $('.scene4').append('<div class="scene4-category' + Math.floor(Math.random() * 10) + ' ani scene4-category" swiper-animate-effect="bounceInDown" swiper-animate-duration="' + (Math.random() * i + 10) + 's" swiper-animate-delay="' + (Math.random() * i + i - 1) + 's"></div>');
        }
    }

    function triggerScene5() {
        console.log('entry scene5...');
    }

    function triggerScene6() {
        console.log('entry scene6...');
    }

    function triggerScene7() {
        console.log('entry scene7...');
    }
    function triggerScene8() {
        console.log('entry scene8...');
    }

    function triggerScene9() {
        console.log('entry scene9...');
    }

    function clearTypefont () {
        $('[data-type="typefont"]').text('');
    } 
});