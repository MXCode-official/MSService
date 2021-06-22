"use strict";

// Menu
$(".burger").click(function () {
  $(".menu").addClass("active");
  $('body').addClass('overflow-hidden');
});
$(document).on('mouseup', function (e) {
  var s = $('.menu');

  if (!s.is(e.target) && s.has(e.target).length === 0) {
    s.removeClass('active');
    $('body').removeClass('overflow-hidden');
  } else {
    $('body').addClass('overflow-hidden');
  }
});
$(".krst").click(function () {
  $(".menu").removeClass("active");
  $('body').removeClass('overflow-hidden');
}); // END MENU
// Obrat Svaz

$(".list li").click(function () {
  $('#tech').val(this.innerText);
});
$(".checkbox-ios-switch").click(function () {
  $(".ph").toggleClass("d-none");
  $(".em").toggleClass("d-none");
}); // End Obrat Svaz
// Account

$('.account').on('click', function () {
  $(".account-login").removeClass('d-none');
  $('body').addClass('overflow-hidden');
});
$(document).on('mouseup', function (e) {
  var s = $('.account-login');

  if (!s.is(e.target) && s.has(e.target).length === 0) {
    s.addClass('d-none');
    $('body').removeClass('overflow-hidden');
  } else {
    $('body').addClass('overflow-hidden');
  }
}); // End Account
// animate scroll

$(".menu ul").on("click", "li", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1000);
});
$(".content .ostav").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1000);
});
$(".head .logo").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1000);
});
$("footer .img-footer").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1000);
}); // Login

$(".sign_up").click(function () {
  if ($(".account-login .name").text() == 'Войти') {
    $(".account-login .name").text('Авторизоваться');
  } else {
    $(".account-login .name").text('Войти');
  }

  $(".account-login .row").toggleClass("d-none");
}); // php

$(document).ready(function () {
  $(".log-in").on("click", function () {
    if ($('.login').val() != '' && $('.password').val() != '' && $(".account-login .row").attr('class').split(' ').length == 2) {
      console.log(1);
      fetch('php/login.php', {
        method: 'POST',
        //Метод отправки
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: $("#login_form").serialize() //Получение данных

      });
    } else if ($('.login').val() != '' && $('.password').val() != '' && $(".account-login .row").attr('class').split(' ').length == 1) {
      console.log(2);
      fetch('php/sign_up.php', {
        method: 'POST',
        //Метод отправки
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: $("#login_form").serialize() //Получение данных

      });
    }
  });
});
$(".user").on("click", function () {
  $(".menu-user").toggleClass("d-none");
});
$(document).on('mouseup', function (e) {
  var s = $('.menu-user');

  if (!s.is(e.target) && s.has(e.target).length === 0) {
    s.addClass('d-none');
  }
});