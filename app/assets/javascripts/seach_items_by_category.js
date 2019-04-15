$(function(){

  $(document).on('click',"#list_1, #list_2, #list_3, #list_category", function(){

    var word = $(this).attr("date-tier");

    window.location.href = `/items/category/${word}`

  })
});
