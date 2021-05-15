import React, {useState} from 'react';
import {StyleSheet} from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth"
import Screen from "../components/Screen";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth"
import {AppForm, AppFormField, ErrorMessage, SubmitButton} from "../components/forms";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function RegisterScreen(){
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const {logIn} = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if(!result.ok){
            if(result.data) setError(result.data.error);
            else{
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }

        const {data: authToken} = await loginApi.request(
            userInfo.email, userInfo.password
        );
        logIn(authToken);
    }

    return(
        <>
            <ActivityIndicator visible={ registerApi.loading || loginApi.loading } />
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{name: '', email: '', password: ''}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error}/>
                    <AppFormField
                        icon="account"
                        placeholder="Name"
                        autoCapitalize="words"
                        autoCorrect={false}
                        name="name"
                        keyboardType="default"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                    />
                    <SubmitButton
                        title="Register"
                    />
                </AppForm>
            </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:"white",
    }
})

export default RegisterScreen