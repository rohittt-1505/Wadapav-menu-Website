let cart = [];

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.card');
        const productName = card.querySelector('h3').textContent;
        const price = parseInt(card.querySelector('p').textContent.replace('₹', ''));

        // Add product to cart
        cart.push({ name: productName, price: price });

        // Remove product from the card once added
        card.querySelector('.add-to-cart-btn').disabled = true;
        card.querySelector('.add-to-cart-btn').textContent = 'Added';

        // Update cart display
        updateCart();
    });
});

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalItems = document.getElementById('total-items');
    const totalPrice = document.getElementById('total-price');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    totalItems.textContent = cart.length;
    totalPrice.textContent = total;

    document.getElementById('floating-cart').style.display = cart.length ? 'block' : 'none';
}

// Show the floating cart when the user clicks on the cart icon
document.getElementById('cart-icon').addEventListener('click', function () {
    document.getElementById('floating-cart').classList.toggle('show');
});

// Toggle between day and night modes
function toggleMode() {
    const body = document.body;
    body.classList.toggle('day-mode');
    body.classList.toggle('night-mode');
}
