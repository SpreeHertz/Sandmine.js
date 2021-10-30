const bot = require('../../index');
const { username } = require('./config.json').username;
const chalk = require('chalk');

bot.on('ready', () => {
	console.log(chalk.greenBright(`${username} is ready to connect to your server!`));
});