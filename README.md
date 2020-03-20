# Discord Clock Bot

This is a Discord bot using Node.js for displaying the current time for a channel.

## Hosting

Clone this repository, install Node.js, and create your own `secret.js` with the following info:
 
* Bot Token
* Channel ID
* Timezone

To get the **Bot Token**, do the following:

* Go to https://discordapp.com/developers/applications
* Press 'new application'
* Name it, then press create.
* Select the 'Bot' tab from the side of the screen.
* Press 'Add Bot'
* Press 'Copy' below the token

To get the **Channel ID**, do the following:

* On Discord, open your User Settings -> Appearance -> Enable Developer Mode
* Rightclick on the Discord text channel you want the bot to interact with and press "Copy ID"

For the the **timezone**, use one of the [TZ database names](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (e.g.: `America/Los_Angeles`).
