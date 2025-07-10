document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const nextButtons = document.querySelectorAll(".next-step");
    const cartItems = document.getElementById("cart_itens");
    const cartTotal = document.getElementById("cart_total");
    const cartData = {};
    let total = 0;
    let currentStep = 0;

    nextButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            steps[currentStep].classList.remove("active");
            currentStep = currentStep + 1;

            if (steps[currentStep]) {
                steps[currentStep].classList.add("active");
                updateCartUI();
            }
        });
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const item = button.parentElement;
            const name = item.getAttribute("data-name");
            const price = parseFloat(item.getAttribute("data-price"));
            const category = item.getAttribute("data-category");

            cartData[category] = { name, price };
            updateCartUI();
        });
    });

    function updateCartUI() {
        cartItems.innerHTML = "";
        total = 0;

        for (let [category, item] of Object.entries(cartData)) {
            total += item.price;
        }

        const step = steps[currentStep];
        if (step) {
            const visibleCategory = step.querySelector(".item")?.getAttribute("data-category");
            const visibleItem = cartData[visibleCategory];

            if (visibleItem) {
                const li = document.createElement("li");
                li.textContent = `${visibleCategory}: ${visibleItem.name} - R$ ${visibleItem.price.toFixed(2).replace('.', ',')}`;
                cartItems.appendChild(li);
            }
        }

        cartTotal.textContent = total.toFixed(2).replace('.', ',');
    }
});