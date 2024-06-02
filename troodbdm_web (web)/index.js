const functions = require('firebase-functions');
const TelegramBot = require('node-telegram-bot-api');

const token = '7452926719:AAGB0dhxcmSWQLv-OQkHlpFAXT6nL8ZLy1E';

const bot = new TelegramBot(token);

// Установка Webhook для обработки входящих запросов
const webhookUrl = 'https://us-central1-troodbdm.cloudfunctions.net/bot/webhook';
bot.setWebHook(webhookUrl);

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const projectUrl = 't.me/yarik583_bot/fourdays';
    bot.sendMessage(chatId, `Проверьте: ${projectUrl}`);
});

// Этот обработчик будет перенаправлять запросы на путь /bot к функции webhook
exports.bot = functions.https.onRequest((req, res) => {
    return webhook(req, res);
});

// Функция webhook для обработки входящих запросов от Telegram
function webhook(req, res) {
    bot.handleRequest(req, res);
}