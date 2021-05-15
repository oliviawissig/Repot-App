import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import AppText from "../components/AppText";
import {Image} from 'react-native-expo-image-cache';

import colors from '../config/colors'
import ListItem from "../components/lists/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";

function ListingDetailsScreen({route}){
    const listing = route.params;

    return(
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            <View style={styles.container}>
                <Image
                    style={styles.listingImage}
                    uri={listing.images[0].url}
                    preview={{uri:listing.images[0].thumbnailUrl}}
                    tint="light"/>
                <View style={styles.desc}>
                    <AppText style={styles.title}>{listing.title}</AppText>
                    <AppText style={styles.subtitle}>${listing.price}</AppText>
                </View>
                <ListItem
                    image={require('../assets/blank.png')}
                    title="User"
                    subtitle="# listings"
                />
                <ContactSellerForm listing={listing}/>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
    },
    profileContainer:{
        width:"110%",
        flexDirection:"row",
        padding:20,
    },
    listingImage:{
        width:"100%",
        height:300,
    },
    desc:{
        padding:25,
    },
    title:{
        fontSize: 20,
        marginBottom:7,
    },
    subtitle:{
        color: colors.secondary,
        fontWeight:"bold",
    },
})

export default ListingDetailsScreen;