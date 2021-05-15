import React, {useState} from 'react';
import {Alert, Keyboard, StyleSheet, View} from 'react-native';
import * as Yup from "yup";

import {AppForm, AppFormField, ErrorMessage, SubmitButton} from "./forms";
import messagesApi from "../api/messages";

const validationSchema = Yup.object().shape({
    message: Yup.string().min(1).label("Message")
})

function ContactSellerForm({listing}) {
    const [error, setError] = useState();

    const handleSubmit = async ({message}, {resetForm}) => {
        Keyboard.dismiss();

        const result = await messagesApi.send(message, listing.id);

        if(!result.ok){
            console.log("Error", result);
            setError(result.data.error);
            return;
        }
        Alert.alert("Awesome!", "Your message has been sent!");
        resetForm();
    }

    return (
        <View style={styles.container}>
            <AppForm
                initialValues={{message: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={error} visible={error}/>
                <AppFormField
                    name="message"
                    placeholder="Message..."
                />
                <SubmitButton
                    title="Send"
                />
            </AppForm>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        padding: 10,
        height:"100%"
    }
})

export default ContactSellerForm;