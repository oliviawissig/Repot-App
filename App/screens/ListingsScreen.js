import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet} from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import listingsApi from "../api/listings"
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({navigation}) {
    const {request: loadListings, data: listings, error, loading} = useApi(listingsApi.getListings)

    useEffect(() => {
        loadListings()
    }, [])

    return (
        <>
            <ActivityIndicator visible={loading}/>
            <Screen style={styles.container}>
                {error && (
                    <>
                        <AppText>There was an issue retrieving listings.</AppText>
                        <AppButton title="Retry" onPress={loadListings}/>
                    </>
                )}
                <FlatList
                    data={listings}
                    keyExtractor={(listing) => listing.id.toString()}
                    renderItem={({item}) => (
                        <Card
                            imageUrl={item.images[0].url}
                            title={item.title}
                            subTitle={"$" + item.price}
                            onPress={() => navigation.navigate("ListingDetails", item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    )}
                />
            </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#f8f0e3",
        padding: 20
    },
})

export default ListingsScreen;