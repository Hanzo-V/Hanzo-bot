const Discord = require('discord.js');
const moment = require('moment')
      moment.updateLocale('pt-br');
const config = require('../config.json');
const fs = require('fs');
module.exports = async (client, member) =>{
const tag = client.user.tag;
const nm = client.guilds.cache.size;
const chanel = client.channels.cache.size;
const hora = client.readyTimestamp;
const dir = './commands/';
const comandos = fs.readdirSync(dir);
    console.log(`[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] Logado com o bot ${tag}.\n[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] ${nm} Servidores.\n[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] Com ${chanel} canais sendo vigiados.\n[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] ${client.users.cache.size} usuários.\n[${moment(hora).format('L')}, ${moment(hora).format('LTS')}] com ${comandos.length} comandos.`)
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
};