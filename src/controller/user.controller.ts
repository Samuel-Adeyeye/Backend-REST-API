import { Request, Response } from 'express';
import {createUser} from "../service/user.service"
import logger from '../utils/logger';
import { CreateUserInput } from '../schema/user.schema';
export const createUserHandler = async (req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response) => {
    try {
        const user = await createUser(req.body);
        return user;
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);

    }
}