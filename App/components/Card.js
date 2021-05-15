import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import AppText from "./AppText";
import {Image} from 'react-native-expo-image-cache';

import colors from '../config/colors'

function Card({imageUrl, title, subTitle, onPress, thumbnailUrl }){
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.cardContainer}>
                <Image
                    uri={imageUrl}
                    style={styles.image}
                    preview={{uri:thumbnailUrl}}
                    tint="light"
                />
                <View style={styles.desc}>
                    <AppText numberOfLines={2} style={styles.title}>{title}</AppText>
                    <AppText numberOfLines={5} style={styles.subtitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({

    cardContainer:{
        marginBottom:30,
        backgroundColor:"#fff",
        borderRadius:20,
        overflow:"hidden",
        minWidth:"100%"
    },
    image:{
        width: "100%",
        height:200,
    },
    desc:{
        padding:25,
    },
    title:{
        fontSize:16,
        marginBottom: 5,
    },
    subtitle:{
        fontSize:14,
        color: colors.secondary,
        fontWeight:"bold",
    }
})

export default Card;