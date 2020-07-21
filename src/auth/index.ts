import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

interface IPayload{
    _id:string,
    iat:string,
    exp:string
}


export const userValidator = (req: Request, res: Response, next: NextFunction) => {   
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ message: "access denied" })
    try {
        const payload:IPayload = jwt.verify(token, process.env.TOKEN_SECRET || 'token_test') as IPayload
        req.userID=payload._id
        next() 
    } catch (error) {
        return res.status(404).json({ message: "Error de token ya expirado o invalido" })
    }
}