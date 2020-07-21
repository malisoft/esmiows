import { Request, Response, request } from "express"
import { Producto } from "../classes/Producto";
import { IProducto } from "../models/producto";
//import jwt from "jsonwebtoken"


let Product=new Producto();

export const Create = async (req: Request, res: Response) => {
    let { nombre, descripcion, stock, precio_venta, moneda } = req.body;

    //await Product.list(["Ropa"]);
    res.send("hola saludando");
}
export const List = async (req: Request, res: Response) => {
    let  preferences:string= req.query.preferences as string;
    
    let Result=await Product.getIndex(preferences);
    res.send(Result);
    /* let user: IProducto = new User({ username: req.body.username, email: req.body.email, password: req.body.password })
    user.password = await user.encryptPassword(user.password);
    const savedUser = await user.save();
    const token: string = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || "token_test")
    res.header('auth-token', token).json(savedUser); */
}
export const Update = async (req: Request, res: Response) => {
    res.send("hola saludando");
}
export const Delete = async (req: Request, res: Response) => {
    res.send("hola saludando");
}
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