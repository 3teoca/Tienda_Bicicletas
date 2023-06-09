const express = require ("express")
const mainRouter = express.Router()

const mainController = require ("../controllers/mainController.js")

mainRouter.get ("/", mainController.home);

mainRouter.get ("/contacto", mainController.contacto);

mainRouter.get ("/accesorios", mainController.accesorios);

mainRouter.get ("/indumentaria", mainController.indumentaria);

mainRouter.get ("/terminos", mainController.terminos);

mainRouter.get ("/politicas", mainController.politicas);

mainRouter.get ("/copy", mainController.copy);

mainRouter.get ("/rental", mainController.rental);

mainRouter.get ("/carro", mainController.carro);

mainRouter.get ("/tours", mainController.tours);

module.exports = mainRouter 