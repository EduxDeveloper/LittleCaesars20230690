import express from "express";
import pizzasController from "../controllers/pizzaController.js";

//router() nos ayuda a colocar los métodos 
// que tendra el endpoint
const router = express.Router()

router.route("/")
.get(pizzasController.getPizzas)
.post(pizzasController.postPizzas)

router.route("/:id")
.put(pizzasController.updatePizzas)
.delete(pizzasController.deletepPizzas)

export default router