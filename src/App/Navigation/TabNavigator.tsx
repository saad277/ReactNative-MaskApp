import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors} from '../Styles';

import {APP_ROUTES} from '../Helpers/RouteHelpers';
import Home from '../Screens/Home/Home';
import Settings from '../Screens/Settings/Settings';
import UploadStack from '../Navigation/UploadStack';

import CameraIcon from '../Assets/camera.png';
import GalleryIcon from '../Assets/gallery.png';
import GearIcon from '../Assets/gear.png';

const BottomTabs = createBottomTabNavigator();

const renderIcon = (source: any, focused: boolean) => {
  return (
    <Image
      source={source}
      style={{
        width: 30,
        height: 30,
        ...(focused && {tintColor: Colors.primary}),
      }}
    />
  );
};

const Tabs = () => {
  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
      }}>
      <BottomTabs.Screen
        name={APP_ROUTES.HOME}
        component={Home}
        options={() => {
          return {
            tabBarIcon: ({focused}) => renderIcon(GalleryIcon, focused),
          };
        }}
      />
      <BottomTabs.Screen
        name={'Upload'}
        component={UploadStack}
        options={() => {
          return {
            tabBarIcon: ({focused}) => renderIcon(CameraIcon, focused),
          };
        }}
      />

      <BottomTabs.Screen
        name={'Settings'}
        component={Settings}
        options={() => {
          return {
            tabBarIcon: ({focused}) => {
              return renderIcon(GearIcon, focused);
            },
          };
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default Tabs;
