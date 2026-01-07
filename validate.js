//validation logic
function validate() {
  //request data gathering logic
  let uname = document.getElementById("usernamee").value;
  let pswd = document.getElementById("pswd").value;
  let cnfrmpaswd = document.getElementById("cnfrmpswd").value;
  let mobno = document.getElementById("phnno").value;
  let mailid = document.getElementById("mailid").value;
  let dob = document.getElementById("dob").value;
  let address = document.getElementById("address").value;
  let qualification = document.getElementById("qualification").value;

  let regexp = /[a-z][A-Z]/;
  let regexp1 = /[0-9]{10}/;
  //validation logic
  if (uname == "") {
    alert("please enter username");
    return false;
  }
  //password
  if (pswd == "") {
    alert("please enter password");
    return false;
  }
  if (pswd.length < 8 || pswd.length > 12) {
    alert("password should be minimum 8 characters and maximum 12 chars");
    return false;
  }

  if (!regexp.test(pswd)) {
    alert("password should be combination of small and capital alphabets");
    return false;
  }
  //confirm password validation
  if (cnfrmpaswd == "") {
    alert("please re-enter password");
    return false;
  }
  if (pswd != cnfrmpaswd) {
    alert("Passwords should match");
    return false;
  }
  //mobile number validation
  if (mobno == "") {
    alert("Please enter Mob No.");
    return false;
  }
  if (!regexp1.test(mobno)) {
    alert("enter valid mobile number with 10 digits");
    return false;
  }
  //email validation
  if (mailid == "") {
    alert("Enter Email id");
    return false;
  }
  if (!mailid.includes(".com")) {
    alert("Enter valid email");
    return false;
  }
  //gender validation
  let gender = document.getElementsByName("gender");
  let genderSelected = false;

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderSelected = true;
      break;
    }
  }

  if (!genderSelected) {
    alert("Please select gender");
    return false;
  }
  if (dob === "") {
    alert("Please select Date of Birth");
    return false;
  }

  // Address validation
  if (address === "") {
    alert("Address is required");
    return false;
  }

  // Qualification validation
  if (qualification === "") {
    alert("Please select qualification");
    return false;
  }

  alert("Registration Successful!");
  return true;
}
