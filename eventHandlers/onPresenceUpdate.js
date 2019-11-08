module.exports = (oldMember, newMember) => {
  if (newMember.frozenPresence && newMember.frozenPresence.game) {
    console.log(newMember.user.username,' started playing ', newMember.frozenPresence.game.name);
  }
  if (oldMember.frozenPresence && oldMember.frozenPresence.game) {
    console.log(oldMember.user.username,' stopped playing ', oldMember.frozenPresence.game.name);
  }
};