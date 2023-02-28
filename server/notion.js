import { Client } from "@notionhq/client"

let notion

export default function init() {
  notion = new Client({auth: process.env.NOTION_API})
}


// Replenishables

export async function getReplenishables(_request, response) {
  const data = await notion.databases.query({
    database_id: process.env.REPLENISHABLES_DB_ID
  })
  return response.json(data.results)
}


// Recipes

export async function getRecipes(_request, response) {
  const data = await notion.databases.query({
    database_id: process.env.RECIPES_DB_ID
  })
  response.json(data.results)
}


// Instructions

export async function getInstructions(_request, response) {
  const data = await notion.databases.query({
    database_id: process.env.INSTRUCTIONS_DB_ID
  })
  return response.json(data.results)
}


// Page

export async function getPage(_request, response) {
  const data = await notion.pages.retrieve({
    page_id: process.env.PAGE_TEST_ID
  })
  return response.json(data)
}
