const Discord = require("discord.js");
const moment = require('moment'); 
      moment.locale('pt-BR');
const format        = require('dateformat');
const config = require("../config.json");

module.exports = async (client,msg,args) =>{
let member = msg.guild.member(msg.mentions.users.first());
if(!member) return msg.reply(`Merencione o membro para ver as informações dele.`).then(msg => msg.delete({timeout: 1000 * 3}));

const info = new Discord.MessageEmbed()
.setTitle(`Usuário: ${member.user.username}`)
.setThumbnail(member.user.displayAvatarURL())
.setDescription(`📌 Tag: ${member.user.tag}`)
.addField('🆔 ID do usuário:', `**${member.user.id}**`)
.addField(`➔ Entro no Servidor em:`, `${moment(member.joinedAt).format('LLL')}`)
.addField('©️ Conta Criada em:', `${moment(member.user.createdAt).format('LLL')}`)
.setFooter(`Hora:`,client.user.displayAvatarURL())
.setColor('#d3ff00')
.setTimestamp();
    msg.channel.send(`${msg.author} aqui esta as informações do ${member}`, info);
};