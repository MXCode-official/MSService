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

// animation

const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
            if (entry.target.classList[0] == "col-sm") {
                entry.target.classList.add('animation');
                setTimeout(function() {
                    entry.target.style.opacity = 1;
                }, 1000);
            } else if (entry.target.classList[0] == "color-number" && done < 5) {
                var value_item = entry.target.innerHTML;
                smooth_ascending(entry.target, value_item, 5000, 0);
                done++;
            } else if (entry.target.classList.length == 1) {
                entry.target.classList.add('load-partner');
            }

        }
    });
});

const el = document.querySelectorAll('.col-sm');

el.forEach(function(item) {
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
    $(".logo")[0].src = "images/logo.svg";
    if ($(".img").length > 0) { $(".img")[0].src = "images/user.svg" };
    if ($(".user-name").length > 0) {
        $(".user-name")[0].style.color = "";
    }
} else {
    $(".topheader")[0].style.background = "";
    $(".burger-white").removeClass("d-none");
    $(".burger-black").addClass("d-none");
    $(".logo")[0].src = "images/logo_white.svg";
    if ($(".img").length > 0) { $(".img")[0].src = "images/user-white.svg" };
    if ($(".user-name").length > 0) {
        $(".user-name")[0].style.color = "white";
    }

}

window.onscroll = function() {
    if (window.pageYOffset > 0) {
        $(".topheader")[0].style.background = "white";
        $(".burger-white").addClass("d-none");
        $(".burger-black").removeClass("d-none");
        $(".logo")[0].src = "images/logo.svg";
        if ($(".img").length > 0) { $(".img")[0].src = "images/user.svg" };
        if ($(".user-name").length > 0) {
            $(".user-name")[0].style.color = "";
        }
    } else {
        $(".topheader")[0].style.background = "";
        $(".burger-white").removeClass("d-none");
        $(".burger-black").addClass("d-none");
        $(".logo")[0].src = "images/logo_white.svg";
        if ($(".img").length > 0) { $(".img")[0].src = "images/user-white.svg" };
        if ($(".user-name").length > 0) {
            $(".user-name")[0].style.color = "white";
        }
    }
};


// animate numbers
function smooth_ascending(item, value_item, time, c) {
    var x = i = 0;
    var y = 1000 / 70;
    var j = parseInt(time / y);
    y = time / j;
    var k = value_item / j;

    var int1 = setInterval(function() {
        if (i < j + 1) {
            x = k * i;
            item.innerHTML = (x.toFixed(c));
            i++;
        } else {
            item.innerHTML = value_item;
            window.clearInterval(int1);
        }
    }, y);
}

var el_color = document.querySelectorAll('.color-number'),
    done = 0;
el_color.forEach(function(item) {
    observer.observe(item);
})

// animate partners

var el_color = document.querySelectorAll('.partner p'),
    done = 0;
el_color.forEach(function(item) {
    observer.observe(item);
})