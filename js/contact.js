function testEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function submitForm() {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var message = document.getElementById("messageInput").value;
  if (name === "" || email === "" || message === "") {
      document.getElementById("error").style.display = "block";
      document.getElementById("Message").style.display = "none";
  } else if (!testEmail(email)) {
      document.getElementById("error").textContent = "Vui lòng nhập đúng định dạng email";
      document.getElementById("error").style.display = "block";
      document.getElementById("Message").style.display = "none";
  } else {
      document.getElementById("Message").style.display = "block";
      document.getElementById("error").style.display = "none";
      document.getElementById("nameInput").value = "";
      document.getElementById("emailInput").value = "";
      document.getElementById("messageInput").value = "";
      setTimeout(function () {
          document.getElementById("Message").style.display = "none";
      }, 3000);
  }
}