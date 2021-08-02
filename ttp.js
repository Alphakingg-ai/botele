console.log('ttp.js aktif!')
const TeleBot = require('telebot')
const delay = require('delay')
const axios = require('axios')
const imageToBase64 = require('image-to-base64');
const fs = require('fs')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
module.exports = bot => {
bot.on(/^\/ttp ([\s\S]+)/, async (msg, args) => {
    const arg = args.match[1]
    axios.get(`https://salism3api.pythonanywhere.com/text2img?text=${arg}`).then((res) => {
	imageToBase64(res.data.image)
	 .then(
	 (ress) => {
	 var buf = Buffer.from(ress, 'base64')
        bot.sendSticker(msg.chat.id, buf, {emoji: '😊'})
            })
        })
    })
      
}

