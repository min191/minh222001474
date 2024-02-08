let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

function showError(input,message){
    let parent=input.parentElement;
    let small=parent.querySelector("small");
    parent.classList.add("error");
    small.innerText=message;
}
function showSuccess(input){
    let parent=input.parentElement;
    let small=parent.querySelector("small");
    parent.classList.remove("error");
    small.innerText='';
}
function checkError(listInput){

    listInput.forEach(input=>{
        input.value=input.value.trim()
        if(!input.value){
            showError(input,"không được để trống");
            return false;
        }
        else{
            showSuccess(input);
           
        }
    })
    return true;
}
function checkEmail(input){
    //check email
    let regexemail=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]{2,4}){1,2}$/;
    let email_test=regexemail.test(email.value);
    if(email_test){
        showSuccess(input);
    }else{
        showError(input, 'Email sai định dạng vui lòng nhập lại')
    }
    return email_test;
}
function checkPassword(input){
    // check mật khẩu
    let p_password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let password_test=p_password.test(password.value);
    if(password_test){
        showSuccess(input);
    }else{
        showError(input, `Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt`);
    }
    return password_test;
}


form.addEventListener('submit',function(e){
    // console.log("email: "+ email.value)
    e.preventDefault();
    let a="linhvh95@gmail.com"
    let b="Linh1503@"
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if((email==a)&(password==b))
    {
    alert( "Đăng nhập thành công");
    }
    else{
        alert( "gmail or pass sai");
    }
})