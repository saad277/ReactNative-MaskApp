import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {CommonStyles} from '../../Styles';

import {Tag} from '../../Components/Tag';

const screenWidth = Dimensions.get('window').width;

interface MediaDetailProps {
  route: {
    params: {
      Img: string;
      WithMask: String;
      WithoutMask: String;
      Location: object;
    };
  };
}

const ClassifiedDetails: React.FC<MediaDetailProps> = (props) => {
  const {route} = props;

  const {Img, WithMask, WithoutMask, Location} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: `data:image/gif;base64,${Img}`}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.cardContainer}>
          <Tag text={`With Mask ${WithMask || 0}`} safe={true} />
          <Tag text={`Without Mask ${WithoutMask || 0}`} />
        </View>

        <Text style={styles.location}>Location :</Text>
        {!!Object.keys(Location).length ? (
          <View style={styles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={Location}>
              <Marker coordinate={Location}></Marker>
            </MapView>
          </View>
        ) : (
          <Text style={styles.location}>-</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.flexOne,
    backgroundColor: 'white',
  },
  cardContainer: {
    marginHorizontal: 10,
    ...CommonStyles.flexRow,
    ...CommonStyles.justifyBetween,
  },
  location: {
    marginLeft: 10,
    fontSize: 20,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  mapContainer: {
    marginTop: 20,
    width: screenWidth,
    height: 400,
  },

  map: {
    height: 400,
    width: 400,
    ...StyleSheet.absoluteFillObject,
  },
});

export default ClassifiedDetails;
