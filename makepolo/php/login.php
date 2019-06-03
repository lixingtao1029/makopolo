<?php
    header("content-type:text/html;charset=utf-8");
    include('public.php');

    $uname = $_GET['uname'];
    $upwd = $_GET['upwd'];

    $sql = "select uname,pwd from useinfo where uname='$uname'";

    $res1 = mysqli_query($res,$sql);

    $arr = mysqli_fetch_assoc($res1);

    if($arr){
        if($arr['pwd'] == $upwd){
            echo json_encode(array(
                'method' => '1',
                'info' => '登录成功'
            ));
        }else{
            echo json_encode(array(
                'method' => '0',
                'info' => '账号密码不匹配'
            ));
        }
    }else{
        echo json_encode(array(
            'method' => '0',
            'info' => '无此账号信息'
        ));
    }
?>