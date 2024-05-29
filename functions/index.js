const functions = require("firebase-functions");
const axios = require("axios");

const TELEGRAM_BOT_TOKEN = "7452926719:AAGB0dhxcmSWQLv-OQkHlpFAXT6nL8ZLy1E";
const TELEGRAM_CHAT_ID = "411387721";

exports.sendNotification = functions.https.onRequest((request, response) => {
  const message = "Check out this page: https://your-web-app/page1";
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  axios.post(url, {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
  })
      .then(() => {
        response.send("Notification sent!");
      })
      .catch((error) => {
        console.error("Error sending notification:", error);
        response.status(500).send("Error sending notification");
      });
});
