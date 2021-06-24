<?php
    session_start();
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
?>