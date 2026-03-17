/*
Campos:
    name
    description
    price
    stock
    imgUrl
*/ 

import {Schema, model} from "mongoose"

const pizzaSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    }
}, {
    timestamps: true,
    strict: false
})

export default model("pizzas", pizzaSchema)