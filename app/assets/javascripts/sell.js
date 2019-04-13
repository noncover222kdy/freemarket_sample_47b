$(document).on("turbolinks:load", function(){

  $(".upload-drop-text").on("click", function() {
    var i = $("img.upload-drop-box__photo_image").length;

    if ($("#file-image-" + i)[0].files[0] !== undefind){
      var i = 0;
      if ($("#file-image-" + i)[0].files[0] !== undefind) {
        var i = 1;
        if ($("#file-image-" + i)[0].files[0] !== undefind) {
          var i = 2;
          if ($("#file-image-" + i)[0].files[0] !== undefind) {
            var i =3;
            if ($("#file-image-" + i)[0].files[0] !== undefind) {
              var i = 4;
            }
          }
        }
      }
      $(".upload-drop-text").atter("for", "file-image-" + i);
    }

    $("#file-image-" + i).off().on("change", function(){

      var file_image = $(this);
      var filepropArray = $(this).prop("files");
      var fileprop = filepropArray[0];
      var find_img = $(this).parent().find("img");
      var filereader = new FileReader();
      var view_box = $(this).parent();
      var img =
          ` <div class= "item-contents__image_drop-box_area">
              <img alt="" class="item-contents__image_drop-box_area_imame", width="114">
              <p class= "item-contents__image_drop-box_btn-area">
                <a class="item-contents__image_drop-box_area__remove-btn">削除</a>
                <a class="item-contents__image_drop-box_area__edit-btn">編集</a>
              </p>
            </div>`
      view_box.append(img);

      filereader.onload = function() {

        view_box.find("img").attr("src", filereader.result);
        remove_image(view_box);
      }
      filereader.readAsDataURL(fileprop);

      var p = $("img.upload-drop-box__photo_image").length;
      $(".upload-drop-text").attr("for", "file-image-" + p).atter("edit_value", p);




    })
  });
});
