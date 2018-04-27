(function($) {

    $(function() {
        switchTip();
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
})(jQuery);