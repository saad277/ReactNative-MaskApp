import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {APP_ROUTES} from '../Helpers/RouteHelpers';

import Camera from '../Screens/Camera/Camera';
import ClassifiedDetails from '../Screens/ClassifiedDetails/ClassifiedDetails';

const Stack = createStackNavigator();

const routes = [
  {
    name: APP_ROUTES.CAMERA,
    screen: Camera,
    options: {},
  },
  {
    name: APP_ROUTES.CLASSIFIED_DETAILS,
    screen: ClassifiedDetails,
    options: {headerShown: true},
  },
];

const defaultOptions = {headerShown: false};

const UploadStack = () => {
  return (
    <Stack.Navigator initialRouteName={APP_ROUTES.CAMERA}>
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

export default UploadStack;
