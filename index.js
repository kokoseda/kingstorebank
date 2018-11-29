const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


client.on('message', message => {
if(message.content.startsWith('banks')) {
if(message.author.id !== "517409391570583574") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});

client.login(process.env.BOT_TOKEN);
