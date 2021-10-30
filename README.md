# Sandmine.js

**Sandmine.js** is a simple minecraft bot, with several cool functions, all made with JavaScript. 

Contributions are always welcome! 

# Table of contents

<a href="#features">• Features</a> <br>
<a href="#credits"> • Credits</a> <br>
<a href="#license"> • License</a> <br>
<a href="#docs">• <b>Docs</b> </a> <br>
<a href="#step-1-opening-lan-world"> • Open LAN World </a> <br>
<a href="#configuration"> • Configuration </a> <br>


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
You can make your own version of Sandmine.js. Please follow all the steps required for you to have a good experience.
</div>

## Step 1: Installation
<div id="step-1-installation">

Install [VSCode](https://code.visualstudio.com/download) (or any other IDE you like), [Git](https://git-scm.com/download/), and [Node.js](https://nodejs.org)

</div>


## Step 2: Opening LAN World
<div id="#step-2-opening-lan-world">

If you're planning to make a local connection, you **must follow** this step.

1. Open Minecraft and open your Single player world.

2. 


## Step 3: Configuration
<div id="#configuration">

x. Go to `.env.example`, and specify a port and host. (If you wanna host it locally, the value `localhost` is recommended.)
x. Rename `.env.example` to `.env.`

Go to `config.json`. There are some values you'll see. Here's what they do:

`welcomeMessage` - This is the message that will pop up in the Minecraft chat as soon as it spawns in the server.

`playerToLook` - This is the player that the bot should look at. Default is `SpreeHertz`, **please change it to your Minecraft in game name.**