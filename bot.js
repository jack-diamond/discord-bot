const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const prefix = botSettings.prefix;

bot.on("ready",async () => {
  console.log(`Bot is ready! ${bot.user.username}`);
  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
  } catch (error) {
    console.log(error.stack);
  }
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(command === `${prefix}userinfo`) {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setDescription("Info");
    message.channel.sendEmbed(embed);
  }

})

bot.login(botSettings.token);