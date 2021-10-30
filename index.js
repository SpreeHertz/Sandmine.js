const mineflayer = require('mineflayer');
const { pathfinder } = require('mineflayer-pathfinder');
require('dotenv').config();
const chalk = require('chalk');
const fs = require('fs');

// Log
console.log(chalk.blueBright.bold(`Logging into ${process.env.bot_username}...`));

// creating the bot
const bot = mineflayer.createBot({
	host: process.env.host,
	port: parseInt(process.env.port),
	username: process.env.bot_username,
});

module.exports = bot;
const functionFiles = fs.readdirSync('./src/functions').filter(file => file.endsWith('.js'));
for (const file of functionFiles) {
	const functions = require(`./src/functions/${file}`);
	functionFiles.forEach(() => console.log(chalk.cyanBright(`${functions} has been loaded.`)));

}

bot.loadPlugin(pathfinder);
