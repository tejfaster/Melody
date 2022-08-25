/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
import { name as appName } from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

PushNotification.configure({
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // (optional) Called when Token is generated (iOS and Android)
    // onRegister: function (token) {
    //     console.log("TOKEN:", token);
    // },
})
AppRegistry.registerComponent(appName, () => App);