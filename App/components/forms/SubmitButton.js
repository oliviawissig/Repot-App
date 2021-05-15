import React from 'react';
import {useFormikContext} from "formik";

import AppButton from "../AppButton";
import colors from "../../config/colors";

function SubmitButton({color=colors.primary, title}){
    const {handleSubmit} = useFormikContext()

    return(
        <AppButton title={title} onPress={handleSubmit} color={color} />
    )
}

export default SubmitButton