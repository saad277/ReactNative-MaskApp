import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {Colors} from '../../Styles';

import PowerIcon from '../../Assets/power.png';

interface props {
  title: string;
}

const Header: React.FC<props> = (props) => {
  const {title = ''} = props;

  return (
    <View style={styles.container}>
      {/* Alignment */}
      <View style={{width: 30}} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={{marginRight: 10}}>
        <Image source={PowerIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    height: 65,
    alignItems: 'center',
    elevation: 4,
  },
  icon: {
    width: 30,
    height: 30,
  },

  title: {
    fontSize: 20,
  },
});

export default Header;
