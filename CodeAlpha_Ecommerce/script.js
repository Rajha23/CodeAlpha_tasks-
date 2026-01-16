let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

function loadCart() {
    let list = document.getElementById("cartItems");
    let total = 0;
    if (!list) return;

    list.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        list.appendChild(li);
        total += item.price;
    });
    document.getElementById("total").innerText = "Total: ₹" + total;
}

function placeOrder() {
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
    window.location.href = "index.html";
}

loadCart();
