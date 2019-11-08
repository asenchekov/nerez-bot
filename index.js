require('dotenv').config();
const http = require('http');
const Discord = require('discord.js');

// Keep alive function to keep heroku server from sleeping
const keepAlive = require('./keepAliveFunction');

// Event handlers
const respond = require('./eventHandlers/onMessage');
const onReady = require('./eventHandlers/onReady');
const onPresenceUpdate = require('./eventHandlers/onPresenceUpdate');

// Discord client instance
const bot = new Discord.Client();

// Token used for bot connection
const TOKEN = process.env.TOKEN;

// Port environmental variable exposed by heroku
const PORT = process.env.PORT;

// Login bot to discord with the token
bot.login(TOKEN);

// on ready event consumer
bot.on('ready', () => {
  return onReady(bot)
});

// on guild member presenceUpdate
bot.on('presenceUpdate', onPresenceUpdate);

// on message event consumer
bot.on('message', respond);

// http server as bot homepage
http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(PORT);

keepAlive();
