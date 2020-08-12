import { Request, Response } from 'express';
import User from '../models/user.data/user.model';
import jwt from 'jsonwebtoken';

export const signin = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        }).select('+password');

        if (!user) return res.status(400).json({ error: 'Invalid username or password' })
        const correctPassword: boolean = await user.validatePassword(req.body.password);
        if (!correctPassword) return res.status(400).json({ error: 'Invalid password' });
        const token: string = jwt.sign({ _id: user._id, type: user.type }, process.env.TOKEN_SECRET || 'tokentest', {
            expiresIn: 60 * 60 * 24
        })
        user ? user.password = undefined : ''
        res.header('access_token', token).json(user);
    } catch (error) {
        res.json(error)
    }
}