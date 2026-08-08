
let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCartCount();

    alert("تمت إضافة " + name + " إلى السلة 🛒");
}

function updateCartCount() {
    const count = document.getElementById("cart-count");

    if (count) {
        count.textContent = cart.length;
    }
}

function viewCart() {
    if (cart.length === 0) {
        alert("السلة فارغة 🛒");
        return;
    }

    let total = 0;
    let message = "🛒 منتجات السلة:\n\n";

    cart.forEach(function(product, index) {

        message +=
            (index + 1) +
            "- " +
            product.name +
            " - " +
            product.price +
            " جنيه\n";

        total += product.price;
    });

    message += "\n------------------\n";
    message += "الإجمالي: " + total + " جنيه";

    alert(message);
}

console.log("ALVORA Clothing جاهز للعمل");
