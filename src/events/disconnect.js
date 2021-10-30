const bot = require('../../index');
const chalk = require('chalk');
const username = require('../../config.json').username;

bot.on('disconnect', () => {
	console.log(chalk.yellowBright(`warn`) + chalk.red(` ${username} was disconnected from ${process.env.host}:${process.env.port}`));
});