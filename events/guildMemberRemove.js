const Discord = require('discord.js');
const moment = require('moment')
      moment.updateLocale('pt-br');
module.exports = async (client, member) =>{
const pepesad = client.emojis.cache.get('797107220504510475');
const Console = client.channels.cache.find(ch => ch.name === 'console-bots');
let Sv = await client.guilds.cache.get('742503796319715418');
if(!Sv) return;
const welcome = await client.channels.cache.get('742513514614095902');
if(!welcome) return console.log(`O canal de boas vindas não foi encontrado.`);
const hora = client.readyTimestamp;
if(member.user.bot) return;
console.log(member)
console.log(`[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] O ${member} saiu ou foi expulso do servidor ${member.guild.name}`)
await welcome.send(`O ${member.user.tag} saiu do servidor.${pepesad}`)
.catch(err =>{
Console.send(`Algo deu errado ao despedir de um membro ${pepesad}`);
console.error(err);
});
};