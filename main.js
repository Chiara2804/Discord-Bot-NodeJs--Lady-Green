const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Lady Green is online!');
});




client.login('your-token');
