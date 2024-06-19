document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addProductButton');
    const filter = document.getElementById('filterButton');
    const submitButton = document.getElementById('submitProductButton');
    const cancelButton = document.getElementById('cancelButton');
    const productList = document.querySelector('.product-list');
    const addForm = document.querySelector('.add-product-form');
    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');


    const products = [
        { name: 'Йогурт', price: 25 },
        { name: 'Joe Banks', price: 1702 },
        { name: 'Louis Marshall', price: 1425 },
        { name: 'Ronald Cooper', price: 1972 },
        { name: 'Ethan Brewer', price: 815 },
        { name: 'Steve Reid', price: 1302 },
        { name: 'Alex Lawson', price: 1015 },
        { name: 'Roy Garrett', price: 1678 },
        { name: 'George Garrett', price: 1145 },
        { name: 'Aaron Henderson', price: 874 },
        { name: 'Nicolas Rivera', price: 1878 },
        { name: 'Jerry Diaz', price: 750 },
        { name: 'Ronald Garrett', price: 1509 },
        { name: 'Charles Fuller', price: 304 },
        { name: 'Chris Wallace', price: 551 },
        { name: 'Will Brown', price: 844 },
        { name: 'Louis Owen', price: 1581 },
    ];

    function Products(productsToDisplay) {
        productList.innerHTML = ''; 
        productsToDisplay.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item'; 
            productItem.innerHTML = `<div>${product.name}</div><div>${product.price}$</div>`; 
            productList.append(productItem); 
        });
    }

    addButton.addEventListener('click', () => {
        addForm.style.display = 'block';
    });

    cancelButton.addEventListener('click', () => {
        addForm.style.display = 'none';
    });

    submitButton.addEventListener('click', () => {
        const name = productNameInput.value;
        const price = parseInt(productPriceInput.value, 10);
        if (name && !isNaN(price)) {
            products.push({ name, price });
            Products(products); 
            addForm.style.display = 'none';
        }
    });

    filter.addEventListener('click', () => {
        const minPrice = parseInt(minPriceInput.value, 10) || 0;
        const maxPrice = parseInt(maxPriceInput.value, 10) || Infinity;
        const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
        Products(filteredProducts); 
    });

    Products(products); 
});