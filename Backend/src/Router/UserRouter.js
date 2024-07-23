import express from 'express'
import { createUsers, deleteUser, getAllUsers, getUser, updateUsers } from '../Controller/UserController.js'


export const userRouter = express.Router()

userRouter.get('/',getAllUsers)
userRouter.get('/:id', getUser)
userRouter.post('/',  createUsers)
userRouter.put('/:id',   updateUsers)
userRouter.delete('/:id',   deleteUser) 