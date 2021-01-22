const Discord = require("discord.js");
const config = require('../config.json');
const cores = require('../cores.json');

module.exports = async (client,msg) =>{
const onça = "https://mega.nz/file/t4M0QJDJ#FzKL-hbr6rn4E9chJGjwZIm6Dw_WD69hOsHa3iOKU5Q"
const lat  = "https://www44.zippyshare.com/v/ZUOpvQKP/file.html"
const samp = "https://files.sa-mp.com/sa-mp-0.3.7-R4-install.exe"

let linkembed = new Discord.MessageEmbed()
.setTitle('Link sem encurtator.')
.setDescription('Links do gta, ativador e laucher SAMP.')
.setColor(cores.ROXO.ESCURO)
.addField('Link do gta:', onça)
.addField('Ativador:', lat)
.addField('Samp Laucher(PC):', samp)
.addField('Ip la Catedral: ', config.Samp)
.setTimestamp();
msg.reply('**Mensagem criada com links, ela será apagada em 5 minutos para não poluir o chat.**',linkembed).then(msg => msg.delete({timeout : 300000}));
};