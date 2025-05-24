function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}

Product.prototype.display = function () {
  return `Name: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
};

function ProductManager() {
  this.products = [];
}

ProductManager.prototype.addProduct = function () {
  const name = prompt("Enter product name:");
  const price = parseFloat(prompt("Enter product price:"));
  const category = prompt("Enter product category:");

  if (name && !isNaN(price) && category) {
    const newProduct = new Product(name, price, category);
    this.products.push(newProduct);
    alert("Product added successfully.");
  } else {
    alert("Invalid product information.");
  }
};

ProductManager.prototype.showProducts = function () {
  if (this.products.length === 0) {
    alert("No products available.");
    return;
  }

  let list = "Products List:\n";
  this.products.forEach((product, index) => {
    list += `${index + 1}. ${product.display()}\n`;
  });
  alert(list);
};

ProductManager.prototype.editProduct = function () {
  this.showProducts();
  const index = parseInt(prompt("Enter product number to edit:")) - 1;

  if (index >= 0 && index < this.products.length) {
    const newName = prompt("Enter new name:");
    const newPrice = parseFloat(prompt("Enter new price:"));
    const newCategory = prompt("Enter new category:");

    if (newName && !isNaN(newPrice) && newCategory) {
      this.products[index].name = newName;
      this.products[index].price = newPrice;
      this.products[index].category = newCategory;
      alert("Product updated.");
    } else {
      alert("Invalid input.");
    }
  } else {
    alert("Invalid product number.");
  }
};

ProductManager.prototype.deleteProduct = function () {
  this.showProducts();
  const index = parseInt(prompt("Enter product number to delete:")) - 1;

  if (index >= 0 && index < this.products.length) {
    this.products.splice(index, 1);
    alert("Product deleted.");
  } else {
    alert("Invalid product number.");
  }
};

function runProductApp() {
  const manager = new ProductManager();
  let choice;

  do {
    choice = prompt(
      "Product Management System\n" +
      "1. Add Product\n" +
      "2. View Products\n" +
      "3. Edit Product\n" +
      "4. Delete Product\n" +
      "5. Exit\n" +
      "Enter your choice:"
    );

    switch (choice) {
      case "1":
        manager.addProduct();
        break;
      case "2":
        manager.showProducts();
        break;
      case "3":
        manager.editProduct();
        break;
      case "4":
        manager.deleteProduct();
        break;
      case "5":
        alert("Exiting system.");
        break;
      default:
        alert("Invalid option.");
    }
  } while (choice !== "5");
}

runProductApp();
