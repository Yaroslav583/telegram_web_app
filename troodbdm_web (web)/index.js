const functions = require('firebase-functions');
const TelegramBot = require('node-telegram-bot-api');


const token = '7452926719:AAGB0dhxcmSWQLv-OQkHlpFAXT6nL8ZLy1E';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const projectUrl = 't.me/yarik583_bot/fourdays';
    bot.sendMessage(chatId, `Проверьте: ${projectUrl}`);
});


exports.bot = functions.https.onRequest((req, res) => {
    bot.handleRequest(req, res);
});

