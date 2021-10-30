# TK

TK is a simple minecraft bot, with several cool functions, all made with JavaScript.

### Features

**Note:** This minecraft bot is still under development, so some things may not be stable.

For now, it can:

1. Look at nearest player 
2. Pathfind
3. Welcome

### Credits

This bot is made possible with [mineflayer](https://github.com/prismarinejs/mineflayer) and its other packages.

### License

This project is licensed under the **GPL General Public License v3.0.** See the LICENSE file for details.


# Docs

You can make your own version of TK. 

## Step 1: Credentials

1. Go to [`config.json`](https://github.com/spreehertz/tk/blob/master/config.json) and give your bot a username.

## Opening a LAN World (Local PC)
If you're planning to make a local connection, you **must follow** this step.

1. Open Minecraft and open your Single player world.

2. 


x. Go to `.env.example`, and specify a port and host. (If you wanna host it locally, the value `localhost` is recommended.)
x. Rename `.env.example` to `.env.`

## Step 2: Configuration

Go to `config.json`. There are some values you'll see. Here's what they do:

`welcomeMessage` - This is the message that will pop up in the Minecraft chat as soon as it spawns in the server.

`playerToLook` - This is the player that the bot should look at. Default is `SpreeHertz`, **please change it to your Minecraft in game name.**