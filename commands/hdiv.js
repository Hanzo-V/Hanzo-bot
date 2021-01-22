const config = require('../config.json');
const Discord = require('discord.js');
const cores = require('../cores.json');

module.exports = async (client, msg) =>{
const div = new Discord.MessageEmbed()
.setTitle('```DIVERSÃO```')
.setDescription(`
${config.prefix}coinflip : ***Jogue de cara ou coroa.***
${config.prefix}frames : ***Veja uma animação de frames.***
${config.prefix}tapa : ***De um tapa em alguem.***
${config.prefix}say :   ***Faça eu envia uma mensagem.***
`)
.setFooter(`Comandos de diversão estão sendo criados, aguarde...`)
.setColor(cores.ROXO.ESCURO);
msg.reply(div);
};