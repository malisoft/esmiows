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
exports.Delete = exports.Update = exports.List = exports.Create = void 0;
const Producto_1 = require("../classes/Producto");
//import jwt from "jsonwebtoken"
let Product = new Producto_1.Producto();
exports.Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { nombre, descripcion, stock, precio_venta, moneda } = req.body;
    //await Product.list(["Ropa"]);
    res.send("hola saludando");
});
exports.List = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let preferences = req.query.preferences;
    let Result = yield Product.getIndex(preferences);
    res.send(Result);
    /* let user: IProducto = new User({ username: req.body.username, email: req.body.email, password: req.body.password })
    user.password = await user.encryptPassword(user.password);
    const savedUser = await user.save();
    const token: string = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || "token_test")
    res.header('auth-token', token).json(savedUser); */
});
exports.Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("hola saludando");
});
exports.Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("hola saludando");
});
/*
export const Signinn = async (req: Request, res: Response) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: "error" })
    const validateResult: boolean = await user.validatePassword(req.body.password);
    if (!validateResult) return res.status(404).json({ message: "Invalid Password" })
    //I save in a variable constant the token to return in header response
    const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || "token_test", { expiresIn: 60 * 60 * 24 })//vencer dentro 1 dia
    //Sending the header auth-token slot with token and body the user with all variables
    res.header("auth-token", token).json(user)
}

export const Profile = async(req: Request, res: Response) => {
    let usuarioResponse:IUser = await User.findOne({_id:req.userID},{password:0}) as IUser;
    res.status(200).json(usuarioResponse);
} */ 
