const ordersList = document.getElementById("orders-list");

const order = JSON.parse(
    localStorage.getItem("alvoraOrder")
);


if (!order) {

    ordersList.innerHTML = `
        <div class="empty-orders">
            <h2>مفيش طلبات لسه 📦</h2>
            <p>لما العميل يعمل طلب، هيظهر هنا.</p>
        </div>
    `;

} else {

    let productsHTML = "";

    order.products.forEach(product => {

        productsHTML += `
            <div class="order-product">

                <strong>
                    ${product.name}
                </strong>

                <p>
                    اللون: ${product.color}
                </p>

                <p>
                    المقاس: ${product.size}
                </p>

                <p>
                    السعر: ${product.price} جنيه
                </p>

            </div>
        `;
    });


    ordersList.innerHTML = `

        <div class="order-card">

            <h2>طلب جديد 📦</h2>

            <hr>

            <h3>بيانات العميل</h3>

            <p>
                <strong>الاسم:</strong>
                ${order.customer.name}
            </p>

            <p>
                <strong>رقم الهاتف:</strong>
                ${order.customer.phone}
            </p>

            <p>
                <strong>العنوان:</strong>
                ${order.customer.address}
            </p>

            ${
                order.customer.notes
                ? `
                    <p>
                        <strong>ملاحظات:</strong>
                        ${order.customer.notes}
                    </p>
                `
                : ""
            }

            <hr>

            <h3>المنتجات</h3>

            ${productsHTML}

            <hr>

            <div class="order-total">

                <strong>الإجمالي:</strong>

                <strong>
                    ${order.total} جنيه
                </strong>

            </div>

            <p class="order-date">
                تاريخ الطلب:
                ${order.date}
            </p>

        </div>

    `;
}
