import PushNotification from 'react-native-push-notification';

let payload;

PushNotification.configure({
  permissions: {
    alert: true,
    sound: true,
  },

  onNotification: (message) => {
    const {data} = message;
  },
});

PushNotification.createChannel({
  channelId: 'channel-id',
  channelName: 'My channel',
  channelDescription: 'A channel to categorise your notifications',
});

export const LocalNotification = (color = 'red') => {
  PushNotification.localNotification({
    channelId: 'channel-id',
    autoCancel: true,
    bigText: 'Image Classified',
    title:
      color === 'green'
        ? 'Status: Low'
        : color === 'yellow'
        ? 'Status: Medium'
        : 'Status : High',
    message: 'Image Classified',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    messageId: 'haha',
    smallIcon: 'ic_announce',
    color,
  });
};
