self.addEventListener("push", function(e) {
  self.registration.showNotification("Hello world!", options);
});
