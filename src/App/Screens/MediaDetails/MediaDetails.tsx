import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';

import {CommonStyles} from '../../Styles';

import {Tag} from '../../Components/Tag';

interface MediaDetailProps {
  route: {
    params: {
      Img: string;
      WithMask: String;
      WithoutMask: String;
    };
  };
}

const ClassifiedDetails: React.FC<MediaDetailProps> = (props) => {
  const {route} = props;

  const {Img, WithMask, WithoutMask} = route.params;

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
  image: {
    width: '100%',
    height: 300,
  },
  uploadBtn: {
    marginTop: 40,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default ClassifiedDetails;
