import {  useEffect, useState } from 'react';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export interface Location {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

const useGetLocation = () => {
    const [location, setLocation] = useState<Location>();
  
    const hasPermissionIOS = async () => {
      const openSetting = () => {
        Linking.openSettings().catch(() => {
          Alert.alert('Unable to open settings');
        });
      };
      const status = await Geolocation.requestAuthorization('whenInUse');
  
      if (status === 'granted') {
        return true;
      }
  
      if (status === 'denied') {
        Alert.alert('Location permission denied');
      }
  
      if (status === 'disabled') {
        Alert.alert(
          `Turn on Location Services to allow to determine your location.`,
          '',
          [
            { text: 'Go to Settings', onPress: openSetting },
            { text: "Don't Use Location", onPress: () => {} },
          ],
        );
      }
  
      return false;
    };
  
    const hasLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        const hasPermission = await hasPermissionIOS();
        return hasPermission;
      }
  
      if (Platform.OS === 'android' && Platform.Version < 23) {
        return true;
      }
  
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
  
      if (hasPermission) {
        return true;
      }
  
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
  
      if (status === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
  
      if (status === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show(
          'Location permission denied by user.',
          ToastAndroid.LONG,
        );
      } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show(
          'Location permission revoked by user.',
          ToastAndroid.LONG,
        );
      }
  
      return false;
    };
  
    const getLocation = async () => {
      const hasPermission = await hasLocationPermission();
  
      if (!hasPermission) {
        return;
      }
  
      Geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        })

        },
        (error) => {
          Alert.alert(`Code ${error.code}`, error.message);
          setLocation(undefined);
        },
        {
          accuracy: {
            android: 'high',
            ios: 'best',
          },
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          forceRequestLocation: true,
          forceLocationManager: false,
          showLocationDialog: true,
        },
      );
    };

    useEffect(() => {
        getLocation()
    }, []) 

    return location
}

export default useGetLocation;