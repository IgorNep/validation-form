const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const form = document.getElementById("form");

//check Required
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value === "") {
      showError(input, `${getInputField(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
//get input field
function getInputField(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//show error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
//show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getInputField(input)} must be more than ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getInputField(input)} must be less than ${max} characters`
    );
  }
}
//Check validation of email
function checkEmailValid(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim().toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}
//check passwords match
function checkPasswordMatch(input1, input2) {
  if (input2.value.toLowerCase() !== input1.value.toLowerCase()) {
    showError(input2, "Password did not match");
  }
}

//add event listener

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([userName, email, password, password2]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 25);
  checkEmailValid(email);
  checkPasswordMatch(password, password2);
});
