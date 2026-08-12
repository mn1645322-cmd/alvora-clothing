document.getElementById("checkout-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const notes = document.getElementById("notes").value.trim();

    const cart = JSON.parse(localStorage.getItem("alvoraCart")) || [];

    if (cart.length === 0) {
        alert("السلة فارغة، أضيفي منتج أولًا ❤️");
        return;
    }

    const total = cart.reduce((sum, item) => {
        return sum + Number(item.price);
    }, 0);

    const order = {
        customer: {
            name: name,
            phone: phone,
            address: address,
            notes: notes
        },
        products: cart,
        total: total,
        date: new Date().toLocaleString("ar-EG")
    };

    localStorage.setItem(
        "alvoraOrder",
        JSON.stringify(order)
    );

    alert("تم تسجيل الطلب بنجاح ❤️");

    window.location.href = "index.html";
});
