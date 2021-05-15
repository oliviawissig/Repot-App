import React, {useState} from 'react';
import * as Yup from "yup";

import Screen from "../components/Screen";
import {AppForm, AppFormField, AppFormPicker, SubmitButton} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import colors from "../config/colors"
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings"
import UploadScreen from "./UploadScreen";

const categories = [
    {label: 'Flowering', value:1, bgColor: colors.primary, icon: 'flower-poppy'},
    {label: 'Low Light', value:2, bgColor:colors.secondary, icon: 'lightbulb-off'},
    {label: 'Foliage', value:3, bgColor: colors.primary, icon: 'leaf'},
    {label: 'Cactus', value:4, bgColor: colors.secondary, icon: 'cactus'},
    {label: 'Palm', value:5, bgColor: colors.primary, icon: 'palm-tree'},
    {label: 'Succulent', value:6, bgColor: colors.secondary, icon: 'sprout'},
    {label: 'Vining & Climbing', value:7, bgColor: colors.primary, icon: 'barley'},
    {label: 'Unidentified', value:8, bgColor: colors.secondary, icon: 'help-box'},
    {label: 'Other', value:9, bgColor: colors.primary, icon: 'dots-horizontal'},
]

const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, "Please select at least one image."),
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1). max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
})

function EditListingScreen(){
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, {resetForm}) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            {...listing, location },
            (progress) => setProgress(progress)
        )

        if(!result.ok) {
            setUploadVisible(false)
            return alert('Could not save listing!')
        }
        resetForm();
    }

    return(
        <Screen style={ {padding:10, backgroundColor:"white"} }>
            <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
            <AppForm
                initialValues={{images: [], title: '', price: '', category: null, description: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker
                    name="images"
                />
                <AppFormField
                    placeholder="Title"
                    autoCapitalize="sentences"
                    name="title"
                    keyboardType="default"
                />
                <AppFormField
                    maxLength={8} //$xxxxx.xx
                    name="price"
                    placeholder="Price"
                    keyboardType="numeric"
                    width={120}
                />
                <AppFormPicker
                    placeholder="Category"
                    name="category"
                    numberOfColumns={3}
                    items={categories}
                    width="50%"
                    PickerItemComponent={CategoryPickerItem}
                />
                <AppFormField
                    autoCapitalize="sentences"
                    multiline
                    maxLength={255}
                    numberOfLines={3} //android
                    name="description"
                    placeholder="Description"
                />
                <SubmitButton
                    title="Post"
                />
            </AppForm>
        </Screen>
    )
}

export default EditListingScreen;