/*function namevalid() {
    let x = document.getElementById("in1").value;
    let text;
    if (x=="") {
      text = "Enter your name Please";
    } 
    document.getElementById("on").innerHTML = text;
    let y = document.getElementById("in2").value;
    let text2;
    if (y == " ") {
        
        text2 = "Enter your email Please";  
    }

    document.getElementById("in2").innerHTML = text2;
}  
// Get the form element
const form = document.getElementById('myForm');

// Add an event listener to the form that will execute a function when the user submits the form
form.addEventListener('submit', validateForm);

function validateForm(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the input fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Set the error message to an empty string
  let errorMessage = '';

  // Check if the name is not empty
  if (nameInput.value === '') {
    errorMessage += 'Please enter your name.\n';
  }

  // Check if the email is not empty and is a valid email address
  if (emailInput.value === '' || !isValidEmail(emailInput.value)) {
    errorMessage += 'Please enter a valid email address.\n';
  }

  // Check if the message is not empty
  if (messageInput.value === '') {
    errorMessage += 'Please enter a message.';
  }

  // If there is an error message, display it to the user
  if (errorMessage !== '') {
    alert(errorMessage);
  } else {
    // If there are no errors, submit the form
    form.submit();
  }
}

function isValidEmail(email) {
  // Regular expression to check if the email is valid
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}
*/
const nameInput = document.getElementById('name');
const errorMessage = document.getElementById('error-message');

nameInput.oninput = function() {
  const name = nameInput.value;

  if (name.trim() === '') {
    // If the input is empty, display an error message
    errorMessage.textContent = 'Please enter your name';
  } else {
    // If the input is not empty, remove any error message
    errorMessage.textContent = '';
  }
}

