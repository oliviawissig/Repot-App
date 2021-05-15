import {useEffect, useRef, useState} from "react";
import * as Notifications from "expo-notifications";
import navigation from "../navigation/rootNavigation";
import expoPushTokensApi from "../api/expoPushTokens";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    })
})

export default useNotifications = () => {
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotifications();

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        })

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response.notification.request.content.body);
        })

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        }
    }, []);

    const registerForPushNotifications = async () => {
        try{
            const permission = await Notifications.requestPermissionsAsync();
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token.data);
        }catch(error){
            console.log("Error getting a push token", error);
        }
    }
}