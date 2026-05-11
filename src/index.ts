import express from "express";
import mongoose from "mongoose";
import router from "./routers";
import { UserModel } from "./db/user";

const app = express();
app.use(express.json());
app.use("/", router);

const PORT = Number(process.env.PORT) || 3000;
const MONGO_URL = process.env.MONGO_URL;

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

async function conectarBanco() {
  try {
    if (!MONGO_URL) {
      throw new Error("Variável MONGO_URL não definida");
    }

    await mongoose.connect(MONGO_URL, {
      dbName: "node-typescript-app",
    });

    console.log("Banco de dados conectado.");
    await criarUserInicial();
  } catch (error) {
    console.error("Erro ao conectar no banco:", error);
  }
}

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  conectarBanco();
});