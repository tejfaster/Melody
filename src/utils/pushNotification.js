import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage'

const getToken = async () => {
    let token = await AsyncStorage.getItem('pushToken')
    console.log(token, "Local_Storage_Token")
    if (!token) {
        try {
            const pushToken = await messaging().getToken()
            if (pushToken) {
                console.log(pushToken, "the_new_genrated_token")
                await AsyncStorage.setItem('pushToken', pushToken)
            }
        } catch (error) {
            console.log('error :-', error)
        }
    }
}

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getToken()
    }
}

export function notificationListener() {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log('Notification caused app to open from background state:', remoteMessage.notification);
        // navigation.navigate(remoteMessage.data.type);
    });

    messaging().onMessage(async remoteMessage => {
        console.log("recived in foreground", remoteMessage)
    })

    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                )
            }
        });
}

export const createChannels = () => {
    PushNotification.createChannel(
        {
            channelId: "test-channel",
            channelName: "Test Channel"
        }
    )
}