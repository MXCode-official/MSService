<?php
    session_start();
    $servername = "localhost";
    $username = "id14476277_maximka";
    $password_dbase = "22fkS^tDU]RD=Pe_";
    $database = "id14476277_test_data_base";

    $conn = mysqli_connect($servername, $username, $password_dbase, $database);

    $login = trim(urldecode(htmlspecialchars($_POST["login"])));
    $user_password = trim(urldecode(htmlspecialchars($_POST["password"])));


    $result = mysqli_query($conn, "SELECT name, surname, login, password, status FROM users WHERE login='".$login."'");
    $row = mysqli_fetch_array($result);
    if($row[3] == $user_password){
        $_SESSION["entered"] = "OK";
        $_SESSION["name"] = $row[0];
        $_SESSION["surname"] = $row[1];
        $_SESSION["login"] = $row[2];
        $_SESSION["status"] = $row[4];

        echo $_SESSION["entered"];
    }else{
        $_SESSION["entered"] = "ERROR";

        echo $_SESSION["entered"];
    };
?>