window.addEventListener('DOMContentLoaded', () => {
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open'),
        shop = document.querySelector('.shop');

    function createCard() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            empty = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');
        empty.classList.add('empty');

        heading.textContent = "In your cart:";
        empty.textContent = "Your cart is empty!";
        closeBtn.textContent = "Close";

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        field.appendChild(empty);
        cart.appendChild(closeBtn);
    }

    createCard();

    let field = document.querySelector('.cart-field'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');
    
    function openCart() {
        cart.style.display = 'block';
    }
    function closeCart() {
        cart.style.display = 'none';
    }

    openBtn.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

    function checkCartEmpty() {
        const emptyMessage = document.querySelector('.empty');
        const cartItems = field.querySelectorAll('.product');

        if (cartItems.length > 0) {
            emptyMessage.style.display = 'none';
        } else {
            emptyMessage.style.display = 'block';
        }
    };

    buttons.forEach((item, i) => {
        item.addEventListener('click', () => {
            let item = products[i].cloneNode(true),
                btn = item.querySelector('button');
            
            btn.remove();

            let removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove from cart";
            removeBtn.className = "remove";

            item.appendChild(removeBtn);

            field.appendChild(item);
            products[i].remove();

            checkCartEmpty();
        });
    })

    field.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove')) {
            let product = e.target.parentElement;
            e.target.remove();

            let addBtn = document.createElement('button');
            addBtn.textContent = "Buy now!";
            product.appendChild(addBtn);

            shop.appendChild(product);

            
        }
    })
    
});