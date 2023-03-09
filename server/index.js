import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from "dotenv"
import { Client } from "@notionhq/client"

import {
  getInstructions,
  getInventory,
  getLinks,
  getRecipes,
  getReplenishables
} from './notion.js'

const PORT = 3000

export const notion = new Client({ auth: process.ENV.NOTION_API })
export const app = express()

dotenv.config()

app.use(cors())
app.use(bodyParser.json())

app.set('trust proxy', true)
app.set('port', PORT)

app.get('/instructions', (_request, response) => getInstructions(response, notion))
app.get('/inventory',  (_request, response) => getInventory(response, notion))
app.get('/links',  (_request, response) => getLinks(response, notion))
app.get('/recipes',  (_request, response) => getRecipes(response, notion))
app.get('/replenishables',  (_request, response) => getReplenishables(response, notion))

app.listen(PORT, () => console.log("Server started"))
