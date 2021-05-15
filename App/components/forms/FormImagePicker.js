import React from 'react';
import {StyleSheet, View} from 'react-native';

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";
import {useFormikContext} from "formik";

function FormImagePicker({ name }) {
    const {setFieldValue, values, errors, touched} = useFormikContext()

    const handleAdd = uri => {
        setFieldValue(name, [...values[name], uri])
    }

    const handleRemove = uri => {
        setFieldValue(name, values[name].filter( imageUri => imageUri !== uri ) )
    }

    return (
        <>
            <ImageInputList
                imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default FormImagePicker;