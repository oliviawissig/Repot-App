import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import defaultStyles from '../config/styles'

function AppTextInput({icon, width="100%", ...otherProps}){

    return(
        <View style={[styles.container, {width: width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color="gray" style={styles.icon}/>}
            <TextInput
                placeholderTextColor="lightslategray"
                style={defaultStyles.text}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f8f0e3",
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        marginVertical:6,
    },
    icon:{
        marginRight:10,
    }
})

export default AppTextInput