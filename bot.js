const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES
  ] 
  });
const token = process.env['token']
client.on('ready', () => {
  console.log(`successfully logged in`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  else if (interaction.commandName === 'date'){
    await interaction.reply('date goes here');
  }
});

client.on('messageCreate', (message) => {
  if(message.content === "!date"){
    message.channel.send('test complete');
  }
  else if(message.content === "!version"){
    message.channel.send('current version: 1.0.0 BETA');
  }
});

client.login(token);