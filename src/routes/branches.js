import express from "express";
import branchesController from "../controllers/branchesController.js";

//router() nos ayuda a colocar los métodos 
// que tendra el endpoint
const router = express.Router()

router.route("/")
.get(branchesController.getBranches)
.post(branchesController.postBranches)

router.route("/:id")
.put(branchesController.updateBranches)
.delete(branchesController.deleteBranches)

export default router