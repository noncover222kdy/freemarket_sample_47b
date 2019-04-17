$(document).on('turbolinks:load', function() {
  var form = $("#pay-form");
  Payjp.setPublicKey('pk_test_63842d276bb67485bc96d3ea');
  $(document).on("click", "#pay-form__btn", function(e) {
    e.preventDefault();
    form.find("input[type=submit]").prop("disabled", true);

    var card = {
        number: $("#pay-form__num").val(),
        cvc: $("#pay-form__cvc").val(),
        exp_month: $("#pay-form__mon option:selected").val(),
        exp_year: $("#pay-form__year option:selected").val(),
    };
    Payjp.createToken(card, function(s, response) {
      if (response.error) {
        alert('トークン作成エラー発生');
      }
      else {
        $(".bank-num").removeAttr("name");
        $(".bank-cvc").removeAttr("name");
        $(".bank-exp-mon").removeAttr("name");
        $(".bank-exp-year").removeAttr("name");
        var token = response.id;
        form.append($('<input type="hidden" name="payjp-token" />').val(token));
        $("#pay-form").get(0).submit();
      }
    });
  });
});
