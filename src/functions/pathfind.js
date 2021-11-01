// Delete this file if you don't need pathfinding.

const bot = require('../../index');
const { Movements, pathfinder, goals } = require('mineflayer-pathfinder');
const GoalFollow = goals.GoalFollow;

bot.loadPlugin(pathfinder);


bot.on('spawn', () => {
	bot.on('chat', (username, message) => {
		if (username === bot.username) return;
		if (message === 'follow me' || message === 'come follow me' || message === 'come to me' || message === 'come') {
			const mcData = require('minecraft-data')(bot.version);
			const movements = new Movements(bot, mcData);
			const target = bot.players[username]?.entity;
			if (!target) {
				bot.chat(`I can't see you ${username}`);
				return;
			}
			else {
				bot.chat('Sure, following you.');
			}
			bot.pathfinder.setMovements(movements);

			const goal = new GoalFollow(target, 1);
			bot.pathfinder.setGoal(goal, true);
		}
		if (message === 'stop following me' || message === 'stop following' || message === 'stop') return bot.chat('Alright.');
	});
});
