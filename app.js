import express from "express"
import pizzasRoutes from "./src/routes/pizza.js"
import branchesRoutes from "./src/routes/branches.js"
import employeesRoutes from "./src/routes/employees.js"
//Crear una constante que es igual a
//la libreria express
const app = express();

//Para que la API acepte json de postman
app.use(express.json())

app.use("/api/pizzas", pizzasRoutes)
app.use("/api/branches", branchesRoutes)
app.use("/api/employee", employeesRoutes)
export default app;
