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

// Obrat Svaz
$(".list li").click(function() {
    $('#tech').val(this.innerText);
});

$(".checkbox-ios-switch").click(function() {
    $(".ph").toggleClass("d-none");
    $(".em").toggleClass("d-none");
})

// End Obrat Svaz



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


// animate scroll
$(".menu ul").on("click", "li", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
});

$(".banner .content").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
});

$(".head a").on("click", "img", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
});

$("footer").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
});

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


// animation

const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('animation');
            setTimeout(function() {
                entry.target.style.opacity = 1;
            }, 1000);
        }
    });
});

const el = document.querySelectorAll('.col-sm');

el.forEach(function(item, i) {
    observer.observe(item);
})

VanillaTilt.init(document.querySelectorAll(".col-sm"), {
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 0.3
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".col-sm"));

// topheader
if (window.pageYOffset > 0) {
    $(".topheader")[0].style.background = "white";
    $(".burger-white").addClass("d-none");
    $(".burger-black").removeClass("d-none");
    $(".logo")[0].src = "images/logo.svg"
    $(".img")[0].src = "images/user.svg"
} else {
    $(".topheader")[0].style.background = "";
    $(".burger-white").removeClass("d-none");
    $(".burger-black").addClass("d-none");
    $(".logo")[0].src = "images/logo_white.svg"
    $(".img")[0].src = "images/user-white.svg"
}

window.onscroll = function() {
    if (window.pageYOffset > 0) {
        $(".topheader")[0].style.background = "white";
        $(".burger-white").addClass("d-none");
        $(".burger-black").removeClass("d-none");
        $(".logo")[0].src = "images/logo.svg"
        $(".img")[0].src = "images/user.svg"
    } else {
        $(".topheader")[0].style.background = "";
        $(".burger-white").removeClass("d-none");
        $(".burger-black").addClass("d-none");
        $(".logo")[0].src = "images/logo_white.svg"
        $(".img")[0].src = "images/user-white.svg"
    }
};