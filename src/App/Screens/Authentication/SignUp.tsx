import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import {connect} from 'react-redux';

import {Colors} from '../../Styles';

import {APP_ROUTES} from '../../Helpers/RouteHelpers';
import {Button} from '../../Components/Button';
import {Input} from '../../Components/Input';
import {USER_TYPES} from '../../Constants';
import {signUp} from '../../Store/actions';

interface SignUpProps {
  signUp: Function;
}

const SignUp: React.FC<SignUpProps> = (props) => {
  const {signUp} = props;

  const [email, setEmail] = useState('saad5@gmail.com');
  const [password, setPassword] = useState('123456');
  const [name, setName] = useState('saadf');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const canSubmit = () => {
    if (
      !(name.trim().length && email.trim().length && password.trim().length)
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
    setLoading(true);

    let payload = {
      Email: email,
      Password: password,
      UserName: name,
      Type: USER_TYPES.USER,
    };

    signUp(payload)
      .then(() => {
        setEmail('');
        setPassword('');
        setName('');
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
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
        secureText={true}
      />
      <Button title="Submit" onPress={handleSubmit} loading={loading} />
      <TouchableOpacity
        onPress={() => navigation.navigate(APP_ROUTES.LOGIN)}
        disabled={loading}>
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
    color: Colors.primary,
    marginBottom: 40,
  },
  text: {
    color: Colors.white,
    marginTop: 20,
  },
});

const mapDispatchToProps = {
  signUp,
};

export default connect(null, mapDispatchToProps)(SignUp);
