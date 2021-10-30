// Delete this file if you don't want to welcome.

const { welcome } = require('../../config.json').welcomeMessage.toString();
const bot = require('../../index');

bot.on('spawn', () => {
	// Welcome
	const botWelcome = () => {
		bot.chat(`${welcome}`);
	};

	botWelcome();

});