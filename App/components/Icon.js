import React from 'react';
import {View, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function Icon({bgColor, size, name, iconColor}){
    return(
        <View style={[styles.container, {
            backgroundColor:bgColor,
            width:size,
            height:size,
            borderRadius:size/2,
        }]}>
            <MaterialCommunityIcons
                name={name}
                size={size/2}
                color={iconColor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems: "center"
    }
})

export default Icon;