
module.exports = {
  respond ({ content, author, reply }) {
    if ((content.split(' ').includes('mic')
      || content.split(' ').includes('microphone')
      || content.includes('hear me'))
      && author.id !== '639388710990774283') {
        let responses = [
          "it's the worst.\nSeriously let me buy one for you, cheap fuck",
          "OMG, buy new one and send me the receipt, noob",
          "it's about time you buy a proper mic",
          "Your RODIONO needs you soldier, and a mic is essential",
          "I can hear you.\n You sound like a cow being raped"
        ];
        reply(responses[Math.floor(Math.random() * responses.length)]);
    } else if (content.split(' ').includes('headphones')
        && author.id !== '639388710990774283') {
          let responses = [
            "No, they're fine, you're deaf",
            "it's really bad, go buy new one and send me the receipt man",
            "it's about time you buy a proper headset"
          ];
          reply(responses[Math.floor(Math.random() * responses.length)]);
    }
  }
}