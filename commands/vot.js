const Discord = require('discord.js');
const config  = require('../config.json'); 

module.exports = async (client, msg) =>{
if(!msg.member.hasPermission(config.Geren)) return msg.reply(`**Você não tem permissão de usar este comando.**`).then(msg => msg.delete({timeout : 1000 * 3}));
const vot = await msg.guild.channels.cache.find(channel => channel.id == config.Vota)
if(!vot) return msg.reply(`Canal de votação não encontrado.`).then(msg => msg.delete({timeout : 1000 * 3}));
var message = msg.content.split(" ");
message.splice(0,1);
message = message.join(" ");
if(!message) return msg.reply(`Use: **+vot (Assunto para o pessoal votar)**`).then(msg => msg.delete({timeout: 1000 * 3}));
const Vote = new Discord.MessageEmbed()
    .setTitle("Votação iniciada!")
    .setColor("#720692")
    .setDescription(`${message}`)
    .setFooter('A votação Terá 1h para encerrar, Reaja ⚫ e 🔴.');
const votao = await vot.send(`@everyone`, Vote)
votao.react("⚫")
.then(() => votao.react("🔴"))
setTimeout(()=>{
votao.edit(`@everyone, Votação encerrada!`);
},1000 * 3600);
};