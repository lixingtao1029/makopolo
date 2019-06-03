<?php
    header("content-type:text/html;charset=utf-8");
    include('public.php');

    $uname = $_GET['uname'];
    $upwd = $_GET['upwd'];
    
    $sql = "select * from useinfo where uname='$uname'";

    $res1 = mysqli_query($res,$sql);

    $arr = mysqli_fetch_assoc($res1);

    //print_r ($res1);

    if($arr){
        echo json_encode(array(
            'method' => '0',
            'info' => '用户名已存在，请重新登录'
        ));
    }else{
        $sql1 = "insert into useinfo (uname,pwd) values ('$uname','$upwd')";

        mysqli_query($res,$sql1);

        echo json_encode(array(
            'menthod' => '1',
            'info' => '注册成功'
        ));
    }
?>