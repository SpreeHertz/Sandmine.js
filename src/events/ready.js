const bot = require('../../index');
const chalk = require('chalk');

bot.on('ready', () => {
	console.log(chalk.greenBright(`${process.env.bot_username} is ready to connect to your server!`));
});