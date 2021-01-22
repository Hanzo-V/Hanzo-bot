const Discord = require('discord.js');
module.exports = async(client, msg) =>{
let embed = new Discord.MessageEmbed()
.setDescription(`Quer me adicionar em algum servidor? clique [aqui](https://discord.com/api/oauth2/authorize?client_id=754076000006045737&permissions=8&scope=bot) e me adicione!`);
msg.reply(embed);
};    
