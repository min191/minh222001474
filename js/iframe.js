
const modalClose = document.querySelector(".modal-close");
const button = document.querySelector(".show_login");
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
  <div class="section-form">
            <div class="container_login">
                <div class="inner-wrap" id="container_login">
                    <div class="form-container sign-up">
                        <form action="" >
                            <h1>Create Account</h1>
                            <div class="social-icons">
                                <a  class="icon-4" href=""
                                    ><i class="fa-brands fa-google-plus-g"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-facebook"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-github"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-linkedin-in"></i
                                ></a>
                            </div>
                            <span>or use your email for registeration</span>
                            <input type="text" placeholder="Name" />
                            <input   type="email" placeholder="Email" />        
                            <div class="matkhau2">
                            <input  
                                type="password"
                                name="password"
                                id=""
                                placeholder="Enter your password"
                            />
                            <i class="fa fa-eye show_2"></i>
                        </div>
                            <button type="submit">Sign up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in">
                        <form action="">
                            <h1>Sign in</h1>
                            <div class="social-icons">
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-google-plus-g"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-facebook"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-github"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-linkedin-in"></i
                                ></a>
                            </div>
                            <span>or use your email password</span>

                            <input   type="email" placeholder="Email" />
                            <div class="matkhau2">
                <input  
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter your password"
                />
                <i class="fa fa-eye show_2"></i>
            </div>
            
                            <a href="">Forget Your Password</a>
                            <button type="submit">Sign In</button>
                        </form>
                    </div>
                    <div class="toggle-container">
                        <div class="toggle-2">
                            <div class="toggle-panel toggle-left">
                                <h1>Welcome back</h1>
                                <button type="submit" class="hidden" id="login">
                                    Sign In
                                </button>
                            </div>
                            <div class="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <button type="submit" class="hidden" id="register">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>`;
button.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", template);
    const togglePasswordIcons = document.querySelectorAll(".show_2");

    togglePasswordIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            console.log("Toggle password icon clicked"); // Log để kiểm tra sự kiện click đã được kích hoạt

            const passwordInput = icon.previousElementSibling;

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    });
    const forms = document.querySelectorAll(".input-form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = this.elements["username"].value;
            if (!username) alert("Please enter your username");
        });
    });
});
// const modalClose = document.querySelector(".modal-close");

document.body.addEventListener("click", function (event) {
    const container_login = document.getElementById("container_login");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");
    registerBtn.addEventListener("click", () => {
        container_login.classList.add("active");
    });
    loginBtn.addEventListener("click", () => {
        container_login.classList.remove("active");
    });

    if (event.target.matches(".modal-close")) {
        const modal = event.target.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
    } else if (event.target.matches(".modal")) {
        event.target.parentNode.removeChild(event.target);
    }
});

const template2 = `<div class="modal-2">
<div class="container_login">
    <div class="modal-content">
        <i class="fa fa-times modal-close__2"></i>
        <div class="section-form__2">
            <form action="" >
                <h1>Sign in</h1>
                <div class="social-icons">
                    <a class="icon-4" href=""
                        ><i class="fa-brands fa-google-plus-g"></i
                    ></a>
                    <a class="icon-4" href=""
                        ><i class="fa-brands fa-facebook"></i
                    ></a>
                    <a class="icon-4" href=""
                        ><i class="fa-brands fa-github"></i
                    ></a>
                    <a class="icon-4" href=""
                        ><i class="fa-brands fa-linkedin-in"></i
                    ></a>
                </div>
                <span>or use your email password</span>

                <input   type="email" placeholder="Email" />
                <div class="matkhau">
                <input  
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter your password"
                />
                <i class="fa fa-eye show_2"></i>
            </div>  
                <a href="">Forget Your Password</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
</div>
</div>`;
const template3 = `<div class="modal-2">
<div class="container_login">
    <div class="modal-content">
        <i class="fa fa-times modal-close__2"></i>
        <div class="section-form__2">
            <form action="" >
                <h1>Sign up</h1>
                <div class="social-icons">
                    <a class="icon-4" href=""
                        ><i class="fa-brands fa-google-plus-g"></i
                    ></a>
                    <a class="icon-4" href=""
                        ><i class="fa-brands fa-facebook"></i
                    ></a>
                    <a class="icon-4" href=""
                        ><i class="fa-brands fa-github"></i
                    ></a>
                    <a class="icon-4" href=""
                        ><i class="fa-brands fa-linkedin-in"></i
                    ></a>
                </div>
                
                <input   type="text" placeholder="Your name" />
                <input   type="email" placeholder="Email" />
                <input   type="tel" placeholder="Your phone number">
                <div class="gender-selector">
                <label for="">Giới tính</label>
                <div class="gender-option">
                <input   type="radio" id="male" name="gender" value="male">
                <label for="male">Nam</label>
                </div>
                <div class="gender-option">
                <input   type="radio" id="female" name="gender" value="female">
                <label for="female">Nữ</label>
                </div>
                <div class="gender-option">
                <input   type="radio" id="other" name="gender" value="other">
                <label for="other">Khác</label>
                </div>
                </div>
           
                <div class="matkhau">
                <input  
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter your password"
                />
                <i class="fa fa-eye show_2"></i>
            </div>
            <div class="matkhau">
            <input  
                type="password"
                name="password"
                id=""
                placeholder="Enter your password"
            />
            <i class="fa fa-eye show_2"></i>
        </div>
                <a href="">Forget Your Password</a>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</div>
</div>`;

const show_login = document.querySelector(".caption8small3");
show_login.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", template2);
    const togglePasswordIcons = document.querySelectorAll(".show_2");
    togglePasswordIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            console.log("Toggle password icon clicked"); // Log để kiểm tra sự kiện click đã được kích hoạt

            const passwordInput = icon.previousElementSibling;

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    });
    const forms = document.querySelectorAll(".input-form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = this.elements["username"].value;
            if (!username) alert("Please enter your username");
        });
    });
});
const modalClose__2 = document.querySelector(".modal-close__2");

document.body.addEventListener("click", function (event) {
    if (
        event.target.matches(".modal-close__2") ||
        event.target.closest(".modal-close__2")
    ) {
        const modal2 = event.target.closest(".modal-2");
        if (modal2) {
            modal2.parentNode.removeChild(modal2);
        }
    } else if (event.target.matches(".modal-2")) {
        event.target.parentNode.removeChild(event.target);
    }
});
const caption8small3 = document.querySelector(".caption8small4");
caption8small3.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", template3);

    const togglePasswordIcons = document.querySelectorAll(".show_2");

    togglePasswordIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            console.log("Toggle password icon clicked"); // Log để kiểm tra sự kiện click đã được kích hoạt

            const passwordInput = icon.previousElementSibling;

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    });
    const forms = document.querySelectorAll(".input-form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = this.elements["username"].value;
            if (!username) alert("Please enter your username");
        });
    });
});
// const modalClose__2 = document.querySelector(".modal-close__2");

document.body.addEventListener("click", function (event) {
    if (
        event.target.matches(".modal-close__2") ||
        event.target.closest(".modal-close__2")
    ) {
        const modal2 = event.target.closest(".modal-2");
        if (modal2) {
            modal2.parentNode.removeChild(modal2);
        }
    } else if (event.target.matches(".modal-2")) {
        event.target.parentNode.removeChild(event.target);
    }
});
const forms = document.querySelectorAll(".input-form");

forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = this.elements["username"].value;
        if (!username) alert("Please enter your username");
    });
});


document.body.addEventListener("click", function (event) {
    const container_login = document.getElementById("container_login");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");
    registerBtn.addEventListener("click", () => {
        container_login.classList.add("active");
    });
    loginBtn.addEventListener("click", () => {
        container_login.classList.remove("active");
    });

    if (event.target.matches(".modal-close")) {
        const modal = event.target.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
    } else if (event.target.matches(".modal")) {
        event.target.parentNode.removeChild(event.target);
    }
});
