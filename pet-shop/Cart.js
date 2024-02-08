/*
// code này chưa tối ưu, khi thực hiện hành động add products
// querySelectorAll("class_name"): chọn tất cả
// forEach: vòng lặp - có thể viết deleteCart.forEach 
let deleteCart = document.querySelectorAll(".deleteCart").forEach((item) => {
  let parent = item.closest(".itemCart");

  //add sự kiện
  item.addEventListener("click", function () {
    //console.log("Click"); - F12, có chữ click thì chứng tỏ đã nhận sự kiện click khi nhấn vào trash
    // nếu dùng parent.innerHTML: chỉ xóa ngoài còn class vẫn còn
    // nên dùng parent.remove
    parent.remove();
  })


})

let decreaseQuantityButtons = document.querySelectorAll(".decrease");

decreaseQuantityButtons.forEach((item) => {
  // tim den class cha chua phan tu do
  let parent = item.closest(".editQuantity");
  let input = parent.querySelector("input");
  // tìm đến phần tử cha bao hết toàn bộ thẻ - chứa sản phẩm
  let person = item.closest(".itemCart")



  //add event click và lấy giá trị
  item.addEventListener("click", function () {
    // soluong sẽ lấy giá trị hiện tại của ô input đổi từ string sang int
    // parseInt: chuyen doi tu string sang int
    let currentQuantity = parseInt(input.value, 10);

    if (currentQuantity > 0) {
      input.value = currentQuantity - 1;
    }
    // Lấy giá trị đơn giá và chuyển đổi sang số nguyên
    let donGiaString = person.querySelector(".donGia").textContent;
    let donGia = parseInt(donGiaString);
    // Lấy giá trị tổng tiền và chuyển đổi sang số nguyên
    let tongTienString = person.querySelector(".tongTien");
    let tongTien = parseInt(tongTienString);
    tongTien = donGia * input.value
    tongTienString.innerHTML = tongTien

  });
});

// Tương tự, viết cho chức năng tăng số lượng
let increaseQuantityButtons = document.querySelectorAll(".increase");

increaseQuantityButtons.forEach((item) => {
  let parent = item.closest(".editQuantity");
  let input = parent.querySelector("input");
  let person = item.closest(".itemCart")

  item.addEventListener("click", function () {
    let currentQuantity = parseInt(input.value, 10);
    if (currentQuantity >= 0) {
      input.value = currentQuantity + 1;
    }


    let donGiaString = person.querySelector(".donGia").textContent;
    let donGia = parseInt(donGiaString);
    let tongTienString = person.querySelector(".tongTien");
    let tongTien = parseInt(tongTienString);
    tongTien = donGia * input.value
    tongTienString.innerHTML = tongTien

  });
});
*/

// Bước 1: tạo localStorage lưu trong trang chủ 4 sản phẩm ( id, title, price, image, quantity)
// Bước 2: tương tác đến class carts để viết sản phẩm
let carHTML = document.querySelector(".carts");
//console.log(carHTML);

let str = "";
let total = 0;

// tương tác đến chỗ tính tiền có id là showTotal ở file html
let showTotal = document.getElementById("showTotal")
let vat = document.getElementById("VAT")
let thanhToan = document.getElementById("thanhToan")

// tạo hàm duyệt qua các mảng có các key trong mảng tên carts in ra cartHTML
const arrCart = (array) => {
  let stt = 1
  array.map((value) => {
    // mang co gia tri tham so la value
    total += parseInt(value.price)
    //console.log(total);
    // cộng chuỗi
    str += `<tr class="itemCart" data-id="${value.id}">
    <th scope="row" class="align-middle">${stt}</th>
    <td class="d-flex align-items-center">
        <img src="${value.img}" alt="" width="100">
            <div class="ms-3">
                <div class="fw-bold fs-5">
                    <span>${value.title}</span>
                </div>
                <div>
                    ${value.desc}
                </div>
            </div>
    </td>
    <td class="align-middle">
        <div>
        <span>$</span><span class="donGia">${value.price}</span>
        </div>
    </td>
    <td class="align-middle">
        <div class="input-group justify-content-center editQuantity">
            <button class="btn btn-orange text-light decrease">-</button>
            <input type="text" class="w-25 text-center valueCart border-light" value="1">
            <button class="btn btn-orange text-light increase">+</button>
        </div>
    </td>
    <td class="align-middle">
        <div class="text-center">
        <span>$</span><span class="tongTien">${value.price * value.quantity}</span>
        </div>
    </td>
    <td class="align-middle text-center text-info deleteCart">
      <i class="fa-solid fa-trash"></i>
    </td>
  </tr>`
    carHTML.innerHTML = str;
    stt++;
  })
}

// lấy dữ liệu localStorage trả lại thành mảng qua lệnh parse
let cartsLocalStorage = JSON.parse(localStorage.getItem("carts"));
// gọi lại hàm truyền vào tham số mảng cartsLocalStorage
arrCart(cartsLocalStorage)
showTotal.innerHTML = total 
vat.innerHTML = total / 10;
thanhToan.innerHTML = total + total /10;

//delete
let deleteCart = document.querySelectorAll(".deleteCart")
deleteCart.forEach((value) => {
  //tìm phần tử cha bao của sp
  let parent = value.closest(".itemCart")
  //add event xóa click vào mảng
  value.addEventListener("click", function () {
    // truy cập đến phần tử có id cần xóa
    let id = parent.dataset.id;
    // tạo giỏ hàng mới để chứa sau khi xóa
    let newCarts = [];
    // kiểm tra id của sp cần xóa == id của cartsLocalStorage(value.id)
    cartsLocalStorage.map((value) => {
      id == value.id ? total -= value.price : newCarts.push(value)

    })

    let newCart = JSON.stringify(newCarts)
    localStorage.setItem("carts", newCart)
    window.location.reload();
  })
})

// giam so luong
let decreaseQuantityButtons = document.querySelectorAll(".decrease");

decreaseQuantityButtons.forEach((value) => {
  // tim den class cha chua phan tu do
  let parent = value.closest(".editQuantity");
  let input = parent.querySelector(".valueCart");
  // tìm đến phần tử cha bao hết toàn bộ thẻ - chứa sản phẩm
  let person = value.closest(".itemCart")
  //add event click và lấy giá trị
  value.addEventListener("click", function () {
    // soluong sẽ lấy giá trị hiện tại của ô input đổi từ string sang int
    // parseInt: chuyen doi tu string sang int
    let currentQuantity = parseInt(input.value);
    console.log(currentQuantity);
    let vat = document.getElementById("VAT")
    // Lấy giá trị đơn giá và chuyển đổi sang số nguyên
    let donGiaString = person.querySelector(".donGia").textContent;
    let donGia = parseInt(donGiaString);
    // Lấy giá trị tổng tiền và chuyển đổi sang số nguyên
    let tongTienString = person.querySelector(".tongTien");
    let tongTien = parseInt(tongTienString);

    if (currentQuantity > 0) {
      input.value = currentQuantity - 1;
      total -= donGia
      tongTien = donGia * input.value
      tongTienString.innerHTML =tongTien
      showTotal.innerHTML = total
      vat.innerHTML = total / 10
      thanhToan.innerHTML = total + total/10
    }
  });
});


let increaseQuantityButtons = document.querySelectorAll(".increase");

increaseQuantityButtons.forEach((value) => {
  let parent = value.closest(".editQuantity");
  let input = parent.querySelector(".valueCart");
  let person = value.closest(".itemCart")

  value.addEventListener("click", function () {
    let currentQuantity = parseInt(input.value);
    let donGiaString = person.querySelector(".donGia").textContent;
    let donGia = parseInt(donGiaString);
    let tongTienString = person.querySelector(".tongTien");
    let tongTien = parseInt(tongTienString);
    if (currentQuantity >= 0) {
      input.value = currentQuantity + 1;
      tongTien = donGia * input.value
      tongTienString.innerHTML = tongTien
      total += donGia 
      showTotal.innerHTML = total
      vat.innerHTML = total / 10
      thanhToan.innerHTML = total + total /10
    }

  });
});




