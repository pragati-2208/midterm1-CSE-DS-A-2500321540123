
const express = require('express');
const app = express();

app.use(express.json());

// Temporary storage
let products = [];

// CREATE
app.post('/products', (req, res) => {
    products.push(req.body);
    res.send("Product Added");
});

// READ
app.get('/products', (req, res) => {
    res.json(products);
});

// UPDATE
app.put('/products/:id', (req, res) => {
    let id = req.params.id;

    let product = products.find(p => p.id == id);

    if (product) {
        product.name = req.body.name;
        product.price = req.body.price;
        product.category = req.body.category;

        res.send("Product Updated");
    } else {
        res.send("Product Not Found");
    }
});

// DELETE
app.delete('/products/:id', (req, res) => {
    products = products.filter(p => p.id != req.params.id);
    res.send("Product Deleted");
});

// Display HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/mt1.html');
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
