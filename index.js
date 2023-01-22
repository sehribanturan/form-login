//dom elements
const form=document.getElementById("form")
const username=document.getElementById("userName")
const email=document.getElementById("eMail")
const password=document.getElementById("password")
const password2=document.getElementById("password2")
//show error
function showError(input,msg){
    const formControl=input.parentElement
    formControl.className="form-control error"
    const small=formControl.querySelector('small')//tag name,id,class
    small.innerText= msg;
}

//show success
function showSuccess(input){
    const formControl=input.parentElement
    formControl.className="form-control success";
    
}
//check Required fields
function checkRequired(inputArray){
    inputArray.forEach(input => {
        if(input.value.trim()=== ""){
            showError(input,`${input.id} is Required!`)
        } else{
            showSuccess(input)
        }
    });
}
//check input lengths
function checkLengths(input,min,max){
    if(input.value.length < min){
        showError(input,`${input.id} must be at least ${min} characters.`)
    }else if(input.value.length > max){
            showError(input,`${input.id}must be at most ${max} characters.`)
    }
}
//check email
function checkEmail(input){
    const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input,"Email is not valid")
    }
         
}
//maching password
function isPasswordMatch(p1,p2){
    if(p1.value!=p2.value){
        showError(p2,"The Passwords Do Not March!")
    }
}

//add event listener
form.addEventListener('submit',function(e){
    e.preventDefault();
     checkRequired([user,email,password,password2]);
     checkLengths(user,4,15);
     checkLengths(password,6,20);
     checkEmail(email)
     isPasswordMatch(password,password2)

})