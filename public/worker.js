// service-worker.js

self.addEventListener('push', async function (event) {
  const data = await event.data.json()
    const options = {
      body: data.msg,
      icon: 'descarga.jpg',
    };
  
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  });
  