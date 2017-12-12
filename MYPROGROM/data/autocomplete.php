<?php
    header("Content-Type:application/json");
    require("01_init.php");
    @$kw=$_REQUEST["term"];
    $sql="select bid,title as label,sold_count from ty_book";
    if($kw){
        $kws=explode(" ",$kw);
        for($i=0;$i<count($kws);$i++){
            $kws[$i]="title like '%".$kws[$i]."%'";
        }
        $sql.="where".implode(" and ",$kws);
       }
      // var_dump($sql);
	  $sql.=" order by sold_count DESC limit 10";
	  $result=mysqli_query($conn,$sql);
   echo json_encode(mysqli_fetch_all($result,1));