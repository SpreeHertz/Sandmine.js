const bot = require('../../index');
const chalk = require('chalk');

bot.on('kicked', () => {
	console.log(chalk.yellowBright('warn') + chalk.yellow(` ${process.env.bot_username} got kicked/banned from the server, or the server was stopped.`));
});
