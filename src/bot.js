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

    if (CMD_NAME === "mabarML") {
      message.channel.send(
        "Hi @everyone, waktunya kita mabar Mobile Legends!~"
      );
    }

    if (CMD_NAME === "tagged") {
      message.channel.send("Hi <@405921343465324575>");
    }

    if (CMD_NAME === "roast") {
      message.channel.send("Muka <@265422626866855937> kayak kontol >w<");
    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
