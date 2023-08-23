const products = document.querySelectorAll('.product');
const cart = document.getElementById('cart');

products.forEach(product => {
    const addToCartButton = product.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.replace('Preço: R$', ''));

        const cartItem = document.createElement('div');
        cartItem.innerHTML = `${productName} - R$${productPrice.toFixed(2)}`;
        cart.appendChild(cartItem);
    });
});
