import { Request, Response} from 'express';
import { resourceLimits } from 'worker_threads';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Murilo Andrade', email: 'mandrade@gmail.com'}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Murilo Andrade', 
                email: 'mandrade@gmail.com'
            },
            message: { 
                subject: 'Seja bem-vindo', 
                body: 'Treinando typescript'
            }
        });

        return res.send();
    }
};
