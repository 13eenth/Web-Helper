<?php

    $connect = mysqli_connect('localhost','root','','registeruser');

    if(!$connect){
        die('error connect to data base');
    }
