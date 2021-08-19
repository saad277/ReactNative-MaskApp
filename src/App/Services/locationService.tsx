import Geolocation from '@react-native-community/geolocation';
import {Platform} from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';

export const locateCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          // latitudeDelta: 0.09,
          // longitudeDelta: 0.035,
          latitudeDelta: 0.04,
          longitudeDelta: 0.5,
        };

        resolve(initialPosition);
      },
      (error) => reject(error),

      {enableHighAccuracy: true, timeout: 90000, maximumAge: 1000},
    );
  });
};

export const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (response === 'granted') {
      const location = await locateCurrentPosition();
      return location;
    }
  } else {
    const response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

    if (response === 'granted') {
      const location = await locateCurrentPosition();
      return location;
    }
  }
};
