$(".burger").click(function() {
    $(".menu").addClass("active");
})

$(document).on('mouseup', function(e) { // При нажатии на документ
    let s = $('.menu'); // берём .block.-active
    if (!s.is(e.target) && s.has(e.target).length === 0) {
        // Если нажат не он и не его дочернии И сам он существует
        s.removeClass('active'); // То удаляем у него класс .active
    }
});

$(".krst").click(function() {
    $(".menu").removeClass("active");
})
$(".list li").click(function() {
    $('#tech').val(this.innerText);
});

$(".checkbox-ios-switch").click(function() {
    $(".ph").toggleClass("d-none");
    $(".em").toggleClass("d-none");
})

$('.account').on('click', function() {
    $(".login").removeClass('d-none');
});

$(document).on('mouseup', function(e) { // При нажатии на документ
    let s = $('.login'); // берём .block.-active
    if (!s.is(e.target) && s.has(e.target).length === 0) {
        // Если нажат не он и не его дочернии И сам он существует
        s.addClass('d-none'); // То удаляем у него класс .active
    }
});

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