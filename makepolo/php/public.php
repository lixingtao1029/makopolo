<?php
    header("content-type:text/html;charset=utf-8");
    $db_hostName = 'localhost';
    $db_username = 'root';
    $db_password = "root";
    $db_data = 'mydata';

    $res = new mysqli($db_hostName,$db_username,$db_password,$db_data);

    if($res -> connect_error){
        die("1".$res -> connect_error);
    }
    
    $res ->query('set names utf-8');
?>