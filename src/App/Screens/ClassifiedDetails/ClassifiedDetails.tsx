import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

import {CommonStyles, Colors} from '../../Styles';

import {Tag} from '../../Components/Tag';

const mock =
  'https://images.unsplash.com/photo-1586163958271-4d2cc29feff8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

const ClassifiedDetails: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: mock}} style={styles.image} />
      <View style={[styles.cardContainer]}>
        <Tag text="With Mask 10" safe={true} />
        <Tag text="Without Mask 10" />
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
