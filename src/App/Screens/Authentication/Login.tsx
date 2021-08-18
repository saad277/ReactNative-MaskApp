import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import {connect} from 'react-redux';

import {Colors} from '../../Styles';

import {APP_ROUTES} from '../../Helpers/RouteHelpers';
import {Button} from '../../Components/Button';
import {Input} from '../../Components/Input';
import {login} from '../../Store/actions';

interface LoginProps {
  login: Function;
}

const Login: React.FC<LoginProps> = (props) => {
  const {login} = props;

  const [email, setEmail] = useState<string>('saad@gmail.com');
  const [password, setPassword] = useState<string>('123456');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const canSubmit = () => {
    if (!email.trim().length && !password.trim().length) {
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
    setLoading(true);

    let payload = {
      Email: email,
      Password: password,
    };

    login(payload)
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <Input placeHolder="Email..." value={email} onChange={setEmail} />
      <Input
        placeHolder="Password..."
        value={password}
        onChange={setPassword}
      />
      <Button title="Submit" onPress={handleSubmit} loading={loading} />
      <TouchableOpacity
        onPress={() => navigation.navigate(APP_ROUTES.SIGN_UP)}
        disabled={loading}>
        <Text style={styles.text}>Dont Have An Account ? Sign Up</Text>
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

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
