const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'https://chat.whatsapp.com/IH4EE0WZw4qEfo1jXubfV4'
global.ig = '-'
global.thumb = fs.readFileSync("./data/image/thumb.jpg")
global.email = 'pah10117@gmail.com'
global.region = 'Indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'XdimsBOT'
global.domain = ''
global.apikey2 = '' // Isi Apikey Pltc Lu
global.capikey2 = ''
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.owner = ['6281299609670']

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'

global.botname = 'XdimsBOT'
global.packname = 'XdimsBOT'
global.author = `: XdimsBOT\nBot: 0812-9960-9670`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'XdimsBOT'
global.sp = '⭔'
global.anticall = true

global.mess = {
    success: 'Selesai 🫡',
    admin: '☘️ Fitur Khusus Admin Group !',
    botAdmin: '☘️ Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '🎁 Fitur Khusus Owner !',
    group: '☘️ Fitur Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '☘️ Fitur Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '☘️ Fitur Khusus Pengguna Nomor Bot !',
    wait: '☘️ *Dalam Proses*',
    endLimit: '☘️ Limit kamu Habis, Limit Akan Direset Setiap Jam 12 !\n\n☘️ *Premium Cuma 5K Permanen* 😋',
    error: '☘️ *Kayaknya Ada Error Nih*',
    prem: '☘️ Fitur Khusus Premium!\n\n☘️ Beli Premium Cuma 5K Permanen',
}

global.limitawal = {
    premium: 9999999999 ,
    free: 50
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})