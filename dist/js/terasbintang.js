var maxExtraSmallDeviceWidth    = 767,
    minSmallDeviceWidth         = maxExtraSmallDeviceWidth + 1,
    maxSmallDeviceWidth         = 991,
    minMediumdDeviceWidth       = maxSmallDeviceWidth + 1,
    maxMediumDeviceWidth        = 1199,
    minLargeDeviceWidth         = maxMediumDeviceWidth + 1,
    headTopHeight;

if($(window).width() > maxExtraSmallDeviceWidth) {
    headTopHeight = $('#head-top').height() + 40;
} else {
    headTopHeight = $('#head-top').height() + 40;

}

$('#header-menu').affix({
    offset: {
        top: headTopHeight
    }
});

if($(window).width() > maxExtraSmallDeviceWidth) {


    /*$('.navbar-teras .navbar-nav > li > a').css({
        width: '136px'
    });*/
}