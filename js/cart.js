import { createElement } from './dom.js';

export function createCard() {
    const cart = createElement('div', 'cart');
    const field = createElement('div', 'cart-field');
    const title = createElement('h2', '', 'In your cart: ');
    const empty = createElement('h2', 'empty', 'Your cart is empty!');
    const closeBtn = createElement('button', 'close', 'Close');

    document.body.appendChild(cart);
    cart.append(title, field, closeBtn);
    field.appendChild(empty);

    return {cart, field, closeBtn, empty}
}

export function showCart(cart) {
    cart.style.display = 'block'
}

export function hideCart(cart) {
    cart.style.display = 'none';
}

export function checkEmpty(field, emptyMessage) {
    const items = field.querySelectorAll('.product');
    emptyMessage.style.display = items.length > 0 ? 'none' : 'block';
}