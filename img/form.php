<?php
// vars to capture
$name = filter_input(INPUT_POST,'fname');
$lname = filter_input(INPUT_POST,'lname');
$email = filter_input(INPUT_POST,'email');
$phone = filter_input(INPUT_POST,'phone');

// use if to check for IM
if(empty($whatsapp)){
    $im = filter_input(INPUT_POST,'telegram');
}else if(empty($telegram)){
    $im = filter_input(INPUT_POST,'whatsapp');
} else{
    $im = filter_input(INPUT_POST,'both');
}

// The rest
$ticket = filter_input(INPUT_POST,'ticketType');
$message = filter_input(INPUT_POST,'message');
$check = filter_input(INPUT_POST,'check');
// mySQL params
$host ='localhost';
$dbu ='root';
$dbp ='r00tw0rd_ooo';
$dbn ='tsb';

// Create connection
$conn = new mysqli($host,$dbu,$dbp,$dbn);

if(mysqli_connect_error()){
    die('Connect error '.mysqli_connect_error());
}else {
    // $sql = "INSERT INTO tsb.login VALUES($name,$lname,$email,$phone,$im,$ticket,$message,$check)";
    $sql = "SELECT * FROM tsb.login";
    if($conn->query($sql)){
        echo "New record added to db!";
    }else{
        echo "Error: ".$sql."<br>".$conn->error;
    }
    $conn->close();
}

?>

