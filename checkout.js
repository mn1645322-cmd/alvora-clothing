document
    .getElementById("checkout-form")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const address =
            document.getElementById("address").value.trim();

        const notes =
            document.getElementById("notes").value.trim();

        const payment =
            document.querySelector(
                'input[name="payment"]:checked'
            ).value;


        const order = {
            name: name,
            phone: phone,
            address: address,
            notes: notes,
            payment: payment,
            date: new Date().toLocaleString("ar-EG")
        };


        localStorage.setItem(
            "alvoraOrder",
            JSON.stringify(order)
        );


        alert(
            "تم تسجيل بيانات طلبك بنجاح ❤️"
        );


        window.location.href = "index.html";

    });
