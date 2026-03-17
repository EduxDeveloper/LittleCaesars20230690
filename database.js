import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/PequenoCesarDB")

//Comprar que todo funcione
//Crear una constante que es igual a la conexion

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("DB is connected")
})

connection.once("close", ()=>{
    console.log("DB is disconnected")
})

connection.once("error", (error)=>{
    console.log("Error Found"+ error)
})

