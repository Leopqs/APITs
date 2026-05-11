import express from 'express';
import { UserModel } from '../db/user';

class UserController {

    getUser = async (request: express.Request, response: express.Response) => {
            try{
                const {email, password} = request.body;
                const user = await UserModel.findOne({ email, password });
                return response.status(200).json({Id: user?.id});
            }catch (error){
                return response.sendStatus(400);
            }
        }

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
}

export default new UserController();