import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import {Colors} from '../../Styles';

interface props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<props> = props => {
  const {title, onPress = () => {}} = props;

  return (
    <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
      <Text style={styles.loginText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    width: '80%',
    backgroundColor: Colors.primary,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: Colors.white,
    fontSize: 20,
  },
});

export default Button;
