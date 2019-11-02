require('dotenv').config();
const http = require('http');
const Discord = require('discord.js');

const { keepAlive } = require('./keepAliveFunction');
const { respond } = require('./onMessageResponse.js');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PORT = process.env.PORT;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', respond);

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(PORT);

// startKeepAlive();
keepAlive();
