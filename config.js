require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝑩𝑨𝑫𝑩𝑶𝑰-𝑽6"
global.dana = "083142515287"
global.qris = "https://i.imgur.com/q5CG43e.jpeg"


// GLOBAL SETTING
global.owner = "23481xxxxxxxx"
global.namabot = "*𝑩𝑨𝑫𝑩𝑶𝑰-𝑽6*"
global.nomorbot = "23481xxxxxxxx"
global.namacreator = "*𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈* ϟ"
global.linkyt = false
global.autoJoin = false
global.antilink = false
global.versisc = 'V6'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'plta_JGstZXVOB9lnibEyep1BwC9MSxPvAT5mFcbiEHLSHUv'
global.capikey = 'pltc_NLgcXEXYq3clwqgaetEPk97l26afklOhjh67sJQvQsF'
global.domain = 'https://'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.imgur.com/nOkcYbM.jpeg'
global.isLink = 'https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x'
global.packname = "𝑩𝑨𝑫𝑩𝑶𝑰-𝑽6"
global.author = "𝑩𝑨𝑫𝑩𝑶𝑰"
global.jumlah = "5"

//MESS
global.mess = {
    success: '✔ Done My gee! 😂',
    admin: '_*🤟This command can only be used by group admins or by 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝑰!*_',
    botAdmin: '_*💀This command can only be used when the bot is a group admin or by 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝑰!*_',
    OnlyOwner: '_*💀This command can only be used by the owner or by 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝑰!*_',
    OnlyGrup: '_*💀This command can only be used in group chats or by 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝑰!*_',
    private: '_This command can only be used in private chat or by 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝑰!*_',
    wait: '_*Please Wait, Your Request Is Being Proceed*_',
    notregist: '_*You are not yet registered in the bot database, please register first or meet KINGS DOMAIN!*_',
    premium: '_*Premium only! Buy Prem Chat Owner at +2348140825959 or type .owner*_',
    endLimit: '_*Your Daily Limit Has Expired!\nLimit Will Be Reset Every Time 00:00 WIB or By Buying Premium and Get Unlimited Limit\nBuy Prem? Chat +2348140825959*_',
    maintenance: '_*Sorry my gee, this feature is currently under construction*_',
    wait: 'Wait a minute, bro...',
    error: 'Wow, this is an error'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})