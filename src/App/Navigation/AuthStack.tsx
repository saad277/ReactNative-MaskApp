import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {APP_ROUTES} from '../Helpers/RouteHelpers';
import Login from '../Screens/Authentication/Login';
import SignUp from '../Screens/Authentication/SignUp';

const Stack = createStackNavigator();

const routes = [
  {name: APP_ROUTES.LOGIN, screen: Login},
  {name: APP_ROUTES.SIGN_UP, screen: SignUp},
];

const defaultOptions = {headerShown: false};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={APP_ROUTES.SIGN_UP}>
      {routes.map((route, index) => {
        const {name, screen} = route;
        return (
          <Stack.Screen
            key={index}
            name={name}
            component={screen}
            options={{...defaultOptions}}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AuthStack;
