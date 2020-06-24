// var cat = document.getElementsByClassName("sub-nav-category");
// var i;

// for (i = 0; i < cat.length; i++) {
//     cat[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }

// var menu = document.getElementsByClassName("menu-icon")[0];
// var subnav = document.getElementsByClassName("mid-nav")[0];
// menu.addEventListener("click", function() {
//     if (subnav.style.display == "none") {
//         subnav.style.display = "block";
//     } else {
//         subnav.style.display = "none"
//         document.getElementsByClassName("sub-main-nav")[0].style.display = "none";
//     }
// });

// var products = document.getElementsByClassName("nav-item_products")[0];
// var product_categories = document.getElementsByClassName("sub-main-nav")[0];
// products.addEventListener("click", function() {
//     if (product_categories.style.display == "none") {
//         product_categories.style.display = "block";
//     } else {
//         product_categories.style.display = "none"
//     }
// });

function goToProducts() {
    window.location.href = "products.html";
}