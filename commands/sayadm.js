const config = require("../config.json");
const Discord = require('discord.js');


module.exports = async (client,msg) =>{
  msg.delete(); 
  const ChatGlobalChannelid = await msg.guild.channels.cache.find(channel=>channel.id == config.ChatGlobalChannelid);
  if(!ChatGlobalChannelid) return msg.reply(`Chat global não encontrado.`);
  if(msg.member.hasPermission(config.ADM)) {
  if(msg.member.roles.cache.has(config.block)) return await msg.channel.send(`${msg.author} você esta bloqueado de usar comandos!`.toUpperCase()).then(msg => msg.delete({timeout : 1000 * 3})).then(()=> msg.delete());
    var message = msg.content.split(" ");
    message.splice(0,1);
    message = message.join(" ");
    if(message) {
    await ChatGlobalChannelid.send(`${message}`);
    msg.reply(`Enviando a Mensagem no canal ${ChatGlobalChannelid}`);
    } else {
      await msg.reply(`Insira uma mensagem para enviar no ${ChatGlobalChannelid}.`)
      .then(msg => msg.delete({timeout : 1000 * 3}))
      .then(() => msg.delete());
      return;
    };
    } else {
    let Nembed = new Discord.MessageEmbed()
   .setDescription(`**Você não tem permissão de usar este comando.**`)
   .setColor('#ff0000');
   await msg.channel.send(`${msg.author}`, Nembed)
    .then(msg => msg.delete({timeout : 1000 * 3}))
    .then(()  => msg.delete());
   return;
  };
};

