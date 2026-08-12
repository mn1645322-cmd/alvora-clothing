const products = [
    {
        name: "تيشيرت أسود",
        price: 399,
        category: "tshirt"
    },
    {
        name: "هودي شتوي",
        price: 699,
        category: "hoodie"
    },
    {
        name: "قميص كاجوال",
        price: 550,
        category: "shirt"
    },
    {
        name: "جاكيت شتوي",
        price: 1200,
        category: "jacket"
    },
    {
        name: "بنطلون كاجوال",
        price: 750,
        category: "pants"
    }
];

let cart = [];

const colors = ["أسود", "أبيض", "بيج", "بني", "رمادي"];
const sizes = ["S", "M", "L", "XL", "XXL"];

function displayProducts(list = products) {

    const grid = document.getElementById("products-grid");

    grid.innerHTML = "";

    list.forEach((product, index) => {

        grid.innerHTML += `
            <div class="product-card">

                <div class="product-image">
                    <span>ALVORA</span>
                </div>

                <div class="product-info">

                    <small>${product.category}</small>

                    <h3>${product.name}</h3>

                    <p class="price">
                        ${product.price} جنيه
                    </p>

                    <label>اللون</label>

                    <div class="color-options">

                        ${colors.map((color, colorIndex) => `
                            <button
                                class="color color-${colorIndex}"
                                data-color="${color}"
                                onclick="selectColor(this)">
                            </button>
                        `).join("")}

                    </div>

                    <p class="selected-color">
                        اللون: <span id="color-${index}">لم يتم الاختيار</span>
                    </p>

                    <label>المقاس</label>

                    <select id="size-${index}">
                        <option value="">اختاري المقاس</option>

                        ${sizes.map(size => `
                            <option value="${size}">
                                ${size}
                            </option>
                        `).join("")}

                    </select>

                    <button
                        class="add-to-cart"
                        onclick="addToCart(${index})">

                        أضيفي إلى السلة 🛒

                    </button>

                </div>

            </div>
        `;
    });
}


function selectColor(button) {

    const parent = button.parentElement;

    parent.querySelectorAll(".color").forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    const color = button.dataset.color;

    const colorText = parent.nextElementSibling.querySelector("span");

    colorText.textContent = color;
}


function addToCart(index) {

    const product = products[index];

    const card = document.querySelectorAll(".product-card")[index];

    const selectedColor =
        card.querySelector(".color.selected");

    const selectedSize =
        card.querySelector("select").value;

    if (!selectedColor) {
        alert("اختاري اللون أولًا ❤️");
        return;
    }

    if (!selectedSize) {
        alert("اختاري المقاس أولًا ❤️");
        return;
    }

    const color = selectedColor.dataset.color;

    cart.push({
        name: product.name,
        price: product.price,
        color: color,
        size: selectedSize
    });

    updateCart();

    alert("تمت إضافة المنتج للسلة 🛒");
}


function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");

    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>السلة فارغة 🛒</p>";

    } else {

        cart.forEach((item, index) => {

            total += item.price;

            cartItems.innerHTML += `
                <div class="cart-item">

                    <div>
                        <strong>${item.name}</strong>

                        <p>
                            اللون: ${item.color}
                            <br>
                            المقاس: ${item.size}
                        </p>

                        <span>
                            ${item.price} جنيه
                        </span>
                    </div>

                    <button
                        onclick="removeFromCart(${index})">

                        حذف

                    </button>

                </div>
            `;
        });
    }

    cartTotal.textContent =
        total + " جنيه";
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


function openCart() {

    document.getElementById("cart")
        .scrollIntoView({
            behavior: "smooth"
        });

    updateCart();
}


function filterProducts(category) {

    if (category === "all") {

        displayProducts(products);

    } else {

        const filtered =
            products.filter(product =>
                product.category === category
            );

        displayProducts(filtered);
    }
}


function checkout() {

    if (cart.length === 0) {

        alert("السلة فارغة ❤️");
        return;
    }

    alert(
        "تم تجهيز طلبك ❤️\nسننتقل للدفع قريبًا."
    );
}


displayProducts();
updateCart();
