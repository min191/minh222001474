// Láy value trên màn hình => map xuống data
let user = document.querySelector("#user");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
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
function checkUser(input){
    //check user
    let regexuser=/^[a-zA-Z0-9]{6,15}/
    let user_test=regexuser.test(user.value);
    if(user_test){
        showSuccess(input);
    }else{
        showError(input, 'User từ 6 đến 15 ký tự');
    }
    return user_test;
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
function checkPhone(input){
    // check sđt
    let p_phone=/^0[35789]+[0-9]{8,8}$/
    let phone_test=p_phone.test(phone.value);
    if(phone_test){
        showSuccess(input);
    }else{
        showError(input, 'Số điện thoại không đúng vui lòng nhập lại');
    }
    return phone_test;
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
    // console.log("email: "+ email.value);
    e.preventDefault();
    let checkErrorInput=checkError([user,email,phone,password]); //boolean: true/false
    let checkUserInput=checkUser(user);
    let checkEmailInput=checkEmail(email);
    let checkPhoneInput=checkPhone(phone);
    let checkPasswordInput=checkPassword(password);

    console.log(`${checkErrorInput} |${checkUserInput} |${checkEmailInput} |${checkPhoneInput} |${checkPasswordInput}`)
    if( checkErrorInput & checkUserInput & checkEmailInput &checkPhoneInput&checkPasswordInput)
    {
        alert(" Tài khoản đăng ký thành công");
        
       
    }else{
        alert(" Tài khoản đăng ký không thành công vui lòng nhập đầy đủ thông tin bên dưới");
    }
}
)