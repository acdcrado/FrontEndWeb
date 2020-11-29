
function verify(){

function verify_email(){
        var em = document.getElementById("email");
        var emailLen = em.value.length;
    
        if (emailLen == 0) {
            document.getElementById("errors").innerHTML = "An email is required.";
            return false;
        }
        if (emailLen < 5) {
            document.getElementById("errors").innerHTML = "Your email must be at least 5 characters long.";
            return false;
        }
        var em = document.getElementById("email").value;
        if (em.search(/[@]/) < 0) {
            document.getElementById("errors").innerHTML = "Your email must include '@'.";
            return false;
        } 
        if (em.search(/[.]/) < 0) {
            document.getElementById("errors").innerHTML = "Your email must include '.'.";
            return false;
        }
        verify_pass();
}
function verify_pass()
{

     var textBox = document.getElementById("pass1");
       var textLength = textBox.value.length;
        if(textLength < 6) { 
            document.getElementById("errors").innerHTML = "Password length must be atleast 6 characters";  
            return false;
         } 
         var pass=document.getElementById("pass1").value;
         if (pass.search(/[A-Z]/) < 0) {
            document.getElementById("errors").innerHTML = "Your password needs an uppser case letter"; 
            return false;
        }
        if (pass.search(/[0-9]/) < 0) {
            document.getElementById("errors").innerHTML = "Your password needs a number"; 
            return false;
        }
        if(pass.search(/[!@#$%^&]/)<0){
            document.getElementById("errors").innerHTML = "Your password needs at least one symbol from there:!,@,#,$,%,^,&"; 
            return false;
        }
        var userBox= document.getElementById("un1");
        var uBLength = userBox.value.length;
        if(uBLength < 6) { 
            document.getElementById("errors").innerHTML = "User name must be atleast 6 characters";  
            return false;
        }
        //console.log(document.getElementById("un1").value, document.getElementById("email").value, document.getElementById("pass1").value)
        auth.register(document.getElementById("un1").value, document.getElementById("email").value, document.getElementById("pass1").value);
        
        
        alert("You have successfully registered.");

        
        document.getElementById("auth-form").reset();
         
}
verify_email();

}