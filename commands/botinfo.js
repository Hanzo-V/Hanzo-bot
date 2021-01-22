const config = require('../config.json');
const Discord = require('discord.js');
const cores = require('../cores.json');

module.exports = async (client,msg) =>{
let totalSeconds = client.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
const add = "https://discord.com/api/oauth2/authorize?client_id=754076000006045737&permissions=8&scope=bot";
let embed = new Discord.MessageEmbed()
.setTitle(`${client.user.tag}`)
.setThumbnail(client.user.displayAvatarURL())
.setDescription(`Quer me adicionar? Clique [aqui](${add})`)
.addField(`Tempo de atividade:` , `${days.toFixed()} dias, ${hours.toFixed()} horas, ${minutes.toFixed()} minutos, ${seconds.toFixed()} segundos.`)
.setFooter(`Patch: ${config.versão}`)
.setColor(cores.ROXO.ESCURO);
msg.channel.send(embed);
};