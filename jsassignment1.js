function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var website = document.getElementById("website").value.trim();
  var message = document.getElementById("message").value.trim();

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var websiteError = document.getElementById("websiteError");
  var messageError = document.getElementById("messageError");

  var isValid = true;

  nameError.innerText = "";
  emailError.innerText = "";
  websiteError.innerText = "";
  messageError.innerText = "";

  if (name === "") {
    nameError.innerText = "This field is required";
    isValid = false;
  }

  if (email === "") {
    emailError.innerText = "This field is required";
    isValid = false;
  } else {
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      emailError.innerText = "A valid email address is required";
      isValid = false;
    }
  }

  if (website === "") {
    websiteError.innerText = "This field is required";
    isValid = false;
  } else {
    var websitePattern = /^(https?:\/\/)?[\w\-]+\.[a-z]{2,}$/;
    if (!websitePattern.test(website)) {
      websiteError.innerText = "A valid url is required";
      isValid = false;
    }
  }

  if (message === "") {
    messageError.innerText = "This field is required";
    isValid = false;
  }

  return isValid;
}
