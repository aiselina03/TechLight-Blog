import express from 'express'

import { storage } from '../Middleware/upload.js'
import multer from 'multer'
import { createBlog, deleteBlog, getAllBlog, getBlog, updateBlog } from '../Controller/BlogController.js'


const upload = multer({ storage: storage })
export const blogRouter = express.Router()

blogRouter.get('/', getAllBlog)
blogRouter.get('/:id', getBlog)
blogRouter.post('/', upload.single('image') ,  createBlog)
blogRouter.put('/:id',upload.single('image') ,  updateBlog)
blogRouter.delete('/:id', deleteBlog)