import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript', type: process.env.NODE_ENV || 'dev' })
})

app.use(route)

const port = 8080

app.listen(port, () => console.log(`Server running on port ${port}`))