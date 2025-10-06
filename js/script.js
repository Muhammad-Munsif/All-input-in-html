document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const form = document.querySelector(".container");
  const firstNameInput = document.getElementById("nameInput");
  const lastNameInput = document.getElementById("lastnameInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");
  const passwordInput = document.getElementById("passwordInput");
  const confirmPasswordInput = document.getElementById("cpasswordInput");
  const countrySelect = document.getElementById("country");
  const fileInput = document.getElementById("fileInput");
  const submitBtn = document.getElementById("submitBtn");
  const resetBtn = document.getElementById("resetBtn");
  const successMessage = document.getElementById("successMessage");

  // Error elements
  const nameError = document.getElementById("nameError");
  const lastnameError = document.getElementById("lastnameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const cpasswordError = document.getElementById("cpasswordError");
  const countryError = document.getElementById("countryError");
  const fileError = document.getElementById("fileError");

  // Validation functions
  function validateName(name) {
    return /^[A-Za-z]{2,}$/.test(name.trim());
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
  }

  function validatePhone(phone) {
    return /^[\d\s\-\(\)\+]{10,}$/.test(phone.trim());
  }

  function validatePassword(password) {
    return password.length >= 8;
  }

  function validateCountry(country) {
    return country !== "";
  }

  function validateFile(file) {
    return file.files.length > 0;
  }

  // Real-time validation
  firstNameInput.addEventListener("blur", function () {
    if (!validateName(this.value)) {
      nameError.style.display = "block";
      this.style.borderColor = "#e74c3c";
    } else {
      nameError.style.display = "none";
      this.style.borderColor = "#2ecc71";
    }
  });

  lastNameInput.addEventListener("blur", function () {
    if (!validateName(this.value)) {
      lastnameError.style.display = "block";
      this.style.borderColor = "#e74c3c";
    } else {
      lastnameError.style.display = "none";
      this.style.borderColor = "#2ecc71";
    }
  });

  emailInput.addEventListener("blur", function () {
    if (!validateEmail(this.value)) {
      emailError.style.display = "block";
      this.style.borderColor = "#e74c3c";
    } else {
      emailError.style.display = "none";
      this.style.borderColor = "#2ecc71";
    }
  });

  phoneInput.addEventListener("blur", function () {
    if (!validatePhone(this.value)) {
      phoneError.style.display = "block";
      this.style.borderColor = "#e74c3c";
    } else {
      phoneError.style.display = "none";
      this.style.borderColor = "#2ecc71";
    }
  });

  passwordInput.addEventListener("blur", function () {
    if (!validatePassword(this.value)) {
      passwordError.style.display = "block";
      this.style.borderColor = "#e74c3c";
    } else {
      passwordError.style.display = "none";
      this.style.borderColor = "#2ecc71";
    }
  });

  confirmPasswordInput.addEventListener("blur", function () {
    if (this.value !== passwordInput.value) {
      cpasswordError.style.display = "block";
      this.style.borderColor = "#e74c3c";
    } else {
      cpasswordError.style.display = "none";
      this.style.borderColor = "#2ecc71";
    }
  });

  countrySelect.addEventListener("change", function () {
    if (!validateCountry(this.value)) {
      countryError.style.display = "block";
      this.style.borderColor = "#e74c3c";
    } else {
      countryError.style.display = "none";
      this.style.borderColor = "#2ecc71";
    }
  });

  fileInput.addEventListener("change", function () {
    if (!validateFile(this)) {
      fileError.style.display = "block";
    } else {
      fileError.style.display = "none";
    }
  });

  // Form submission
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let isValid = true;

    // Validate all fields
    if (!validateName(firstNameInput.value)) {
      nameError.style.display = "block";
      firstNameInput.style.borderColor = "#e74c3c";
      isValid = false;
    }

    if (!validateName(lastNameInput.value)) {
      lastnameError.style.display = "block";
      lastNameInput.style.borderColor = "#e74c3c";
      isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
      emailError.style.display = "block";
      emailInput.style.borderColor = "#e74c3c";
      isValid = false;
    }

    if (!validatePhone(phoneInput.value)) {
      phoneError.style.display = "block";
      phoneInput.style.borderColor = "#e74c3c";
      isValid = false;
    }

    if (!validatePassword(passwordInput.value)) {
      passwordError.style.display = "block";
      passwordInput.style.borderColor = "#e74c3c";
      isValid = false;
    }

    if (confirmPasswordInput.value !== passwordInput.value) {
      cpasswordError.style.display = "block";
      confirmPasswordInput.style.borderColor = "#e74c3c";
      isValid = false;
    }

    if (!validateCountry(countrySelect.value)) {
      countryError.style.display = "block";
      countrySelect.style.borderColor = "#e74c3c";
      isValid = false;
    }

    if (!validateFile(fileInput)) {
      fileError.style.display = "block";
      isValid = false;
    }

    // If all valid, show success message
    if (isValid) {
      successMessage.style.display = "block";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);

      // In a real application, you would submit the form data here
      console.log("Form submitted successfully!");
      console.log({
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        country: countrySelect.value,
        file: fileInput.files[0]?.name,
      });
    }
  });

  // Reset form
  resetBtn.addEventListener("click", function () {
    // Hide all error messages
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((error) => {
      error.style.display = "none";
    });

    // Reset border colors
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach((input) => {
      input.style.borderColor = "#ddd";
    });

    // Hide success message
    successMessage.style.display = "none";
  });
});
