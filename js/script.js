import { createCard, showCart, hideCart } from "./cart.js";
import { onShopClick, onCartClick } from "./product.js";

window.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.open');
    const shop = document.querySelector('.shop');

    const { cart, field, closeBtn, empty } = createCard();

    openBtn.addEventListener('click', () => showCart(cart));
    closeBtn.addEventListener('click', () => hideCart(cart));

    shop.addEventListener('click', (e) => onShopClick(e, field, shop, empty));
    field.addEventListener('click', (e) => onCartClick(e, field, shop, empty));
});