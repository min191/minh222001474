// Lấy các phần tử từ DOM
let nameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let phoneInput = document.getElementById("phone");
let signupButton = document.getElementById("signup");
let errorMessagePhone = document.getElementById("error-phone");
let errorMessagePass = document.getElementById("error-password");

// Định nghĩa mẫu số điện thoại và mật khẩu
let phonePattern = /^03\d{8}$/; // Mẫu số điện thoại: bắt đầu bằng "03" và theo sau là 8 chữ số
let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// Mẫu mật khẩu: ít nhất 1 chữ thường, 1 chữ in hoa, 1 chữ số, 1 ký tự đặc biệt, ít nhất 8 ký tự

// Thêm sự kiện click cho nút Signup
signupButton.addEventListener("click", function(e) {
    e.preventDefault();

    // Lấy giá trị từ ô input
    let usernameValue = nameInput.value;
    let phoneValue = phoneInput.value;
    let passValue = passwordInput.value;

    // Kiểm tra số điện thoại và mật khẩu với mẫu
    let isValidatePhone = phonePattern.test(phoneValue);
    let isValidatePass = passPattern.test(passValue);

    // Hiển thị thông báo lỗi nếu cần
    errorMessagePhone.style.display = isValidatePhone ? "none" : "block";
    errorMessagePass.style.display = isValidatePass ? "none" : "block";

    // Nếu cả số điện thoại và mật khẩu đều hợp lệ, thực hiện đăng ký
    if (isValidatePhone && isValidatePass) {
        // Thực hiện đăng ký, tương tự như đoạn mã trước đó
        var user = {
            username: usernameValue,
            password: passValue,
            phone: phoneValue,
        };

        var json = JSON.stringify(user);
        localStorage.setItem(usernameValue, json);

        alert("Successfully Sign Up");
    }
});


