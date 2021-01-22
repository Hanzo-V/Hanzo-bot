const config =  require('../config.json');
const Discord = require('discord.js');
const cores  = require('../cores.json');

module.exports = async (client,msg) =>{

const User = msg.guild.member(msg.mentions.users.first());
let Blocked = msg.guild.roles.cache.find(block => block.name === "BLOCK");
if(!Blocked){
    try {
        Blocked = await msg.guild.roles.create({data:{
            name: "BLOCK",
            color: cores.PRETO
        }});
    } catch(err){
        console.error(err)
    };
    return msg.reply(`Eu não achei o cargo de bloqueio, mas eu criei um para facilitar =)`).then(msg => msg.delete({timeout : 1000 * 3}));
};
if(!msg.member.hasPermission(config.ADM)) return msg.delete(`**Você não tem permissão de usar este comando.**`).then(msg => msg.delete({timeout : 1000 * 3}));
if(!User) return msg.reply(`Merencione alguem para bloquear de usar comandos.`).then(msg => msg.delete({timeout : 1000 * 3}));
if(!User.roles.cache.find(r => r.name === config.BLOCK)){
if(User.id === msg.author.id) return msg.reply(`Você não pode bloquear a si mesmo de usar meus comandos.`).then(msg => msg.delete({timeout : 1000 * 3}));
if(User.hasPermission(config.ADM)) return msg.reply(`Você não pode bloquear admins de usar meus comandos.`).then(msg => msg.delete({timeout : 1000 * 3}));
User.roles.add(Blocked)
 .then(()=>{
    msg.reply(`**O ${User.user.tag} foi bloqueado com sucesso de usar meus comandos!**`)
    .then(msg => msg.delete({timeout : 1000 * 3}));
 })
 .catch(err => {
    console.error(err);
    msg.reply(`Ocorreu um erro ao bloquear este usuario de usar meus comandos.`)
    .then(msg => msg.delete({timeout : 1000 * 3}));
});
} else {
    User.roles.remove(Blocked).then(()=> msg.reply(`*O ${User} foi desbloqueado de usar comandos.*`).then(msg => msg.delete({timeout : 1000 * 3})));
}
};