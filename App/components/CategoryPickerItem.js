import React from 'react';
import {View, StyleSheet, TouchableOpacity} from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon bgColor={item.bgColor} name={item.icon} size={80} iconColor="white"/>
                <AppText style={styles.label}>{item.label}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:18,
        paddingHorizontal:29,
        padding:20,
    },
    label:{
        textAlign: "center",
        fontSize: 18,
        width:80,
        marginTop:8
    }
})

export default CategoryPickerItem