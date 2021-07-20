<?php
    function generateSalt()
	{
		$salt = '';
		$saltLength = 8; //длина соли
		for($i=0; $i<$saltLength; $i++) {
			$salt .= chr(mt_rand(33,126)); //символ из ASCII-table
		}
		return $salt;
	}

    session_start();

    $servername = "localhost";
    $username = "id14476277_maximka";
    $password_dbase = "22fkS^tDU]RD=Pe_";
    $database = "id14476277_test_data_base";

    $conn = mysqli_connect($servername, $username, $password_dbase, $database);

    $login = trim(urldecode(htmlspecialchars($_POST["login"])));
    $user_password = trim(urldecode(htmlspecialchars($_POST["password"])));

    $result = mysqli_query($conn, "SELECT id, name, surname, login, password, status, image, email, phone FROM users WHERE login='$login'");

    $row = mysqli_fetch_array($result);
    if($row[4] == md5($user_password)){
        $_SESSION['error'] = "OK";
        $error = $_SESSION['error'];
        $_SESSION['entered'] = 'OK';
        $_SESSION['id'] = $row[0];
        $_SESSION['name'] = $row[1];
        $_SESSION['surname'] = $row[2];
        $_SESSION['login'] = $row[3];
        $_SESSION['status'] = $row[5];
        $_SESSION['img'] = $row[6];
        $_SESSION['email'] =  $row[7];
        $_SESSION['phone'] =  $row[8];
        if (!empty($_POST["remember"]) and $_POST["remember"] == 1){
            $key = generateSalt();

            setcookie('login', $_SESSION['login'], time()+60*60*24*30);
            setcookie('key', $key, time()+60*60*24*30);

            $query = 'UPDATE users SET cookie="'.$key.'" WHERE login="'.$login.'"';
            mysqli_query($conn, $query);
        }
    }else{
        $_SESSION['error'] = 'Не верный логин или пароль';
        $error = $_SESSION['error'];
    };
    echo $error;
?>