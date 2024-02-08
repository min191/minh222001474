var cart = JSON.parse(localStorage.getItem("cart"));
if (cart != null) {
  var gioHang = cart;
} else {
  var gioHang = [];
}

let btn = document.querySelectorAll(".product-item");
// console.log(btn);

btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    {
      var btnItem = event.target;
      var product = btnItem.parentElement;
      var productImg = product.querySelector("img").src;
      var productName = product.querySelector("H3").innerText;
      var productPrice = product.querySelector("P").innerText;
      addcart(productImg, productName, productPrice);
    }
  });
});

//  thêm sảm phẩm vào giỏ hàng

function addcart(productImg, productName, productPrice) {
  var addtr = document.createElement("tr");
  var cartItem=document.querySelectorAll("tbody tr")
  for (var i=0;i<cartItem.length;i++){
      var productT=document.querySelectorAll(".title")
      if(productT[i].innerHTML==productName){
          alert("Sảm phẩm đã có trong giỏ hàng")
          return;
      }
  }

  var trcontent = `<tr class="text-center border-bottom">
         <td class=" py-2"><img src="${productImg}" alt="" width="70" height="70"></td>
         <td  class="px-3"> <span class="title fs-6">${productName}</span></td>
         <td  class="px-4"><p><span class="prices" >${productPrice}</span><sup>đ</sup></p> </td>
         <td  class=""><input class="w-50 text-center addSl" type="number" value="1" min="1"></td>
         <td  class="" style="cursor: pointer" ><small class="cartdelete">Xóa</small></td>
     </tr>`;
  addtr.innerHTML = trcontent;
  var cartTable = document.querySelector("tbody");
  // console.log(cartTable)
  cartTable.append(addtr);
  carttotal();
  deletecart();
  var SL = 1;
  var Sp = {
    hinh: productImg,
    ten: productName,
    gia: productPrice,
    soluong: SL,
  };
  gioHang.push(Sp);
  // đẩy giỏ hàng lên local
  localStorage.setItem("cart", JSON.stringify(gioHang));
  // lấy về để show sl sp trong cart
  loadSlsp();
  loaddatacart();
}

function loaddatacart() {
  loadSlsp();
  showcart();
  carttotal();
  deletecart();
}
function showcart() {
  var cart = JSON.parse(localStorage.getItem("cart"));

  if (cart != null) {
    var kq = "";

    for (let i = 0; i < cart.length; i++) {
      // var thanhTien=parseInt(cart[i]["gia"]*cart[i]["soluong"]);
      kq +=
        `<tr class="text-center border-bottom">
                <td class=" py-2"><img src="` +
        cart[i]["hinh"] +
        `" alt="" width="100" height="100"></td>
                <td  class="px-3"> <span class="title fs-6">` +
        cart[i]["ten"] +
        `</span></td>
                <td  class="px-4"><p><span class="prices" >` +
        cart[i]["gia"] +
        `</span><sup>đ</sup></p> </td>
                <td  class=""><input class="w-50 text-center addSl" type="number" value="1" min="1"></td>
                <td  class="" style="cursor: pointer" ><small class="cartdelete">Xóa</small></td>
             </tr>`;
    }
    document.getElementById("showTrangcart").innerHTML = kq;
  }
}

function loadSlsp() {
  var cart = JSON.parse(localStorage.getItem("cart"));

  if (cart != null) {
    document.getElementById("cart-Sl").innerHTML = cart.length;
  }
}
function delcart() {
  localStorage.removeItem("cart");
  window.location = "home.html";
}

// cộng tiền sản phẩm đã chọn
function carttotal() {
  var cartItem = document.querySelectorAll("tbody tr");
  totalC = 0;
  // console.log(cartItem)
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input").value;
    var productPrice = cartItem[i].querySelector(".prices").innerHTML;
    // console.log(inputValue)
    // console.log(productPrice)
    totalA = inputValue * parseInt(productPrice) * 1000;
    totalC = totalC + totalA;
    // console.log(totalC)
  }
  var carttotalD = document.querySelector(".price-total span");
  carttotalD.innerHTML = totalC.toLocaleString("de-DE");
  inputchange();
}

// xóa sản phẩm trong giỏ hàng
function deletecart() {
  var cartItem = document.querySelectorAll("tbody tr");
  // console.log(cartItem)
  for (var i = 0; i < cartItem.length; i++) {
    var productdelete = document.querySelectorAll(".cartdelete");
    productdelete[i].addEventListener("click", function (event) {
      var cartDelete = event.target;
      var cartItemR = cartDelete.parentElement.parentElement;
      cartItemR.remove();
      carttotal();
    });
  }
}
// thay đổi value input đổi giá tiền
function inputchange() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input");
    inputValue.addEventListener("change", function () {
      carttotal();
    });
  }
}
