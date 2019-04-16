$(function(){


function makeList1(list) {
  $("#lists-1").append(
    `<li date-tier='${list.tier}' id='list_1'>${list.name}</li>`
    )
}

function makeList2(list) {
  $("#lists-2").append(
    `<li date-tier='${list.tier}' id='list_2'>${list.name}</li>`
    )
}

function makeList3(list) {
  $("#lists-3").append(
    `<li date-tier='${list.tier}' id='list_3'>${list.name}</li>`
    )
}

  $(".search__category").on('mouseover', function(){
    $("#lists-1").css('display', 'block');
    $("#lists-1").empty()
    $("#lists-2").css('display','none');
    $("#lists-3").css('display','none');
    lists.forEach(function(list) {
      var reg = new RegExp('^\\w$');
      var value = list.tier;
      if (value.match(reg)) {
        makeList1(list);
      }
    })

  })

  $(document).on('mouseover',"#list_1", function(){
    var word = $(this).attr("date-tier");
    $("#lists-2").css('display','block');
    $("#lists-3").css('display','none');
    $("#lists-2").empty()
    $("#lists-3").empty()
    lists.forEach(function(list) {
      var reg = new RegExp('^' + word + '\\w$');
      var value = list.tier;
      if (value.match(reg)) {
        makeList2(list);
      }
    })
  })

  $(document).on('mouseover',"#list_2", function(){
    var word = $(this).attr("date-tier");
    $("#lists-3").css('display', 'block');
    $("#lists-3").empty()
    lists.forEach(function(list) {
      var reg = new RegExp('^' + word + '\\w$');
      var value = list.tier;
      if (value.match(reg)) {
        makeList3(list);
      }
    })
  })

  $('body').on('mouseover',"div", function(){
    $("#lists-1").empty()
    $("#lists-2").empty()
    $("#lists-3").empty()
    $("#lists-1").css('display','none');
    $("#lists-2").css('display','none');
    $("#lists-3").css('display','none');
  })

})


