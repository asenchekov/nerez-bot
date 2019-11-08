/*
  On ready event handler function
  TODO send motivation messages on the weekend and set bot statuses
*/

module.exports = (bot) => {
  const channel = bot.channels.array()
    .filter((ch) => ch.type === 'text' && ch.guild.name === 'asenchekov')[0];
  console.info(`Logged in as ${bot.user.tag}!`);
  // console.log(channel.guild.presences);
};