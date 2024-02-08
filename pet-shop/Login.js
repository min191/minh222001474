// Lấy các phần tử từ DOM
let phoneInput = document.getElementById("phone");
let passwordInput = document.getElementById("password");
let loginButton = document.getElementById("login");
let errorMessagePhone = document.getElementById("error-message");
let errorMessagePass = document.getElementById("error-pass");

// Định nghĩa mẫu số điện thoại và mật khẩu
let correctPhone = "0397905369";
let correctPass = "Linh123@";

// Thêm sự kiện click cho nút Login
loginButton.addEventListener("click", function(e) {
    e.preventDefault();

    // Lấy giá trị từ ô input
    let phoneValue = phoneInput.value;
    let passValue = passwordInput.value;

    // Kiểm tra số điện thoại và mật khẩu
    let isValidatePhone = phoneValue === correctPhone;
    let isValidatePass = passValue === correctPass;

    // Hiển thị thông báo lỗi nếu cần
    errorMessagePhone.style.display = isValidatePhone ? "none" : "block";
    errorMessagePass.style.display = isValidatePass ? "none" : "block";

    // Nếu cả số điện thoại và mật khẩu đều hợp lệ, hiển thị thông báo thành công
    if (isValidatePhone && isValidatePass) {
        errorMessagePhone.style.display = "none";
        errorMessagePass.style.display = "none";
        alert("Đăng nhập thành công");
    }
});

