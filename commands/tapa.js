const config =  require('../config.json');
module.exports = async (client,msg) =>{
let User = msg.guild.member(msg.mentions.users.first()); 
if(!User) return msg.reply(`Merencione alguem para dar um tapa.`).then(msg => msg.delete({timeout : 1000 * 3}));
await msg.channel.send(`O ${msg.author} deu um tapa na gostosa do ${User}.\nYes baby, tankyou!`).then(tapa => tapa.react("755231236628414648"));
};