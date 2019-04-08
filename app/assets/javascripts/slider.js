
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
      minSlides: 6,  //１スライド内のサムネイルの数
      maxSlides: 6,  //１スライド内のサムネイルの最大数
      slideWidth: 100,  //サムネイルの横幅（単位はpx）
      slideMargin: 0,  //サムネイル間の余白（単位はpx）
  });
});
