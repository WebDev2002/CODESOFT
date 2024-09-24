import { Router } from "express";
import { signUp } from '../controllers/user.controller.js'
import { signIn } from "../controllers/user.controller.js";
import { logOut } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/signup").post(
    signUp
)
router.route("/signin").post(
    signIn
)

router.route("/logout").post(
   auth,logOut
)

export default router