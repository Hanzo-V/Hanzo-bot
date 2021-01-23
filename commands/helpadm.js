const Discord = require('discord.js');
const config = require('../config.json');
module.exports = async (client,msg) =>{
if(msg.member.hasPermission(config.ADM)){
  if(msg.member.roles.cache.has(config.block)) return await msg.channel.send(`${msg.author} você esta bloqueado de usar comandos!`.toUpperCase()).then(msg => msg.delete({timeout : 1000 * 3})).then(()=> msg.delete());
    const embed = new Discord.MessageEmbed()
    .setTitle('Comandos disponíveis')
    .setDescription(`
    ${config.prefix}aviso: **Avisar o membos no** <#743160138969382942>**.**\n
    ${config.prefix}ban : **Bane algum membro do servidor.**\n
    ${config.prefix}chager : **Avisa os membros do servidor sobre Atualizações.**\n
    ${config.prefix}clear : **Limpar o chat. (o +clear você tera que usar o numero de mensagens para apagar +1)**\n
    ${config.prefix}kick : **Expulsa um mebro do servidor.**\n
    ${config.prefix}sayadm : **Força o bot a falar no** <#742504054126805093>**.**\n
    ${config.prefix}unban : **Desbane algum membro do servidor.**\n
    ${config.prefix}vot : **Inicia uma votação para os membros votarem.**\n
    ${config.prefix}setblock : **Bloqueia um membro de usar meus comandos.**\n
    `)
    .setColor("#1e0222");
    msg.channel.send(embed).then(()=> msg.delete());
  } else {
    return;
  };
};