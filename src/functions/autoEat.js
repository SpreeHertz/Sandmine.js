// Delete this file if you don't want your bot to auto eat food.

const bot = require('../../index');
const autoeat = require('mineflayer-auto-eat');
const chalk = require('chalk');

bot.loadPlugin(autoeat);

bot.once('spawn', () => {
	bot.autoEat.options = {
		priority: 'foodPoints',
		startAt: 14,
		bannedFood: [],
	};
});

bot.on('autoeat_started', () => {
	console.log(chalk.green('Started auto-eating.'));
	bot.chat("I'm gonna start eating!");
});

bot.on('autoeat_stopped', () => {
	console.log(chalk.green('Stopped auto-eating.'));
	bot.chat("I'm done eating.");
});

bot.on('health', () => {
	if (bot.food === 20) bot.autoEat.disable();
	else bot.autoEat.enable();
});