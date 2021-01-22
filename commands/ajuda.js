const Discord = require('discord.js');
const config = require('../config.json');
const cores = require('../cores.json');
module.exports = async (client,msg) =>{
let embed = new Discord.MessageEmbed()
.setDescription(`**Comandos disponiveis**`)
.addField(`Moderação`, '`+hadm`', true)
.addField(`Utilidades`, '`+hutil`', true)
.addField(`Diversão`, '`+hdiv`', true)
.setFooter(`BOT em desenvolvimento, reporte os bugs para a gente!`)
.setColor(cores.AZUL.ESCURO);
await msg.reply(embed);
};