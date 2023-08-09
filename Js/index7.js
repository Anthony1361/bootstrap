let signin = document.getElementById("signin");
let signup = document.getElementById("signup");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signin.onclick = function(){
    namefield.style.maxHeight = "0";
    title.innerHTML = "sign-in";
    signup.classList.add("disable");
    signin.classList.remove("disable");
}

signup.onclick = function(){
    namefield.style.maxHeight = "60px";
    title.innerHTML = "sign-Up";
    signup.classList.remove("disable");
    signin.classList.add("disable");
}

function validation() {
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let emailerror = document.getElementById("emailerror");
    let pattern = /^[^]+@[^]+\.[A-Z]{2,3}$/;
    if(email.match(pattern)){
       FormData.classList.add("valid");
       FormData.classList.remove("invalid");
       Text.innerHTML = "Your Email is Valid";
       Text.style.color = "#00ff00";
    }
    else{
        FormData.classList.remove("valid");
        FormData.classList.add("invalid")  ;
        Text.innerHTML = "Please Enter Valid Email Address";
        Text.style.color = "#ff0000";
    }
}

// error settings starts here//

// let nameerror = document.getElementById("nameerror");
// let emailerror = document.getElementById("emailerror");
// let passworderror = document.getElementById("passworderror");

//password visibility starts here//

let pass = document.getElementById("pass");
let errorpassword = document.getElementById("passworderror");
// show hide password//
errorpassword.onclick = function () {
    if(pass.type === "password"){
        pass.setAttribute("type","text");
        errorpassword.classList.add("hide");
    }
    else{
        pass.setAttribute("type","password");
        errorpassword.classList.remove("hide");
    }
}

//password visibility ends here//

//written requirement starts here//

// let lowerCase = document.getElementsByid("lower");
// let upperCase = document.getElementsByid("upper");
// let digit = document.getElementsByid("number");
// let specialCha = document.getElementsByid("special");
// let minlen = document.getElementsByid("length");

// function checkPassword(data) {
//     //javascript require expression//
//     const lower= new RegExp(" (?=.*[a-z]) ");
//     const upper= new RegExp(" (?=.*[A-Z]) ");
//     const number= new RegExp(" (?=.*[0-9]) ");
//     const special= new RegExp(" (?=.*[!@#\$%\^&\*]) ");
//     const length= new RegExp(" (?=.*{8,}) ");

//     //lowerCase validation check//
//     if(lower.test(data)){
//         lowerCase.classList.add("valid");
//     }
//     else{
//         lowerCase.classList.remove("valid");
//     }

//         //upperCase validation check//
//         if(upper.test(data)){
//             upperCase.classList.add("valid");
//         }
//         else{
//             upperCase.classList.remove("valid");
//         }

//             //number validation check//
//     if(number.test(data)){
//         digit.classList.add("valid");
//     }
//     else{
//         digit.classList.remove("valid");
//     }

//         //special character validation check//
//         if(special.test(data)){
//             specialCha.classList.add("valid");
//         }
//         else{
//             specialCha.classList.remove("valid");
//         }

//             //length validation check//
//     if(length.test(data)){
//           minlen.classList.add("valid");
//     }
//     else{
//       minlen.classList.remove("valid");
//     }
// }