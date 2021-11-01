# Sandmine.js

**Sandmine.js** is a simple minecraft bot, with several cool functions, all made with JavaScript. 

Contributions are always welcome! You can open a pull request by [clicking here](https://github.com/spreehertz/sandmine.js/pulls). <br>

More features are coming very soon 😉!

# Table of contents

* [Usage/Features](#usagefeatures)
* [Credits](#credits) 
* [License](#license) 
* **[Docs](#docs)**
* [Step 1: Installation](#step-1-installation)
* [Step 2: Opening LAN World](#step-2-opening-lan-world)
* [Step 3: Configuration](#step-3-configuration)


## Usage/Features

* Auto-eats if you give it appropriate food.
* Consumes stuff.
* Kills a mob when in a particular radius.
* Looks at nearest player.
* Pathfinds the player and gets as close as possible if a player says "`follow me`" and stops if you say "`stop`".
* PvP you if you say "`fight me`" and stops if you say "`stop`".

## Credits
This bot is made possible with [mineflayer](https://github.com/prismarinejs/mineflayer) and its other packages.


## License
This project is licensed under the **GPL General Public License v3.0.** See the LICENSE file for details.

# Docs
You can make your own version of Sandmine.js. Please read the docs fully so that you understand what's happening, and to reduce the amount of errors you may run into.

Also, it would be appreciated if you credit me.

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
Open Visual Studio Code, open a folder, and do:

```cmd
git clone https://github.com/SpreeHertz/Sandmine.js.git
```

then do:
```cmd
cd Sandmine.js-master
```


1. Go to `.env.example`, and specify the port that I told you to note in the previous subtopic. (**Please note that the port always changes when hosting locally everytime you start up your LAN server.**)
2. For `host=`, Give it `localhost` if you're hosting locally.
2. Finally, rename `.env.example` to `.env.`

Go to `config.json`. There are some values you'll see. Here's what they do:

`playerToLook` - This is the player that the bot should look at. Default is `SpreeHertz`, **please change it to your Minecraft in game name.**

`mobToKill` - When the bot sees this particular mob, it will start killing it. If you don't want this feature, you can leave this value empty.

### Step 4: Start the bot 

In order to start the bot, open a New Terminal by clicking on `Terminal` (top) > New Terminal. 

In the terminal, type in:

```cmd
npm install
```

Then do this to start your bot:
 
```cmd
node .
```

For testing purposes, you can do:
```cmd
npm run test
```

To check if there are any code formatting / code styling issues, you can do:
```cmd
npm run lint
```

And there you go! **Your bot should be working properly by now.**

## Errors and how to fix them

### Connection Refused (`ECONNREFUSED`)

If you see a `connect ECONNREFUSED` error, it means that the IP address and/or port that you specified in your `.env` file might be wrong.

When doing `npm run test`, you might see this:
```cmd
[nodemon] clean exit - waiting for changes before restart
```
This occurs when the bot crashes immediately (most probably because of the ECONNREFUSED error).

### Module not found

 * Make sure that you have done `npm i` or `npm install`. 
 * Make sure you have [Node.js](https://nodejs.org) installed. It should be v14 or higher.
 * Make sure you have `cd foldername`. You want your terminal to go inside the folder where you've cloned Sandmine.js.
 * Make sure you haven't deleted any main files like `index.js` or `src/events`. If you don't really have much knowledge of JavaScript, it's recommended that you just delete files from `src/functions` folder to turn off particular functions, unless **you know what you're doing.**

### Other Errors

Are you seeing an error that is not mentioned in this Readme? Well, you should report it by clicking [here](https://github.com/sandmine.js/issues/new). I'd be more than happy to help, and there might be others that are down to help you as well.
