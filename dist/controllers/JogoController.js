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
const jogo_1 = require("../db/jogo");
const mongoose_1 = __importDefault(require("mongoose"));
class JogoController {
    constructor() {
        this.getAllJogos = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const jogos = yield jogo_1.JogoModel.find();
                return response.status(200).json({ data: jogos });
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
        this.getJogo = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const jogo = yield jogo_1.JogoModel.findById(id);
                return response.status(200).json({ data: jogo });
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
        this.createJogo = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, tipo, nota, review } = request.body;
                const jogo = new jogo_1.JogoModel({
                    nome,
                    tipo,
                    nota,
                    review
                });
                yield jogo.save();
                return response.status(201).json({ message: "Jogo criado", data: jogo });
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
        this.updateJogo = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const { nome, tipo, nota, review } = request.body;
                const jogo = yield jogo_1.JogoModel.findById(id);
                if (jogo) {
                    jogo.nome = nome;
                    jogo.tipo = tipo;
                    jogo.nota = nota;
                    jogo.review = review;
                    yield jogo.save();
                    return response.status(200).json({ message: "Jogo atualizado", data: jogo });
                }
                return response.sendStatus(400);
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
        this.deleteJogo = (request, response) => __awaiter(this, void 0, void 0, function* () {
            console.log("Estado do mongoose:", mongoose_1.default.connection.readyState);
            try {
                console.log("Estado do mongoose:", mongoose_1.default.connection.readyState);
                const { id } = request.params;
                yield jogo_1.JogoModel.findByIdAndDelete({ _id: id });
                console.log("Estado do mongoose:", mongoose_1.default.connection.readyState);
                return response.status(204);
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
    }
}
exports.default = new JogoController();
//# sourceMappingURL=JogoController.js.map