/*#1. Creo un array de funciones vacio*/ 
const branchesController = {};

/*#2. Importo el Schema de la coleccion
a ocupar*/

import brachesModel from "../models/branches.js"

branchesController.getBranches = async (req, res) => {
    const branches = await brachesModel.find();
    res.json(branches)    
}

branchesController.postBranches = async (req, res) =>{
    const {name, address, schedule, isActive} = req.body;
    const newBranches = new brachesModel({name, address, schedule, isActive})
    await newBranches.save();

    res.json({message: "branches saved"})
}

branchesController.deleteBranches = async (req, res) =>{
    await brachesModel.findByIdAndDelete(req.params.id)
    res.json({message: "branches deleted"})
}

branchesController.updateBranches = async (req, res) => {
    //#1 Pido los nuevos valores
    const {name, address, schedule, isActive} = req.body
    //#2 actualizo los datos
    await brachesModel.findByIdAndUpdate(req.params.id,{
        name, address, schedule, isActive
    }, {new: true})
    res.json({message : "branches update"})   
};

export default branchesController;