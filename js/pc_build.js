document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const nextButtons = document.querySelectorAll(".step_buttons");
    const cartItems = document.getElementById("cart_itens");
    const cartTotal = document.getElementById("cart_total");
    const pixValue = document.getElementById("pix_value");
    const installmentValue = document.getElementById("installment");
    const cartData = {};
    let total = 0;
    let currentStep = 0;

    nextButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            steps[currentStep].classList.remove("active");

            currentStep++;

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

        for (let item of Object.values(cartData)) {
            total += item.price;
        }

        const step = steps[currentStep];
        if (step) {
            const visibleCategory = step.querySelector(".item")?.getAttribute("data-category");
            const visibleItem = cartData[visibleCategory];

            if (visibleItem) {
                const li = document.createElement("li");
                li.textContent = `${visibleCategory}: ${visibleItem.name}`;
                cartItems.appendChild(li);
            }
        }

        const totalPix = total * 0.85;
        const installment = total / 12;

        pixValue.textContent = `R$ ${totalPix.toFixed(2).replace('.', ',')}`;
        cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        installmentValue.textContent = `R$ ${installment.toFixed(2).replace('.', ',')}`;
    }
});
