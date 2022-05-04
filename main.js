const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "-";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Lady Green is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command === 'start') {
        client.commands.get('start').execute(message, args);
    } else if (command === 'rules') {
        client.commands.get('rules').execute(message, args, Discord);
    } else if (command === 'author') {
        client.commands.get('author').execute(message, args, Discord);
    }
});

client.on('message', gotMessage);

function gotMessage(message) {
    if (message.content === 'ciao') {
        message.reply('Hi! I can help you to be more eco-friendly.\nDo you like to talk to me?\n[yes/no]');
    }
}

client.login('your-token');
