<?php
header("Content-Type:application/json");
require("01_init.php");
@$bid=$_REQUEST["bid"];
$output=[

];
if($bid){
	$sql="select * from ty_book where bid=$bid";
	$result=mysqli_query($conn,$sql);
	$product=mysqli_fetch_all($result,1)[0];
	$output["product"]=$product;
	$sql1="select * from ty_book_pic where bid=$bid";
	$result=mysqli_query($conn,$sql1);
	$output["imgs"]=mysqli_fetch_all($result,1);
}
echo json_encode($output);