function validateMobile() {
  const mobileInput = document.getElementById("mobile").value.trim();
  const result = document.getElementById("result");

  const mobileRegex = /^[6-9]\d{9}$/;

  if (mobileRegex.test(mobileInput)) {
    result.style.color = "green";
    result.innerText = "✅ Valid Mobile Number";
  } else {
    result.style.color = "red";
    result.innerText = "❌ Invalid Mobile Number. Please enter a 10-digit number starting with 6-9.";
  }
}
