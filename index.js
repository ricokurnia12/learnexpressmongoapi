const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModels");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/allproducts", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {}
});

app.get("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.post("/addproduct", async (req, res) => {
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});
// update a product
app.put("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // cannot find a product
        if (!product) {
            return res
                .status(404)
                .json({ message: `can't find product with id: ${id}` });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// delete product
app.delete("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res
                .status(404)
                .json({ message: `can't find product with id: ${id}` });
        }

        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

mongoose
    .connect(
        "mongodb+srv://admin:12345@cluster0.bv7kbog.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(port, () => {
            console.log(`running on port ${port}`);
        });

        console.log("Connected ro mondodb!");
    })

    .catch((err) => console.log(err));
