const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

// function password match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2,'Password does not Matched ')
    }
}
// check email is valid
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email.value).toLowerCase())){
       showSuccess(email);
    }else{
        showError(email,'Email is not valid');
    }
    
}
 // check age
 function checkAge(input){
    if(input.value<18){
        console.log(input.value)
        showError(input, '18+')
    }else{
        console.log(input.value)
        showSuccess(input)
    }
   }


// check required field
function checkRequired(inputArr){
  inputArr.forEach(input => {
       if(input.value.trim() === ''){
           showError(input,`${getFieldName(input)} is required`)
       }else{
           showSuccess(input);
       }
  });
}

// Get field Name
 function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }


 // check input length
 function checkLength(input,min,max){
     if(input.value.length<min){
         showError(input,`${getFieldName(input)} must be atleast ${min} characters`)
     }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must not exceed ${max} characters`)
     }else{
         showSuccess(input);
     }
 }

// Event Listeners
form.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    checkRequired([username,age,email,password,password2]);
     checkLength(username,3, 15);
     checkLength(password,8, 25);
     isValidEmail(email);
     checkAge(age);
     checkPasswordMatch(password,password2);
});

