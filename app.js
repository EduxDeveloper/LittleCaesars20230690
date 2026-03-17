import express from "express"
import pizzasRoutes from "../backend/src/routes/pizza.js"

//Crear una constante que es igual a
//la libreria express
const app = express();

//Para que la API acepte json de postman
app.use(express.json())

app.use("/api/pizzas", pizzasRoutes)


export default app;
