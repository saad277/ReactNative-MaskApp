import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Button} from '../../Components/Button';
import {Input} from '../../Components/Input';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up</Text>
      <Input placeHolder="Name..." value={name} onChange={setName} />
      <Input placeHolder="Email..." value={email} onChange={setEmail} />
      <Input
        placeHolder="Password..."
        value={password}
        onChange={setPassword}
      />
      <Button title="Submit" onPress={() => {}} />
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

export default SignUp;
