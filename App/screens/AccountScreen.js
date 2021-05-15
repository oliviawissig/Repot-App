import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";

import Screen from '../components/Screen'
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";

import colors from '../config/colors'
import Icon from "../components/Icon";
import useAuth from "../auth/useAuth";

const menu = [
    {
        id:1,
        title:'My Listings',
        bgColor: colors.primary,
        icon: 'format-list-bulleted'
    },
    {
        id:2,
        title:'My Messages',
        bgColor: colors.secondary,
        icon: 'email',
        targetScreen:'Messages'
    },
]


function AccountScreen({navigation}){
    const {user, logOut} = useAuth();

    return(
        <Screen style={styles.container}>
            <ListItem
                title={user.name}
                subtitle={user.email}
                image={require('../assets/blank.png')}
                style={{marginTop:10}}
            />
            <View style={styles.menuContainer}>
                <FlatList
                    data={menu}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon}
                                    size={40}
                                    iconColor="white"
                                    bgColor={item.bgColor}
                                />
                            }
                            onPress={ () => navigation.navigate(item.targetScreen) }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon
                        name="logout"
                        size={40}
                        iconColor="white"
                        bgColor="#ffe66d"
                    />
                }
                onPress={() => logOut()}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f8f0e3",
        alignItems:"center",
        padding:10,
    },
    menuContainer:{
        marginTop:20,
        height:160,
    }
})

export default AccountScreen;