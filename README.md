# Sandmine.js

**Sandmine.js** is a simple minecraft bot, with several cool functions, all made with JavaScript. 

Contributions are always welcome! You can open a pull request by [clicking here](https://github.com/spreehertz/sandmine.js/pulls). <br>
Found an issue? Report it by [clicking here](https://github.com/spreehertz/sandmine.js/issues).

# Table of contents

<a href="#features">• Features</a> <br>
<a href="#credits"> • Credits</a> <br>
<a href="#license"> • License</a> <br>
<a href="#docs">• <b>Docs</b> </a> <br>
[• Installation](#step-1-installation)
<a href="#step-1-opening-lan-world"> • Open LAN World </a> <br>
<a href="#configuration"> • Configuration </a> <br>


## Features
**Note:** This minecraft bot is still under development, so some things may not be stable.

For now, it can:

1. Look at nearest player 
2. Pathfind
3. Welcome

## Credits
This bot is made possible with [mineflayer](https://github.com/prismarinejs/mineflayer) and its other packages.


## License
This project is licensed under the **GPL General Public License v3.0.** See the LICENSE file for details.

# Docs
You can make your own version of Sandmine.js. Please follow all the steps required for you to have a good experience.

## Step 1: Installation
Install [VSCode](https://code.visualstudio.com/download) (or any other IDE you like), [Git](https://git-scm.com/download/), and [Node.js](https://nodejs.org)




## Step 2: Opening LAN World

If you're planning to make a local connection, you **must follow** this step.

1. Open Minecraft and open your Single player world.

2. Go to your Game Menu and Click on `Open to LAN`. <br>
![image](https://user-images.githubusercontent.com/48062454/139525364-e271a2e6-830d-4dba-9153-6d8a62ee92c1.png)

3. After that, click on `Start LAN World`. <br>
![image](https://user-images.githubusercontent.com/48062454/139525379-a046e04e-0ec5-4b67-9003-9091f306ae78.png)

4. You'll now see a new message pop up on your Minecraft chat specifying the port. **Please note it, and make sure that you do NOT copy mine since it's different for everyone.**
![image](https://user-images.githubusercontent.com/48062454/139525397-51c01aca-d1c1-4bc0-9509-4c76e99b0ae9.png)

  
## Step 3: Configuration

1. Go to `.env.example`, and specify the port that I told you to note in the previous subtopic.
2. For `host=`, Giving it localhost is recommended.
2. Finally, rename `.env.example` to `.env.`

Go to `config.json`. There are some values you'll see. Here's what they do:

`welcomeMessage` - This is the message that will pop up in the Minecraft chat as soon as it spawns in the server.

`playerToLook` - This is the player that the bot should look at. Default is `SpreeHertz`, **please change it to your Minecraft in game name.**
