const { Client } = require('discord.js-selfbot-v13');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const config = require('./config.json');

const client = new Client();
const genAI = new GoogleGenerativeAI(config.apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

client.on('ready', () => {
    console.log(`${client.user.username} is ready!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.id === client.user.id) return;

    if (message.channel.type === 'DM') {
        try {
            const result = await model.generateContent(message.content);
            const response = await result.response;
            const text = response.text();
            
            console.log(`Gemini DM response: ${text}`);
            await message.channel.send(text);
        } catch (error) {
            console.error('Gemini API error:', error);
        }
    }
});

client.login(config.discordToken);