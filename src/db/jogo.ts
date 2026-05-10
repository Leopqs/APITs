import mongoose from "mongoose";

const JogoSchema = new mongoose.Schema({
        nome: {
            type: String,
            required: true,
        },
        
        tipo: {
            type: String,
            required: true
        },

        nota: {
            type: Number,
            required: true,
        },

        review: {
            type: String,
            required: true
        }
    }
);

export const JogoModel = mongoose.model("Jogo", JogoSchema);