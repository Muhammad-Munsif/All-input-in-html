// Getting Input Values
document.getElementById("submitBtn").addEventListener("click", function () {
  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  alert("Name: " + name + "\nEmail: " + email);
});
// Handling File Input
document.getElementById("fileInput").addEventListener("change", function () {
  let file = this.files[0];
  alert("Selected file: " + file.name);
});
// Validating an Email Input
document.getElementById("emailInput").addEventListener("input", function () {
  let email = this.value;
  if (!email.includes("@")) {
    this.style.borderColor = "red";
  } else {
    this.style.borderColor = "green";
  }
});
