const bot = require('../../index');
const minecraftHawkEye = require('minecrafthawkeye');

bot.loadPlugin(minecraftHawkEye);

bot.on('spawn', () => {
	bot.on('chat', (username, message) => {
		if (username === bot.username) return;
		bot.chat('/give' + bot.username + ' bow{Enchantments:[{id:unbreaking,lvl:3}]} 1');
		bot.chat('/give' + bot.username + ' minecraft:arrow 400');

		if (message === 'fight me w/ bow' || message === 'bow fight me' || message === 'fight me with a bow' || message === 'bow fight') {
			bot.chat(`Starting to fight ${username}...`);
			const player = bot.hawkEye.getPlayer(username);
			if (!player) return false;
			const weapon = 'bow';
			if (!weapon) return bot.chat('I don\'t have a bow/arrow in my inventory.');

			bot.hawkEye.autoAttack(player, weapon);
		}
		if (message === 'stop fighting me') {
			bot.hawkEye.stop();
			bot.chat('Stopped bow fighting. GGs!');
		}
	});
});