import express from 'express'
import { Router } from 'express'
import clerkwebhooks from '../controllers/userController.js';
const UserRouter = Router();

UserRouter.post('/webhooks',clerkwebhooks);
export  default UserRouter;