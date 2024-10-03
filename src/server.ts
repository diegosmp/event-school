import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ message: err.message })
  }

  return res.status(500).json({ error: 'Error internal server.' })
})

const PORT = process.env.PORT || 3334
app.listen(PORT, () => console.log(`Server open http://localhost:${PORT}`))
