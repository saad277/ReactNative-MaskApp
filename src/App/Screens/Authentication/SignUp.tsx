import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

import {Colors} from '../../Styles';
import {APP_ROUTES} from '../../Helpers/RouteHelpers';

import {Button} from '../../Components/Button';
import {Input} from '../../Components/Input';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const canSubmit = () => {
    if (
      !name.trim().length &&
      !email.trim().length &&
      !password.trim().length
    ) {
      Snackbar.show({
        text: 'Please fill all fields',
        duration: Snackbar.LENGTH_SHORT,
      });

      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!canSubmit()) {
      return;
    }
  };

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
      <Button title="Submit" onPress={handleSubmit} />
      <TouchableOpacity onPress={() => navigation.navigate(APP_ROUTES.LOGIN)}>
        <Text style={styles.text}>Already Have An Account ? LogIn</Text>
      </TouchableOpacity>
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
  text: {
    color: Colors.white,
    marginTop: 20,
  },
});

export default SignUp;
