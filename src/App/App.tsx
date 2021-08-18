import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import {Colors} from './Styles';

import {AuthStack, MainApp} from './Navigation';

interface authState {
  auth: object;
}

interface AppProps {
  auth: {
    isAuthenticated: boolean;
  };
}

const App: React.FC<AppProps> = (props) => {
  const {auth} = props;

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

export default connect(mapStateToProps)(App);
