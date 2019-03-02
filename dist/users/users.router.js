"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
class UsersRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/users', (req, resp, nexe) => {
            return resp.json({
                message: 'users_router'
            });
        });
    }
}
exports.usersRouter = new UsersRouter();
