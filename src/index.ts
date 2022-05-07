import { config } from "dotenv";
config();

import { Client, Intents, TextChannel } from "discord.js";

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

client.once("ready", (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

const NUMS = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];

client.on("messageReactionAdd", ({ message, emoji }) => {
  if (
    (message.channel as TextChannel)?.name === "proofs" &&
    emoji.name === "🖊️"
  ) {
    for (let i = 0; i < Math.min(10, message.attachments.size); i++) {
      try {
        message.react(NUMS[i]);
      } catch (e) {
        console.error(e);
      }
    }
  }
});

client.login(process.env.BOT_TOKEN);
