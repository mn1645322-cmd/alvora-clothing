let cart = [];

// إضافة منتج للسلة
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert("تمت إضافة المنتج إلى السلة 🛒");
}


// تحديث السلة
function updateCart() {

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}


// فتح السلة
function viewCart() {

    const cartSection = document.getElementById("cart-section");

    if (cartSection) {
        cartSection.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        alert("السلة فارغة حاليًا 🛒");
    }
}


// تشغيل السلة عند فتح الموقع
updateCart();
