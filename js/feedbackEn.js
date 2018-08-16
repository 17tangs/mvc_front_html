document.addEventListener("DOMContentLoaded", function() {
    var lastname = document.getElementById("name1");
    lastname.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid){
            e.target.setCustomValidity("Please enter your last name");
        }
    }
    lastname.oninput = function(e){
        e.target.setCustomValidity("");
    }

    var firstname = document.getElementById("name2");
    firstname.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid){
            e.target.setCustomValidity("Please enter your first name");
        }
    }
    firstname.oninput = function(e){
        e.target.setCustomValidity("");
    }

    var email = document.getElementById("email");
    email.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(e.target.validity.valueMissing){
            e.target.setCustomValidity("Please enter your email");
        }
        else if(e.target.validity.typeMismatch){
            e.target.setCustomValidity("Please enter a valid email address")
        }
    }
    email.oninput = function(e){
        e.target.setCustomValidity("");
    }

    var phone = document.getElementById("phone");
    phone.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid){
            e.target.setCustomValidity("Please enter a valid phone number");
        }
    }
    phone.oninput = function(e){
        e.target.setCustomValidity("");
    }

    var title = document.getElementById("title");
    title.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid){
            e.target.setCustomValidity("Please enter a title");
        }
    }
    title.oninput = function(e){
        e.target.setCustomValidity("");
    }

    var content = document.getElementById("content");
    content.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid){
            e.target.setCustomValidity("Please leave a message");
        }
    }
    content.oninput = function(e){
        e.target.setCustomValidity("");
    }
})

function cancelForm() {
   var frm = document.getElementById("contact");
   frm.reset();  // Reset
   $(".shadow").hide();
   $("#messageSent").hide();
   $(" .feedback").hide();
   return false; // Prevent page refresh
}
