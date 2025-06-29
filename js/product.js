import { checkEmpty } from './cart.js';

export function onShopClick(e, field, shop, emptyMessage) {
    if (e.target.classList.contains('buy')) {
        const product = e.target.closest('.product');
        e.target.remove();

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove';
        removeBtn.textContent = 'Remove';

        product.appendChild(removeBtn);
        field.appendChild(product);

        checkEmpty(field, emptyMessage);
    }
}

export function onCartClick(e, field, shop, emptyMessage) {
    if  (e.target.classList.contains('remove')) {
        const product = e.target.closest('.product');
        e.target.remove();

        const buyBtn = document.createElement('button');
        buyBtn.classList = 'buy';
        buyBtn.textContent = 'Buy now!';

        product.appendChild(buyBtn);
        shop.appendChild(product);

        checkEmpty(field, emptyMessage);
    }
}