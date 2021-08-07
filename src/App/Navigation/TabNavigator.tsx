import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {APP_ROUTES} from '../Helpers/RouteHelpers';
import Home from '../Screens/Home/Home';
import UploadStack from '../Navigation/UploadStack';

import CameraIcon from '../Assets/camera.png';
import GalleryIcon from '../Assets/gallery.png';
import {Colors} from '../Styles';

const BottomTabs = createBottomTabNavigator();

const renderIcon = (source: any) => {
  return <Image source={source} style={{width: 30, height: 30}} />;
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
            tabBarIcon: () => renderIcon(GalleryIcon),
          };
        }}
      />
      <BottomTabs.Screen
        name={"UploadStack"}
        component={UploadStack}
        options={() => {
          return {
            tabBarIcon: () => renderIcon(CameraIcon),
          };
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default Tabs;
