
const functions = require("firebase-functions");
const axios = require("axios");

const TELEGRAM_API_TOKEN = "7452926719:AAGB0dhxcmSWQLv-OQkHlpFAXT6nL8ZLy1E";

exports.sendNotification = functions.https.onRequest(async (req, res) => {
  const chatId = req.body.chatId;
  const message = req.body.message;
  const url = req.body.url;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`, {
      chat_id: chatId,
      text: `${message} <a href="${url}">Link</a>`,
      parse_mode: "HTML",
    });
    res.status(200).send("Notification sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending notification");
  }
});
