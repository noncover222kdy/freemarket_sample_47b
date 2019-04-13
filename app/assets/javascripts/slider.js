
$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
        spead: 15000,
        pause: 3000,
        controls: false,
        mode: 'fade',
        pagerCustom: '#bx-pager-1, #bx-pager-2',
    });

    $('.bxslider-wrap').bxSlider({
        auto: true,
        spead: 15000,
        pause: 6000,
        controls: false,
        autoHover: true,
        pager: false,

    });


    $('#bx-pager-1, #bx-pager-2').bxSlider({
      pager: false,
      minSlides: 6,
      maxSlides: 6,
      slideWidth: 60,
      slideMargin: 0,
      nextText: "",
      prevText: "",
  });
});
