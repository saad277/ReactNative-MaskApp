import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Button} from '../../Components/Button';
import {Input} from '../../Components/Input';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <Input placeHolder="Email..." />
      <Input placeHolder="Password..." />
      <Button title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
});

export default Login;
