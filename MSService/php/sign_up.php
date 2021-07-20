<?php
    session_start();

    $servername = "localhost";
    $username = "id14476277_maximka";
    $password_dbase = "22fkS^tDU]RD=Pe_";
    $database = "id14476277_test_data_base";

    $conn = mysqli_connect($servername, $username, $password_dbase, $database);

    $name = trim(urldecode(htmlspecialchars($_POST["name"])));
    $surname = trim(urldecode(htmlspecialchars($_POST["surname"])));
    $login = trim(urldecode(htmlspecialchars($_POST["login"])));
    $password = trim(urldecode(htmlspecialchars($_POST["password"])));
    $status = "client";

    $query = 'SELECT login FROM users WHERE login="'.$login.'"';
    $isLoginFree = mysqli_query($conn, $query);
    $isLoginFree = mysqli_fetch_assoc($isLoginFree);

    if (empty($isLoginFree)){
        $result = mysqli_query($conn, 'INSERT INTO users (id, name, surname, login, password, status, image, email, phone, cookie) VALUES (NULL, "'.$name.'", "'.$surname.'", "'.$login.'", "'.md5($password).'", "'.$status.'", NULL, NULL, NULL, NULL)');
        if ($result){
            $_SESSION['error'] = "OK";
            $error = $_SESSION['error'];
            $_SESSION['entered'] = 'OK';
            $_SESSION['name'] = $name;
            $_SESSION['surname'] = $login;
            $_SESSION['login'] = $login;
            $_SESSION['status'] = 'client';
            $_SESSION['img'] = NULL;
            $_SESSION['email'] = NULL;
            $_SESSION['phone'] = NULL;
        } else{
            $_SESSION['error'] = "ОШИБКА";
            $error = $_SESSION['error'];
            echo "ERROR";
        }
    } else{
        $_SESSION['error'] = 'Логин уже занят';
        $error = $_SESSION['error'];
    }
    echo $error;

?>