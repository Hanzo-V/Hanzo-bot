const config = require('../config.json');
const Discord = require('discord.js');
const cores = require('../cores.json');
module.exports = async (client, msg) =>{
const DISPO = new Discord.MessageEmbed()
.setTitle('```UTIL```')
.setDescription(`
${config.prefix}links : ***Obtenha uma lista de links com gta, samp, ativador.***
${config.prefix}ping :  ***Verifica a latência do servidor e da API.***
${config.prefix}userinfo : ***Veja as informações do usuário.***
${config.prefix}denuncia : ***Denuncia um membro do servidor.***
${config.prefix}serverinfo : ***Informações do Servidor.***
${config.prefix}uptime : ***Veja o tempo de atividade do bot.***
${config.prefix}avatar : ***Veja o avatar de algum usuario***
`)
.setColor(cores.ROXO.ESCURO);
msg.reply(DISPO);
};