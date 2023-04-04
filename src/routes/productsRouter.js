const express = require ("express")
const productRouter = express.Router()

const productController = require ("../controllers/productController.js")

productRouter.get ("/", productController.catalogo);
productRouter.get ("/detail/:id", productController.detail);

productRouter.get('/crearProducto', productController.create);
productRouter.post("/", productController.store)

module.exports = productRouter