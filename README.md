# Discord AI Bot

This is a Discord self-bot that uses Google's Generative AI to respond to direct messages. The bot is built using `discord.js-selfbot-v13` and `@google/generative-ai`.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/swoxycan/discord-ai-bot
   cd discord-ai-bot
   ```

2. **Install dependencies:**

   Run the following command to install the necessary packages:

   ```bash
   run install.bat
   ```

3. **Configuration:**

   Create a `config.json` file in the root directory with your API key and Discord token:

   ```json
   {
     "apiKey": "YOUR_GOOGLE_API_KEY",
     "discordToken": "YOUR_DISCORD_TOKEN"
   }
   ```

   **Note:** Ensure that `config.json` is added to your `.gitignore` file to keep your credentials secure.

4. **Run the bot:**

   Use the `start.bat` file to run the bot:

   ```bash
   start.bat
   ```

   Alternatively, you can run the bot directly using Node.js:

   ```bash
   node index.js
   ```

## Usage

- The bot will automatically respond to direct messages using the Google Generative AI model.
- Ensure your Discord account is set up to allow self-bots.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact

For any questions or support, please contact [your-email@example.com](swoxycan@tutamail.com). 
