const config = require('../config.json');
const Discord = require('discord.js');

module.exports =  async (client,msg) =>{
// definições das roles e do servidor que está ativado esta função
if(!msg.guild.id === "742503796319715418") return console.log('[WARNING] O sistema de registro está desativado neste servidor.')
const registroChannel = client.guild.channels.cache.get('758149392435380304');
if(!registroChannel) return console.log('[ERRO] Canal de registro não encontrado.');
const RoleRegistre = client.guild.roles.cache.get('765671947643125821');
if(!RoleRegistre) return console.log('[ERRO] Cargo de regristro não encontrado.');
const Roleregistrado = client.guild.roles.cache.get('790932608098893855');
if(!Roleregistrado) return console.log('[ERRO] Cargo de registrado não encontrado');
const ContVerif = client.guild.roles.cache.get('742545767155105984');
if(!ContVerif) return console.log('[ERRO] Cargo de contas verificadas não encontrado.');
const CONSOLE = client.guild.channels.cache.get('780404097026621460');
if(!CONSOLE) return console.log(`[ERRO] Canal de erro não encontrado.`);
// verifica o membro que fez a mensagem
if(!msg.member.roles.cache.has(RoleRegistre)) return msg.reply(`Você ja está registrado ou não tem o cargo de registro`).then(msg => msg.delete({timeout : 1000 * 3}));
if(msg.member.roles.cache.has(Roleregistrado)) return msg.reply(`Você ja fez o seu registro.`).then(msg => msg.delete({timeout : 1000 * 3}));

var message = msg.content.split(" ");
message.splice(0,1);
message = message.join(" ");

const user = msg.author;
const ChannelRegistro = msg.guild.channels.cache.get('790932504751636480');
if(!ChannelRegistro) return console.log('[ERRO] Canal de registro não encontrado.')
if(!message) return msg.reply(`Você precisa inserir a mensagem, siga as istruções da mensagem fixada`).then(msg => msg.delete({timeout : 1000 * 3}));
let embed = new Discord.MessageEmbed()
.setTitle(`Novo registro`)
.setDescription(`De: **${user.tag}**`)
.setThumbnail(user.displayAvatarURL())
.addField(`Conteudo do registro:`, `${message}`)
.setTimestamp();

const CResgi = await ChannelRegistro.send(embed);
CResgi.react('✔️')
.then(()=> CResgi.react('✖️'))
.then(()=> CResgi.react('➜'))
.then(()=> CResgi.react('❗️'))
.then(()=> user.roles.remove(RoleRegistre))
.then(()=> user.roles.add(Roleregistrado))
.catch(err =>{
console.error(err).then(() => CONSOLE.send(`ERRO: **${err}**`));
});
const filter = (reaction, Muser) =>{
        return['✔️','✖️','➜','❗️'].includes(reaction.emoji.name) && Muser !== msg.author.bot
};
message.awaitReactions(filter , {max : 1 })
.then(collected =>{
        const reaction = collected.first();
        switch(reaction.emoji.name){
                case '✔️':
                message.delete();
                user.member.roles.add(ContVerif)
                .then(()=>{
                user.member.roles.remove(Roleregistrado);
                ChannelRegistro.send(`${user.tag} registrado com sucesso!`);
                })
                .catch(err =>{
                console.error(err).then(() => CONSOLE.send(`ERRO '✔️' : **${err}**`));
});
        case '✖️':
        message.delete();
        user.member.roles.remove(Roleregistrado)
        .then(()=>{
        user.member.roles.add(RoleRegistre)
        ChannelRegistro.send(`Registro revogado com sucesso!`)
        user.send(`O seu registro foi recusado, faça novamente com atenção!`);
        })
        .catch(err =>{
        console.error(err).then(() => CONSOLE.send(`ERRO '✖️' : **${err}**`));
});
        case '➜':
        message.delete();
        user.kick()
        .then(()=>{
        ChannelRegistro.send(`O registro do ${user.tag} foi recusado e foi expulso.`)
        })
        .catch(err =>{
        console.error(err).then(() => CONSOLE.send(`ERRO '➜' : **${err}**`));
});
         case '❗️':
        message.delete()
        .then(()=>{
        user.send(`Você foi banido por falso registro ou fake`).then(() => ChannelRegistro.send(`O ${user.tag} foi banido por decição do adminstrador.`));
})
        .then(()=>{
        user.ban();
})
        .catch(err =>{
        console.error(err).then(() => CONSOLE.send(`ERRO '❗️' : **${err}**`));
});
        default :
        return; 
}}).catch(err =>{
        console.error(err).then(() => CONSOLE.send(`ERRO : **${err}**`));
});
};