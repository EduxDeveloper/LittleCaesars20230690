//#1 crear un array de funciones vacio
const employeesController = {};

//#2 importar el Schema de la coleccion a ocupar
import employeesModel from "../models/employees.js"

//#3 crear las funciones del CRUD

//SELECT
employeesController.getEmployees = async (req, res) => {
    
    try {
    
    const employees = await employeesModel.find();
    return res.status(200).json(employees)

    } catch (error) {
        console.log("error:"+ error)
        return res.status(500).json({message: "Error al obtener los empleados, Internal Server Error", error: error.message})
    }
}

//INSERT
employeesController.postEmployees = async (req, res) =>{

    try {

    let {name, lastName, DUI, birthday, email, password, isVerified, status, idBranches} = req.body;
        
    //Eliminar espacios en blanco al inicio y al final de los campos de texto
    name = name?.trim();
    lastName = lastName?.trim();
    DUI = DUI?.trim();
    email = email?.trim();
    password = password?.trim();

    //campos obligatorios
    if (!name || !email || !password) {
        return res.status(400).json({message: "Todos los campos son obligatorios"})
    }

    //Longitud de los campos

    if (name.length < 3 || name.length > 20) {
        return res.status(400).json({message: "El nombre no puede tener más de 20 caracteres"})
    }

    //Validacion de la fecha de nacimiento
    if (birthday > new Date.now() || birthday < new Date("1918-01-01")) {
        return res.status(400).json({message: "Fecha inválida"})
    }

    //Validacion del DUI
    if(DUI.length > 10 || DUI.length < 9){
        return res.status(400).json({message: "DUI inválido"})
    }



    const newEmployee = new employeesModel({name, lastName, DUI, birthday, email, password, isVerified, status, idBranches});
    await newEmployee.save();
    return res.status(201).json({message: "Empleado guardado correctamente"});
    } catch (error) {

        console.log("error:"+ error)
        return res.status(500).json({message: "Error al guardar el empleado, Internal Server Error", error: error.message})
    }
}


//UPDATE
employeesController.putEmployee = async (req, res) => {

    try {
        //Pedir los nuevos valores
        let {name, lastName, DUI, birthday, email, password, isVerified, status, idBranches} = req.body;
        
        //Eliminar espacios en blanco al inicio y al final de los campos de texto
        name = name?.trim();
        lastName = lastName?.trim();
        DUI = DUI?.trim();
        email = email?.trim();
        password = password?.trim();   

        //campos obligatorios
        if (!name || !email || !password) {
            return res.status(400).json({message: "Todos los campos son obligatorios"})
        }

        //Longitud de los campos
        if (name.length < 3 || name.length > 20) {
            return res.status(400).json({message: "El nombre no puede tener más de 20 caracteres"})
        }   

        //Validacion de la fecha de nacimiento
        if (birthday > new Date.now() || birthday < new Date("1918-01-01")) {
            return res.status(400).json({message: "Fecha inválida"})
        }

        //Validacion del DUI
        if(DUI.length > 10 || DUI.length < 9){
            return res.status(400).json({message: "DUI inválido"})
        }

        await employeesModel.findByIdAndUpdate(req.params.id, {
            name, lastName, DUI, birthday, email, password, isVerified, status, idBranches
        }, {new: true})
        return res.status(200).json({message : "Empleado actualizado correctamente"})

    } catch (error) {
        console.log("error:"+ error)
        return res.status(500).json({message: "Error al actualizar el empleado, Internal Server Error", error: error.message})
    }

}

//DELETE  
employeesController.deleteEmployee = async (req, res) =>{

    try {
        
        const deleteEmployee = await employeesModel.findByIdAndDelete(req.params.id)
        
        if (!deleteEmployee) {
            return res.status(404).json({message: "Empleado no encontrado"})
        }
        
        return res.status(200).json({message: "Empleado eliminado correctamente"})

    } catch (error) {
        console.log("error:"+ error)
        return res.status(500).json({message: "Error al eliminar el empleado, Internal Server Error", error: error.message})
    }

}

