var serial = Date.now();
let form = document.forms['contact-form'];
// let formradios = document.getElementsByClassName('form-check-input');

 function setSerial() {
     const serialNo = "TSB_" + serial;
     document.getElementById('check').value = serialNo;
 };

 function message () {
     if (confirm("Confirm that you understand that you are asking us for help and accept our T&Cs!") == true) {
        
    } else {
         response = "You canceled, next time perhaps!"
     }
     window.location("/index1.html");
 }
