const config = require('../config.json');
const Discord = require('discord.js');
const cores = require('../cores.json');

module.exports = async (client,msg) =>{
const Punições = await msg.guild.channels.cache.find(channel => channel.name == config.Puni);
let User = msg.guild.member(msg.mentions.users.first()); // merencionamento
let reason = msg.content.split(" ").slice(2).join(' '); // motivo
if(!msg.member.hasPermission(config.Baianor)) return msg.reply(`***Você não tem permissão de usar este comando.***`).then(msg => msg.delete({timeout : 1000 * 3}));
if(!User) return msg.reply('***Merencione o meliante para banir.***').then(msg => msg.delete({timeout : 1000 * 3}));
if(!User.bannable) return msg.reply(`***Este usuario tem um cargo acima do meu.***`).then(msg => msg.delete({timeout : 1000 * 3}));
if(User.hasPermission(config.ADM)) return msg.reply(`***Você não pode banir adminstradores!***`).then(msg => msg.delete({timeout : 1000 * 3}));
if(!reason) return msg.reply("***informe o motivo.***").then(msg => msg.delete({ timeout : 1000 * 3 }));
let banido = new Discord.MessageEmbed()
.setTitle('```Banido```')
.setThumbnail(User.user.displayAvatarURL())
.setColor(cores.VERMELHO.VER)
.addField('Você foi banido pelo:',msg.author)
.addField('Motivo:', reason)
.addField('Observação:','Se você acha o motivo desse Ban sem motivo claro, tire print e mande para nossos admins.')
.setFooter('Horário:', client.user.displayAvatarURL())
.setTimestamp();
await User.send(banido);
User
.ban({
  reason: (reason),
})
.then(()=>{
let banembed = new Discord.MessageEmbed()
.setTitle("```Usuario banido!```")
.setThumbnail(User.user.displayAvatarURL())
.setColor(cores.VERMELHO.VER)
.addField("Membro banido:",User)
.addField("Banido pelo:",msg.author)
.addField("Motivo:",reason)
.setFooter(' Foi de beise...', client.user.displayAvatarURL())
.setTimestamp();
if(Punições) msg.reply(`Sua penalidade foi aplicada no ${User}. `).then(()=> Punições.send(banembed));
else msg.channel.send(banembed).then(() => msg.reply(`O canal de punições do seu servidor não foi encontrado, mas o membro foi banido com sucesso`).then(msg => msg.delete({timeout : 1000 * 3})));
}).catch(err=> msg.reply(`Ocorreu um erro\nErro:"**${err}**"`).then(()=> console.error(err)));
};