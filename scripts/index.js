(function($) {

    $(function() {
        switchTip();
        tabShow();
        primarySlider();
        featuredSlider();
    });
    //公告轮播
    function switchTip() {
        var $link = $('.pr-top .pr-top-tip .tip-wrapper a');
        var index = 0;
        var timer;

        function autoPlay() {
            timer = setInterval(function() {
                index > 2 ? index = 0 : null;
                $link.eq(index).stop().fadeIn('slow').siblings().stop().fadeOut('slow');
                index += 1;
            }, 3500);
        };
        autoPlay();
        $link.mouseenter(function() {
            clearInterval(timer);
        }).mouseleave(function() {
            autoPlay();
        });

    }
    //header区域背景轮播
    function primarySlider() {
        var $header = $('.header'),
            $cLi = $('.h-slider .si-container li'),
            $pLi = $('.h-pagination li');
        var index = 0,
            pIndex;
        var timer;

        function autoPlay() {
            timer = setInterval(function() {
                index > 3 ? index = 0 : null;
                pIndex = index + 1;
                pIndex > 3 ? pIndex = 0 : null;
                $pLi.eq(pIndex).addClass('active').siblings().removeClass('active');
                $cLi.eq(index).stop().fadeIn('slow').siblings().stop().fadeOut('slow');
                index += 1;

            }, 5000);
        };
        autoPlay();
        $pLi.on('click', function() {
            var $tIndex = $(this).index();
            console.log($pLi.eq($tIndex));
            $cLi.eq($tIndex - 1).stop().fadeIn('slow').siblings().stop().fadeOut('slow');
            $pLi.eq($tIndex).addClass('active').siblings().removeClass('active');
            index = $tIndex;

        });
        $header.mouseenter(function() {
            clearInterval(timer);
        }).mouseleave(function() {
            autoPlay();
        });

    }
    //分类展示
    function tabShow() {
        var pics = $('.cl-co-pictures .item');
        $('.cl-content .cl-co-title li').on('click', function() {
            var $this = $(this);
            var index = $this.index();

            $this.addClass('active').siblings().removeClass('active');
            pics.eq(index).addClass('active').siblings().removeClass('active');
        });
    }
    //精选区域轮播
    function featuredSlider() {
        var $slider = $('.fe-content .co-slider');
        var $li = $('.fe-content .co-pagination li');
        var $column1 = $slider.find('.item-wrapper:nth-child(1) .sl-column'),
            $column2 = $slider.find('.item-wrapper:nth-child(2) .sl-column');
        var timer, index = 0,
            $index = 1;
        console.log($column1, $column2);

        function autoPlay() {
            timer = setInterval(function() {
                $li.eq($index).addClass('active').siblings().removeClass('active');
                index += 1;
                $index = $index + 1;
                $index > 2 ? $index = 0 : null;
                $column1.eq($index).addClass('active').siblings().removeClass('active');
                $column2.eq($index).addClass('active').siblings().removeClass('active');

                $slider.stop().animate({
                    'left': -4.175 * index + 'rem'
                }).queue(function(next) {
                    if (index > 2) {
                        index = 0;
                        $(this).css('left', 0)

                    }
                    next();
                });
            }, 2000);
        }
        autoPlay();
    }
})(jQuery);