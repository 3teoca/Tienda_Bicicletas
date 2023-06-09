/* Paquetes */
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session =require("express-session");
const cors = require ("cors")

/* Funcionamiento EJS */
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

/* Middlewares globales */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: false
}))
app.use(cors())

/* Ruteadores */
const mainRouter = require("./routes/mainRoutes");
const productRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
//const routerProductosBicicleta = require("./router/productosBicicletas");
app.use("/", mainRouter);
app.use("/catalogo", productRouter);
app.use("/users", usersRouter);
//app.use("/productosBicicletas",routerProductosBicicleta);

/* Puerto para funcionamiento local */
const port = process.env.port || 3000;
app.listen(port, () => (
    console.log("Servidor escuchando en el puerto http://localhost:" + port)
));
