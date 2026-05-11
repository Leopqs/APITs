import express from "express";
import JogoController from "../controllers/JogoController";

const router = express.Router();

router.post("/login", JogoController.createLogin);
router.get("/jogos", JogoController.getAllJogos);
router.get("/jogos/:id", JogoController.getJogo);
router.post("/jogos", JogoController.createJogo);
router.put("/jogos/:id", JogoController.updateJogo);
router.delete("/jogos/:id", JogoController.deleteJogo);

export default router;