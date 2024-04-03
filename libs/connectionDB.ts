import mongoose, { Mongoose } from "mongoose";

export async function connectDB (){
    try {

        const dbURL = process.env.DB__URL;

        if (!dbURL) {
            throw new Error("La URL de la base de datos no está definida en las variables de entorno.");
        }

       await mongoose.connect(dbURL)
        console.log('Connected with mongoDB')
    } catch (error) {
        console.log(error)
    }
}