// ALVORA Clothing

let cart = [];

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });

    alert(productName + " تمت إضافته إلى السلة");
}

function viewCart() {
    if (cart.length === 0) {
        alert("السلة فارغة");
        return;
    }

    let message = "المنتجات في السلة:\n\n";
    let total = 0;

    cart.forEach(function(item) {
        message += item.name + " - " + item.price + " جنيه\n";
        total += item.price;
    });

    message += "\nإجمالي السعر: " + total + " جنيه";

    alert(message);
}

console.log("ALVORA Website Ready");
