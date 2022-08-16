function registerMe(){
    let registerUser = new XMLHttpRequest();
    registerUser.open('POST', '/member', true)
    registerUser.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    registerUser.onload=function(){
        alert("Registration Successful")
    }
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var payload = new Object();
    payload.username = username;
    payload.password = password;
    payload.phone_number = phonenumber;
    payload.first_name = first_name;
    payload.last_name = last_name;
    payload.gender = gender;
    payload.email_address = email;
    console.log(payload);
    registerUser.send(JSON.stringify(payload));
}