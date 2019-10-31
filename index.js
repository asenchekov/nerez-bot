require('dotenv').config();
const http = require('http');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PORT = process.env.PORT;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if ((msg.content.split(' ').includes('mic')
    || msg.content.split(' ').includes('microphone'))
    && msg.author.id !== '639388710990774283') {
      let responses = [
        "your mic is the worst.\nSeriously let me buy one for you.",
        "it's really bad, buy new one and send me the receipt man.",
        "it's about time you buy a proper mic."
      ];
      msg.reply(responses[Math.floor(Math.random() * responses.length)]);
  } else if (msg.content.split(' ').includes('headphones')
      && msg.author.id !== '639388710990774283') {
        let responses = [
          "your headphones are the worst.\nSeriously let me buy one for you.",
          "it's really bad, buy new one and send me the receipt man.",
          "it's about time you buy a proper headset."
        ];
        msg.reply(responses[Math.floor(Math.random() * responses.length)]);
  }
});

http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(PORT); //the server object listens on port 8080
