// Delete this file if you don't want your bot to look at the nearest player.

const bot = require('../../index');
// Look at an entity
const lookAtNearestPlayer = () => {
	const playerFilter = (entity) => entity.type === 'player';
	const playerEntity = bot.nearestEntity(playerFilter);

	if (!playerEntity) return;

	const pos = playerEntity.position.offset(0, playerEntity.height, 0);
	// If you want the bot to look at your feet change the above line to:
	// const pos = playerEntity.position;

	bot.lookAt(pos);
};


bot.on('physicTick', () => {
	lookAtNearestPlayer();
});