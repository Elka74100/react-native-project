import { Button } from "@rneui/base";
import React, { useRef } from "react"
import { StyleSheet, View } from "react-native";
import MapView, { Marker }  from 'react-native-maps';

const MapExample = () => {
    const tokyoRegion = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

    const londonRegion = {
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

    const mapRef = useRef<any>(null);

    const goToCity = (city: Object) => {
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