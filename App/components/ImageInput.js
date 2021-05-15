import React, {useEffect} from 'react';
import {Alert, Image, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }){
    useEffect(() => {
        requestPermission();
    }, [] )

    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted)
            alert('You need to enable permission to access the library.')
    }

    const selectImage = async () => {
        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if(!result.cancelled)
                onChangeImage(result.uri)
        }catch (error) {
            console.log('Error reading an image', error)
        }
    }

    const handlePress = () =>{
        if(!imageUri) selectImage()
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                {text:'Yes', onPress: () => onChangeImage(null)},
                {text:'No'}
            ])
    }

    return(
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons color="gray" name="camera" size={35}/> }
                {imageUri && <Image source={{uri:imageUri}} style={styles.image}/>}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        width:80,
        height:80,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        backgroundColor:"#f8f0e3",
        overflow:"hidden",
    },
    image:{
        width:"100%",
        height:"100%"
    }
})

export default ImageInput;