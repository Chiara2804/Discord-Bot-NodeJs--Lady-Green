module.exports = {
    name: "author",
    description: "Author",
    execute(message, args, Discord) {
        const rules = new Discord.MessageEmbed().setColor('#93C47D').setTitle("AUTHORS").addFields({ name: 'Chiara Mancarella', value: 'Some value here' }, { name: '\u200B', value: '\u200B' }, { name: 'Matilde Ruffino', value: 'Some value here' }, { name: '\u200B', value: '\u200B' }, { name: 'Ilaria Boscolo Nata', value: 'Some value here' }, { name: '\u200B', value: '\u200B' });
        message.channel.send(rules);
    }
}