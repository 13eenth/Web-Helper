<?php
    session_start();
    require_once 'connect.php';

    $login = $_POST['login'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];

    if(empty($login)){
        $_SESSION['message']="Введите логин";
        header('Location:../register.php');
    }else if(empty($email)){
        $_SESSION['message']="Введите почту";
        header('Location:../register.php');
    }else if(empty($pass)){
        $_SESSION['message']="Введите пароль";
        header('Location:../register.php');
    }

    mysqli_query($connect, "INSERT INTO `users` (`id`, `login`, `email`, `pass`) VALUES (NULL, '$login', '$email', '$pass')");

    $_SESSION['message'] = 'Регистрация прошла успешно';
    header('Location:../index_logined.php')

?>