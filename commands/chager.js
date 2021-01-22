const config = require("../config.json");
const Discord = require("discord.js");
const cores = require('../cores.json');
module.exports = async (client ,msg) =>{
const att = client.emoji.cache.get("795996102540787733");
const Chagerlog = await msg.guild.channels.cache.find(channel=>channel.id === config.Chagerlog);
var message = msg.content.split(" ");
message.splice(0,1);
message = message.join(" ");
// Verifica se o autor da mensagem é um adminstrador
if(!msg.member.hasPermission(config.ADM)) return msg.reply(`**Você não tem permissão de usar este comando.**`).then(msg => msg.delete({timeout : 1000 * 3}));
// Verifica se encontrou o canal
if(!Chagerlog) return msg.reply(`Canal de chager log não encontrado`);
// Verifica se há conteudo na mensagem
if(!message) return msg.reply('Informe sobre as atualizações.').then(msg => msg.delete({timeout : 1000 * 3}));
let embed = new Discord.MessageEmbed()
.setTitle(`${att} Nova Atualização! ${att}`)
.setDescription(message)
.setFooter(`La Catedral Corporation ©️ 2020 2021`)
.setColor(cores.AZUL.CHOQUE)
.setTimestamp();
msg.reply(`Enviando a Mensagem no canal ${Chagerlog}`).then(()=> Chagerlog.send(`@everyone, ${embed}`)).catch(err => console.error(err).then(()=> msg.reply(`***Ocorreu um erro***`)));
};