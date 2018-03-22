// Take a climb challenge

$(Document).ready(function (s) {

var contact = {
fName: '', 
lName: '', 
cName: '', 
address: '', 
telNum: '', 
email: '',
age: 0  
} 

// Hide some boxes
$(".hide").hide();

var contact = Array();
var name;
name = prompt("What is your name?")

function addContact(params) {
    addC = true;
    while (addC) {
     var fName = new contact();   

        fName.fName = fname;
        fName.lName = lName;
        fName.Age= Age;
        fName.address = Address;
        fName.telNum = TelNO;
        fName.emailAddr = emailAddr;
    }
    if (fname==="") {addC = false;}
       }
}



});