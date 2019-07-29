const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Script By Islem");


client.on("ready", () => {
let channel =     client.channels.get("603944494550876176")
setInterval(function() {
channel.send(`ISlem BC BOt ISlem BC BOt ISlem BC BOt ISlem BC BOt ISlem BC BOt ISlem BC BOt ISlem BC BOt ISlem BC BOt ISlem BC BOt ISlem BC BOt ISlem BC BOt `);
}, 30)
})

client.login(process.env.BOT_TOKEN);