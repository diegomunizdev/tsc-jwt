import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IPayload {
    _id: string;
    iat: number;
    exp: number;
}

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('access-token');
        if (!token) return res.status(401).json('Acesso negado!')

        const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'tokentest') as IPayload

        req.userId = payload._id

        next()
    } catch (error) {
        res.json('ERROR:' + error)
    }
}