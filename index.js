const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });//el bot

client.on('ready', () => {
    console.log('Bot connected as ' + client.user.tag);
    client.user.setStatus('dnd');



});

client.on('messageCreate', (message) => {



    if (message.content === 'hello') {
        message.channel.send('hi');
    }

    if (message.content.includes('!test')) {
        message.channel.send('testing');
        message.delete()
    }

    if (message.content === '!paolo') {
        message.channel.send('https://github.com/belfortep');
    }

    if (message.content === '!nice') {
        const niceMessage = new Discord.MessageEmbed()
            .setTitle('A nice message')
            .setColor('RED')
            .addField('Something', "Lorem")
            .setAuthor('Paolo', 'https://avatars.githubusercontent.com/u/75280184?v=4')

        message.channel.send({ embeds: [niceMessage] })

    }

})


client.login(process.env.TOKEN);

