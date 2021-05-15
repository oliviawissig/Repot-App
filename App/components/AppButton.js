import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from "react-native";

import colors from "../config/colors";

function AppButton({style, onPress, title, color=colors.primary}) {
    return(
        <TouchableOpacity style={[styles.button, style, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.btnText}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        height:55,
        minWidth: "100%",
        borderRadius:20,
        marginTop:20,
        justifyContent:"center",
        alignContent:"center",
    },
    btnText:{
        color: "white",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        textTransform: "uppercase",
    }
})

export default AppButton;