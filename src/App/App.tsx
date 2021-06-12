import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Colors} from './Styles';

import AuthStack from './Navigation/AuthStack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primary} />
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
