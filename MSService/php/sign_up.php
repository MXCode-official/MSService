<?php
    session_save_path();
    session_start();
    error_reporting(0);
    ini_set('session.use_cookies', 'On');
    ini_set('session.use_trans_sid', 'Off');
    ini_set('session.gc_maxlifetime',7200);
    ini_set('session.cookie_lifetime',7200);
    session_set_cookie_params(7200, '/');

    $servername = "localhost";
    $username = "id14476277_maximka";
    $password_dbase = "22fkS^tDU]RD=Pe_";
    $database = "id14476277_test_data_base";

    $conn = mysqli_connect($servername, $username, $password_dbase, $database);

    $name = trim(urldecode(htmlspecialchars($_POST["name"])));
    $surname = trim(urldecode(htmlspecialchars($_POST["surname"])));
    $login = trim(urldecode(htmlspecialchars($_POST["name"])));
    $password = trim(urldecode(htmlspecialchars($_POST["password"])));
    $status = "client";

    $information = "INSERT INTO users (id, name, surname, login, password, status) VALUES (NULL, '" . '' . $name . '' . "', '" . '' . $surname . '' . "', '" . '' . $login  . '' . "', '" . '' . $password  . '' . "', '" . '' . $status . '' . "')";
    mysqli_query($conn, $information);

    $_SESSION["entered"] = "OK";
    $_SESSION["name"] = $name;
    $_SESSION["surname"] = $surname;
    $_SESSION["login"] = $login;
    $_SESSION["status"] = "client";
    $_SESSION["img"] = NULL;
    $_SESSION["email"] = NULL;
    $_SESSION["phone"] = NULL;
?>