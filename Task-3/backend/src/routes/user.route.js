import {Router} from 'express'
import {signUp} from '../controller/user.controller.js'
import {signIn} from '../controller/user.controller.js'
import {VerifyUser} from '../middleware/auth.middleware.js'
import {logOut} from '../controller/user.controller.js'

import {createBlog} from '../controller/blog.controller.js'
import {deleteBlog} from '../controller/blog.controller.js'
import {updateBlog} from '../controller/blog.controller.js'

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

router.route("/create").post(
VerifyUser, createBlog
)
router.route("/delete/:id").get(
VerifyUser, deleteBlog
)

router.route("/update/:id").post(
VerifyUser, updateBlog
)

export default router