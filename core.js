/* Definições e requirimentos para o bom fuincionamento do bot. */
const Discord       = require("discord.js");
const client        = new Discord.Client();
const config        = require("./config.json");
const fs = require('fs');

// Pasta de eventos 
const evtFiles = fs.readdirSync('./events/');
console.log(`Foi carregado um total de ${evtFiles.length} eventos`)
evtFiles.forEach(f => {
  try {
const eventName = f.split('.')[0]
const event = require(`./events/${f}`);

client.on(eventName, event.bind(null, client))
  } catch (err) {
    console.log(`O arquivo ${f} está com problemas e não pode ser executado.\n${err}`);
  }
});

client.login(config.token);