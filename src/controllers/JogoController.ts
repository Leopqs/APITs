import express from 'express';
import { JogoModel} from '../db/jogo';
import { UserModel } from '../db/user';

class JogoController {

    createLogin = async (request: express.Request, response: express.Response) => {
        try{
            const {email, password} = request.body;
            const user = new UserModel({
                email,
                password
            });
            await user.save();
            return response.status(200).json({Token: user._id});
        }catch (error){
            return response.sendStatus(400);
        }
    }

    getAllJogos = async (request: express.Request, response: express.Response) => {
        try{
            const jogos = await JogoModel.find();
            return response.status(200).json({data: jogos});
        }catch (error){
            return response.sendStatus(400);
        }
    }

    getJogo = async (request: express.Request, response: express.Response) => {
        try{
            const {id} = request.params;
            const jogo = await JogoModel.findById(id);
            return response.status(200).json({data: jogo});
        }catch (error){
            return response.sendStatus(400);
        }
    }

    createJogo = async (request: express.Request, response: express.Response) => {
        try{
            const {nome, tipo, nota, review} = request.body;
            const jogo = new JogoModel({
                nome,
                tipo,
                nota,
                review
            });
            await jogo.save();
            return response.status(201).json({message: "Jogo criado", data: jogo});
        }catch (error){
            return response.sendStatus(400);
        }
    }

    updateJogo = async (request: express.Request, response: express.Response) => {
        try{
            const {id} = request.params;
            const {nome, tipo, nota, review} = request.body;
            const jogo = await JogoModel.findById(id);
            if(jogo){
                jogo.nome = nome;
                jogo.tipo = tipo;
                jogo.nota = nota;
                jogo.review = review;
                await jogo.save();
                return response.status(200).json({message: "Jogo atualizado", data: jogo});

            }
            return response.sendStatus(400);
        }catch (error){
            return response.sendStatus(400);
        }
    }

    deleteJogo = async (request: express.Request, response: express.Response) => {
        try{
            const {id} = request.params;
            await JogoModel.findByIdAndDelete({_id: id});
            return response.status(204);

        }catch (error){
            return response.sendStatus(400);
        }
    }
}

export default new JogoController();