import React from 'react';
import {StyleSheet, View} from "react-native";
import LottieView from 'lottie-react-native';
import Screen from "./Screen";

function ActivityIndicator({ visible = false }) {
    if(!visible) return null;
    
    return (
        <View style={styles.overlay}>
            <LottieView
                    autoPlay
                    loop
                    style={{width:150, height:150}}
                    source={require('../assets/animations/loader.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    overlay:{
        alignItems:"center",
        position:"absolute",
        backgroundColor:"white",
        height:"100%",
        justifyContent:"center",
        opacity:0.7,
        width:"100%",
        zIndex:1,
    }
})

export default ActivityIndicator;