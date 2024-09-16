import { Router } from "express";
import authHandler from "../middlewares/auth.js";
import { createTeam,deleteTeam ,joinTeam} from "../controllers/team.controllers.js";    
const router = Router();

router.route('/create').post(authHandler,createTeam)
router.route('/delete').delete(authHandler,deleteTeam)
router.route('/join').put(authHandler,joinTeam)



export default router