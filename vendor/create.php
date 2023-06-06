<?php 
require_once 'connect.php';
$login = $_POST['login'];
$cpu2 = $_POST['cpu2'];
$mb2 = $_POST['mb2'];
$cpuc2 = $_POST['cpuc2'];
$vram2 = $_POST['vram2'];
$psu2 = $_POST['psu2'];
$ssd2 = $_POST['ssd2'];
$hdd2 = $_POST['hdd2'];
$gpu2 = $_POST['gpu2'];
$chase2 = $_POST['chase2'];
$cost2 = $_POST['cost2'];

$mnblck2 = $_POST['mnblck2'];
$mnblckCost = $_POST['mnblckCost'];

$ntbk3 = $_POST['ntbk3'];
$ntbkCost3 = $_POST['ntbkCost3'];

$monitor2 = $_POST['monitor2'];
$keyboard2 = $_POST['keyboard2']
$mouse2 = $_POST['mouse2']
$headphones2 = $_POST['headphones2']
$speakers2 = $_POST['speakers2']
$printer2 = $_POST['printer2']


mysqli_query($connect, "INSERT INTO `parts` (`id`,`login`, `cpu2`, `mb2`, `cpuc2`, `vram2`, `psu2`, `ssd2`, `hdd2`, `gpu2`, `chase2`, `cost2`) 
VALUES (NULL, '$login', '$cpu2', '$mb2', '$cpuc2', '$vram2', '$psu2', '$ssd2', '$hdd2', '$gpu2', '$chase2', '$cost2')");

mysqli_query($connect, "INSERT INTO `monoblock` (`id`,`login`,`mnblck2`,`mnblckCost`)
VALUES (NULL, '$login', '$mnblck2','$mnblckCost')");

mysqli_query($connect, "INSERT INTO `notebook` (`id`,`login`,`ntbk3`,`ntbkCost3`)
VALUES (NULL, '$login', '$ntbk3','$ntbkCost3')");

mysqli_query($connect, "INSERT INTO `pereferia` (`id`,`login`,`monitor2`,`keyboard2`,`mouse2`,`headphones2`,`speakers2`,`printer2`) 
VALUES (NULL, '$login','$monitor2','$keyboard2','$mouse2','$headphones2','$speakers2','$printer2')");

header('Location: ../index_logined.php');