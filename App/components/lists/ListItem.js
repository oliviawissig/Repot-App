import React from 'react';
import {Image, View, StyleSheet, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from "../AppText";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ListItem({onPress, renderRightActions, IconComponent, image, title, subtitle, showChevrons, style}){
    return(
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={"lightgray"}>
                <View style={[styles.container, style]}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.descContainer}>
                        <AppText numberOfLines={2} style={styles.title}>{title}</AppText>
                        {subtitle && <AppText numberOfLines={3} style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                    {showChevrons && <MaterialCommunityIcons style={{alignSelf: "center"}} name="chevron-right" size={25} color="gray"/>}
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        paddingLeft:25,
        borderRadius:25,
        minWidth:"100%",
        backgroundColor:"white",
        alignContent: "center"
    },
    descContainer:{
        justifyContent:"center",
        left:10,
        flex:1,
        alignContent: "center"
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    title:{
        fontSize:18,
        lineHeight: 28,
        color:"black"
    },
    subtitle:{
        fontSize: 16,
        color: "gray",
    }
})

export default ListItem;