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
$(".menu").on("click", "li", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
});

$(".content").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
});

$(".head").on("click", "a", function(event) {
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