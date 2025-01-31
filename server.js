// filepath: /C:/main/PROJECT2/server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001; // Change the port to 3001 or any other available port

app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    // Add product to your database or in-memory storage
    res.status(201).json(newProduct);
});

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});