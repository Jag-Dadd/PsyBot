const dateFormat = require("dateformat");
const GuildString = require("../login").guild;

class Utils {
    /**
     * Logs anything, provide the name to display, then comma seperated similar to console.log
     * @param {string} provClass Name to display in log
     */
    static log(provClass) {
        if(provClass == null)
            provClass = "Unknown";
        
        let date = Date.now();
        let formattedDate = dateFormat(date, "isoDateTime");
		process.stdout.write(`[${formattedDate}] <${provClass}>: `);
        
        //Remove first argument (argument is not an array object, so have to do it manually)
        for (var i=0;i<arguments.length;i++) 
            arguments[i]=arguments[i+1];
        arguments.length = arguments.length - 1;

		console.log(...arguments);
    }
    
    /**
     * Strips the \<>@#&! letters from a string, as these are used in discord messages as the underlying mentions.
     * @param {string} content 
     */
    static stripHeaderFromType(content) {
        return content.replace(/[\\<>@#&!]/g, "");
    }

    /**
     * Returns the discord guild that this bot is running on.
     * @typedef {import('discord.js').Client} DiscordClient
     * @typedef {import('discord.js').Guild} DiscordGuild
     * @param {DiscordClient} client 
     * @returns {DiscordGuild}
     */
    static getGuild(client) {
        return client.guilds.get(GuildString);
    }
}

module.exports = Utils;