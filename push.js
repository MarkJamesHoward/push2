let push = require("web-push");

let vapidKeys = {
  publicKey:
    "BLWnyhSpXIbSzJaMDoG1GUsg1rEWjuDh1nB2VasvC3r2yNHkmr7wHK6tXDKjCBPgx7EoIjUqCxqIv1RBIAW42PQ",
  privateKey: "ItyCUZ_1lKzOWR36oRFicI-wqD9PJtx-ZkVTyLGByIY"
};

push.setVapidDetails("mailto:mark@mjhoward.co.uk", vapidKeys.publicKey, vapidKeys.privateKey);

let subscription = {};

push.sendNotification(subscription, "test message!!");
