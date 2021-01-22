/* Definições e requirimentos para o bom fuincionamento do bot. */
const Discord       = require("discord.js");
const client        = new Discord.Client();
const config        = require("./config.json");
const commands      = require("./scripts/commandsReader")(config.prefix);
const unknowCommand = require("./scripts/unknowCommand");
const moment        = require('moment')
                      moment.updateLocale('pt-br');
const format        = require('dateformat');
const cores         = require('./cores.json');
/* Sites */
const dance = "https://cdn.discordapp.com/emojis/483645512680210464.gif?v=1";

//logs e o Status do bot
client.on("ready",()=>{
    const tag = client.user.tag;
    const nm = client.guilds.cache.size;
    const chanel = client.channels.cache.size;
    const hora = client.readyTimestamp;
    console.log(`[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] Logado com o bot ${tag}.\n[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] ${nm} Servidores.\n[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] Com ${chanel} canais sendo vigiados.\n[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] ${client.users.cache.size} usuários.\n[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] com ${commands.length}`)
    let activities = [
      `'+ajuda' para a minha lista de comandos.`,
      `Desenvolvido por Hanzo_.#8058.`,
      `Versão: ${config.versão}`,
      `Host By DisCloud ❤️`,
      `Pai ta on!`
    ]
    i = 0;
setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
  type: 1,
  url : "https://twitch.tv/ratoborrachudo"
    //  0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
}), 1000 * 15);
client.user
.setStatus("dnd")
.catch(console.error);
});
// Estrutura do comandos 
client.on("message",async (msg)=>{
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
    // sistema anti palavrão
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
          .setColor(cores.ROXO.RE)
          .setFooter(`digite "+ajuda" para ver a lista de comandos! V. ${config.versão}`, dance);
        await msg.channel.send(embed);
};
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
});
// quando um canal é deletado
client.on('channelCreate', async (channel) => {
  const hora = client.readyTimestamp;
  const Console = await client.channels.cache.find(ch => ch.name === 'console-bots');
  if(!Console) return console.log(`[ERRO] : Canal de LOGS não encontrado no servidor ${client.guild.name}`).then(() => console.log(channel));
  Console.send(`[AUTOMOD] O canal '${channel.name}' foi criado as ${moment(hora).format('L')}, ${moment(hora).format('LTS')}.`);
});

// quando um canal é deletado.
client.on('channelDelete', async (channel) => {
  const hora = client.readyTimestamp;
  const Console = client.channels.cache.find(ch => ch.name === 'console-bots');
  if(!Console) return console.log(`[ERRO] : Canal de LOGS não encontrado no servidor ${client.guild.name}`).then(() => console.log(channel));
  Console.send(`[AUTOMOD] O canal '${channel.name}' foi deletado as ${moment(hora).format('L')}, ${moment(hora).format('LTS')}.`);
});

// mostra no console toda vez q acontecer um erro.
client.on('error', (error) => {
console.log(`Erro: ${error}`);
});

// mensagem de quando alguem entra no servidor.
client.on('guildMemberAdd', async (member) => {
  const pepe = client.emojis.cache.get('797105462851403777');
  const pepesad = client.emojis.cache.get('797107220504510475');
  const msg = member.guild; if(!msg) return;
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
.setColor('#00ffe5')
.setTimestamp();
await welcome.send(embed)
.catch(err =>{
  Console.send(`Algo deu errado ao receber um novo membro ${pepesad}`)
  console.error(err)
});
});

// mensagem de quando alguem e removido do servidor ou é banido/expulso
client.on('guildMemberRemove', async (member) => {
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
});

client.login(config.token);
