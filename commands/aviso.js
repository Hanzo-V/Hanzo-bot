const Discord = require("discord.js");
const config = require("../config.json");
const cores = require("../cores.json");
module.exports = async (client,msg) =>{
const avisoEmoji = client.emojis.cache.get("795983857337892884"); // emoji
const avisoChannel = await msg.guild.channels.cache.find(channel=>channel.id === config.avisosChannelId); // canal de aviso
if(!msg.member.hasPermission(config.ADM)) return await msg.reply(`**Você não tem permissão de usar este comando.**`).then(msg => msg.delete({timeout : 1000 * 3}));
if(!avisoChannel) return msg.reply(`Canal de avisos não encontrado.`);
if(!msg.channel.id === "742514372756111401") return;
var message = msg.content.split(" ");
message.splice(0,1);
message = message.join(" ");
if(!message) return msg.reply(`**Insira um conteudo para esse aviso.**`).then(msg => msg.delete({timeout : 1000 * 3}));
let embed = new Discord.MessageEmbed()
.setTitle(`${avisoEmoji} Aviso! ${avisoEmoji}`)
.setDescription(message)
.setFooter(`Aviso feito por ${msg.author.tag}`)
.setColor(cores.AZUL.AE);
msg.reply(`Enviando o aviso no ${avisoChannel}`).then(()=> avisoChannel.send(`@everyone, ${embed}`));
};