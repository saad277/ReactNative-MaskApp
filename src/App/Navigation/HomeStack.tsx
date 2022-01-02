import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {APP_ROUTES} from '../Helpers/RouteHelpers';

import Home from '../Screens/Home/Home';
import MediaDetails from '../Screens/MediaDetails/MediaDetails';

const Stack = createStackNavigator();

const routes = [
  {
    name: APP_ROUTES.HOME,
    screen: Home,
    options: {},
  },
  {
    name: APP_ROUTES.MEDIA_DETAILS,
    screen: MediaDetails,
    options: {headerShown: true},
  },
];

const defaultOptions = {headerShown: false};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={APP_ROUTES.HOME}>
      {routes.map((route, index) => {
        const {name, screen, options} = route;
        return (
          <Stack.Screen
            key={index}
            name={name}
            component={screen}
            options={{...defaultOptions, ...options}}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default HomeStack;
