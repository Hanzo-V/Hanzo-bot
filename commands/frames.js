const config = require("../config.json");
const frames = [
	'(-°□°)-  ┬─┬',
	'(╯°□°)╯    ]',
	'(╯°□°)╯  ︵  ┻━┻',
	'(╯°□°)╯       [',
	'(╯°□°)╯           ┬─┬'
];
module.exports = async (client,msg) => {
const pin = await msg.channel.send('(\\\\°□°)\\\\  ┬─┬');
    for (const frame of frames) {
    setTimeout(() => {
    }, 1000);
    await pin.edit(frame);
    }
return pin;
};