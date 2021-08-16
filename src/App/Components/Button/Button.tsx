import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';

import {Colors} from '../../Styles';

interface props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<props> = (props) => {
  const {title, onPress = () => {}, loading = false, disabled = false} = props;

  return (
    <TouchableOpacity
      style={styles.loginBtn}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <Text style={styles.loginText}>{title}</Text>
      )}
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
