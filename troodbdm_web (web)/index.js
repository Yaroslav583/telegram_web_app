const functions = require('firebase-functions');
const TelegramBot = require('node-telegram-bot-api');

// Токен вашего бота
const token = '7452926719:AAGB0dhxcmSWQLv-OQkHlpFAXT6nL8ZLy1E';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const projectUrl = 'https://telegram-web-app-9e595.web.app/';
    bot.sendMessage(chatId, `Check out: ${projectUrl}`);
});

exports.bot = functions.https.onRequest((req, res) => {
    bot.handleRequest(req, res);
});