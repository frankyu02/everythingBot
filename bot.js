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
//returns a date prefix
function getDatePrefix(date){
  if(date % 10 === 1){
    return "st ";
  }
  else if(date % 10 === 2 ){
    return "nd ";
  }
  else if(date % 10 === 3 && date !== 13){
    return "rd ";
  } else{
    return "th ";
  }
}
//array of months for date commands
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//get date
const date = new Date()
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  
  if (interaction.commandName === 'date'){
    await interaction.reply("Today's date: " + months[date.getMonth()] + ' ' + 
    date.getDate() + getDatePrefix(date.getDate()) + date.getFullYear() + '.');
  }
  if (interaction.commandName === 'version'){
    await interaction.reply('current version 1.0.0 BETA');
  }
});

client.on('messageCreate', (message) => {
  //returns the date
  if(message.content === "!date"){
    message.channel.send("Today's date: " + months[date.getMonth()] + ' ' + 
    date.getDate() + getDatePrefix(date.getDate()) + date.getFullYear() + '.');
  }
  //returns bot version
  else if(message.content === "!version"){
    message.channel.send('current version: 1.0.0 BETA');
  }
});

client.login(token);