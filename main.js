const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });


client.once('ready', () => {
    console.log('Lady Green is online!');
});




client.login('your-token');
