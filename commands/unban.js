const Discord = require('discord.js');
const config = require('../config.json');

module.exports = async (client,msg,args) => {
const Punições = await msg.guild.channels.cache.find(channel => channel.id == config.Puni);
const ID = msg.content.split(" ").slice(1).join(' ');
if(!msg.member.hasPermission(config.ADM)) return msg.reply(`**Você não tem permissão de usar este comando.**`).then(msg => msg.delete({timeout : 1000 * 3}));  
if(!ID) return msg.reply(`**Insira um ID para desbanir**`).then(msg => msg.delete({timeout : 1000 * 3}));
    msg.guild.fetchBans().then(bans=> {
    if(bans.size == 0) return 
    let bUser = bans.find(b => b.user.id == ID)
    if(!bUser) return msg.reply(`**Este ID:** **${ID}** ** não esta banido.**`).then(msg => msg.delete({timeout : 1000 * 3}));
    msg.guild.members.unban(bUser.user)
    .then(()=>{
    const embed = new Discord.MessageEmbed()
    .setTitle(`Membro desbanido!`)
    .addField(`ID do usuario desbanido:`, ID)
    .addField(`Desbanido por:`,msg.author)
    .setColor("#01ff4e")
    .setTimestamp();
    if(!Punições)  msg.reply(embed).then(() => msg.reply(`O canal de punições não foi encontrado, mas o ${ID.user.tag} está desbanido =).`).then(msg => msg.delete({timeout : 1000 * 3}))).then(msg => msg.delete({timeout : 1000 * 3}));
    else Punições.send(embed);
    })
    .catch(err =>{
        console.error(err).then(() => msg.reply(`**Ouve um erro ao desbanir este usuario**\nErro:${err}`))
    });
});
};