$(function () {
    var typeCursor;
    /*各种音效都放在这里*/
    //打字声：
    var audioTyping = new Audio('audios/typing.mp3');
    audioTyping.loop = true;

    //创建swiper
    var appSwiper = new Swiper('.swiper-container', {
        grabCursor: true,
        onInit: function (swiper) {
            //页面第一次加载时执行
            triggerScene1(swiper);
        },
        onSlideChangeStart: function (swiper) {
            initStatus(swiper);
        },
        onSlideChangeEnd: function (swiper) {
            //页面滑动结束后执行
            var currPage = swiper.activeIndex;
            //滑动到相应页面时执行对应动画效果
            switch (currPage) {
                case 0:
                    // triggerScene1(swiper);
                    break;
                case 1:
                    triggerScene2(swiper);
                    break;
                case 2:
                    triggerScene3(swiper);
                    break;
                case 3:
                    triggerScene4(swiper);
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

    function triggerScene1(swiper) {
        console.log('entry scene1...');
        setTimeout(function () {
        }, 2000);
        return;
        swiperAnimateCache(swiper);
        var scene = $('.scene1');
        var mark = scene.find('.mark');
        var typefont1_1 = scene.find('.typefont1-1');
        mark.addClass('micro-bright');
        setTimeout(function () {
            typefont1_1.typed({
                strings: [typefont1_1.attr('data-typefont')],
                typeSpeed: 150,
                preStringTyped: function () {
                    audioTyping.play(); 
                },
                onStringTyped: function (swiper) {
                    audioTyping.pause();
                    typefont1_1.delay(2000).fadeOut();
                    $('.typed-cursor').delay(1900).fadeOut(function(){
                        typeCursor = $(this).remove();
                        mark.addClass('bright');
                        onLighted();
                    });
                }
            });
        }, 2000);

        function onLighted () {
            swiperAnimate(swiper);
            setTimeout(function () {
                $('.icon-location').addClass('move-in-down');
            }, 2000);
            setTimeout(function () {
                $('.icon-light').show(0, function () {
                    $('.house').addClass('onlighted');
                    $('.icon-location').delay(2800).fadeOut();
                    $('.icon-msg').delay(2800).fadeOut();
                    $(this).delay(3000).hide(0, function () {
                        $('.house').addClass('zoom');
                    });
                });
            }, 3000);
        }
    }

    function triggerScene2() {
        console.log('entry scene2...');
    }

    function triggerScene3() {
        console.log('entry scene3...');
    }

    function triggerScene4() {
        console.log('entry scene4...');

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

    function initStatus (swiper) {
        swiperAnimateCache(swiper);
        initScene1();
    }

    function initScene1() {
        $('.mark').removeClass('bright micro-bright');
        $('.house').removeClass('zoom');
        $('.typefont1-1').text('').show();
        $('.icon-location').removeClass('move-in-down');
        $('.icon-light').hide();
        $('.icon-msg').removeClass('bounceIn animated');
    }
});