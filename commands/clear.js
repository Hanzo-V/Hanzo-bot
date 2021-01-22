const Discord = require('discord.js');
const config = require("../config.json");
const moment = require('moment')
      moment.updateLocale('pt-br');
module.exports = async (client,msg) =>{
const hora = client.readyTimestamp;
const DeletCont = msg.content.split(" ").slice(1).join(" ");
if(!msg.member.hasPermission(config.Geren)) return msg.reply(`**Você não tem permissão de usar este comando.***`).then(msg => msg.delete({timeout : 1000 * 3}));
if(!DeletCont) return msg.reply(`***Insira um número valido de mensagens para ser excluidas***`).then(msg => msg.delete({timeout : 1000 * 3}));
if(DeletCont <= 1 || DeletCont > 100) return msg.reply(`Insira um número de **2 a 100** mensagens para excluir.`).then(msg => msg.delete({timeout : 1000 * 3}));
const channel = msg.channel;
const fetch = await msg.channel.messages.fetch({
    limit: DeletCont
});
setTimeout(async ()=>{
await channel.bulkDelete(fetch,true).then(() => msg.reply(`Foi deletado **${fetch.size} mensagens!**`).then(msg => msg.delete({timeout : 1000 * 3})).then(()=> console.log(`[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] [REGISTRO-LOG] Foi deletado um numero de ${fetch.size} de mensagens do servidor ${msg.guild.name}.`))
)}, 500).catch(err => msg.reply(`Ocorreu um erro durante a limpeza do chat\nErro:**${err}**`).then(() => console.error(err)));
};