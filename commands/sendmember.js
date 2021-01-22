const config = require('../config.json');

module.exports = async (client, msg) =>{
const member = msg.guild.member(msg.mentions.users.first());
const message = msg.content.split(" ").slice(2).join(' ');
if(msg.member.hasPermission(config.ADM) || msg.member.roles.cache.has(config.suporte)) return msg.reply(`**Você não tem permissão de usar este comando**`).then(msg => msg.delete({timeout : 1000 * 3}));
if(!member) return msg.reply(`você precisa merencionar um membro para mandar uma mensagem direta para ele.`).then(msg => msg.delete({timeout : 1000 * 3}));
if(!message) return msg.reply(`Você precisa inserir uma mensagem que será enviada para o ${member}.`).then(msg => msg.delete({timeout : 1000 * 3}));

await member.send(`${message}\n**Mensagem enviada pelo:** ${msg.author}`)
.then(()=>{
msg.reply(`Sua mensagem foi enviada com sucesso ao ${member}.`)
})
.catch(err => {
msg.reply(`o ${member} bloqueou de receber mensagens diretas desse servidor`);
console.error(err);
});
};