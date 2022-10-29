var serial = Date.now();
var serialNo;

function setSerial() {
   serialNo = "TSB_" + serial;
   document.getElementById('check').value = serialNo;
   //return serialNo;
};

function message () {
   confirm("Your request " + serialNo + " was logged successfully!");
};
