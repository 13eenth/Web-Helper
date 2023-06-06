<?php
    session_start();
    require_once 'connect.php';

    $login = $_POST['login'];
    $pass = $_POST['pass'];

    $check_user=mysqli_query($connect, "SELECT * FROM `users` WHERE `login`= '$login' AND `pass` = '$pass'");
    if(mysqli_num_rows($check_user) > 0){
        
        $user = mysqli_fetch_assoc($check_user);

        $_SESSION['user'] = [
            "login"=> $user['login'],
            "email"=> $user['email']
        ];
        header('Location: ../index_logined.php');
    }else{
        $_SESSION['message']="Не верный Логин или Пароль";
        header('Location: ../login.php');
    }
?>