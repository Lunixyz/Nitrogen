import { Interaction } from "discord.js";
import { DashScraper } from "../utils/Client";

export const onInteraction = async (
  interaction: Interaction,
  client: DashScraper
) => {
  if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (interaction.user.bot == true) return;
    if (!command) return;
    try {
      command.execute(interaction, client);
    } catch (error) {
      console.log(error);
      await interaction.reply({
        content:
          "[❌] A não ser que os servidores do Discord tenham pegado fogo, isso é um erro.",
        ephemeral: true,
      });
    }
  }
};
