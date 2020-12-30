import { Router } from "express";
import UserRouters from "./user";
import HealthRouters from "./health";
const router = Router();
// we will add routes to this default router in future

router.use("/", new UserRouters().routes);
router.use("/", new HealthRouters().routes);
export default router;
