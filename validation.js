function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML=hintMsg;
}

function validateSignUpInputCredentials(){
    username=document.getElementById("name").value;
    email=document.getElementById("email_address").value; 
    password=document.getElementById("password").value;
    confirmpassword=document.getElementById("confirm_password").value;
    var nameErr = emailErr = passwordErr = confirmPasswordErr = true;
    // Validate email address
    if (username=="") {
    printError("nameErr", "Please enter your Username");
   }else {
    // Regular expression for basic email validation
    var regex = /^[A-Za-z]+$/;
    if(regex.test(username) == false) {
        printError("nameErr", "Please enter a valid Username");
    } else{
        printError("nameErr", "");
        nameErr == false;
    }
   }

   if (email=="") {
    printError("emailErr", "Please enter your email address");
   }else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) == false) {
        printError("emailErr", "Please enter a valid email address");
    } else{
        printError("emailErr", "");
        emailErr == false;
    }
   }

   if (password=="") {
    printError("passwordErr", "Please enter your password");
   } else{
        printError("passwordErr", "");
        passwordErr == false;
    }

    if (confirmpassword=="") {
        printError("confirmpasswordErr", "Please enter your password");
       } else{
            printError("confirmpasswordErr", "");
            confirmpasswordErr == false;
        }
    if ((nameErr || emailErr || passwordErr || confirmPasswordErr) == true) {
        return false;
    } else{
        return true;
    }
   }