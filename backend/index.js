import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;
const prisma = new PrismaClient()

app.use(bodyParser.urlencoded({ extended:true }))

app.post("/create-product", async (req,res) => {
    const id = uuidv4();
    const name = req.body.name;
    const price = req.body.price;
    const brand = req.body.brand;
    const category = req.body.category;
    const color = req.body.color;
    const product = await prisma.Product.create({
        data: {id, name, price, brand, category, color}
    })
    res.send("berhasil cik")
})

app.get("/all-product", async (req,res) => {
    const product = await prisma.Product.findMany()
    res.json(product)
})

app.listen(port, () => {
    console.log(`Server run on port ${port}`)
})