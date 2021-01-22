const config = require('../config.json');
const Discord = require('discord.js');
const cores = require('../cores.json');

module.exports = async (client, msg) =>{
const ADM = new Discord.MessageEmbed()
.setTitle('```MODERAÇÃO```')
.setDescription(`
${config.prefix}aviso: ***Avisar o membos no*** <#743160138969382942>***.***
${config.prefix}ban : ***Bane algum membro do servidor.***
${config.prefix}chager : ***Avisa os membros do servidor sobre Atualizações.***
${config.prefix}clear : ***Limpar o chat.***
${config.prefix}kick : ***Expulsa um mebro do servidor.***
${config.prefix}unban : ***Desbane algum membro do servidor.***
${config.prefix}vot : ***Inicia uma votação para os membros votarem.***
${config.prefix}setblock : ***Bloqueia um membro de usar meus comandos.***
${config.prefix}sendmember : ***Manda uma mensagem no DM do membro merencionado.***
`)
.setColor(cores.ROXO.ESCURO);
msg.reply(ADM);
};