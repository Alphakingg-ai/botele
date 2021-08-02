console.log('bot.js aktif!')

const TeleBot = require('telebot')
const delay = require('delay')
const moment = require('moment-timezone')
const request = require('request')
const cheerio = require('cheerio')
const jam = moment().format('HH')

global.tokebot = '1220178612:AAGJDfCW53NuOLZ8pKOqhauzKXp5HSTE_WM'
global.ownerid = '1240615992'
global.zeksapi = 'apivinz'
global.vhtear = 'Jsieu8287362jshre82'

var ucapanWaktu = 'Selamat Pagi'
 if (jam >= '03' && jam <= '10') {
ucapanWaktu = 'Selamat Pagi'
 } else if (jam >= '10' && jam <= '13') {
ucapanWaktu = 'Selamat Siang'
 } else if (jam >= '13' && jam <= '18') {
ucapanWaktu = 'Selamat Sore'
 } else if (jam >= '18' && jam <= '23') {
ucapanWaktu = 'Selamat Malam'
 } else {
ucapanWaktu = 'Selamat Malam'
}
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const bot = new TeleBot({
    token: global.tokebot
})


bot.on(['/start'], async (msg) => {
    let replyMarkup = bot.keyboard([
        ['/menu', '/about'],
    ], {resize: true});

await bot.sendMessage(msg.chat.id, `Hai kak ${msg.from.username || msg.from.firstname}! 👋\nIni adalah Alphakingg Versi Telegram😄!\nGunakan Perintah /menu Untuk Menampilkan Perintah Yang Tersedia!`, 
{replyToMessage: msg.messageid})
return await bot.sendMessage(msg.chat.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup})
})


bot.on(['/menu'], async (msg) => {
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
 const daftarsaran = ["cuci tangan setelah berpergian", "hindari menyentuh area wajah", "hindari berjabat tangan", "selalu jaga jarak ya", "jaga kesehatan!", "selalu pakai masker!", "selalu menjaga jarak"];
  var acak = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}
    return bot.sendMessage
(msg.chat.id, `「 𝘼𝙡𝙥𝙝𝙖𝙠𝙞𝙣𝙜𝙜 𝘽𝙤𝙩 」

${ucapanWaktu} ${msg.from.username || msg.from.firstname}👋
Welcome To Alphakingg Bot!

❏ Nama : ${msg.from.username || msg.from.firstname}
❏ Tanggal : ${week}, ${calender}
❏ Weton : ${weton}
❏ Jam : ${moment().format('HH:mm')} WIB

➸ /brainly [query]
➸ /tts [teks]
➸ /ttp [teks]
➸ /nulis [teks]
➸ /shortlink [url]
➸ /rangkum [teks]
➸ /map [lokasi]
➸ /covid
➸ /truth
➸ /dare
➸ /about
➸ /donasi

  「 Covid-19 Info 」
➸ Negara: Indonesia
➸ Positif: ${postf}
➸ Meninggal: ${mnggl}
➸ Sembuh: ${smbuh}
➸ Update: ${updt}
${acak(daftarsaran)} ☺️
`)
})
})

bot.on('/about', msg => {
    return bot.sendMessage(msg.chat.id, 'Hai Semua Perkenalkan Namaku Adalah Alphakingg Bot👋\nAku Diprogram Dengan Bahasa Pemrograman Javascript!!\nDan Aku Dibuat Oleh Kak @theodorickalfa09')
    })
    
bot.on('/donasi', async (msg) => {
    return bot.sendMessage(msg.chat.id, `اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]

Pulsa Indosat : 0857-4665-7092
Pulsa Smartfren : 0881-02698-2288
Dana : 0857-4665-7092
Gopay : 0857-4665-7092
Saweria : https://saweria.co/Alphakingg`)
})

bot.on('/hide', msg => {
    return bot.sendMessage(
        msg.chat.id, 'Gunakan /show untuk menampilkan keyboard!', {replyMarkup: 'hide',replyToMessage: msg.message_id})
})

bot.on('/sticker', msg => {
    return bot.sendSticker(msg.chat.id, 'ttp.png')
})

bot.on('/show', msg => {
    let replyMarkup = bot.keyboard([
        ['/menu','/about'],
    ], {resize: true});
    return bot.sendMessage(msg.chat.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup,replyToMessage: msg.message_id})
})

require("./brainly.js")(bot)
require("./tts.js")(bot)
require("./ttp.js")(bot)
require("./map.js")(bot)
require("./nulis.js")(bot)
require("./monitoring.js")(bot)
require("./tod.js")(bot)
require("./shortlink.js")(bot)
require("./rangkum.js")(bot)
require("./kopid.js")(bot)

bot.start()