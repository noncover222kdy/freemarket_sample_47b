$(function(){

var search_list = $(".searched-category-list_wrap");

  function makeList(list) {
    var html = `<li date-tier='${list.tier}' id='list_category' class='searched-category-list'>
                  ${list.name}
                  <i class="fas fa-chevron-right"></i>
                </li>`

    search_list.append(html);
  }

  function checkAnswer(tier) {
    var reg = new RegExp('^' + tier + '$');
    lists.forEach(function(list) {
      var value = list.tier;
      if (value.match(reg)) {
        makeList(list)
      }
    })
  }

  $(window).on('load',function(){
    if(document.URL.match("category")) {

      var path = location.pathname
      var targetStr = "/items/category/" ;
      var reg = new RegExp(targetStr) ;
      var word = path.replace( reg , "" ) ;
      for(var i = 1, l = word.length; i <= l; i++){
        var tier = word.slice( 0, i );
        checkAnswer(tier);
      }

    }
  });
});

