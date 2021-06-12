import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Colors} from './Styles';

import {AuthStack, MainApp} from './Navigation';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primary} />
      <MainApp />
    </NavigationContainer>
  );
};

export default App;
