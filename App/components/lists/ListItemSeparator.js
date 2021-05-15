import React from 'react';
import {StyleSheet, View} from "react-native";

function ListItemSeparator(){
    return(
        <View style={ styles.separator }/>
    )
}

const styles = StyleSheet.create({
    separator:{
        width:'88%',
        height:1,
        backgroundColor:"lightgray",
        alignSelf:"center"
    }
})

export default ListItemSeparator;