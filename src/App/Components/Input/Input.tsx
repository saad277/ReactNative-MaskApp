import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {Colors} from '../../Styles';

interface props {
  onChange: Function;
  value: string;
  placeHolder: string;
  secureText?: boolean;
}

const Input: React.FC<props> = (props) => {
  const {onChange, value, placeHolder, secureText = false} = props;

  return (
    <View style={styles.inputView}>
      <TextInput
        value={value}
        style={styles.inputText}
        placeholder={placeHolder}
        placeholderTextColor="#fff"
        onChangeText={(value) => onChange(value)}
        secureTextEntry={secureText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: '80%',
    backgroundColor: Colors.secondary,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    fontSize: 20,
    color: Colors.white,
  },
});

export default Input;
