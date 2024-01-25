class CartApp extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="style/cart.css">
            <div class="cart-container">
                <h1>Shopping Cart</h1>
                <ul id="cart-list"></ul>
                <div id="total-price">Total: 0.0₮</div>
            </div>
        `;
        this.cartItems = [];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const cartList = this.shadowRoot.getElementById('cart-list');
        const totalPrice = this.shadowRoot.getElementById('total-price');
        cartList.innerHTML = '';
        this.cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}₮`;
            cartList.appendChild(li);
        });
        const total = this.calculateTotal();
        totalPrice.textContent = `Total: ${total.toFixed(2)}₮`;
    }

    addToCart(name, price) {
        this.cartItems.push({ name, price });
        this.render();
    }

    calculateTotal() {
        return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
}

customElements.define('cart-app', CartApp);
