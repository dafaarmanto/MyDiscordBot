require("dotenv").config();

const { Client } = require("discord.js");
const client = new Client();
const PREFIX = "!";

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in!`);
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\+s/);
    
    // Meaning: CMD_NAME is your prefix, you can change variable on top named PREFIX, 
    // so to use, simply type on your discord channel !ping, and the bot will immediately reply "Pong!"
    if (CMD_NAME === "ping") { 
      message.channel.send(
        "Pong!"
      );
    }
    
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
