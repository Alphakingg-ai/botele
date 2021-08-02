console.log('brainly.js aktif!');

const TeleBot = require('telebot');
const brainly = require('brainly-scraper');

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})


module.exports = bot => {
    bot.on(/^\/brainly ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
        try {
          brainly(arg).then(res => {
					teks = 'Brainly Search By Alphakingg Bpt'
					no = 0
					for (let data of res.data) {
						no += 1
						teks += `\n\n➸ Pertanyaan ${no}:\n${data.pertanyaan}\n➸ Jawaban ${no}:\n${data.jawaban[0].text}\n`
					}
					bot.sendMessage(msg.chat.id, teks)
                    })
                    } catch (e) {
            return bot.sendMessage(msg.chat.id, `ERROR | ${e}`)
        }
    
    
    })

}



