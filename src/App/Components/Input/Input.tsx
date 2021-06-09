import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface props {
  onChange: Function;
  value: string;
  placeHolder: string;
}

const Input: React.FC<props> = props => {
  const {onChange, value, placeHolder} = props;

  return (
    <View style={styles.inputView}>
      <TextInput
        value={value}
        style={styles.inputText}
        placeholder={placeHolder}
        placeholderTextColor="#fff"
        onChangeText={value => onChange(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: '80%',

    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    fontSize:20,
    color: 'white',
  },
});

export default Input;
