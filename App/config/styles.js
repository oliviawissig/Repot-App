import {Platform} from "react-native";

export default {
    text:{
        fontSize:20,
        fontFamily:Platform.OS === "android" ? "Roboto" : "Avenir",
    },
}