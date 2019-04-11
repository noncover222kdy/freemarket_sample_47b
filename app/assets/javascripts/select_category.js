$(function(){

var lists = [
  { name: "レディース",                      tier: "a" },


  { name: "トップス",                        tier: "aa" },

  { name: "Tシャツ/カットソー(半袖/袖なし)",    tier: "aaa" },
  { name: "Tシャツ/カットソー(七分/長袖)",     tier: "aab" },
  { name: "シャツ/ブラウス(半袖/袖なし)",      tier: "aac" },
  { name: "シャツ/ブラウス(七分/長袖)",        tier: "aad" },
  { name: "ポロシャツ",                      tier: "aae" },
  { name: "キャミソール",                    tier: "aaf" },
  { name: "タンクトップ",                    tier: "aag" },
  { name: "ホルターネック",                   tier: "aah" },
  { name: "ニット/セーター",                  tier: "aai" },
  { name: "チュニック",                      tier: "aaj" },
  { name: "カーディガン/ボレロ",              tier: "aak" },
  { name: "アンサンブル",                    tier: "aal" },
  { name: "ベスト/ジレ",                     tier: "aam" },
  { name: "パーカー",                        tier: "aan" },


  { name: "ジャケット/アウター",               tier: "ab" },

  { name: "テーラードジャケット",               tier: "aba" },
  { name: "ノーカラージャケット",               tier: "abb" },
  { name: "Gジャン/デニムジャケット",            tier: "abc" },
  { name: "レザージャケット",                   tier: "abd" },
  { name: "ダウンジャケット",                   tier: "abe" },
  { name: "ライダースジャケット",                tier: "abf" },
  { name: "ミリタリージャケット",                tier: "abg" },
  { name: "ダウンベスト",                       tier: "abh" },
  { name: "ジャンパー/ブルゾン",                 tier: "abi" },
  { name: "ポンチョ",                          tier: "abj" },
  { name: "ロングコート",                       tier: "abk" },
  { name: "トレンチコート",                     tier: "aal" },
  { name: "ダッフルコート",                     tier: "aam" },
  { name: "ピーコート",                        tier: "aan" },


  { name: "パンツ",                           tier: "ac" },

  { name: "デニム/ジーンズ",                   tier: "aca" },
  { name: "ショートパンツ",                    tier: "acb" },
  { name: "カジュアルパンツ",                  tier: "acc" },
  { name: "ハーフパンツ",                      tier: "acd" },
  { name: "チノパン",                         tier: "ace" },
  { name: "ワークパンツ/カーゴパンツ",           tier: "acf" },
  { name: "クロップドパンツ",                  tier: "acg" },
  { name: "サロペット/オーバーオール",          tier: "ach" },
  { name: "オールインワン",                    tier: "aci" },
  { name: "サルエルパンツ",                    tier: "acj" },
  { name: "ガウチョパンツ",                    tier: "ack" },
  { name: "その他",                           tier: "acl" },


  { name: "スカート",                          tier: "ad" },

  { name: "ミニスカート",                      tier: "ada" },
  { name: "ひざ丈スカート",                    tier: "adb" },
  { name: "ロングスカート",                    tier: "adc" },
  { name: "キュロット",                       tier: "add" },
  { name: "その他",                           tier: "ade" },


  { name: "ワンピース",                        tier: "ae" },

  { name: "ミニワンピース",                    tier: "aea" },
  { name: "ひざ丈ワンピース",                  tier: "aeb" },
  { name: "ロングワンピース",                  tier: "aec" },
  { name: "その他",                           tier: "aed" },


  { name: "靴",                               tier: "af" },

  { name: "ハイヒール/パンプス",                tier: "afa" },
  { name: "ブーツ",                           tier: "afb" },
  { name: "サンダル",                         tier: "afc" },
  { name: "スニーカー",                       tier: "afd" },
  { name: "ミュール",                         tier: "afe" },
  { name: "モカシン",                         tier: "aff" },
  { name: "ローファー/革靴",                   tier: "afg" },
  { name: "フラットシューズ/バレエシューズ",     tier: "afh" },
  { name: "長靴/レインシューズ",               tier: "afi" },
  { name: "その他",                           tier: "afj" },


  { name: "ルームウェア/パジャマ",              tier: "ag" },

  { name: "パジャマ",                         tier: "aga" },
  { name: "ルームウェア",                      tier: "agb" },


  { name: "レッグウェア",                      tier: "ah" },

  { name: "ソックス",                         tier: "aha" },
  { name: "スパッツ/レギンス",                 tier: "ahb" },
  { name: "ストッキング/タイツ",               tier: "ahc" },
  { name: "レッグウォーマー",                  tier: "ahd" },
  { name: "その他",                          tier: "ahe" },


  { name: "帽子",                             tier: "ai" },

  { name: "ニットキャップ/ビーニー",            tier: "aia" },
  { name: "ハット",                           tier: "aib" },
  { name: "ハンチング/ベレー帽",               tier: "aic" },
  { name: "キャップ",                         tier: "aid" },
  { name: "キャスケット",                      tier: "aie" },
  { name: "麦わら帽子",                       tier: "aif" },
  { name: "その他",                           tier: "aig" },


  { name: "バッグ",                           tier: "aj" },

  { name: "ハンドバック",                      tier: "aja" },
  { name: "トートバッグ",                      tier: "ajb" },
  { name: "エコバッグ",                        tier: "ajc" },
  { name: "リュック/バックパック",              tier: "ajd" },
  { name: "ボストンバッグ",                    tier: "aje" },
  { name: "スポーツバッグ",                    tier: "ajf" },
  { name: "ショルダーバッグ",                  tier: "ajg" },
  { name: "クラッチバッグ",                    tier: "ajh" },
  { name: "ポーチ/バニティ",                   tier: "aji" },
  { name: "ボディバッグ/ウェストバッグ",         tier: "ajj" },
  { name: "マザーズバッグ",                    tier: "ajk" },
  { name: "メッセンジャーバッグ",               tier: "ajl" },
  { name: "ビジネスバッグ",                    tier: "ajm" },
  { name: "旅行用バッグ/キャリーバッグ",         tier: "ajn" },


  { name: "アクセサリー",                      tier: "ak" },

  { name: "ネックレス",                        tier: "aka" },
  { name: "ブレスレット",                      tier: "akb" },
  { name: "バングル/リストバンド",              tier: "akc" },
  { name: "リング",                           tier: "akd" },
  { name: "ピアス(片耳用)",                    tier: "ake" },
  { name: "ピアス(両耳用)",                    tier: "akf" },
  { name: "イヤリング",                        tier: "akg" },
  { name: "アンクレット",                      tier: "akh" },
  { name: "ブローチ/コサージュ",                tier: "aki" },
  { name: "チャーム",                         tier: "akj" },
  { name: "その他",                           tier: "akk" },


  { name: "ヘアアクセサリー",                  tier: "al" },

  { name: "ヘアゴム/シュシュ",                 tier: "ala" },
  { name: "ヘアバンド/カチューシャ",            tier: "alb" },
  { name: "ヘアピン",                         tier: "alc" },
  { name: "その他",                           tier: "ald" },

  { name: "小物",                             tier: "am" },
  { name: "時計",                             tier: "an" },


  { name: "メンズ",                            tier: "b" },

  { name: "トップス",                          tier: "ba" },

  { name: "Tシャツ/カットソー(半袖/袖なし)",     tier: "baa" },
  { name: "Tシャツ/カットソー(七分/長袖)",       tier: "bab" },
  { name: "シャツ",                           tier: "bac" },
  { name: "ポロシャツ",                        tier: "bad" },
  { name: "タンクトップ",                      tier: "bae" },
  { name: "ニット/セーター",                    tier: "baf" },
  { name: "パーカー",                          tier: "bag" },
  { name: "カーディガン",                      tier: "bah" },
  { name: "スウェット",                        tier: "bai" },
  { name: "ジャージ",                         tier: "baj" },
  { name: "ベスト",                           tier: "bak" },
  { name: "その他",                           tier: "bal" },

  { name: "ジャケット/アウター",               tier: "bb" },
  { name: "パンツ",                          tier: "bc" },
  { name: "靴",                              tier: "bd" },
  { name: "バッグ",                          tier: "be" },
  { name: "スーツ",                          tier: "bf" },
  { name: "帽子",                            tier: "bg" },
  { name: "アクセサリー",                     tier: "bh" },
  { name: "小物",                            tier: "bi" },
  { name: "時計",                            tier: "bj" },
  { name: "水着",                            tier: "bk" },
  { name: "レッグウェア",                     tier: "bl" },
  { name: "アンダーウェア",                   tier: "bm" },
  { name: "その他",                          tier: "bn" },

  { name: "ベビー・キッズ",               tier: "c" },
  { name: "インテリア・住まい・小物",       tier: "d"},
  { name: "本・音楽・ゲーム",              tier: "e"},
  { name: "おもちゃ・ホビー・グッズ",       tier: "f"},
  { name: "コスメ・香水・美容",            tier: "g"},
  { name: "家電・スマホ・カメラ",          tier: "h"},
  { name: "スポーツ・レジャー",            tier: "i"},
  { name: "ハンドメイド",                 tier: "j"},
  { name: "チケット",                    tier: "k"},
  { name: "自動車",                      tier: "l"},
  { name: "その他",                      tier: "m"},
  { name: "カテゴリー一覧",               tier: "n"},

];


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


