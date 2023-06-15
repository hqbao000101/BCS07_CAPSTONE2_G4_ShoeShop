// todo: check first name -> not null
function isFirstNameValid(name) {
  if (name == "") {
    document.getElementById("first-alert").innerHTML = "You must fill this";
    return false;
  }
  document.getElementById("first-alert").innerHTML = "";
  return true;
}

// todo: check last name -> not null
function isLastNameValid(name) {
  if (name == "") {
    document.getElementById("last-alert").innerHTML = "You must fill this";
    return false;
  }
  document.getElementById("last-alert").innerHTML = "";
  return true;
}

// todo: check phone -> not null and the length must be 10-12 digits
function isPhoneValid(phone) {
  let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (phone == "") {
    document.getElementById("phone-alert").innerHTML = "You must fill this field";
    return false;
  }
  if (!phoneRegex.test(phone)) {
    document.getElementById("phone-alert").innerHTML = "You must enter a valid phone number";
    return false;
  }
  document.getElementById("phone-alert").innerHTML = "";
  return true;
}

// todo: check email -> not null and match the email regex
function isEmailValid(email) {
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email == "") {
    document.getElementById("email-alert").innerHTML = "You must fill this field";
    return false;
  }
  if (!emailRegex.test(email)) {
    document.getElementById("email-alert").innerHTML = "You must enter a valid email";
    return false;
  }
  document.getElementById("email-alert").innerHTML = "";
  return true;
}

// todo: check password -> not null
function isPasswordValid(password) {
  if (password == "") {
    document.getElementById("pass-alert").innerHTML = "You must fill this field";
    return false;
  }
  document.getElementById("pass-alert").innerHTML = "";
  return true;
}
// todo: check re-pass -> similar to the previous password
function isRePassMatch(password, confirmPassword) {
  if (confirmPassword == "") {
    document.getElementById("repass-alert").innerHTML = "You must fill this field";
    return false;
  }
  if (password != confirmPassword) {
    document.getElementById("repass-alert").innerHTML = "The password does not match";
    return false;
  }
  document.getElementById("repass-alert").innerHTML = "";
  return true;
}