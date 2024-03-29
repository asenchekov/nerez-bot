require("dotenv").config();
const http = require("http");
const { Client } = require("discord.js");

const { keepAlive } = require("./keepAliveFunction");
const { respond } = require("./onMessageResponse");

const bot = new Client();
const TOKEN = process.env.TOKEN;
const PORT = process.env.PORT;

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", respond);

bot.login(TOKEN);

http
  .createServer((req, res) => {
    res.write("Hello World!");
    res.end();
  })
  .listen(PORT);

keepAlive();
