// Do not delete/modify this file unless you know what you're doing.

const bot = require('../../index');
const chalk = require('chalk');

bot.on('disconnect', () => {
	console.log(chalk.yellowBright(`warn`) + chalk.red(` ${process.env.bot_username} was disconnected from ${process.env.host}:${process.env.port}`));
});