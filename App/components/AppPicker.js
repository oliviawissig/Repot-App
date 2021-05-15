import React, {useState} from 'react';
import {Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem"
import defaultStyles from '../config/styles'

function AppPicker({icon, selectedItem, numberOfColumns, onSelectItem, placeholder, PickerItemComponent = PickerItem, items, width="100%"}){
    const [modalVisible, setModalVisible] = useState(false)

    return(
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width: width}]}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color="gray" style={styles.icon}/>}
                    <AppText style={[styles.text, defaultStyles.text, {color: selectedItem ? "black" : "slategray"}]}> {selectedItem ? selectedItem.label : placeholder} </AppText>
                    <MaterialCommunityIcons style={styles.icon} name="chevron-down" size={20} color="gray"/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen style={styles.modalContainer}>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({item}) =>
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={ () => {
                                    onSelectItem(item)
                                    setModalVisible(false)
                                }}
                            />
                        }
                    />
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f8f0e3",
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        marginVertical:6,
        width:"100%"
    },
    modalContainer:{
        paddingTop:75,
        width:"100%",
    },
    icon:{
        marginRight:10,
        alignSelf:"center",
    },
    text:{
        flex:1,
    }
})

export default AppPicker