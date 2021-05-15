import React, {useState, useRef} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris, onAddImage, onRemoveImage }) {
    const scrollView = useRef();

    return (
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map(uri => (
                        <View style={styles.image} key={uri} >
                            <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)}/>
                        </View>
                    ))}
                    <ImageInput imageUri={null} onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        marginBottom:6
    },
    image:{
        marginRight:10,
    }
})

export default ImageInputList;