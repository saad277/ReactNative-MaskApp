import React from 'react';
import {Text, View, StatusBar} from 'react-native';

import Login from './Screens/Authentication/Login';
import SignUp from './Screens/Authentication/SignUp';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#fb5b5a" />
      <SignUp />
    </>
  );
};

export default App;
