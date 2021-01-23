const Discord = require('discord.js');
const moment = require('moment')
      moment.updateLocale('pt-br');
const config        = require("../config.json");
const commands      = require("../scripts/commandsReader")(config.prefix);
const unknowCommand = require("../scripts/unknowCommand");
const dance = "https://cdn.discordapp.com/emojis/483645512680210464.gif?v=1";
const cores = require('../cores.json');

module.exports = async (client, msg) =>{
const hora = client.readyTimestamp;
if(!msg.author.bot && msg.guild){
if(config.debug) console.log(`[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] ${msg.author.tag}: ${msg.content}`);
const args = msg.content.split(" ".toLowerCase());
if(commands[args[0]]){
if(!msg.member.roles.cache.find(r => r.name === config.BLOCK))
msg.delete().then(()=>commands[args[0]](client,msg,args))
else return msg.reply(`*Você está bloqueado de usar comandos*`).then(msg => msg.delete({timeout : 1000 * 3})).then(() => msg.delete());
}else if(args[0].startsWith(config.prefix)) unknowCommand(client,msg);
};
// emojis para usar nas mensagens
let pepe = client.emojis.cache.get('797105462851403777'),
    cafezin = client.emojis.cache.get('797120535846322188'),
    pepesad = client.emojis.cache.get('797107220504510475'),
    hmmmm = client.emojis.cache.get('796394335033098290');

if(msg.content.startsWith(`<@${client.user.id}>`) || msg.content.startsWith(`<@!${client.user.id}>`)) { 
    let embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.tag}`)
    .setThumbnail(client.user.displayAvatarURL())
    .addField(`Prefixo:`, '```+```')
    .addField(`Meu criador:`, '```Hanzo_.#8058```')
    .setColor(cores.ROXO.CHOQUE)
    .setFooter(`digite "+ajuda" para ver a lista de comandos! V. ${config.versão}`, dance);
    await msg.channel.send(embed);
};
    // sistema anti palavrão
    if(msg.guild.id === "794012283848228884"){ // verifica se a mensagem está no servidor certo, se não retorna
    if(msg.content ==="tmnc") msg.reply(`vai vc, oxi fica mandando os outros toma no cu eu em ${pepe}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "krlh") msg.reply(`eita poha ${cafezin}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "filha da puta" || msg.content === "fdp") msg.reply(`pra que .iso ${pepesad}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "vagabundo") msg.reply(`ele é msm, n trabalha ${pepe}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "vadia" || msg.content === "vagabunda") msg.reply(`Recomendo ela trabalha num puteiro q eu vi no lado de uma igreja ${cafezin}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "foda-se") msg.reply(`si fude vc, oxi ${pepe}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "clbc") msg.channel.send(`*O cargo de <@&797123814172655657> foi setado na(o) kenga(o) do(a)${msg.author.tag}*`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "fds") msg.reply(`si fude vc, oxi ${pepe}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "otacu" || msg.content === "fudido") msg.reply(`não bate brona por garota 2D ${hmmmm}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "e-girl") msg.reply(`vai toma banho ${hmmmm}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "piranha" || msg.content === "puta" || msg.content === "biscate") msg.reply(`Galinha msm ${cafezin}`).then(msg => msg.delete({timeout: 1000 * 5}));
    else if(msg.content === "idiota") msg.reply(`Né, cara lerto ${cafezin}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "retardado") msg.reply(`é lerdo memo esse cara`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "q bosta" || msg.content === "merda") msg.reply(`Parece minha vida ${pepesad}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else if(msg.content === "cabeçudo") msg.reply(`Cearence msm ${cafezin}`).then(msg => msg.delete({timeout : 1000 * 5}));
    else return;
  };
}