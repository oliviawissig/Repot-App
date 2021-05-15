import React, {useState} from 'react';
import {StyleSheet, Image} from "react-native";
import * as Yup from 'yup'

import authApi from '../api/auth'
import Screen from "../components/Screen";
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms'
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(){
    const {logIn} = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email, password}) => {
        const result = await authApi.login(email, password);
        if(!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        logIn(result.data);
    }

    return(
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/login-plant.png')}/>
            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
                <AppFormField
                    icon="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="email"
                    keyboardType="email-address"
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
                    title="Login"
                />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:"white",
    },
    logo:{
        width:130,
        height:110,
        alignSelf: 'center',
        marginTop:50,
        marginBottom:50
    }
})

export default LoginScreen