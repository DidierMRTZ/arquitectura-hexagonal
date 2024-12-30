
import { NextFunction,Request, Response } from "express";
import { ServiceContainer } from "../../Shared/infrastructure/ServiceContainer";
import { UserNotFoundError } from "../domain/UserNotFound";




export class ExpressUserController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        const users = await ServiceContainer.user.getAll.run()
        return res.json(users).status(200)
    }

    async getOneByID(req: Request, res: Response, next: NextFunction) {
        // validar entradas
        try {
            const user = await ServiceContainer.user.getOneById.run(req.params.id)
            return res.json(user).status(200)
        } catch (error) {
            if (error instanceof UserNotFoundError) {
                return res.status(404).json({message: error.message})
            }

            throw error
        }
    }
    
    async create(req: Request<RequestBody>, res: Response, next: NextFunction) {
        const {id,name,email,createdAt} = req.body
        await ServiceContainer.user.create.run(id,name,email)
        return res.send().status(200)
    }

    async edit(req: Request<RequestBody>, res: Response, next: NextFunction) {
        const {id,name,email} = req.body
        await ServiceContainer.user.edit.run(id,name,email)
        return res.send().status(204)
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        await ServiceContainer.user.delete.run(req.params.id)
        return res.send().status(204)
    }
}

export interface RequestBody {
    body: {id: string,
        name: string,
        email: string,
        createdAt: string}

}


