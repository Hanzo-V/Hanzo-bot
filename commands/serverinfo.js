const Discord = require('discord.js');
const moment = require('moment'); 
      moment.locale('pt-BR');
const format        = require('dateformat');
const config = require('../config.json');

module.exports = async (client, msg, args)=> {
const load = client.emojis.cache.get("789097742256832542");
const date = msg.guild.createdAt
const joined = msg.member.joinedAt
const role = msg.guild.roles.cache.size;
const Channels = msg.guild.channels.cache.size;
const GuildID = msg.guild.id;
const Nm = msg.guild.memberCount;

let Serve = new Discord.MessageEmbed()
.setTitle(`${msg.guild.name}`)
.setThumbnail(msg.guild.iconURL())
.addField('**Dono:**', `${msg.guild.owner.user.username}#${msg.guild.owner.user.discriminator}`)
.addField(`**ID do servidor:**`, GuildID)
.addField(`**Números de canais:**`, Channels, true)
.addField('**Números de membros:**', `${Nm}`, true)
.addField(`**Números de Cargos:**`, role, true)
.addField(`**Servidor Criado em:**`, `${moment(date).format('LLL')}`)
.addField(`**Você entrou aqui em:**`, `${moment(joined).format('LLL')}`)
.setColor('#021f66')
.setTimestamp();
  
msg.channel.send(`${msg.author} aqui esta as informações deste servidor:`,Serve)
};