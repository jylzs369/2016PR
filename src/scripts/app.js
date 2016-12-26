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
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
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
            onStringTyped: function (swiper) {
                audioTyping.pause();
            }
        });
        typefont1_2.typed({
            strings: [typefont1_2.attr('data-typefont')],
            typeSpeed: 0,
            startDelay: 2500 + 10000,
            showCursor: false
        });
        typefont1_3.typed({
            strings: [typefont1_3.attr('data-typefont')],
            typeSpeed: 0,
            startDelay: 8000 + 10000,
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
        $('.typefont1-1').text('').show();
    }
});