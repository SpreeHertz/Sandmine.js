const bot = require('../../index');


bot.on('saturation', () => {
	bot.consume();
});