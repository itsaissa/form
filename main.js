document.addEventListener("DOMContentLoaded", () => {
    let password = document.querySelector("#password");
    let confirmPassowrd = document.querySelector("#confirmPassword");

    let error = document.querySelector("#error");

    if(password.value != confirmPassowrd.value){
        error.textContent = "Passwords do not match."
    }
});