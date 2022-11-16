document.addEventListener("DOMContentLoaded", () => {
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirmPassword");

    let error = document.querySelector("#error");

    if(password.value == "" && confirmPassword.value == "") 
        error.textContent = "*Passwords do not match"
    else if (password.value === confirmPassowrd.value){
        error.textContent = ""
    }
});