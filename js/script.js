var serial = Date.now();
//let formradios = document.getElementsByClassName('form-check-input');

 function setSerial() {
    var serialNo = "TSB_" + serial;
    document.getElementById('check').value = serialNo;
 };

 function message () {
    alert("Your request" + serialNo + " was logged successfully!")
 };
