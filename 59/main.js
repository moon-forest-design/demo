"use strict";

// jQueryを使うよ
$(function() {
  $('.burgerMenu').on('click', function() {
    $(this).toggleClass('open');
  });
});
