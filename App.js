import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications'

import AppNavigator from "./App/navigation/AppNavigator";
import AuthNavigator from "./App/navigation/AuthNavigator";
import AuthContext from "./App/auth/context";
import authStorage from "./App/auth/storage";
import logger from './App/utility/logger';
import {NavigationContainer} from "@react-navigation/native";
import {navigationRef} from "./App/navigation/rootNavigation"
import OfflineNotice from "./App/components/OfflineNotice";

logger.start();

export default function App() {

    const [user, setUser] = useState();
    const [isReady, setIsReady] = useState(false);

    const restoreUser = async () => {
        const user = await authStorage.getUser()
        if (user) setUser(user);
    }

    if(!isReady){
        return (
            <AppLoading
                startAsync={restoreUser()}
                onError={console.warn}
                onFinish={ () => setIsReady(true) }
                autoHideSplash={true}/>
        );
    }

    const showNotification = () => {
        Notifications.scheduleNotificationAsync({
            content:{
                title: 'Look at that notification',
                body: 'I\'m so proud of myself!',
            }, trigger:null,
        })
    }

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <OfflineNotice />
            <NavigationContainer ref={navigationRef}>
                { user ? <AppNavigator /> : <AuthNavigator /> }
            </NavigationContainer>
        </AuthContext.Provider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
