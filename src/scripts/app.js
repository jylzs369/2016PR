$(function () {
    //创建swiper
    var appSwiper = new Swiper('.swiper-container', {
        grabCursor: true,
        onInit: function (swiper) {
            //页面第一次加载时执行
            triggerScene1();
        },
        onSlideChangeEnd: function (swiper) {
            //页面滑动结束后执行
            var currPage = swiper.activeIndex;
            //滑动到相应页面时执行对应动画效果
            switch (currPage) {
                case 0:
                    triggerScene1();
                    break;
                case 1:
                    triggerScene2();
                    break;
                case 2:
                    triggerScene3();
                    break;
                case 3:
                    triggerScene4();
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
        scene.find('.mark').addClass('lightin');
        setTimeout(function () {
            $('.typefont').typed({
                strings: ['2016年的第一次接触'],
                typeSpeed: 150
            });
        }, 2000);
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
});