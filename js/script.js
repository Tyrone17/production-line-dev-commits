var serial = Date.now();

 function setSerial() {
    var serialNo = "TSB_" + serial;
    document.getElementById('check').value = serialNo;
 };

 function message () {
    alert("Your request" + serialNo + " was logged successfully!")
 };



