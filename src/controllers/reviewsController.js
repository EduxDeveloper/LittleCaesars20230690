const reviewsController = {};


import reviewsModel from "../models/reviews.js"

//SELECT
reviewsController.getReviews = async (req, res) => {
    
    try {
    
    const reviews = await reviewsModel.find();
    return res.status(200).json(reviews)

    } catch (error) {
        console.log("error:"+ error)
        return res.status(500).json({message: "Error al obtener las reseñas, Internal Server Error", error: error.message})
    }
}

//INSERT

reviewsController.postReviews = async (req, res) => {
    try {
        let {idEmployee, idPizza, rating, comment} = req.body;

        //quitar espacios en blanco al inicio y al final de los campos de texto
        comment = comment?.trim();

        //Campos obligatorios 
        if (!idEmployee || !idPizza || !rating || !comment) {
            return res.status(400).json({message: "Todos los campos son obligatorios"});
        }

        //Validacion de la calificacion
        if ( (Number(rating)) < 1 || (Number(rating)) > 5) {
            return res.status(400).json({message: "La calificación debe ser entre 1 y 5"});
        }

        const newReview = new reviewsModel({idEmployee, idPizza, rating, comment});
        await newReview.save();
        return res.status(201).json({message: "Reseña guardada correctamente"});
    } catch (error) {
        console.log("error:"+ error)
        return res.status(500).json({message: "Error al crear la reseña, Internal Server Error", error: error.message})
    }
}

//UPDATE

reviewsController.putReviews = async (req, res) => {
    try {
        
        //Pedir los nuevos valores
        let {idEmployee, idPizza, rating, comment} = req.body;

        //quitar espacios en blanco al inicio y al final de los campos de texto
        comment = comment?.trim();

        //Campos obligatorios 
        if (!idEmployee || !idPizza || !rating || !comment) {
            return res.status(400).json({message: "Todos los campos son obligatorios"});
        }

        //Validacion de la calificacion
        if ( (Number(rating)) < 1 || (Number(rating)) > 5) {
            return res.status(400).json({message: "La calificación debe ser entre 1 y 5"});
        }

        await reviewsModel.findByIdAndUpdate(req.params.id, {
            idEmployee, idPizza, rating, comment
        }, {new: true})
        return res.status(200).json({message : "Reseña actualizada correctamente"})

    } catch (error) {
        console.log("error:"+ error)
        return res.status(500).json({message: "Error al actualizar la reseña, Internal Server Error", error: error.message})
    }
}

//DELETE

reviewsController.deleteReviews = async (req, res) => {

    try {
        
        const deleteReviews = await reviewsModel.findByIdAndDelete(req.params.id)
                
                if (!deleteReviews) {
                    return res.status(404).json({message: "Reseña no encontrada"})
                }
                
                return res.status(200).json({message: "Reseña eliminada correctamente"})

    } catch (error) {
        console.log("error:"+ error)
        return res.status(500).json({message: "Error al eliminar la reseña, Internal Server Error", error: error.message})
    }

}

export default reviewsController;