 module.exports = async (client, msg,args) =>{
const milos = client.emojis.cache.get('799308473581174784'),
      gato_d = client.emojis.cache.get('799310226456444938'),
      pepe_sad = client.emojis.cache.get('797107220504510475'),
      pato_pepe = client.emojis.cache.get('797105462851403777');
const rng = Math.floor((Math.random() * 1000) +1);
const pedra = "pedra",
      papel = "papel",
      tesoura = "tesoura"
if(args[0] == pedra || args[0] == papel || args[0] == tesoura){
if(args[0] === pedra && rng > 0 && rng <= 34){ 
    msg.reply(`pedra, empatamos ${milos}`)
} else if(args[0] === pedra && rng > 34 && rng <= 67){
    msg.reply(`Papel, troxa ganhei ${gato_d}`);
} else if(args[0] === pedra && rng > 67 && rng <= 100){
    msg.reply(`Tesoura, perdi ${pepe_sad}`);
} else if(args[0] === papel && rng > 0 && rng <= 34){
     msg.reply(`papel, empatamos ${milos}`);
} else if(args[0] === papel && rng > 34 && rng <= 67){ 
    msg.reply(`tesoura, otario perdeu ${pato_pepe}`);
} else if(args[0] === papel && rng > 67 && rng <= 100){
     msg.reply(`preda, ahhhhh ${pepe_sad}`);
} else if(args[0] === tesoura && rng > 0 && rng <= 34){
    msg.reply(`tesoura, bahh ${milos}`);
} else if(args[0] === tesoura && rng > 34 && rng <= 67){
    msg.reply(`preda, otario hehe ${pato_pepe}`);
} else if(args[0] === tesoura && rng > 67 && rng <= 100){
 msg.reply(`papel, ganhou sfd ${pepe_sad}`);
};
} else {
    return msg.reply(`Digite: ***pedra*** , ***papel*** ou ***tesoura***`).then(msg => msg.delete({timeout : 1000 * 3}));
};
};