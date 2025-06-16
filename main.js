window.addEventListener('load', function () {
  const Pushwoosh = window.pushwoosh;

  if (Pushwoosh) {
    Pushwoosh.push(['init', {
      logLevel: 'debug',
      applicationCode: 'BF7A8-37DB4',
      defaultNotificationTitle: 'Push Test',
      defaultNotificationImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
      defaultNotificationUrl: 'https://sappysue.github.io/',
      serviceWorkerUrl: 'pushwoosh-service-worker.js'
    }]);

    Pushwoosh.push(['registerForPushNotifications']);
  } else {
    console.error('Pushwoosh SDK not loaded yet');
  }
});
