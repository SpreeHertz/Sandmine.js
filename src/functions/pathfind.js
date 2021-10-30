// Delete this file if you don't need pathfinding.

const bot = require('../../index');
const { Movements } = require('mineflayer-pathfinder');
const playerIGN = require('../../config.json').playerToLook;

// Pathfind the player
const followPlayer = () => {
	const playerToFollow = bot.players[playerIGN];

	if (!playerToFollow) {
		return bot.chat(`I can't see you ${playerIGN}`);
	}
	const mcData = require('minecraft-data')(bot.version);
	const movements = new Movements(bot, mcData);
	bot.pathfinder.setMovements(movements);
};

bot.on('spawn', () => {
	followPlayer();
});