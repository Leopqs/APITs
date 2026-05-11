"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const MONGO_URL = "mongodb://127.0.0.1:27017";
mongoose_1.default.connect(MONGO_URL, {
    dbName: "node-typescript-app",
})
    .then(() => {
    console.log("Banco de dados conectado. ");
})
    .catch((error) => console.log(error));
app.use("/", routers_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
//# sourceMappingURL=index.js.map