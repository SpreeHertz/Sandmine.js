// Delete this file if you don't want your bot to welcome.
const bot = require('../../index');

bot.once('spawn', () => {
	bot.chat(`Hey!`);
});

