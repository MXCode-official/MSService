<?php
    session_start();
    if (empty($_SESSION["error"])){
        $_SESSION["error"] = "OK";
        $error = "OK";
    } else{
        $error = $_SESSION["error"];
    }

    // http://old.code.mu/books/php/auth/avtorizaciya-polzovatelej-cherez-kuki-na-php.html
	if (empty($_SESSION['entered']) or $_SESSION['entered'] != 'OK') {
		//Проверяем, не пустые ли нужные нам куки...
		if ( !empty($_COOKIE['login']) and !empty($_COOKIE['key']) ) {
			//Пишем логин и ключ из КУК в переменные (для удобства работы):
			$login = $_COOKIE['login']; 
			$key = $_COOKIE['key']; //ключ из кук (аналог пароля, в базе поле cookie)

			/*
				Формируем и отсылаем SQL запрос:
				ВЫБРАТЬ ИЗ таблицы_users ГДЕ поле_логин = $login.
			*/
			$query = 'SELECT*FROM users WHERE login="'.$login.'" AND cookie="'.$key.'"';

			//Ответ базы запишем в переменную $result:
			$result = mysqli_fetch_assoc(mysqli_query($link, $query)); 

			//Если база данных вернула не пустой ответ - значит пара логин-ключ_к_кукам подошла...
			if (!empty($result)) {

				//Пишем в сессию информацию о том, что мы авторизовались:
				$_SESSION['entered'] = 'OK'; 

				/*
					Пишем в сессию логин и id пользователя
					(их мы берем из переменной $user!):
				*/
				$_SESSION['id'] = $row['id']; 
				$_SESSION['login'] = $row['login']; 
			}
		}
	}
?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>MSService</title>

    <link rel="shortcut icon" href="/images/logo.svg">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="topheader">
        <div class="container">
            <div class="head">
                <div class="burger">
                    <span class="burger-white"></span>
                    <span class="burger-black d-none"></span>
                </div>
                <div class="menu">
                    <div class="krst">
                        <span class="krest"></span>
                    </div>

                    <ul>
                        <li href="#bunner">Главная</li>
                        <li href="#advantages">Наши преимущества</li>
                        <li href="#about-us">Мы в цифрах</li>
                        <li href="#partner">Наши партнёры</li>
                        <li href="#obrat-svaz">Обратная связь</li>
                        <li href="#office">Наш офис</li>
                    </ul>
                </div>
                <a>
                    <img class="logo" src="images/logo_white.svg" href="#bunner">
                </a>

                <?php
                if (isset($_SESSION['entered']) and $_SESSION['entered'] == "OK"){
                    ?>
                    <div class="usr">
                        <div class="user">
                        <?php
                            if ($_SESSION["img"] != NULL){
                        ?>
                            <div class="row">
                                <p class="user-name"><?=$_SESSION['name']?></p>
                                    <?php echo '<img class="user-img" src="data:image/jpg;base64,' . base64_encode($_SESSION["img"]) . '" />'; ?>
                            </div>
                            <?php 
                                } else{
                                    ?>
                                    <p class="user-name"><?=$_SESSION['name']?></p>
                                    <?php
                                }
                            ?>
                        </div>

                        <div class="menu-user d-none">
                            <ul>
                                <li><a href="account/account.php">Профиль</a></li>
                                <li>Заказы</li>
                                <li>Финансы</li>
                                <li>Помощь</li>
                                <li>
                                    <p></p>
                                    <p class="log-out">Выйти</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <?php
                } else{
                    ?>
                    <div class="account">
                        <img style="width: 47px" class="img" src="images/user-white.svg" alt="">
                    </div>
                    <form method="POST" class="account-login d-none" id="login_form">
                        <h1 class="name">Войти</h1>
                        <div class="textinput">
                            <div class="row d-none">
                                <div class="col-md-6">
                                    <input class="name-polz" type="text" name="name" placeholder="Имя">
                                </div>                                        
                                <div class="col-md-6">
                                    <input class="surname" type="text" name="surname" placeholder="Фамилия">
                                </div>
                            </div>
                            <div class="nm">
                                <img class="svg-nm" src="images/user-white.svg" alt="">
                                <span class="border-ln-1"></span>
                                <input class="login" type="text" name="login" placeholder="Имя пользователя">
                            </div>
                            <div class="ps">
                                <img class="svg-ps" src="images/lock.svg" alt="">
                                <span class="border-ln-2"></span>
                                <input class="password" type="text" name="password" placeholder="Пароль">
                             </div>
                        </div>
                        <p class="warning text-danger"></p>
                        <input class="know-me" name="remember" type="checkbox" value='1'>
                        <p class="know-me-txt">Запомнить меня</p>
                        <button type="submit" class="log-in" onclick="return false;">
                            <p>Войти</p>
                        </button>
                        <p class="forgot">Забыли пароль?</p>
                        <p class="sign_up">Новый пользователь</p>
                    </form>
                    <?php
                }
                ?>
                <span class="border-line"></span>
            </div>
        </div>
    </div>

    <main class="main">
        <section class="banner full-screen" id="bunner">
            <div class="container">
                <div class="content">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text">Ремонт любой бытовой техники в Ульяновске</p>
                            <p class="comment">ТРАЛЯЛЯ</p>
                            <a class="ostav" href="#obrat-svaz">
                                <p>ОСТАВИТЬ ЗАЯВКУ НА РЕМОНТ</p>
                            </a>
                        </div>
                        <div class="col-md-8">
                            <p class="text">Ремонт любой бытовой техники в Ульяновске</p>
                            <p class="comment">ТРАЛЯЛЯ</p>
                            <a class="ostav" href="#obrat-svaz">
                                <p>ОСТАВИТЬ ЗАЯВКУ НА РЕМОНТ</p>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <img class="phone" src="images/iphone12pro.webp" alt="">
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

        <section class="advantages" id="advantages">
            <div class="container">
                <h1 class="name">Наши преимущества</h1>
                <div class="content">
                    <div class="row">
                        <div class="col-sm">
                            <p class="img-svg"><img src="images/reliable.svg" alt=""></p>
                            <h1 class="name-col">Надёжно</h1>
                            <p class="content-col">Заказываем и используем только оффициальные запчасти от производителей</p>
                        </div>
                        <div class="col-sm">
                            <p class="img-svg"><img class="fast" src="images/fast.svg" alt=""></p>
                            <h1 class="name-col">Быстро</h1>
                            <p class="content-col">При мелких поломках ремонтируем вашу технику при вас</p>
                        </div>
                        <div class="col-sm">
                            <p class="img-svg last-img"><img src="images/dollar.svg" alt=""></p>
                            <h1 class="name-col">Недорого</h1>
                            <p class="content-col">Первый осмотр вашей бытовой техники - бесплатно</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-us" id="about-us">
            <div class="container">
                <h1 class="name">Мы в цифрах</h1>
                <div class="row">
                    <div class="col-md-6">
                        <p><span class="color-number">21</span><br>год работы</p>
                        <p><span class="color-number">10000</span><span class="color"> единиц</span><br>отремонтированной бытовой техники</p>
                    </div>
                    <div class="col-md-6">
                        <p><span class="color-number">1700</span><span class="color">+</span><br>довольных клиентов</p>
                        <p><span class="color-number">12</span><br>месяцев гарантии на выполненую раюботу</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="partner" id="partner">
            <div class="container">
                <h1 class="name">Наши партнёры</h1>
                <div class="content row">
                    <div class="col-md-3">
                        <a href="">
                            <p class="samsung">Samsung</p>
                        </a>
                        <a href="">
                            <p class="redmond">REDMOND</p>
                        </a>
                        <a href="">
                            <p class="gagenau">GAGENAU</p>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <p class="bosh">BOSCH</p>
                        </a>
                        <a href="">
                            <p class="ericsson">ERICSSON</p>
                        </a>
                        <a href="">
                            <p class="sony">SONY</p>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <p class="siemens">SIEMENS</p>
                        </a>
                        <a href="">
                            <p class="telefunken">TELEFUNKEN</p>
                        </a>
                        <a href="">
                            <p class="bbk">BBK</p>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <p class="zelmer">ZELMER</p>
                        </a>
                        <a href="">
                            <p class="panasonic">Panasonic</p>
                        </a>
                        <a href="">
                            <p class="neef">NEFF</p>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="">
                            <p class="lg">LG</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="obrat-svaz" id="obrat-svaz">
            <div class="container">
                <h1 class="name">Оставить заявку</h1>
                <div class="toggle">
                    <p>по телефону</p>
                    <label class="checkbox-ios">
                        <input type="checkbox">
                        <span class="checkbox-ios-switch"></span>
                    </label>
                    <p>по email</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <form method="POST" id="send_form">
                            <div class="row">
                                <div class="col-md-6 textinput first">
                                    <p>Имя<span>*</span></p>
                                    <input type="text" name="name" id="name">
                                    <div class="ph">
                                        <p>Телефон<span>*</span></p>
                                        <input type="text" name="phone" id="phone">
                                    </div>
                                    <div class="em d-none">
                                        <p>Email<span>*</span></p>
                                        <input type="text" name="email" id="email">
                                    </div>
                                </div>
                                <div class="col-md-6 textinput second">
                                    <p>Выберите технику<span>*</span></p>
                                    <input type="text" name="tech" id="tech" readonly>
                                    <ul class="list">
                                        <li>Холодильник</li>
                                        <li>Стиральная машинка</li>
                                        <li>Телефон</li>
                                        <li>Планшет</li>
                                        <li>Ноутбук</li>
                                        <li>Саундбар</li>
                                        <li>Телевизор</li>
                                        <li>Кофеварка</li>
                                        <li>Пылесос</li>
                                    </ul>
                                </div>

                                <input type="button" class="submit" value="Отправить запрос">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="office" id="office">
            <h1 class="name">Наш офис</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74562.43443780519!2d48.24559905820314!3d54.26723169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d342a76d8caa7%3A0xe0ff7d493a1c8e0!2z0JzQsNGB0YLQtdGAINCh0LXRgNCy0LjRgQ!5e0!3m2!1sru!2sru!4v1623661554457!5m2!1sru!2sru"
                width="100%" height="450" style="border:0; margin-bottom: -6px;" allowfullscreen="" loading="lazy"></iframe>
        </section>
    </main>

    <footer>
        <a href="#bunner">
            <img class="img-footer" src="images/logo_white.svg" alt="">
        </a>

        <p class="number">+7(7777)77-77-77</p>
    </footer>

    <script src="script/jquery-2.1.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js"></script>
    <script src="script/script.js"></script>
</body>

</html>