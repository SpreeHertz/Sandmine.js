const chalk = require('chalk');
const bot = require('../../index');

// no port
if (!process.env.port) {
	console.log(chalk.yellowBright('warn') +
    chalk.red(` You have not specified your port properly. Your bot will have issues while connecting to your server.`));
}

// no host
if (!process.env.host) {
	console.log(chalk.yellowBright('warn') +
    chalk.red(' You have not specified the host properly. If you\'re using a local server, it\'s recommended that you use localhost. Need help? Read the docs: https://sandmine.js.org'));
}

// no username
if (!process.env.bot_username) {
	console.log(chalk.yellowBright('warn') +
    chalk.red(' You have not specified your bot username. Please specify it and run this project again. Need help? Read the docs: https://sandmine.js.org'));
}

// if nothing
if (!process.env.bot_username && !process.env.host && !process.env.port) {
	console.log(chalk.yellowBright('warn') + chalk.red('You have not specified anything. Please read the docs by going to https://sandmine.js.org.'));
}

// isNaN
if (process.env.port === isNaN) {
	console.log(chalk.yellowBright('warn') + chalk.red('It looks like the port you specified is not a number. Make sure you\'ve specified everything correctly. Need help? Read the docs: https://sandmine.js.org'));
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

bot.on('error', (err, origin) => {
	console.log(chalk.redBright(`error`) + chalk.red(` ${process.env.bot_username} encountered an error. ${err || 'Unknown'}, Origin: ${origin || 'Unknown'}`));
});