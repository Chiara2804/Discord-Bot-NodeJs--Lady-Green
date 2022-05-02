const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "-";

client.once('ready', () => {
    console.log('Lady Green is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong! 😛🏓');
    } else if (command === 'help') {
        message.channel.send('Ciao! Sono Lady Green. 🍃🌻');
    }
});


client.login('your-token');
