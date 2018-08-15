var lastname = document.getElementById("name1");

lastname.addEventListener("input", function (event) {
    if (lastname.validity.valueMissing) {
        lastname.setCustomValidity("请填写姓");
    } else {
        lastname.setCustomValidity("");
    }
});


var firstname = document.getElementById("name2");

firstname.addEventListener("input", function (event) {
  if (firstname.validity.valueMissing) {
    firstname.setCustomValidity("请填写名");
  } else {
    firstname.setCustomValidity("");
  }
});


var email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.valueMissing) {
    email.setCustomValidity("请填写邮箱");
  }
  else if (email.validity.typeMismatch) {
    email.setCustomValidity("请填写有效的邮箱");
  } else {
    email.setCustomValidity("");
  }
});


var phone = document.getElementById("phone");

phone.addEventListener("input", function (event) {
  if (phone.validity.valueMissing) {
    phone.setCustomValidity("请填写手机号码");
  }else if (email.validity.typeMismatch) {
    email.setCustomValidity("请填写有效的手机号码");
  } else {
    phone.setCustomValidity("");
  }
});


var content = document.getElementById("content");

content.addEventListener("input", function (event) {
  if (content.validity.valueMissing) {
    content.setCustomValidity("请填写留言");
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
