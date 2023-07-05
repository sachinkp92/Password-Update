let newPassword = document.getElementById("newPassword");
let newPasswordErrMsg = document.getElementById("newPasswordErrMsg");

newPassword.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        newPasswordErrMsg.textContent = "*Required";
    } else {
        newPasswordErrMsg.textContent = "";
    }
});

let confirmPassword = document.getElementById("confirmPassword");
let confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");
let successMsg = document.getElementById("successMsg");

confirmPassword.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        confirmPasswordErrMsg.textContent = "*Required";
    } else if (newPassword.value !== confirmPassword.value) {
        confirmPasswordErrMsg.textContent = "Password must be match";
    } else {
        successMsg.textContent = "Password Updated";
    }
});


let updatePasswordForm = document.getElementById("updatePasswordForm");
updatePasswordForm.addEventListener("submit", function(event) {
    event.preventDefault();
})