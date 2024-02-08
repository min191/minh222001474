// function myD() {
//     var x = document.getElementById("menu");
//     if (x.style.visibility === "hidden") {
//       x.style.visibility = "visible";
//     } else {
//       x.style.visibility = "hidden";
//     }
//   }
//   function myX() {
//     var x = document.getElementById("menu");
//     if (x.style.visibility === "visible") {
//       x.style.visibility = "hidden";
//     } else {
//       x.style.visibility = "visible";
//     }
//   }
function myD() {
    var menumobi = document.getElementById("menumobi");
    menumobi.style.visibility = (menumobi.style.visibility === "hidden") ? "visible" : "hidden";
}

function myX() {
    var menumobi = document.getElementById("menumobi");
    menumobi.style.visibility = (menumobi.style.visibility === "visible") ? "hidden" : "visible";
}
