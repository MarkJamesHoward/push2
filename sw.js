self.addEventListener('push', (e) => {
  self.registration.sendNotification('Test message', { body: e.data.text()})
})