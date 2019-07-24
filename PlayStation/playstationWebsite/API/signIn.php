<?php
    session_start();
    $req=$_POST;
    $result="{code:1000,comment:'account or password error'}";
    if(isset($_SESSION["account"])){//优先检测服务器中的session
        $result="{code:2000,comment:'success'}";
    }else{
        $connect=new mysqli("127.0.0.1","root","root","students1911a");
        if($connect->error){
            //TODO:结束
            $result="{code:1001,comment:'connect error'}";
        }else{
            //如果数据库链接正确，就可以查询数据库，并且是根据用户名和密码同时匹配
            //query查询返回值是一个记录集
            //如果数据库中存在该用户，就可以允许登录。
            $rs=$connect->query("select * from students where s_email='".$req["account"]."' and s_password='".$req["password"]."';");
            while($row=$rs->fetch_assoc()){
                $_SESSION["account"]=$req["account"];
                $result="{code:2000,comment:'success'}";
                break;
            }
            $connect->close();
        }
    }
    echo $result;
?>
