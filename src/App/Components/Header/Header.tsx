import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';

import {Colors} from '../../Styles';

import {logout} from '../../Store/actions';

import PowerIcon from '../../Assets/power.png';

interface props {
  title: string;
  logout: Function;
}

const Header: React.FC<props> = (props) => {
  const {title = '', logout} = props;

  return (
    <View style={styles.container}>
      {/* Alignment */}
      <View style={{width: 30}} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={{marginRight: 10}} onPress={() => logout()}>
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

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Header);
