<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="style-account.css">
</head>
<body>
    <div class="topheader">
        <div class="container">
            <div class="head">
                <div class="burger">
                    <span></span>
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
                <a class="logo" href="#bunner">
                    <img class="logo" src="../images/logo.svg" alt="">
                </a>

                <?php
                if (isset($_SESSION['entered']) && $_SESSION['entered'] == "OK"){
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
                                <li><a href="account.php">Профиль</a></li>
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
                        <img class="img" src="../images/user.svg" alt="">
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
                                <img class="svg-nm" src="../images/user-white.svg" alt="">
                                <span class="border-ln-1"></span>
                                <input class="login" type="text" name="login" placeholder="Имя пользователя">
                            </div>
                            <div class="ps">
                                <img class="svg-ps" src="../images/lock.svg" alt="">
                                <span class="border-ln-2"></span>
                                <input class="password" type="text" name="password" placeholder="Пароль">
                             </div>
                        </div>
                        <p class="warning text-danger"></p>
                        <input class="know-me" type="checkbox">
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

    <section class="main_inf">
        <div class="container">
            <div class="row content">
                <div class="col-lg-3 image">
                    <?php
                        if ($_SESSION["img"] != NULL){
                            echo '<img style="width: 250px; height: 250px" src="data:image/jpg;base64,' . base64_encode($_SESSION["img"]) . '" />';
                        } else{
                            echo '<p class="no-img">?</p>';
                        }
                        ?>
                        <?php
                    ?>
                </div>

                <div class="col-lg-9 information">
                    <div class="name">
                        <h1><?=$_SESSION["name"]?></h1>
                        <h2><?=$_SESSION["surname"]?></h2>
                        <a href="#">Изменить имя</a>
                    </div>
                    <div class="email_phone">
                        <div class="row">
                            <div class="col-md-6">
                                <h3>Email</h3>
                                <p>remontholodilnikov@superemail.rem</p>
                                <a href="#">Изменить почту</a>
                            </div>
                            <div class="col-md-6">
                                <h3>Phone</h3>
                                <p>+78005552021</p>
                                <a href="#">Изменить телефон</a>
                            </div>
                        </div>
                    </div>
                    <div class="password">
                        <h3>Password</h3>
                        <a href="#">Изменить пароль</a>
                    </div>
                </div>
            </div>
            

        </div>
    </section>

    <script src="../script/jquery-2.1.1.js"></script>
    <script src="script.js"></script>
</body>
</html>