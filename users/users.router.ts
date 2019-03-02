import { Router } from '../common/router'
import * as restify from 'restify'

class UsersRouter extends Router {
    applyRoutes(application: restify.Server) {
        application.get('/users', (req, resp, nexe) => {
            return resp.json({
                message: 'users_router'
            })
        })
    }
}

export const usersRouter = new UsersRouter()