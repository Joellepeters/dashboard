export function getRelation(propName: string, object: object) {
  return object.properties[propName].relation
}
