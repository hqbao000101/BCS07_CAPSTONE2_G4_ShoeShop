// todo: create account form
document.getElementById("create").onclick = () => {
  // todo: get user data from the form
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let name = firstName + " " + lastName;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  gender = gender == "male" ? true : false;

  // todo: check values' validations
  let validation = true;
  validation =
    isFirstNameValid(firstName) &
    isLastNameValid(lastName) &
    isPhoneValid(phone) &
    isEmailValid(email) &
    isPasswordValid(password) &
    isRePassMatch(password, confirmPassword);

  if (!validation) {
    return;
  }

  let new_user = new User();
  new_user = { ...new_user, name, phone, email, password, gender };
  console.log(new_user);
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: new_user,
  });
  promise.then((res) => {
    document.getElementById("register-result").innerHTML =
      "Register Account Successfully";
    document.querySelector(".modal-body .loadingBar").style.backgroundColor =
      "green";
    document
      .querySelector(".modal-body i.text-success")
      .classList.remove("d-none");
    document.querySelector(".modal-body i.text-danger").classList.add("d-none");
    document.getElementById("openModal").click();
    setTimeout(() => {
      document.getElementById("closeModal").click();
    }, 2000);
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 2500);
  });
  promise.catch((err) => {
    document.getElementById("email-alert").innerHTML =
      "This email existed. Please try another one!";
    document.querySelector(".modal-body .loadingBar").style.backgroundColor =
      "red";
    document.getElementById("register-result").innerHTML = "Email Existed";
    document
      .querySelector(".modal-body i.text-success")
      .classList.add("d-none");
    document
      .querySelector(".modal-body i.text-danger")
      .classList.remove("d-none");
    document.getElementById("openModal").click();
    setTimeout(() => {
      document.getElementById("closeModal").click();
    }, 2000);
  });
};

// todo: login
document.getElementById("login-request").onclick = () => {
  alert("Login page is still in progress. Please visit later!");
}