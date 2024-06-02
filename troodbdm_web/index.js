const functions = require('firebase-functions');
const TelegramBot = require('node-telegram-bot-api');

const token = '7452926719:AAGB0dhxcmSWQLv-OQkHlpFAXT6nL8ZLy1E';
const bot = new TelegramBot(token);


const webhookUrl = `https://us-central1-troodbdm.cloudfunctions.net/bot`;
bot.setWebHook(webhookUrl);

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const projectUrl = 't.me/yarik583_bot/fourdays';
    bot.sendMessage(chatId, `Check: ${projectUrl}`);
});

exports.bot = functions.https.onRequest((req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});