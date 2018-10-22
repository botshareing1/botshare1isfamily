const Discord = require('discord.js');
const iiTzK = new Discord.Client();

console.log("BOT ONLINE");
console.log("By : iiTW12");

iiTzK.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`

**:gem:  Welcome To  :gem:**
**
سيرفَرنا يحلى بوجودكُم ، حياكُم الله ،
ادخلو على الرابط وإن شاءالله تنبسطو معنَا ،
مُر ياغريَب ربُما تُصبح قريب. :sparkling_heart:
https://discord.gg/WHvvBJ
[ ${member}  ]
**
`)
}).catch(console.error)
})
iiTzK.login('NTAzODQzNDc0MDY4NjAyOTAx.Dq8YyA.y9D05fpUYHrFlRPVYRzaP8_DLnc');
