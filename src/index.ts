import { config } from "dotenv";
config();

import { Client, Intents, TextChannel } from "discord.js";

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once("ready", (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

const NUMS = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"]

client.on("messageCreate", (message) => {
  if((message.channel as TextChannel)?.name === 'proofs') {
    for (let i = 0; i < message.attachments.size; i++) {
      message.react(NUMS[i]);
    }
  }
});

client.login(process.env.BOT_TOKEN);
