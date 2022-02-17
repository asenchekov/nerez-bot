const moment = require("moment");
const responses = require("./responses");

module.exports = {
  respond(message) {
    const mentioned = message.mentions.users.has("639388710990774283");

    if (message.content.split(" ").includes("gametime") && mentioned) {
      const { channel } = message;
      const date = moment(
        message.content.slice(message.content.indexOf("gametime") + 9),
      );

      if (date.isValid() && date > moment()) {
        channel.send(
          `@everyone\n\`\`\`diff\n+ Next GameTime will be ${date.format(
            "LLL",
          )} (GMT)\n\`\`\``,
        );

        const timeout = (date.unix() - moment().unix()) * 1000;
        if (timeout > 60 * 60 * 1000) {
          setTimeout(() => {
            channel.send(
              "@everyone\n```diff\n+ GameTime starts in 1h!!!\n+ Take a dump, tell your wife that this is a legit hobby it's not only for kids```",
            );
          }, timeout - 60 * 60 * 1000);
        }

        if (timeout > 30 * 60 * 1000) {
          setTimeout(() => {
            channel.send(
              "@everyone\n```diff\n+ GameTime starts in 30min!!!\n```",
            );
          }, timeout - 30 * 60 * 1000);
        }

        setTimeout(() => {
          channel.send("@everyone\n```diff\n+ It's GameTime BOOOOOYS!!!\n```");
        }, timeout);
      } else {
        message.reply(
          "Please format properly the date and make sure it's in the future",
        );
      }
    } else if (message.content.split(" ").includes("commands") && mentioned) {
      message.reply(
        "For now I can only make game appointments, this is how:\nwrite `@nEREZ gametime date time` \nplease format <date time> like `2020-02-23 18:20`\nonly GMT time cuz we in LNDN!",
      );
    } else if (
      (message.content.split(" ").includes("mic") ||
        message.content.split(" ").includes("microphone") ||
        message.content.includes("hear me")) &&
      message.author.id !== "639388710990774283"
    ) {
      const respond = responses.mic;
      message.reply(respond[Math.floor(Math.random() * respond.length)]);
    } else if (
      message.content.split(" ").includes("headphones") &&
      message.author.id !== "639388710990774283"
    ) {
      const respond = responses.headphones;
      message.reply(respond[Math.floor(Math.random() * respond.length)]);
    } else if (mentioned) {
      message.reply(
        "Hello, I'm nEREZ, write `@nEREZ commands`\nto see what Asen made me do",
      );
    }
  },
};
