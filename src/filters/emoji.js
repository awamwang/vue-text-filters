import emoji from 'emoji'

export let emojiSoftbankToUnified = (text) => {
  if (!text || !text.length) {
    return ''
  }

  return emoji.softbankToUnified(text)
}
export let emojiUnifiedToHTML = (text) => {
  if (!text || !text.length) {
    return ''
  }

  return emoji.unifiedToHTML(text)
}
export let emojiDocomoToUnified = (text) => {
  if (!text || !text.length) {
    return ''
  }

  return emoji.docomoToUnified(text)
}
export let emojiKddiToUnified = (text) => {
  if (!text || !text.length) {
    return ''
  }

  return emoji.kddiToUnified(text)
}
export let emojiGoogleToUnified = (text) => {
  if (!text || !text.length) {
    return ''
  }

  return emoji.googleToUnified(text)
}
