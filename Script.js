document.getElementById('product-form').addEventListener('submit', async function(e) {
    
    e.preventDefault();

    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const barcode = document.getElementById('product-barcode').value;

    const product = {
        name,
        description,
        barcode
    };

    // Send data to backend (Node.js API)
    const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });

    const result = await response.json();

    if (response.ok) {
        console.log('Product added successfully!');
        displayProducts();
    } else {
        console.log('Error: ' + result);
    }
});


// // Fetch and display products
// async function displayProducts() {
//     const response = await fetch('http://localhost:5000/api/products');
//     const products = await response.json();

//     const productList = document.getElementById('product-list');
//     productList.innerHTML = '';

//     products.forEach(product => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${product.name} - ${product.description} (Barcode: ${product.barcode})`;
//         productList.appendChild(listItem);
//     });
// }

// // Load products when the page is loaded
// document.addEventListener('DOMContentLoaded', displayProducts);
