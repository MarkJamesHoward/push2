self.addEventListener("push", e => {
  self.registration.sendNotification("Test message", {});
});
