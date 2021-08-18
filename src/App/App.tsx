import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors} from './Styles';

import {AuthStack, MainApp} from './Navigation';
import {getMe} from '../App/Store/actions';

interface authState {
  auth: object;
}

interface ComponentProps {
  auth: {
    isAuthenticated: boolean;
  };
  getMe: Function;
}

const App: React.FC<ComponentProps> = (props) => {
  const {auth, getMe} = props;

  useEffect(() => {
    async function initialize() {
      let token = await AsyncStorage.getItem('token');

      if (token) {
        getMe(token)
          .then(() => {})
          .catch(() => {});
      }
    }

    initialize();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primary} />
      {auth.isAuthenticated ? <MainApp /> : <AuthStack />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: authState) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  getMe,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
