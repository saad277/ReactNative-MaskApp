import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

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
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
   
   
  },
  loginText: {
    color: 'white',
    fontSize:20,
   
  },
});

export default Button;
