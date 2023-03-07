import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from "dotenv"

import initNotion, {
  getInventory,
  getInstructions,
  getPage,
  getRecipes,
  getReplenishables
} from './notion.js'

const PORT = 3000

export const app = express()

dotenv.config()
app.use(cors())
app.use(bodyParser.json())

app.set('port', PORT)
app.set('trust proxy', true) // Prevents CORS issue

initNotion()

// Endpoints
app.get('/inventory', getInventory)
app.get('/replenishables', getReplenishables)
app.get('/recipes', getRecipes)
app.get('/page', getPage)
app.get('/instructions', getInstructions)

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
