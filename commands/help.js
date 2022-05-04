module.exports = {
    name: "help",
    description: "this is a help command!",
    execute(message, args, Discord) {
        const rules = new Discord.MessageEmbed().setColor('#93C47D')
            .setTitle("🦸‍♀️ HELP")
            .addFields({ name: 'Commands', value: '\n-ping \n-rules \n-help \n-start \n-author', inline: true })
            .addFields({ name: 'Rules', value: 'No spamming\nBe respectful\nNo spamming\nHave fun!', inline: true })
            .addFields({ name: 'Guide to the channel', value: '#some values...' })
            .addFields({ name: 'About me:', value: 'I am a bot made for Progetto NERD. I hope to be useful to you to be more eco-friendly.' })
            .addFields({ name: 'ID', value: '960788911624425542', inline: true })
            .addFields({ name: 'Username', value: 'Lady Green', inline: true })
            .addFields({ name: 'Authors', value: 'Chiara mancarella\nMatilde Ruffino\nIlaria Boscolo Nata' });
        message.channel.send(rules);
    }
}
