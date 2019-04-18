$(document).on("turbolinks:load", function(){
  var dropzone = $('.dropzone_area');
  var dropzone2 = $('.dropzone_area2');
  var dropzone_box = $('.dropzone_area_box');
  var images = [];
  var inputs = [];
  var input_area = $('.input_area');
  var preview = $('#dropzone_preview');
  var preview2 = $('#preview2');

  $(document).on('change', 'input[type= "file"].upload-image',function(event) {
    var file = $(this).prop('files')[0];
    var reader = new FileReader();
    inputs.push($(this));
    var img = $(`<div class= "img_view"><img></div>`);
    reader.onload = function(e) {
      var btn_wrapper = $('<div class="btn_wrapper"><div class="btn_edit">編集</div><div class="btn_delete">削除</div></div>');
      img.append(btn_wrapper);
      img.find('img').attr({
        src: e.target.result
      })
    }
    reader.readAsDataURL(file);
    images.push(img);

    if(images.length >= 5) {
      dropzone2.css({
        'display': 'block'
      })
      dropzone.css({
        'display': 'none'
      })
       $.each(images, function(index, image) {
        image.attr('data-image', index);
        preview2.append(image);
        dropzone2.css({
          'width': `calc(100% - (100px * ${images.length - 5}))`
        })
      })
       if (images.length == 9) {
        dropzone2.find('p').replaceWith('<i class="fa fa-camera"></i>')
      }

    } else {
      $('#preview').empty();
      $.each(images, function(index, image) {
        image.attr('data-image', index);
        preview.append(image);
      })
      dropzone.css({
        'width': `calc(100% - (100px * ${images.length}))`
      })
    }
    if (images.length == 4) {
      dropzone.find('p').replaceWith('<i class="fa fa-camera"></i>')
    }
    if (image.length == 10) {
      dropzone2.css({
        "display": "none"
      })
      return;
    }
    var new_image = $(`<input multiple= "multiple" name="item_images[image][]" class="upload-image" data-image= ${images.length} type="file" id="upload-image">`);
    input_area.prepend(new_image);
  });
  $(document).on('click', '.delete', function() {
    var target_image = $(this).parent().parent();
    $.each(inputs, function(index, input){
      if ($(this).data('image') == target_image.data('image')){
        $(this).remove();
        target_image.remove();
        var num = $(this).data('image');
        images.splice(num, 1);
        inputs.splice(num, 1);
        if(inputs.length == 0) {
          $('input[type= "file"].upload-image').attr({
            'data-image': 0
          })
        }
      }
    })
    $('input[type= "file"].upload-image:first').attr({
      'data-image': inputs.length
    })
    $.each(inputs, function(index, input) {
      var input = $(this)
      input.attr({
        'data-image': index
      })
      $('input[type= "file"].upload-image:first').after(input)
    })
    if (images.length >= 5) {
      dropzone2.css({
        'display': 'block'
      })
      $.each(images, function(index, image) {
        image.attr('data-image', index);
        preview2.append(image);
      })
      dropzone2.css({
        'width': `calc(100% - (100px * ${images.length - 5}))`
      })
      if(images.length == 9) {
        dropzone2.find('p').replaceWith('<i class="fa fa-camera"></i>')
      }
      if(images.length == 8) {
        dropzone2.find('i').replaceWith('<p>ココをクリックして画像ファイルをアップロードしてください</p>')
      }
    } else {
      dropzone.css({
        'display': 'block'
      })
      $.each(images, function(index, image) {
        image.attr('data-image', index);
        preview.append(image);
      })
      dropzone.css({
        'width': `calc(100% - (100px * ${images.length}))`
      })
    }
    if(images.length == 4) {
      dropzone2.css({
        'display': 'none'
      })
    }
    if(images.length == 3) {
      dropzone.find('i').replaceWith('<p>ココをクリックして画像ファイルをアップロードしてください</p>')
    }
  });

  $("#item_price").keyup(function() {
    var num = $("#item_price").val();
    var fee = Math.floor(num * 0.1)
    var profit = num - fee
    if(num >= 300 && num <= 999999) {
      $("#fee_price").text(fee);
      $("#profit_price").text(profit);
    } else {
      $("#fee_price").text("-");
      $("#profit_price").text("-");
    }
  });

  function makeList_2(list) {
    var html = (list.name.match("カテゴリー一覧")) ? `` : `<option value='${list.tier}'>${list.name}</option>`;
    $("#second_category").append(html);
  }

  function makeList_3(list) {
    var html = (list.name.match("カテゴリー一覧")) ? `` : `<option value='${list.tier}'>${list.name}</option>`;
    $("#third_category").append(html);
  }

  $('[name=first_category]').change(function() {
    var val = $('[name=first_category]').val();
    $("#third_category").remove();
    ($("#second_category").length > 0 )? $("#second_category").empty().append(`<option class="sample">...</option>`) : $(".select_wrap_second").append(`<select id="second_category" name="second_category"><option class="sample">...</option></select>`);
    $("#hidden_value").val(val);
    lists.forEach(function(list) {
      var reg = new RegExp('^' + val + '\\w$');
      var value = list.tier;
      if (value.match(reg)) {
        makeList_2(list);
      }
    })
  });

  $(document).on('change', 'select[name=second_category]', function () {
    var val = $('[name=second_category]').val();
    ($("#third_category").length > 0 )? $("#third_category").empty().append(`<option class="sample">...</option>`) : $(".select_wrap_third").append(`<select id="third_category" name="third_category"><option class="sample">...</option></select>`);
    $("#hidden_value").val(val);
    lists.forEach(function(list) {
      var reg = new RegExp('^' + val + '\\w$');
      var value = list.tier;
      if (value.match(reg)) {
        makeList_3(list);
      }
    })
  });

  $(document).on('change', 'select[name=third_category]', function () {
    var val = $('[name=third_category]').val();
    $("#hidden_value").val(val);
  });
});
