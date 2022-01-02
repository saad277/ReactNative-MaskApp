import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from '../App/Screens/Splash/Splash';
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

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

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

  const renderApp = () => {
    return auth.isAuthenticated ? <MainApp /> : <AuthStack />;
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'black'} />
      {splash ? <Splash /> : renderApp()}
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
