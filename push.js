let push = require("web-push");

let vapidKeys = {
  publicKey:
    "BLWnyhSpXIbSzJaMDoG1GUsg1rEWjuDh1nB2VasvC3r2yNHkmr7wHK6tXDKjCBPgx7EoIjUqCxqIv1RBIAW42PQ",
  privateKey: "ItyCUZ_1lKzOWR36oRFicI-wqD9PJtx-ZkVTyLGByIY"
};

push.setVapidDetails("mailto:mark@mjhoward.co.uk", vapidKeys.publicKey, vapidKeys.privateKey);

let subscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/f1Y0Pk7LgqY:APA91bFoyl6d7QV6hb7QqEvxgg1Ot_z4UlasPouOkDXcJ0g3tAP-HCY96uxQfIJraFMRRQab97xvOsbL1MbqThgTRCe6lgjgipEepabFD76TwE8GWey2XKVmGznegiWU-c-_Vj7BJbia",
  expirationTime: null,
  keys: {
    p256dh:
      "BDWjJremkXOMZgXwrW9mRWpCjUodCeV6Kj0Z3YBFWpio92th6IJNwPGJqQKGKz0iTw07YOC7laYLPfdOPvLxTys",
    auth: "H4A2m8xUBmNqm1GVxLg-Zg"
  }
};

push.sendNotification(subscription, "test message!!");
