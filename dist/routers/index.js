"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const JogoController_1 = __importDefault(require("../controllers/JogoController"));
const router = express_1.default.Router();
router.post("/login", JogoController_1.default.createLogin);
router.get("/jogos", JogoController_1.default.getAllJogos);
router.get("/jogos/:id", JogoController_1.default.getJogo);
router.post("/jogos", JogoController_1.default.createJogo);
router.put("/jogos/:id", JogoController_1.default.updateJogo);
router.delete("/jogos/:id", JogoController_1.default.deleteJogo);
exports.default = router;
//# sourceMappingURL=index.js.map