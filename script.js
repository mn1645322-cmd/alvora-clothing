
let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();
}

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>السلة فارغة</p>";

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

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}

function viewCart() {

    const cartSection = document.getElementById("cart-section");

    if (cartSection) {
        cartSection.scrollIntoView({
            behavior: "smooth"
        });
    }

    updateCart();
}

updateCart();
