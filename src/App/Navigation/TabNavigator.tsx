import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {APP_ROUTES} from '../Helpers/RouteHelpers';
import Camera from '../Screens/Camera/Camera';
import Home from '../Screens/Home/Home';

const BottomTabs = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name={APP_ROUTES.HOME} component={Home} />
      <BottomTabs.Screen name={APP_ROUTES.CAMERA} component={Camera} />
    </BottomTabs.Navigator>
  );
};

export default Tabs;
