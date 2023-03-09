export function getHeadline(object: object) {
  if (object.properties.name.title.length === 0) return null
  return object.properties.name.title[0].text.content
}
