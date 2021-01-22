const config = require('../config.json');

module.exports = async (client, msg) => {
const m = await msg.channel.send('ping?');
m.edit(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp - msg.createdTimestamp}ms.**\nLatência da API: **${Math.round(client.ws.ping)}ms**`);
};