document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const checkoutForm = document.getElementById('checkout-form');

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const product = button.getAttribute('data-product');
      const price = parseFloat(button.getAttribute('data-price'));
      cart.push({ product, price });
      updateCart();
    });
  });

  function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(li);
      total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
  }

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Order placed!\nName: ${name}\nAddress: ${address}\nTotal: $${cartTotal.textContent}`);
    cart.length = 0;
    updateCart();
    checkoutForm.reset();
  });
});
