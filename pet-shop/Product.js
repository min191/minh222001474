let decreaseQuantityButtons = document.querySelectorAll(".decrease");

decreaseQuantityButtons.forEach((item) => {
  let parent = item.closest(".editQuantity");
  let input = parent.querySelector("input");

  item.addEventListener("click", function () {
    let currentQuantity = parseInt(input.value, 10);

    if (currentQuantity > 1) {
      input.value = currentQuantity - 1;
    }
  });
});

// Tương tự, viết cho chức năng tăng số lượng
let increaseQuantityButtons = document.querySelectorAll(".increase");

increaseQuantityButtons.forEach((item) => {
  let parent = item.closest(".editQuantity");
  let input = parent.querySelector("input");

  item.addEventListener("click", function () {
    let currentQuantity = parseInt(input.value, 10);
    input.value = currentQuantity + 1;
  });
});

let addItemsButtons = document.querySelectorAll(".addItems").forEach((item) => {
  //khi dùng forEach thì nó sẽ tìm được class 
  let parent = item.closest(".addCart");

  item.addEventListener("click", function() {
    // khi click vào add to cart
    // phần hình tròn đỏ ở thẻ span sẽ thay đôi giá trị từ 0 lên 1 
  })

  

})