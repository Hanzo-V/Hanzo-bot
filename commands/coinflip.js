const config = require('../config.json');
module.exports = async (client,msg) =>{
var coin = Math.floor(Math.random() * 20);
var coin_string = '';

if (coin % 3 === 0)
    coin_string += "**cara**";
else
    coin_string += "**coroa**";
    return msg.reply(`Você jogou a moeda e caiu em ${coin_string}!`);
};
