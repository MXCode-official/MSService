// Menu
$(".burger").click(function() {
    $(".menu").addClass("active");
    $('body').addClass('overflow-hidden');
})

$(document).on('mouseup', function(e) {
    let s = $('.menu');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
        s.removeClass('active');
        $('body').removeClass('overflow-hidden');
    } else {
        $('body').addClass('overflow-hidden');
    }
});

$(".krst").click(function() {
    $(".menu").removeClass("active");
    $('body').removeClass('overflow-hidden');
})

// END MENU


// Account
$('.account').on('click', function() {
    $(".account-login").removeClass('d-none');
    $('body').addClass('overflow-hidden');
});

$(document).on('mouseup', function(e) {
    let s = $('.account-login');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
        s.addClass('d-none');
        $('body').removeClass('overflow-hidden');
    } else {
        $('body').addClass('overflow-hidden');
    }
});

// End Account

// Login

$(".sign_up").click(function() {
    if ($(".account-login .name").text() == 'Войти') {
        $(".account-login .name").text('Авторизоваться');
        $(".account-login .sign_up").text('Уже есть аккаунт');
    } else {
        $(".account-login .name").text('Войти');
        $(".account-login .sign_up").text('Новый пользователь');
    }

    $(".account-login .row").toggleClass("d-none")
})

// php

$(document).ready(function() {
    $(".log-in").on("click", function() {
        if (($('.login').val() != '' && $('.password').val() != '') && ($(".account-login .row").attr('class').split(' ').length == 2)) {
            fetch('php/login.php', {
                method: 'POST', //Метод отправки
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: $("#login_form").serialize(), //Получение данных
            }).then(
                location.reload()
            );
        } else if (($('.login').val() != '' && $('.password').val() != '' && $('.name-polz').val() != '' && $('.surname').val() != '') && ($(".account-login .row").attr('class').split(' ').length == 1)) {
            fetch('php/sign_up.php', {
                method: 'POST', //Метод отправки
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: $("#login_form").serialize(), //Получение данных
            }).then(
                location.reload()
            );
        } else {
            $(".warning").text("Заполнены не все поля");
        }
    });
});

$(".user").on("click", function() {
    $(".menu-user").toggleClass("d-none");
})

$(document).on('mouseup', function(e) {
    let s = $('.menu-user');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
        s.addClass('d-none');
    }
});

$(".log-out").click(function() {
    fetch('php/log-out.php', {
        method: 'POST', //Метод отправки
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then(location.reload());
})