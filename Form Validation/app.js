const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cnfpassword = document.getElementById('cnfpassword');


const sendData = (usernameVal ,count, sRate) => {
    if(count === sRate){
        swal("Good job! " + usernameVal, " Registration Successful", "success");
        username.value="";
        email.value="";
        phone.value="";
        password.value="";
        cnfpassword.value="";
    }
}

// final validation
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i=0; i<formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i;
            sendData(usernameVal, count , sRate);
        }
        else{
            return false;
        }
    }
} 
        
// adding eventlistener
form.addEventListener('submit',(event) => {
    event.preventDefault();
    validate();
});


// Validate function
const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal =email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cnfPasswordVal = cnfpassword.value.trim();

    // validating username
    if(usernameVal === ""){
        setErrorMsg(username, 'Username cannot be blank');
    }
    else if(usernameVal.length <= 2){
        setErrorMsg(username, 'Username must contain atleast 3 character');
    }
    else{
        setSuccessMsg(username);
    }

    // validating Email
    if(emailVal === ""){
        setErrorMsg(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        // emailVal
        setErrorMsg(email, 'Not a valid Email'); 
    }
    else{
        setSuccessMsg(email);
    }

    // validating Phone no.
    if(phoneVal === ""){
        setErrorMsg(phone, 'Phone number cannot be blank');
    }
    else if(phoneVal.length != 10){
        setErrorMsg(phone, 'Not a valid Phone number'); 
    }
    else{
        setSuccessMsg(phone);
    }
    
    // Validating password
    if(passwordVal === ""){
        setErrorMsg(password, 'Password cannot be blank');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'Password must contain atleast 8 characters'); 
    }
    else{
        setSuccessMsg(password);
    }

    // Validating confirm password
    if(cnfPasswordVal === ""){
        setErrorMsg(cnfpassword, 'Type above password again');
    }
    else if(passwordVal !== cnfPasswordVal){
        // emailVal
        setErrorMsg(cnfpassword, 'Password didn\'t match'); 
    }
    else{
        setSuccessMsg(cnfpassword);
    }

    successMsg(usernameVal);

}

// isEmail function
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}
function setErrorMsg(input, errormsg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className ="form-control error";
    small.innerText = errormsg;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className ="form-control success";
}