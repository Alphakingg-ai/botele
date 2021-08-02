console.log('map.js aktif!')
const TeleBot = require('telebot')
const delay = require('delay')
const imageToBase64 = require('image-to-base64');
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
module.exports = bot => {
bot.on(/^\/nulis ([\s\S]+)/, async (msg, args) => {
    const arg = args.match[1]
	imageToBase64(`https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=https://www.google.com/maps/place/${arg}&quality=100`)
	 .then(
	 (ress) => {
	 var buf = Buffer.from(ress, 'base64')
        bot.sendPhoto(msg.chat.id, buf, { caption: `Hasil Dari Pencarian ${arg}` })
        })
    })
}

