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
    }

    if (message.content === '!paolo') {
        message.channel.send('https://github.com/belfortep');
    }


})


client.login(process.env.TOKEN);

