(function($) {

    $(function() {
        switchTip();
        tabShow();
    });
    //公告轮播
    function switchTip() {
        var $link = $('.header .h-tip .h-tip-wrapper a');
        var index = 0;
        var timer;

        function autoPlay() {
            timer = setInterval(function() {
                index > 2 ? index = 0 : null;
                $link.eq(index).fadeIn('slow').siblings().fadeOut('slow');
                index += 1;
            }, 3000);
        };
        autoPlay();
        $link.mouseenter(function() {
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
})(jQuery);