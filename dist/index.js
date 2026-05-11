"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routers_1 = __importDefault(require("./routers"));
const user_1 = require("./db/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3000;
const MONGO_URL = "mongodb+srv://Leopqs:<Pazin@2005>@baseapi.cb7guh8.mongodb.net/?appName=BaseAPI";
function criarUserInicial() {
    return __awaiter(this, void 0, void 0, function* () {
        const existe = yield user_1.UserModel.countDocuments();
        if (existe === 0) {
            yield user_1.UserModel.create({
                email: "usuario@esoft.com",
                password: "Abc123"
            });
            console.log("Usuário inicial criado");
        }
    });
}
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!MONGO_URL) {
                throw new Error("Variável MONGO_URL não definida");
            }
            yield mongoose_1.default.connect(MONGO_URL, {
                dbName: "node-typescript-app",
            });
            console.log("Banco de dados conectado.");
            yield criarUserInicial();
            app.use("/", routers_1.default);
            app.listen(PORT, () => {
                console.log(`Servidor rodando na porta ${PORT}`);
            });
        }
        catch (error) {
            console.error("Erro ao iniciar a API:", error);
        }
    });
}
startServer();
//# sourceMappingURL=index.js.map