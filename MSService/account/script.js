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

$(".user").on("click", function() {
    $(".menu-user").toggleClass("d-none");
})

$(document).on('mouseup', function(e) {
    let s = $('.menu-user');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
        s.addClass('d-none');
    }
});

$(".add-img").on("click", function() {
    $(".upload-img").toggleClass("d-none");
})

$(document).on('mouseup', function(e) {
    let s = $('.upload-img');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
        s.addClass('d-none');
    }
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
            $.ajax({
                type: 'POST', //Метод отправки
                url: '../php/login.php',
                data: $("#login_form").serialize(), // Получение данных
                success: function(data) {
                    if (data != "OK") {
                        $(".warning").text(data); // Show Error Message
                    } else {
                        // location.reload();
                    }

                },
            })
        } else if (($('.login').val() != '' && $('.password').val() != '' && $('.name-polz').val() != '' && $('.surname').val() != '') && ($(".account-login .row").attr('class').split(' ').length == 1)) {
            $.ajax({
                type: 'POST', //Метод отправки
                url: '../php/sign_up.php',
                data: $("#login_form").serialize(), //Получение данных
                success: function(data) {
                    if (data != "OK") {
                        $(".warning").text(data); // Show Error Message
                    } else {
                        // location.reload();
                    }
                },
            })
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
    fetch('../php/log-out.php', {
        method: 'POST', //Метод отправки
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then(location.reload())
})


// upload img   https://www.codingnepalweb.com/drag-drop-file-upload-feature-javascript/

//selecting all required elements
dropArea = document.querySelector(".drag-area");
dragText = dropArea.querySelector("header");
button = dropArea.querySelector("button");
input = dropArea.querySelector("input");

let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = () => {
    input.click(); //if user click on the button then the input also clicked
}
input.addEventListener("change", function() {
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    dropArea.classList.add("active");
    showFile(); //calling function
});
//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Отпустите, Чтобы Загрузить Файл!";
});
//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Перетащите, Чтобы Загрузить Файл";
});
//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    showFile(); //calling function
});

$(".drag-krest").on("click", function() {
    dropArea = document.querySelector(".drag-area");
    imgTag = `<div class="krst d-none drag-krest"><span class="krest"></span></div><div class="icon"><i class="fas fa-cloud-upload-alt"></i></div><header>Перетащите, Чтобы Загрузить Файл</header><span>ИЛИ</span><button>Выберите Файл</button><input type="file" hidden>`;
    dropArea.innerHTML = imgTag;
    $(".krst").addClass("d-none");
})

function showFile() {
    let fileType = file.type; //getting selected file type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"]; //adding some valid image extensions in array
    if (validExtensions.includes(fileType)) { //if user selected file is an image file
        let fileReader = new FileReader(); //creating new FileReader object
        fileReader.onload = () => {
            let fileURL = fileReader.result; //passing user file source in fileURL variable
            // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
            let imgTag = `<div class="krst d-none drag-krest"><span class="krest"></span></div><img style="border-radius: 20px" src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
            dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
            $(".krst").removeClass("d-none");
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("Этот файл не является Изображением!");
        dropArea.classList.remove("active");
        dragText.textContent = "Перетащите, Чтобы Загрузить Файл";
    }
}