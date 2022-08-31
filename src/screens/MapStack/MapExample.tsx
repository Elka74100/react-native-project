import { Button } from "@rneui/base";
import React, { useRef } from "react"
import { StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';
import useGetLocation, { Location } from "../../customHooks/getLocation";

const MapExample = () => {

    const myLocation = useGetLocation()
    
    const tokyoRegion: Location = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const londonRegion: Location = {
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const mapRef = useRef<any>(null);

    const goToCity = (city?: Location) => {
        mapRef.current?.animateToRegion(city, 3 * 1000);
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                ref={mapRef}
                initialRegion={londonRegion}
            />
            <Button onPress={() => goToCity(tokyoRegion)} title="Go to Tokyo" />
            <Button onPress={() => goToCity(londonRegion)} title="Go to London" />
            <Button onPress={() => goToCity(myLocation)} title="Go to my location" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, 
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

export default MapExample