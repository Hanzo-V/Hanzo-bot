const config = require('../config.json');
const Discord = require('discord.js');
module.exports = async (client,msg) =>{
const pepe = client.emojis.cache.get('797105462851403777');
const pepesad = client.emojis.cache.get('797107220504510475');
msg.delete();
let embed = new Discord.MessageEmbed()
.setTitle(`${client.user.tag}`)
.setThumbnail(client.user.displayAvatarURL())
.setDescription(`Progamado em JavaScript`)
.addField(`Patch:`, `**1.3.0**`)
.addField(`Data da utima atualização:`, `**09/01/2021**`, true)
.addField(`Notas da utima Atualização:`, `**Correção de erros**
**Agora o bot manda uma mensagem de boas vindas.** ${pepe}
**Sistema de registro desativado temporariamente.** ${pepesad}
`)
.setColor('#246bd6');
msg.channel.send(embed)
};