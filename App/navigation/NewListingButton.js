import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from "../config/colors"

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={"white"} size={40} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        backgroundColor: colors.primary,
        borderRadius: 40,
        borderWidth:10,
        borderColor:"white",
        bottom:25,
        height:80,
        justifyContent:"center",
        width:80,
    },
})

export default NewListingButton;