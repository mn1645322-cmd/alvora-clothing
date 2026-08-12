let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();
    alert("تمت إضافة المنتج إلى السلة 🛒");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {

    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    if (!cartItems || !cartTotal) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>السلة فارغة 🛒</p>";

    } else {

        cart.forEach(function(product, index) {

            total += product.price;

            const item = document.createElement("div");

            item.className = "cart-item";

            item.innerHTML = `
                <div>
                    <h3>${product.name}</h3>
                    <span>${product.price} جنيه</span>
                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${index})">
                    حذف
                </button>
            `;

            cartItems.appendChild(item);
        });
    }

    cartTotal.textContent = total + " جنيه";
}

function viewCart() {

    const cartSection = document.getElementById("cart-section");

    if (cartSection) {

        cartSection.scrollIntoView({
            behavior: "smooth"
        });

        updateCart();

    } else {

        alert("قسم السلة غير موجود في الصفحة.");
    }
}

updateCart();
