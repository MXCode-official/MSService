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

    $login = trim(urldecode(htmlspecialchars($_POST["login"])));
    $user_password = trim(urldecode(htmlspecialchars($_POST["password"])));

    $result = mysqli_query($conn, "SELECT id, name, surname, login, password, status, image, email, phone FROM users WHERE login='".$login."'");
    $row = mysqli_fetch_array($result);
    if($row[4] == $user_password){
        $_SESSION["entered"] = "OK";
        $_SESSION["id"] = $row[0];
        $_SESSION["name"] = $row[1];
        $_SESSION["surname"] = $row[2];
        $_SESSION["login"] = $row[3];
        $_SESSION["status"] = $row[5];
        $_SESSION["img"] = $row[6];
        $_SESSION["email"] = $row[7];
        $_SESSION["phone"] = $row[8];
    }else{
        $_SESSION["entered"] = "ERROR";
    };
    echo $_SESSION["entered"];
?>