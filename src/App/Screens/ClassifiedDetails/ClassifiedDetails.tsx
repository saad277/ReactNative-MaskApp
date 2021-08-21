import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {CommonStyles} from '../../Styles';

import {Tag} from '../../Components/Tag';

const ClassifiedDetails: React.FC = (props) => {
  const {route}: any = props;

  const classified = route?.params?.classified;
  const base64 = route?.params?.image?.base64;
  //const path = route?.params?.image?.path;
  const withMask = route?.params?.mask;
  const withoutMask = route?.params?.withoutMask;

  return (
    <View style={styles.container}>
      <Image
        source={{uri: `data:image/gif;base64,${classified}`}}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.cardContainer}>
        <Tag text={`With Mask ${withMask}`} safe={true} />
        <Tag text={`Without Mask ${withoutMask}`} />
      </View>
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
});

export default ClassifiedDetails;
