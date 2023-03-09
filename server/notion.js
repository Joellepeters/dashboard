import { Client } from "@notionhq/client"

let notion

export default function init() {
  notion = new Client({auth: process.env.NOTION_API})
}


/**
 * Databases (ids are safely public)
 */


// Budget - https://www.notion.so/joellepeters/f8e266bfce99423c911fa98bdc28375a

export async function getBudget(_request, response) {
  const data = await notion.databases.query({
    database_id:'f8e266bfce99423c911fa98bdc28375a'
  })
  return response.json(data.results)
}


// Inventory - https://www.notion.so/joellepeters/941d9c5044f04561beb0a8a62432543f

export async function getInventory(_request, response) {
  const data = await notion.databases.query({
    database_id:'941d9c5044f04561beb0a8a62432543f'
  })
  return response.json(data.results)
}


// Replenishables - https://www.notion.so/joellepeters/396a97f619874c90adec3e8dbee08a63

export async function getReplenishables(_request, response) {
  const data = await notion.databases.query({
    database_id: '396a97f619874c90adec3e8dbee08a63'
  })
  return response.json(data.results)
}


// Recipes - https://www.notion.so/joellepeters/3d742e8af64e4cbba45119ab5517462a

export async function getRecipes(_request, response) {
  const data = await notion.databases.query({
    database_id: '3d742e8af64e4cbba45119ab5517462a'
  })
  response.json(data.results)
}


// Instructions - https://www.notion.so/joellepeters/0029b10fe05d4d418a40d17413c64a2b

export async function getInstructions(_request, response) {
  const data = await notion.databases.query({
    database_id: '0029b10fe05d4d418a40d17413c64a2b'
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
