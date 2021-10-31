const bot = require('../../index');
const killMob = require('../../config.json').mobToKill;

bot.on('spawn', async () => {
	setInterval(() => {
		const mobFilter = e => e.type === 'mob' && e.mobType === killMob;
		const mob = bot.nearestEntity(mobFilter);

		if (!mob) return;
		const pos = mob.position;
		bot.lookAt(pos, true, () => {
			bot.attack(mob);
		}, 1000);
	});
});