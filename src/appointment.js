// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const form = document.getElementById('form')
const date = document.getElementById('date')
const time = document.getElementById('time')
const title = document.getElementById('title')
const description = document.getElementById('description')

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
    
}

// check required field
function checkRequired(inputArr){
  inputArr.forEach(input => {
       if(input.value.trim() === ''){
           showError(input,`${getFieldName(input)} is required`)
       }else{
           showSuccess(input)
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
         showSuccess(input)
     }
 }

// Event Listeners
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    checkRequired([date,time,title])
     checkLength(title,1, 15)
     checkLength(description,0, 30)
  var thisMonth = moment().format('YYYY-MM');
  var eventArray = [
      {
          title: 'Multi-Day Event',
          endDate: thisMonth + '-14',
          startDate: thisMonth + '-10'
      }, {
          endDate: thisMonth + '-23',
          startDate: thisMonth + '-21',
          title: 'Another Multi-Day Event'
      }, {
          date: thisMonth + '-27',
          title: 'Single Day Event'
      }
  ];
});