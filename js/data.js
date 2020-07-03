function cart(input) {
    var n = document.getElementsByClassName("quantity");
    var cartQuantity = parseInt(localStorage.getItem("cartQuantity"));

    //removes all negative cart possibilities
    if (input > 0) {
        localStorage.setItem("cartQuantity", ++cartQuantity);
        console.log(cartQuantity);

        var i;
        for (i = 0; i < n.length; i++) {
            n[i].innerHTML = localStorage.getItem("cartQuantity");
        }

        console.log("increasing cart");
    } else if (input < 0 && cartQuantity > 0) {
        localStorage.setItem("cartQuantity", --cartQuantity);
        console.log(cartQuantity);

        var i;
        for (i = 0; i < n.length; i++) {
            n[i].innerHTML = localStorage.getItem("cartQuantity");
        }

        console.log("decreasing cart");
    } else {
        console.log("quantity is 0");
    }
}

function loadJS() {
    var cartQuantity = parseInt(localStorage.getItem("cartQuantity"));
    var n = document.getElementsByClassName("quantity");

    if (!Number.isInteger(cartQuantity)) {
        localStorage.setItem("cartQuantity", "0");
    }

    var i;
    for (i = 0; i < n.length; i++) {
        n[i].innerHTML = localStorage.getItem("cartQuantity");
    }
}