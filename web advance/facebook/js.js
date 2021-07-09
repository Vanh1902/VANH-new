let arr_username = ['admin1','admin2','admin3','admin4','admin5','admin6'];
let arr_password = ['admin1','admin2','admin3','admin4','admin5','admin6'];

let signinbutton = document.getElementById("si");

let elm_login = document.getElementById('btn-login');
let elm_form = document.getElementById('form-login');

let elm_username = document.getElementById('username');
let elm_password = document.getElementById('password');

// elm_login.addEventListener('mouseenter',function(){
//     alert('clicked!!!');
// });

elm_form.addEventListener('submit',function(event){
    // alert('submitted');
    event.preventDefault();//ngăn sự kiện tự động load lại trang
    
    let username = elm_username.value;
    let flag = false;
    let length = arr_username.length

    for (let i = 0; i < length; i++){
        if( username == arr_username[i]){
            let password = elm_password.value;
            if (password == arr_password[i]){
                signinbutton.style.display = "block";
                signinbutton.innerHTML = "Sign in successful";
                signinbutton.style.color = "green";
            }else{
                signinbutton.style.display = "block";
                signinbutton.innerHTML = "Sign in unsuccessful";
                signinbutton.style.color = "red";
            }
            flag = true;
            break;
        }
    }
    if(flag == false){
        signinbutton.style.display = "block";
        signinbutton.innerHTML = "not have account";
        signinbutton.style.color = "blue";
    }
})
