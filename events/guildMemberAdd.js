const Discord = require('discord.js');
const moment = require('moment')
      moment.updateLocale('pt-br');
const cores = require('../cores.json');
module.exports = async (client, member) =>{
const pepe = client.emojis.cache.get('797105462851403777');
const pepesad = client.emojis.cache.get('797107220504510475');
const Console = client.channels.cache.find(ch => ch.name === 'console-bots');
let Sv = await client.guilds.cache.get('742503796319715418') || client.guilds.cache.find(guild => guild.id === config.GuildId.LCT);
if(!Sv) return;
const welcome = await client.channels.cache.get('742513514614095902') || client.channels.cache.find(ch => ch.name === 'member-log');
if(!welcome) return console.log(`O canal de boas vindas não foi encontrado.`);
const hora = client.readyTimestamp;
if(member.user.bot) return;
console.log(member)
console.log(`[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] O ${member} entrou no servidor ${member.guild.name}.`)
let embed = new Discord.MessageEmbed()
.setTitle(`${pepe} Novo membro ${pepe}`)
.setDescription(`Membro: ${member.user.tag}`)
.addField(`Conta criada em:`, `${moment(member.user.createdAt).format('LLL')}`)
.setColor(cores.AZUL.CIANO)
.setTimestamp();
await welcome.send(embed)
.catch(err =>{
Console.send(`Algo deu errado ao receber um novo membro ${pepesad}`)
console.error(err)
});
};