var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
function validateCaptcha() {
  event.preventDefault();
  debugger
  if (document.getElementById("cpatchaTextBox").value == code) {
    //alert("Valid Captcha")
  }else{
    alert("Invalid Captcha. try Again");
    //createCaptcha();
  }
}

var email=document.getElementById("email").value

function validateemail(email) {
    console.log(email);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //var address = document.getElementById[email].value;
    if (reg.test(email.value) == false) 
    {
        alert('Invalid Email Address');
        return (false);
    }
}
function ValidateDOB() {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("txtDate").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    
    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        if(dtCurrent.getMonth()==dtDOB.getMonth())
        {
          if(dtCurrent.getDate()<dtDOB.getDate())
        var age=dtCurrent.getFullYear() - dtDOB.getFullYear()-1;
        else{
          var age=dtCurrent.getFullYear() - dtDOB.getFullYear();
        }
        }
       else  if(dtCurrent.getMonth()>dtDOB.getMonth())
       {
        var age=dtCurrent.getFullYear() - dtDOB.getFullYear();
       }
       else{
        var age=dtCurrent.getFullYear() - dtDOB.getFullYear()-1;
       }
    console.log(age);
    document.getElementById("age").value = age;
        lblError.innerHTML = "Eligibility 15 years ONLY."
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 15) {
            return false;
        }
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 15) {


            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "";
        return true;
    } else {
        lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
        return false;
    }
}


var data =  document.getElementById("age").value 
window.loaction.href="submit.htm?data="+data

function Validatenumber()
        {
           
            var y =  document.getElementById("number").value;
             if(isNaN(y)||y.indexOf(" ")!=-1)
           {
              alert("Enter numeric value")
              return false; 
           }
           if (y.length<10)
           {
                alert("enter 10 characters");
                return false;
           }
           if (y.length>10)
           {
                alert("enter 10 characters");
                return false
           }
        }

        