import express from 'express'
import { login, register } from '../Controller/AuthController.js'

export const authRouter=express.Router()

authRouter.post('/login', login)
authRouter.post('/register', register)