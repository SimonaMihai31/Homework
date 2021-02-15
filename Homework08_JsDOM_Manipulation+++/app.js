// ● When clicking the “Submit” button, you should validate the required fields , and display a
//  red border around the input if validation fails.

// ● If user corrects the error, you should remove the red border.

// ● When the form is successfully submitted (no validation errors) you should display a
// Confirmation banner (which is hidden initially) containing the user’s first name that you
// just collected from the input fields. Also all the info from the input fields should be printed
// in the Console.

/// variabile 
var container=document.getElementById("contact-container");
var firstName=document.getElementById("first");
var lastName=document.getElementById("last");
var email=document.getElementById("email");
var message = document.getElementById('message');
var firstname_error = document.getElementById('firstNameError');
var lastname_error = document.getElementById('lastNameError');
var email_error= document.getElementById('emailAddressError');
var button = document.querySelector('button[type="send"]');
var isValid1 =false;
var isValid2 =false;
var isValid3 =false;


/// verificare input first name
firstName.addEventListener('input', validateFirstName);

function validateFirstName(e) {
  firstNameValue = e.target.value;
  var isValid1 =false;
	console.log(firstNameValue);
	var letters = /^[A-Za-z]+$/;
	if (firstNameValue.match(letters)) {
		if (firstNameValue.length > 0 && firstNameValue.length <= 15 ) {
      firstName.style.border = '3px solid green';
      firstname_error.textContent = '';
      isValid1 =true;
      
		} else if (firstNameValue.length > 15) {
			firstName.style.border = '3px solid red';
      firstname_error.textContent = 'First Name should have max 15 characters';
      isValid1 =false;
    }
  } 
  else {
		firstName.style.border = '3px solid red';
		firstname_error.textContent =
      'Name must contains only character excepting Elon Musk son';
      isValid1 =true;
  }
  return isValid;
  // console.log(isValid1);
}

////verificare input last name
lastName.addEventListener('input', validateLastName);

function validateLastName(e) {
  lastNameValue = e.target.value;
  var isValid2 =false;
	console.log(lastNameValue);
  var letters = /^[A-Za-z]+$/;
  if (lastNameValue.match(letters)) {
    if (lastNameValue.length > 0 && lastNameValue.length <= 15 ) {
      lastName.style.border = '3px solid green';
      lastname_error.textContent = '';
      isValid2 =true;
    } else if (lastNameValue.length > 15) {
      lastName.style.border = '3px solid red';
      lastname_error.textContent = 'First Name should have max 15 characters';
      isValid2 =false;
    }
  }
 else {
  lastName.style.border = '3px solid red';
  lastname_error.textContent =
    'Name must contains only character excepting Elon Musk son';
    isValid2 =false;
 }
 return isValid;
//  console.log(isValid2);
}

////verificare input email
email.addEventListener('input', validateEmail);

function validateEmail(e) {
  emailValue = e.target.value;
  var isValid3 =false;
	console.log(emailValue);
  if (emailValue.includes("@")) {
      email_error.textContent = "";
      email.style.border = '3px solid green';
      isValid3 =true;
  }
  else {
      email.style.border = '3px solid red';
      email_error.textContent = 'Email address is NOT ok';
      isValid3 =false;
  }
  return isValid;
  // console.log(isValid3);
}

////succes  message div creation DINAMIC:

 var succesmessageDiv = document.createElement ("div");
 button.addEventListener('click' , newsuccesmessageDiv);

function newsuccesmessageDiv() {
 // if (isValid1 == true && isValid2 == true && isValid3 == true )  {
//confirmation for create new div
succesmessageDiv.className = "succesMessage";
var newDivPara = document.createElement("p");
var newDivSymbol1 = document.createElement("a");
newDivSymbol1.className = "checked-item";
newDivSymbol1.innerHTML = '<i class="far fa-check-circle">';
succesmessageDiv.appendChild(newDivSymbol1);
var newDivParatext = document.createTextNode ("Thank you for contacting us , "
 + firstName.value);
newDivPara.appendChild(newDivParatext);
succesmessageDiv.appendChild(newDivPara);
var newDivSymbol = document.createElement("a");
newDivSymbol.className = "delete-item";
newDivSymbol.href = "#";
newDivSymbol.innerHTML = '<i class="far fa-times-circle">';
succesmessageDiv.appendChild(newDivSymbol);
// console.log(succesmessageDiv);
///insert newly created  succes  message div:
var form =document.querySelector(".contact-content");
var input = document.querySelector(".input");
form.insertBefore( succesmessageDiv, input );
succesmessageDiv.style.color ="magenta";
  
}


  


/// make succesmessageDiv dissapear (by clicking outside the form)

// container.addEventListener('click', deleteNewDiv);

// function deleteNewDiv(e){  
//     if(e.target !== e.currentTarget){ return};
//     succesmessageDiv.style.display = "none";
// };











