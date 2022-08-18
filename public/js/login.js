function loginMe(){
    var loginUser = new XMLHttpRequest();
    loginUser.open("POST", "http://127.0.0.1:8080/login", true)
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload=function(){
        //alert("Login Successful")
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if (token.result != false){
            alert("Login Successful")
            window.location.href="Restaurant.html";
            sessionStorage.setItem("token", token.result);
        }
        else{
            alert("Login Unsuccessful")
        }
    }
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;
    var payload = {username:username, password:password}
    loginUser.send(JSON.stringify(payload));
}

const onSignUpClicked = async () => {
    const response = await axios.post('/api/signup', {
        email: emailValue,
        password: passwordValue,
    });
    const{ token } = response.data;
    setToken(token);
    history.push(`/please-verify?email=${encodeURIComponent(emailValue)}`);
}
