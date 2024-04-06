document.addEventListener('DOMContentLoaded', (event) => {
    showAlert();
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmpassword");
    const messagePanel = document.getElementById("message-panel");
    


    const submitbutton =document.getElementById('buttoncolor');
    submitbutton.addEventListener('click',function(){
        this.style.backgroundColor = "#ff5400";
        this.style.color = '#ffffff';
    });
        

    form.addEventListener("submit", function(e) {
        let message = '';
        let valid = true;

        if(emailInput.value === '' || passwordInput.value === '' || confirmPasswordInput.value === '') {
            message += 'All fields are required. ';
            valid = false;
        }

        if(!emailInput.value.endsWith('@Gmail.com')) {
            message += 'Email must be a Google email (ends with @Gmail.com). ';
            valid = false;
        }

        if(passwordInput.value.length < 4) {
            message += 'Password must be at least 4 characters long. ';
            valid = false;
        }

        if(passwordInput.value !== confirmPasswordInput.value) {
            message += 'Passwords do not match. ';
            valid = false;
        }

        if(!valid) {
            e.preventDefault();
            messagePanel.textContent = message;
            messagePanel.style.color = 'red';
        }
       
    });
});
function showAlert(){
    alert("Welcome to the registration interface.(●'◡'●)");
    alert("The email must end with @Gmail");
}
