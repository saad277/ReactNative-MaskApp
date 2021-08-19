import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {Colors} from '../../Styles';

import Logo from '../../Assets/logo.png';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  image: {width: '100%', height: '100%'},
});

export default Splash;
