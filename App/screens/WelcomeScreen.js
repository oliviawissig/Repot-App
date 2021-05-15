import React from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native';

import AppButton from '../components/AppButton'
import colors from '../config/colors'
import {useNavigation} from "@react-navigation/native";

export default function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={ require('../assets/background.jpg' )}
            style={styles.image}
            blurRadius={10}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={ require('../assets/welcome-pic.png') }
                    style={styles.logo}
                />
                <Text style={styles.desc}>Sell What You Don't Need</Text>
            </View>

            <View style={styles.btnContainer}>
                <AppButton
                    color={colors.primary}
                    title="Login"
                    onPress={ () => navigation.navigate("Login")}
                />
                <AppButton
                    color={colors.secondary}
                    title="Signup"
                    onPress={ () => navigation.navigate("Register")}
                />
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer:{
        position: "absolute",
        top: 90,
        alignItems: "center",
    },
    logo:{
        width:200,
        height:140,
    },
    btnContainer:{
        top:-60,
        flexDirection:"column",
        padding:10,
    },
    desc:{
        flex:1,
        marginTop:20,
        fontSize: 23,
        fontWeight: "500",
        color: "white",
    }
})