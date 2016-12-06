import WxEmotions from 'wechat-square-bracket-emotions'
var WE = new WxEmotions()

export let sbEmotions = (message) => {
  let newMessage = ''
  while (message) {
    if (WxEmotions.hasEmotionsPattern(message)) {
      let openIndex = message.indexOf('[')
      let closeIndex = message.indexOf(']')
      let diffIndex = closeIndex - openIndex
      let text = message.slice(0, openIndex)
      let emotionText = message.slice(openIndex + 1, closeIndex)
      let allText = message.slice(0, closeIndex + 1)
      let emotionImage = WE.textToImage(emotionText)

      if ((diffIndex > 1 && diffIndex <= 4) && emotionImage) {
        newMessage += text
        newMessage += `<span>${emotionImage}</span>`
      } else {
        newMessage += allText
      }

      message = message.substr(closeIndex + 1)
    } else {
      newMessage += message
      return newMessage
    }
  }
  return newMessage
}
