import emoji from 'emoji'

export let emojiSoftbankToUnified = (text) => {
  return emoji.softbankToUnified(text)
}
export let emojiUnifiedToHTML = (text) => {
  return emoji.unifiedToHTML(text)
}
export let emojiDocomoToUnified = (text) => {
  return emoji.docomoToUnified(text)
}
export let emojiKddiToUnified = (text) => {
  return emoji.kddiToUnified(text)
}
export let emojiGoogleToUnified = (text) => {
  return emoji.googleToUnified(text)
}
