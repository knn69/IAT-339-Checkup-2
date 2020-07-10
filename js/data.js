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

// concept and segments of code are sourced from Theo's personal portfolio
function quoteCarousel() {
    var quote = document.getElementById("quote");
    var author = document.getElementById("quote-author");

    var quotes = ['“They say their produce is fresh and damn right it is! I thought I was eating from my garden.”', '“Delivery times are quick and efficient, usually ahead of the predicted wait time.”', '“Ordered some groceries at 2 in the morning and received my order at noon that day. Yay! For same day express delivery.”'];
    var authors = ["- Karen Smith; Family of 5", "- Kevin Nyugen; University Roommate ", "- Morn Livaes; Single Bachelor"];

    var quoteIndex = 1;

    setInterval(function() {
        switch (quoteIndex) {
            case 0:
                quote.innerHTML = quotes[quoteIndex];
                author.innerHTML = authors[quoteIndex];
                quoteIndex = 1;
                break;

            case 1:
                quote.innerHTML = quotes[quoteIndex];
                author.innerHTML = authors[quoteIndex];
                quoteIndex = 2;
                break;

            case 2:
                quote.innerHTML = quotes[quoteIndex];
                author.innerHTML = authors[quoteIndex];
                quoteIndex = 0;
                break;
        }
    }, 5000)
}