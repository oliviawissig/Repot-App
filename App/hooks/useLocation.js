import {useEffect, useState} from "react";
import * as Location from "expo-location";

export default useLocation = () => {
    const [location, setLocation] = useState()

    const requestLocation = async () => {
        try {
            const {granted} = await Location.requestForegroundPermissionsAsync();
            if (!granted) return;
            const {coords: {latitude, longitude} } = await Location.getLastKnownPositionAsync();
            setLocation({latitude, longitude})
        }catch (error){
            console.log(error)
        }
    }

    useEffect( () => {
        let isMounted = true;
        requestLocation()
        return () => {isMounted = false}
    }, [])

    return location;
}