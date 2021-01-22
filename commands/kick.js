const config = require('../config.json');
const Discord = require('discord.js');
const cores = require('../cores.json');

module.exports = async (client,msg) =>{
const Punições = await msg.guild.channels.cache.find(channel => channel.name === config.Puni);
let User = msg.guild.member(msg.mentions.users.first());
let reason = msg.content.split(" ").slice(2).join(' '); 
if(!msg.member.hasPermission(config.Kikador)) return msg.reply(`**Você não tem permissão de usar este comando.**`).then(msg => msg.delete({timeout : 1000 * 3}));
if(!User) return msg.reply('**`Merencione o meliante para expulsar.`**').then(msg => msg.delete({timeout : 1000 * 3}));
if(!User.kickable) return msg.reply(`Este usuario tem um cargo acima do meu`).then(msg => msg.delete({timeout : 1000 * 3}));
if(User.hasPermission(config.ADM)) return msg.reply(`**Você não pode banir adminstradores!**`).then(msg => msg.delete({timeout : 1000 * 3}));
if(!reason) return msg.reply(`Insira um motivo`).then(msg => msg.delete({timeout : 1000 * 3}));

let Kikado = new Discord.MessageEmbed()
.setTitle('```Kikado!```')
.setColor(cores.VERMELHO.VER)
.addField('Você foi expulso pelo:',msg.author)
.addField('Motivo:', reason)
.addField('Observação:','Se você acha o motivo desse kick sem motivo claro, tire print e mande para nossos admins.')
.setFooter('Horário:', client.user.displayAvatarURL())
.setTimestamp();
await User.send(Kikado);

User
.kick(reason)
.then(()=>{
let kickembed = new Discord.MessageEmbed()
.setTitle("`Usuario Kikado!`")
.setThumbnail(User.user.displayAvatarURL())
.setColor(cores.VERMELHO.VER)
.addField("Membro expulso:",User)
.addField("Expulso pelo:",msg.author)
.addField("Motivo:",reason)
.setFooter(' Foi de beise...', client.user.displayAvatarURL())
.setTimestamp();
if(Punições)
msg.reply(`Sua penalidade foi aplicada no ${User}. `).then(()=> Punições.send(kickembed));
else msg.channel.send(kickembed).then(() => msg.reply(`O canal de punições do seu servidor não foi encontrado, mas o membro foi kikado com sucesso`).then(msg => msg.delete({timeout : 1000 * 3})));
})
.catch(err => {
msg.reply(`Ocorreu um erro inesperado\n**${err}**`).then(() => console.error(err));
});
};