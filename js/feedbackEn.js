var lastname = document.getElementById("name1");
lastname.addEventListener("input", function (event) {
    if (lastname.validity.valueMissing) {
        lastname.setCustomValidity("Please enter your last name");
    } else {
        lastname.setCustomValidity("");
    }
});


var firstname = document.getElementById("name2");

firstname.addEventListener("input", function (event) {
  if (firstname.validity.valueMissing) {
    firstname.setCustomValidity("Please enter your first name");
  } else {
    firstname.setCustomValidity("");
  }
});


var email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.valueMissing) {
    email.setCustomValidity("Please enter your email address");
  }
  else if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
});


var phone = document.getElementById("phone");

phone.addEventListener("input", function (event) {
  if (phone.validity.valueMissing) {
    phone.setCustomValidity("Please enter your phone number");
  }else if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid phone number");
  } else {
    phone.setCustomValidity("");
  }
});


var content = document.getElementById("content");

content.addEventListener("input", function (event) {
  if (content.validity.valueMissing) {
    content.setCustomValidity("Please leave a message");
  } else {
    content.setCustomValidity("");
  }
});





function cancelForm() {
   // Get the first form with the name
   // Hopefully there is only one, but there are more, select the correct index
   var frm = document.getElementById("contact");
   frm.reset();  // Reset
   $(".shadow").hide();
   $("#messageSent").hide();
   $(" .feedback").hide();
   return false; // Prevent page refresh
}
