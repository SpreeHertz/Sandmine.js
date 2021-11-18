const mineflayerViewer = require('prismarine-viewer').mineflayer;
const bot = require('../../index');
const chalk = require('chalk');

bot.once('spawn', () => {
	mineflayerViewer(bot, { port: 3000 });
	console.log(chalk.blueBright(`You can view your bot on your browser by going to https://localhost:3000.`));

	// Draw the path followed by the bot
	const path = [bot.entity.position.clone()];
	bot.on('move', () => {
		if (path[path.length - 1].distanceTo(bot.entity.position) > 1) {
			path.push(bot.entity.position.clone());
			bot.viewer.drawLine('path', path);
		}
	});
});
