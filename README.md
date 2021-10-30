# TK

TK is a simple minecraft bot, with several cool functions, all made with JavaScript.

# Table of contents

<a href="#features">• Features</a> <br>
<a href="#credits"> • Credits</a> <br>
<a href="#license"> • License</a> <br> <br>

<a href="#docs">• <b>Docs<b> </a> <br>
<a href="#credentials"> • Credentials </a> <br>
<a href="#open-lan"> • Open LAN World </a> <br>
<a href="#config"> • Configuration </a> <br>


### Features

<div id="features">

**Note:** This minecraft bot is still under development, so some things may not be stable.

For now, it can:

1. Look at nearest player 
2. Pathfind
3. Welcome
</div>

### Credits
<div id="credits">

This bot is made possible with [mineflayer](https://github.com/prismarinejs/mineflayer) and its other packages.

</div>

### License
<div id="#license">
This project is licensed under the **GPL General Public License v3.0.** See the LICENSE file for details.

</div>

# Docs
<div id="#docs">
You can make your own version of TK. 
</div>

## Step 1: Opening LAN World
<div id="#open-lan">

If you're planning to make a local connection, you **must follow** this step.

1. Open Minecraft and open your Single player world.

2. 


## Step 2: Configuration
<div id="#config">

x. Go to `.env.example`, and specify a port and host. (If you wanna host it locally, the value `localhost` is recommended.)
x. Rename `.env.example` to `.env.`

Go to `config.json`. There are some values you'll see. Here's what they do:

`welcomeMessage` - This is the message that will pop up in the Minecraft chat as soon as it spawns in the server.

`playerToLook` - This is the player that the bot should look at. Default is `SpreeHertz`, **please change it to your Minecraft in game name.**