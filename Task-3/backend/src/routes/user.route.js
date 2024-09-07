import {Router} from 'express'
import {signUp} from '../controller/user.controller.js'
import {signIn} from '../controller/user.controller.js'
import {VerifyUser} from '../middleware/auth.middleware.js'
import {logOut} from '../controller/user.controller.js'

const router = Router();


router.route("/signUp").post(
signUp
)
router.route("/signIn").post(
signIn
)

router.route("/logOut").post(
VerifyUser, logOut
)

export default router