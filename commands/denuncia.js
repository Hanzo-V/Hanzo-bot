const Discord = require('discord.js');
const config = require('../config.json');

module.exports = async (client,msg) =>{
const denuncia = await msg.guild.channels.cache.find(channel=>channel.id == config.DenunciaId); 
if(!msg.channel.id === "748608428254953523") return;
var message = msg.content.split(" ").slice(1).join(' ');
if(!message) return msg.reply('**Insira a sua denuncia apos o comando.**').then(msg => msg.delete({timeout : 1000 * 3}));
let embedsay = new Discord.MessageEmbed()
.setTitle(`**Nova denuncia**`)
.setDescription(`${message}`)
.addField(`Denuncia feita por:`, msg.author.tag)
.setColor('#ff0000')
.setFooter('Horário:', client.user.displayAvatarURL())
.setTimestamp();
if(denuncia)
await denuncia.send(embedsay).then(()=> msg.reply(`Sua denuncia foi enviada com sucesso!`).then(msg => msg.delete({timeout : 1000 * 3})));
else return msg.reply(`Canal de denuncia não encontrado`).then(msg => msg.delete({timeout : 1000 * 3}))
.catch(err =>{
msg.reply('Ocorreu um erro ao efeituar sua denuncia.');
console.error(err);
});
};
