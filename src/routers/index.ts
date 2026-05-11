import express from "express";
import JogoController from "../controllers/JogoController";
import UserController from "../controllers/UserController";

const router = express.Router();

router.post("/login", UserController.getUser);
router.get("/jogos", JogoController.getAllJogos);
router.get("/jogos/:id", JogoController.getJogo);
router.post("/jogos", JogoController.createJogo);
router.put("/jogos/:id", JogoController.updateJogo);
router.delete("/jogos/:id", JogoController.deleteJogo);

export default router;