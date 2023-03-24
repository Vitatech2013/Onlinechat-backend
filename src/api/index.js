import { Router } from 'express'
 import admin from './Admin'
import user from './User'




const router = new Router()

router.use('/user', user)
router.use('/admin', admin)
export default router
