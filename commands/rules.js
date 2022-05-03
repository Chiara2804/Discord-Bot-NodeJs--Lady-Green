module.exports = {
    name: "rules",
    description: "Embeds",
    execute(message, args, Discord) {
        const rules = new Discord.MessageEmbed().setColor('#93C47D').setTitle("RULES").addFields({ name: 'Rule 1', value: 'No spamming' }, { name: 'Rule 2', value: 'Be respectful' }, { name: 'Rule 3', value: 'No spamming' }, { name: 'Rule 4', value: 'Have fun!' }).setImage('https://github.com/Chiara2804/Lady-Green/blob/main/imgs/grazie.png?raw=true');
        message.channel.send(rules);
    }
}