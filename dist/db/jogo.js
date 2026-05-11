"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const JogoSchema = new mongoose_1.default.Schema({
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
});
exports.JogoModel = mongoose_1.default.model("Jogo", JogoSchema);
//# sourceMappingURL=jogo.js.map