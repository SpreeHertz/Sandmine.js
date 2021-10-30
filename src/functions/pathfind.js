// Delete this file if you don't need pathfinding.

const bot = require('../../index');
const { Movements, pathfinder, goals } = require('mineflayer-pathfinder');
const playerIGN = require('../../config.json').playerToLook;
const GoalFollow = goals.GoalFollow;

bot.loadPlugin(pathfinder);


const followPlayer = () => {
	const playerToFollow = bot.players[playerIGN];

	if (!playerToFollow || !playerToFollow.entity) {
		bot.chat(`I can't see you ${playerIGN}`);
		return;
	}
	const mcData = require('minecraft-data')(bot.version);
	const movements = new Movements(bot, mcData);
	bot.pathfinder.setMovements(movements);

	const goal = new GoalFollow(playerToFollow.entity, 1);
	bot.pathfinder.setGoal(goal, true);
};


bot.on('spawn', () => {
	followPlayer();
});
