<?php
    session_start();

    $servername = "localhost";
    $username = "id14476277_maximka";
    $password_dbase = "22fkS^tDU]RD=Pe_";
    $database = "id14476277_test_data_base";

    $conn = mysqli_connect($servername, $username, $password_dbase, $database);

    //Получаем содержимое изображения и добавляем к нему слеш
    $imagetmp=addslashes(file_get_contents($_FILES['image']['tmp_name']));

    $id = $_SESSION["id"];

    $result = mysqli_query($conn, "UPDATE users SET image='$imagetmp' WHERE id='$id'");
    $result = mysqli_query($conn, "SELECT image FROM users WHERE id='$id'");
    $row = mysqli_fetch_array($result);

    $_SESSION["img"] = $row[0];
    echo '<img src="data:image/jpg;base64,' . base64_encode($row[0]) . '" />';
?>