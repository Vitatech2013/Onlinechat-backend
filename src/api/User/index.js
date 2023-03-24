import { Router } from 'express'

import {
  create,
  
  viewProfile,
  
  userLogins,
  showtopics,
  Showregs,
updateProfile,
Addcomment,
Showcomments,
Showchats,
Addchats,
forgotpassword,
} from './controller'


const router = new Router()

router.post('/', create)
router.post('/addcomments', Addcomment)
router.post('/addchat', Addchats)
router.get('/userlogin', userLogins)
router.get('/forgotpassword', forgotpassword)
router.get('/showUsers', Showregs)
router.get('/show', Showcomments)
router.get('/showchat', Showchats)
router.get('/viewprofile', viewProfile)

router.put('/updateprofile/:id', updateProfile)
router.get('/showtopic', showtopics)

export default router
