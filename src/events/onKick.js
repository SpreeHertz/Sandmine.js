// Do not delete/modify this file unless you know what you're doing.

const bot = require('../../index');
const chalk = require('chalk');

bot.on('kicked', () => {
	console.log(chalk.yellowBright('warn') + chalk.yellow(` ${process.env.bot_username} got kicked/banned from the server, or the server was stopped. Also, make sure that the bot is whitelisted if you're running this in a public server.`));
});
