document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.product');
  const cartItems = document.querySelector('.cart-items');
  const totalPriceElement = document.querySelector('.total-price');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const updateCart = () => {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
    totalPriceElement.textContent = `Total: $${total}`;
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  products.forEach((product) => {
    product.querySelector('.add-to-cart').addEventListener('click', () => {
      const id = product.getAttribute('data-id');
      const name = product.querySelector('h2').textContent;
      const price = parseFloat(
        product.querySelector('p').textContent.replace('Price: $', '')
      );
      const item = { id, name, price };
      cart.push(item);
      updateCart();
    });
  });

  updateCart(); // Load cart from localStorage when the page loads
});
