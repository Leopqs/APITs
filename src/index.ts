import express from "express";
import mongoose from "mongoose";
import router from "./routers";
import { UserModel } from "./db/user";

const app = express();
app.use(express.json());

const MONGO_URL = "mongodb://127.0.0.1:27017";
mongoose.connect(MONGO_URL, {
    dbName: "node-typescript-app",
})  
    .then(() => {
        console.log("Banco de dados conectado. ");
    })
    .catch((error) => console.log(error));

app.use("/", router);

async function criarUserInicial() {
  const existe = await UserModel.countDocuments();

  if (existe === 0) {
    await UserModel.create({ 
        "email": "usuario@esoft.com", 
        "password": "Abc123" 
    });
    console.log('Usuário inicial criado');
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});