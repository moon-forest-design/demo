"use strict";

// jQueryを使うよ
$(function() {
  // スクロールされないとき 矢印ボールを表示
  setTimeout(function() { // 3秒待つ
    if ($(window).scrollTop() < 10) { // 3秒経っても上端から10px以上スクロールしない場合
      $("#pleaseScroll").fadeIn(); // 矢印ボールを表示しスクロールを促す
    }
  }, 3000);

  // スクロールされたら矢印ボールを非表示
  $(window).scroll(function() {
    $("#pleaseScroll").fadeOut();
  });

});
