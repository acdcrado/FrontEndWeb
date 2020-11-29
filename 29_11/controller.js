
	const initDatabase = () => {
		const config = {
			apiKey: "AIzaSyDamu-YcK408nYTP1MG4hNdrXpyU-R4KL8",
			authDomain: "flutter-38595.firebaseapp.com",
			databaseURL: "https://flutter-38595.firebaseio.com",
			projectId: "flutter-38595",
			storageBucket: "",
			messagingSenderId: "114656105297"
		};
		firebase.initializeApp(config);
	};
	initDatabase();

	/**
	 * Log-ins with provided information.
	 * Parameters:
	 * - email <string> - email to be used
	 * - password <string> - password to be user
	 * - callback <function> - function to call once the login operation is completed.
	 *	The parameters for this function are:
	 *		- successfull <boolen> true if log-in is successfull, false otherwise
	 *  	- errorCode <number> the error code in case sucessfull = false
	 *		- errorMessage <string> the error message in case sucessfull = false
	 **/
	const login = (email, password, callback) => {
		return firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
			// Success - redirect
			callback(true);
		}, (error) => {
			const errorCode = error.code;
			//Here we use the error message like it is returned by the firebase (the message is in english)
			const errorMessage = error.message;

			// handle error with login
			callback(false, errorCode, errorMessage);
		});
	};

	const logout = () => {
		return firebase.auth().signOut();
	};

	/**
	 * @callback registerCallback
	 * @param {boolean} successful if log-in is successful, false otherwise
	 * @param {number} errorCode the error code in case successful = false
	 * @param {string} errorMessage the error message in case successful = false
	 */

	/**
	 * Register given user with given information
	 *
	 * @param {string} username
	 * @param {string} email
	 * @param {string} password
	 * @param {registerCallback} callback function to call once the register operation is completed
	 *
	 **/
	const register = (username, email, password, callback) => {
		firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => {
			data.user.updateProfile({
				displayName: username
			}).then(function () {
				callback(true);
			}, function (error) {
				console.log(error);
			});
		}, (error) => {
			const errorCode = error.code;
			let errorMessage;

			// Here we analyze the code and set custom error message (in bulgarian) just for the sake of the exersice
			switch (errorCode) {
				case 'auth/weak-password':
					{
						errorMessage = "Registration failed. Weak password.";
						break;
					}
				case 'auth/email-already-in-use':
					{
						errorMessage = "Registration failed. Email is already used.";
						break;
					}
				case 'auth/invalid-email':
					{						
						errorMessage = "Registration failed. Email is not valid.";
						break;
					}
				default:
					{
						errorMessage = "Registration failed.";
					}
			}
			callback(false, errorCode, errorMessage);
		});
	};

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
        register(document.getElementById("un1").value, document.getElementById("email").value, document.getElementById("pass1").value);
        
        
        alert("You have successfully registered.");

        
        document.getElementById("auth-form").reset();
         
}
verify_email();

}