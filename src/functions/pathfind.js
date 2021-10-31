// Delete this file if you don't need pathfinding.

const bot = require('../../index');
const { Movements, pathfinder, goals } = require('mineflayer-pathfinder');
const GoalFollow = goals.GoalFollow;

bot.loadPlugin(pathfinder);

bot.on('spawn', () => {
	bot.on('chat', (username, message) => {
		if (username === bot.username) return;
		if (message === 'follow me' || message === 'come' || message === 'follow me bot' || message === 'come with me' || message === 'come w/ me') {
			bot.chat('Sure, following you.');
		}


		const target = bot.players[username]?.entity;
		if (!target || !target.entity) {
			bot.chat(`I can't see you ${target}!`);
			return;
		}

		const mcData = require('minecraft-data')(bot.version);
		const movements = new Movements(bot, mcData);
		bot.pathfinder.setMovements(movements);

		const goal = new GoalFollow(target.entity, 1);
		bot.pathfinder.setGoal(goal, true);
		if (message === 'stop following me' || message === 'stop following' || message === 'stop') {
			bot.chat('Stopped following you.');
		}
	});

});