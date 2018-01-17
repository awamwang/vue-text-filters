import { XmlEntities, AllHtmlEntities } from 'html-entities'
var entities = new XmlEntities()
var allEntities = new AllHtmlEntities()
// https://www.npmjs.com/package/html-entities

export let entityEncode = (string) => {
  if (!string || !string.length) {
    return ''
  }
  
  return entities.encode(string)
}
export let entityDecode = (string) => {
  if (!string || !string.length) {
    return ''
  }
  
  return entities.decode(string)
}
export let allEntityEncode = (string) => {
  if (!string || !string.length) {
    return ''
  }
  
  return allEntities.encode(string)
}
export let allEntityDecode = (string) => {
  if (!string || !string.length) {
    return ''
  }
  
  return allEntities.decode(string)
}
export let safeAllEntityEncode = (string) => {
  if (!string || !string.length) {
    return ''
  }
  
  return allEntities.encode(allEntities.decode(string))
}
