var serial = Date.now();
let form = document.forms['contact-form'];
//let formradios = document.getElementsByClassName('form-check-input');

 function setSerial() {
     const serialNo = "TSB_" + serial;
     document.getElementById('check').value = serialNo;
 };

 function message () {
    alert("Form is locked and loaded for one our Support agents - thank you!");
 }
