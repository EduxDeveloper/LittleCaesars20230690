import {Schema, model, mongo} from "mongoose"

const reviewsSchema = new Schema({
    idEmployee: {
        type: mongo.ObjectId,
        ref: "employees"    
    },
    idPizza: {
        type: mongo.ObjectId,
        ref: "pizzas"
    },
    rating: {
        type: Number
    },
    comment: {
        type: String
    }
}, {
    timestamps: true,
    strict: false
})

export default model("reviews", reviewsSchema)