const Discord = require("discord.js");
const config = require('../config.json');

const DisCloud = "https://discloudbot.com/dashboard";

module.exports = async (client,msg) =>{
if(msg.author.id == config.Hanzo){
  console.log(`Desligando.`)
  setTimeout(()=>{
    console.log('Desligando..')
  }, 1000)
  setTimeout(()=>{
    console.log('Desligando...')
  }, 1500)
  setTimeout(()=>{
    console.log('Desligando....')
  }, 2000)
  const Console = msg.guild.channels.cache.find(channel=>channel.name === 'console-bots');
  if(Console) Console.send(`${msg.author.username} O meu processo está sendo encerrado, para ligar novamente vá até o site da disclound.\n ${DisCloud}`)
  else console.log(`[WARNING] Canal de logs não encontrado`);
  msg.channel.send('**Processo sendo encerrado, Aguarde...**')
  setTimeout(()=>{
  client.destroy();
}, 5000);
} else {
  let embed = new Discord.MessageEmbed()
  .setDescription(`Comando '${message}' não existe nos meus arquivos.\n Digite "+ajuda" para obter a lista de coomandos.`)
  .setColor('#c07f7f');
  return msg.channel.send(embed).then(msg => msg.delete({ timeout : 1000 * 3 })); 
};
};