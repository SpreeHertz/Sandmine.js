const bot = require('../../index');

bot.on('spawn', async () => {
	setInterval(() => {
		const mobFilter = e => e.type === 'mob' && e.mobType === 'Chicken';
		const mob = bot.nearestEntity(mobFilter);

		if (!mob) return;
		const pos = mob.position;
		bot.lookAt(pos, true, () => {
			bot.attack(mob);
		});
	});
});