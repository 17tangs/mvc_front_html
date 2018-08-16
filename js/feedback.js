document.addEventListener("DOMContentLoaded", function() {
    var lastname = document.getElementById("name1");
    lastname.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid){
            e.target.setCustomValidity("请填写姓");
        }
    }
    lastname.oninput = function(e){
        e.target.setCustomValidity("");
    }

    var firstname = document.getElementById("name2");
    firstname.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid){
            e.target.setCustomValidity("请填写名");
        }
    }
    firstname.oninput = function(e){
        e.target.setCustomValidity("");
    }

    var email = document.getElementById("email");
    email.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(e.target.validity.valueMissing){
            e.target.setCustomValidity("请填写邮箱");
        }
        else if(e.target.validity.typeMismatch){
            e.target.setCustomValidity("请填写有效的邮箱")
        }
    }
    email.oninput = function(e){
        e.target.setCustomValidity("");
    }

    var phone = document.getElementById("phone");
    phone.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid){
            e.target.setCustomValidity("请填写手机号码");
        }
    }
    phone.oninput = function(e){
        e.target.setCustomValidity("");
    }

    var title = document.getElementById("title");
    title.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid){
            e.target.setCustomValidity("请填写标题");
        }
    }
    title.oninput = function(e){
        e.target.setCustomValidity("");
    }

    var content = document.getElementById("content");
    content.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid){
            e.target.setCustomValidity("请填写留言");
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
