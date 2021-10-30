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
// Handlers
// Function folder
const files = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));

for (const file of files) {
	const eventName = file.split(".")[0];
	console.log(chalk.cyanBright(`${eventName}.js`) + chalk.greenBright(` has been loaded.`));
}

// Events
const eFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
for (const file of eFiles) {
	const eventName = file.split(".")[0];
	console.log(chalk.magentaBright(`${eventName}.js`) + chalk.blue(` event handler has been loaded.`));
}

bot.loadPlugin(pathfinder);
