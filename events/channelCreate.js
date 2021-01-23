const Discord = require('discord.js');
const moment = require('moment')
      moment.updateLocale('pt-br');
module.exports = async (client, member) =>{
const hora = client.readyTimestamp;
const Console = await client.channels.cache.find(ch => ch.name === 'console-bots');
if(!Console) return console.log(`[ERRO] : Canal de LOGS não encontrado no servidor ${client.guild.name}`).then(() => console.log(channel));
Console.send(`[AUTOMOD] O canal '${channel.name}' foi criado as ${moment(hora).format('L')}, ${moment(hora).format('LTS')}.`);    
};