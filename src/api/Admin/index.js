import { Router } from 'express'

import {
  Addtopics,
  Showtopics,
  deletetopics,
  Showusers,
  updatetopics,
  adminlogin,
  addadmin,
  Showcomment,
  
  adminforgotpassword,
  updatePassword,

  
} from './controller'

const router = new Router()

router.post('/Addtopic',Addtopics)
router.post('/Addadmin',addadmin)
router.get('/showtopic', Showtopics)
router.get('/adminforgotpassword', adminforgotpassword)
router.get('/showuser', Showusers)
router.get('/showcomment', Showcomment)
router.get('/adminlogin', adminlogin)
router.delete('/topicdel/:id', deletetopics)
router.put('/topicupdate/:id',updatetopics)
router.put('/updatePassword/:id',updatePassword)
export default router
