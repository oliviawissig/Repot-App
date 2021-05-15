import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    StatusBar, TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={()=>console.log("x")}>
                    <MaterialCommunityIcons
                        name="close"
                        color="white"
                        size={40}
                        style={{left:30}}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log("del")}>
                    <MaterialCommunityIcons
                        name="trash-can-outline"
                        color="white"
                        size={40}
                        style={{right:30}}
                    />
                </TouchableOpacity>
            </View>
            <Image
                source={require('../assets/chair.jpg')}
                resizeMode="contain"
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "black",
        justifyContent:"center",
    },
    btnContainer:{
        top:75,
        flexDirection:"row",
        justifyContent: "space-between"
    },
    image:{
        width:"100%",
        height: "100%"
    }
})