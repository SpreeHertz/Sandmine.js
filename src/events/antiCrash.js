const chalk = require('chalk');

// no port
if (process.env.port) {
	console.log(chalk.yellowBright('warn') +
    chalk.red(` You have not specified your port properly. Your bot will have issues while connecting to your server.`));
}

// no host
if (process.env.host) {
	console.log(chalk.yellowBright('warn') +
    chalk.red(' You have not specified the host properly.\nIf you\'re using a local server, it\'s recommdned that you use localhost.'));
}

// no username
if (process.env.bot_username) {
	console.log(chalk.yellowBright('warn') +
    chalk.red(' You have not specified your bot username. Please specify it and run this project again.'));
}

// anti crash

module.exports = () => {
	process.on('unhandledRejection', (reason, p) => {
		console.log(chalk.blueBright('[antiCrash.js]') + chalk.red('Unhandled rejection/crash detected.'));
		console.log(reason, p);
	});
	process.on("uncaughtException", (err, origin) => {
		console.log(chalk.blueBright('[antiCrash.js]') + chalk.red('Uncaught exception/catch detected.'));
		console.log(err, origin);
	});
	process.on('uncaughtExceptionMonitor', (err, origin) => {
		console.log(chalk.blueBright('[antiCrash.js]') + chalk.red('Uncaught exception/catch detected. (Monitor)'));
		console.log(err, origin);
	});
	process.on('multipleResolves', (type, promise, reason) => {
		console.log(chalk.blueBright('[antiCrash.js]') + chalk.red('Multiple resolves detected.'));
		console.log(type, promise, reason);
	});
};
