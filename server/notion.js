export async function getBudget(_request, response) {
  const data = await notion.databases.query({
    database_id:'f8e266bfce99423c911fa98bdc28375a'
  })
  return response.json(data.results)
}

export async function getInstructions(response, notion) {
  const data = await notion.databases.query({
    database_id: '0029b10fe05d4d418a40d17413c64a2b'
  })
  return response.json(data.results)
}

export async function getInventory(response, notion) {
  const data = await notion.databases.query({
    database_id:'941d9c5044f04561beb0a8a62432543f'
  })
  return response.json(data.results)
}

export async function getLinks(response, notion) {
  const data = await notion.databases.query({
    database_id: 'a111eb6928cb4e5ca2df77d5088a13d3'
  })
  return response.json(data.results)
}

export async function getRecipes(response, notion) {
  const data = await notion.databases.query({
    database_id: '3d742e8af64e4cbba45119ab5517462a'
  })
  response.json(data.results)
}

export async function getReplenishables(response, notion) {
  const data = await notion.databases.query({
    database_id: '396a97f619874c90adec3e8dbee08a63'
  })
  return response.json(data.results)
}
