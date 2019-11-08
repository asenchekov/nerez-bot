module.exports = (message) => {
  if ((message.content.split(' ').includes('mic')
    || message.content.split(' ').includes('microphone')
    || message.content.includes('hear me'))
    && message.author.id !== '639388710990774283') {
      let responses = [
        "it's the worst.\nSeriously let me buy one for you, cheap fuck",
        "OMG, buy new one and send me the receipt, noob",
        "it's about time you buy a proper mic",
        "Your RODIONO needs you soldier, and a mic is essential",
        "I can hear you.\n You sound like a cow being raped"
      ];
      message.reply(responses[Math.floor(Math.random() * responses.length)]);
  } else if (message.content.split(' ').includes('headphones')
      && message.author.id !== '639388710990774283') {
        let responses = [
          "No, they're fine, you're deaf",
          "it's really bad, go buy new one and send me the receipt man",
          "it's about time you buy a proper headset"
        ];
        message.reply(responses[Math.floor(Math.random() * responses.length)]);
  }
};