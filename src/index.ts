import express from "express";
import mongoose from "mongoose";
import router from "./routers";
import { UserModel } from "./db/user";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URL = "mongodb+srv://Leopqs:<db_password>@baseapi.cb7guh8.mongodb.net/?appName=BaseAPI";

async function criarUserInicial() {
  const existe = await UserModel.countDocuments();

  if (existe === 0) {
    await UserModel.create({
      email: "usuario@esoft.com",
      password: "Abc123"
    });
    console.log("Usuário inicial criado");
  }
}

async function startServer() {
  try {
    if (!MONGO_URL) {
      throw new Error("Variável MONGO_URL não definida");
    }

    await mongoose.connect(MONGO_URL, {
      dbName: "node-typescript-app",
    });

    console.log("Banco de dados conectado.");

    await criarUserInicial();

    app.use("/", router);

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a API:", error);
  }
}

startServer();