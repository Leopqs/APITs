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
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../db/user");
class UserController {
    constructor() {
        this.getUser = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = request.body;
                const user = yield user_1.UserModel.findOne({ email, password });
                return response.status(200).json({ Id: user === null || user === void 0 ? void 0 : user.id });
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
        this.createLogin = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = request.body;
                const user = new user_1.UserModel({
                    email,
                    password
                });
                yield user.save();
                return response.status(200).json({ Token: user._id });
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map