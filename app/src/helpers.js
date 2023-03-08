export function getHeadline(item) {
  return item.properties.name.title[0].text.content
}

export function getImageUrl(item) {
  if (item.properties.image.files.length > 0)
    return item.properties.image.files[0].file.url
  else return null
}

export function getMultiSelectCategory(item) {
  if (item.properties.category.multi_select.length > 0)
    return item.properties.category.multi_select[0]
  else return null
}

export function getSummary(item) {
  if (item.properties.summary.rich_text.length > 0)
    return item.properties.summary.rich_text[0].text.content
  else return null
}
