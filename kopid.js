console.log('kopid.js aktif!');
const TeleBot = require('telebot');
const request = require('request');
const cheerio = require('cheerio');
const daftarsaran = ["cuci tangan setelah berpergian", "hindari menyentuh area wajah", "hindari berjabat tangan", "selalu jaga jarak ya", "jaga kesehatan!", "selalu pakai masker!", "selalu menjaga jarak"];
 var acak = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(['/covid'], async (msg, args) => {
           request.get({
				headers: {'content-type' : 'application/x-www-form-urlencoded'},
			url: 'https://googleweblight.com/sp?u=https://covid19.go.id/&grqid=lut8uqiF&hl=id-ID',
			},function(error, response, body){
			let $ = cheerio.load(body);
			var y = $.html().split('Indonesia</')[1].split('margin-right:0px;color:#000;\">')[1];
			var x = y.split('</div><div style="background-color')[0];
			var postf = x.split('Positif<br>')[1].split('<br>')[0];
			var smbuh = x.split('Sembuh<br>')[1].split('<br>')[0];
			var mnggl = x.split('Meninggal<br>')[1].split('<br>')[0];
			var updt = y.split('Update Terakhir:')[1].split('</div><div style="padding-top:')[0].slice(1);
			cov = `Info Covid-19 Terbaru 🦠\n\nNegara: Indonesia\nPositif: ${postf}\nMeninggal: ${mnggl}\nSembuh: ${smbuh}\nUpdate Terakhir: ${updt}\n\nPesan dari kami:\n${acak(daftarsaran)}`
        return bot.sendMessage(msg.chat.id, cov, { replyToMessage: msg.message_id })
     })
  })
}