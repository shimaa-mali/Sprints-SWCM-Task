const shoppingCart = {
            cart: [],
            
            addItem: function(item) {
                const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
                
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                } else {
                    this.cart.push({...item});
                }
                this.updateCartDisplay();
            },
            
            removeItem: function(itemName) {
                const itemIndex = this.cart.findIndex(item => item.name === itemName);
                
                if (itemIndex === -1) {
                    alert('Item not found in cart');
                    return;
                }
                
                if (this.cart[itemIndex].quantity > 1) {
                    this.cart[itemIndex].quantity -= 1;
                } else {
                    this.cart.splice(itemIndex, 1);
                }
                this.updateCartDisplay();
            },
            
            printReceipt: function() {
                if (this.cart.length === 0) {
                    document.getElementById('receiptOutput').textContent = "Receipt:\nYour cart is empty";
                    return;
                }
                
                let receipt = "Receipt:\n";
                let total = 0;
                
                this.cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    receipt += `${item.name} x ${item.quantity} = $${itemTotal.toFixed(2)}\n`;
                    total += itemTotal;
                });
                
                receipt += "-------------------------\n";
                receipt += `Total: $${total.toFixed(2)}`;
                
                document.getElementById('receiptOutput').textContent = receipt;
            },
            
            updateCartDisplay: function() {
                const cartContents = document.getElementById('cartContents');
                
                if (this.cart.length === 0) {
                    cartContents.innerHTML = 'Your cart is empty';
                    return;
                }
                
                let html = '';
                this.cart.forEach(item => {
                    html += `
                        <div class="cart-item">
                            <span>${item.name}</span>
                            <span>$${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `;
                });
                
                cartContents.innerHTML = html;
            }
        };
        
        document.getElementById('addItemBtn').addEventListener('click', () => {
            const name = document.getElementById('itemName').value.trim();
            const price = parseFloat(document.getElementById('itemPrice').value);
            const quantity = parseInt(document.getElementById('itemQuantity').value) || 1;
            
            if (!name || isNaN(price)) {
                alert('Please enter valid item name and price');
                return;
            }
            
            shoppingCart.addItem({
                name: name,
                price: price,
                quantity: quantity
            });
            
            // Clear form
            document.getElementById('itemName').value = '';
            document.getElementById('itemPrice').value = '';
            document.getElementById('itemQuantity').value = '1';
        });
        
        document.getElementById('removeItemBtn').addEventListener('click', () => {
            const name = document.getElementById('removeItemName').value.trim();
            
            if (!name) {
                alert('Please enter an item name to remove');
                return;
            }
            
            shoppingCart.removeItem(name);
            document.getElementById('removeItemName').value = '';
        });
        
  
        document.getElementById('printReceiptBtn').addEventListener('click', () => {
            shoppingCart.printReceipt();
        });
        
     
        shoppingCart.updateCartDisplay();
        document.getElementById('printReceiptBtn').addEventListener('click', () => {
    shoppingCart.printReceipt();
});
shoppingCart.printReceipt();  