(function($) {

    $(function() {
        initFont();
        $(window).resize(function() {
            initFont();
        });
        switchTip();
        tabShow();
        primarySlider();
        featuredSlider();
    });
    //初始化字体
    function initFont() {
        var _html = $('html'),
            view_width = _html.width();
        view_width > 768 ? _html.css('font-size', view_width / 19.2 + 'px') : null;
    }
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
            pIndex,
            timer;

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
        var $sliWrapper = $('.c-featured .wrapper');
        var $slider = $('.fe-content .co-slider');
        var $li = $('.fe-content .co-pagination li');
        var $column1 = $slider.find('.item-wrapper:nth-child(1) .sl-column'),
            $column2 = $slider.find('.item-wrapper:nth-child(2) .sl-column');
        var timer, index = 0,
            $index = 1;

        function autoPlay() {
            timer = setInterval(function() {
                $slider.stop().animate({
                    'left': '-=4.175rem'
                }, function() {
                    index += 1;
                    $index = $index + 1;
                    $index > 2 ? $index = 0 : null;
                    if (index > 2) {
                        $slider.css('left', 0);
                        index = 0;
                    };
                    switchClass($index);
                })


            }, 3000);
        }
        autoPlay();

        function switchClass(i) {
            $li.eq(i).addClass('active').siblings().removeClass('active');
            $column1.eq(i).addClass('active').siblings().removeClass('active');
            $column2.eq(i).addClass('active').siblings().removeClass('active');
        }
        $sliWrapper.mouseenter(function() {
            clearInterval(timer);
        }).mouseleave(function() {
            autoPlay();
        });
        $li.click(function() {
            _index = $(this).index();
            switchClass(_index);
            $index = _index;
            index = _index - 1;
            $slider.stop().animate({
                'left': -4.175 * (_index - 1) + 'rem'
            }).queue(function(next) {
                if (_index < 1) {
                    $index = _index = 2;
                    index = 1;
                    $(this).css('left', -_index * 4.175 + 'rem');

                }
                next();
            });
        });
    }
})(jQuery);