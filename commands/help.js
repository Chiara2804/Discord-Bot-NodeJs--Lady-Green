module.exports = {
    name: "help",
    description: "this is a help command!",
    execute(message, args, Discord) {
        const rules = new Discord.MessageEmbed().setColor('#93C47D').setTitle("LIST OF COMMANDS").addFields({ value: '\n-ping \n-rules \n-help \n-start \n-author' });
        message.channel.send(rules);
    }
}