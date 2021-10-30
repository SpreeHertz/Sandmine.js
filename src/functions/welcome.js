// Delete this file if you don't want your bot to welcome.

const { welcome } = require('../../config.json').welcomeMessage;
const bot = require('../../index');

bot.once('spawn', () => {
	bot.chat(`${welcome} | Made by SpreeHertz`);
});

